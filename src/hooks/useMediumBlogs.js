import { useState, useEffect } from 'react';

const useMediumBlogs = (username, postsPerPage = 3) => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMediumBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use RSS2JSON service to convert Medium RSS to JSON
        const rssUrl = `https://medium.com/feed/@${username}`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Medium blogs');
        }
        
        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('Invalid RSS feed');
        }

        // Parse and format the blog posts
        const formattedBlogs = data.items.map((item, index) => {
          // Extract first image from content
          const imageMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
          const image = imageMatch ? imageMatch[1] : `https://images.unsplash.com/photo-167744213601${index % 10}-21780ecad995?w=400`;
          
          // Clean description (remove HTML tags)
          const cleanDescription = item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
          
          // Format date
          const date = new Date(item.pubDate).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          // Estimate read time (assuming 200 words per minute)
          const wordCount = item.content.replace(/<[^>]*>/g, '').split(' ').length;
          const readTime = Math.ceil(wordCount / 200);

          return {
            id: item.guid,
            title: item.title,
            excerpt: cleanDescription,
            image: image,
            date: date,
            readTime: `${readTime} dk okuma`,
            link: item.link,
            author: item.author,
            categories: item.categories || [],
            platform: "Medium"
          };
        });

        setBlogs(formattedBlogs);
        setTotalPages(Math.ceil(formattedBlogs.length / postsPerPage));
        
      } catch (err) {
        console.error('Error fetching Medium blogs:', err);
        setError(err.message);
        
        // Fallback data if API fails
        setBlogs([{
          id: 'fallback-1',
          title: "Yapay Zeka ile Backend Geliştirmede Yeni Yaklaşımlar",
          excerpt: "Modern backend sistemlerinde AI entegrasyonu nasıl yapılır? Gerçek projelerdeki deneyimlerimle paylaşıyorum...",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
          date: "15 Aralık 2023",
          readTime: "8 dk okuma",
          link: `https://medium.com/@${username}`,
          views: 1245,
          likes: 89,
          categories: ["AI", "Backend", "Python"],
          platform: "Medium"
        }]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchMediumBlogs();
    }
  }, [username, postsPerPage]);

  const getCurrentPageBlogs = () => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

  return {
    blogs: getCurrentPageBlogs(),
    allBlogs: blogs,
    loading,
    error,
    currentPage: currentPage + 1, // Return 1-based page number for display
    totalPages,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    totalBlogs: blogs.length
  };
};

export default useMediumBlogs; 