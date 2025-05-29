import { useState, useEffect } from 'react';

const useGitHubPinnedRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      const token = process.env.REACT_APP_GITHUB_TOKEN;
      const username = process.env.REACT_APP_GITHUB_USERNAME;

      if (!token || !username) {
        setError('GitHub token or username not found');
        setLoading(false);
        return;
      }

      const query = `
        {
          user(login: "${username}") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    url
                    stargazerCount
                    forkCount
                    primaryLanguage {
                      name
                      color
                    }
                    repositoryTopics(first: 10) {
                      edges {
                        node {
                          topic {
                            name
                          }
                        }
                      }
                    }
                    updatedAt
                    diskUsage
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const pinnedRepos = data.data.user.pinnedItems.edges.map(edge => {
          const repo = edge.node;
          const topics = repo.repositoryTopics.edges.map(topicEdge => topicEdge.node.topic.name);
          
          // Format disk usage
          let sizeFormatted;
          if (repo.diskUsage > 1024) {
            sizeFormatted = `${(repo.diskUsage / 1024).toFixed(1)} MB`;
          } else {
            sizeFormatted = `${repo.diskUsage} KB`;
          }

          // Format update date
          const updatedDate = new Date(repo.updatedAt);
          const now = new Date();
          const diffTime = Math.abs(now - updatedDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          let lastUpdated;
          if (diffDays === 1) {
            lastUpdated = '1 day ago';
          } else if (diffDays < 30) {
            lastUpdated = `${diffDays} days ago`;
          } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            lastUpdated = months === 1 ? '1 month ago' : `${months} months ago`;
          } else {
            const years = Math.floor(diffDays / 365);
            lastUpdated = years === 1 ? '1 year ago' : `${years} years ago`;
          }

          return {
            name: repo.name,
            description: repo.description || 'No description available',
            language: repo.primaryLanguage?.name || 'Unknown',
            languageColor: repo.primaryLanguage?.color || '#586069',
            stars: repo.stargazerCount,
            forks: repo.forkCount,
            size: sizeFormatted,
            topics: topics,
            lastUpdated: lastUpdated,
            html_url: repo.url
          };
        });

        setRepos(pinnedRepos);
        setError(null);
      } catch (err) {
        console.error('Error fetching pinned repos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  return { repos, loading, error };
};

export default useGitHubPinnedRepos; 