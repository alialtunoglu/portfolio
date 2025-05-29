// Import certificate logos
import sanayiLogo from '../assets/sanayi.png';
import techcareerLogo from '../assets/techcareer.png';
import globalaihubLogo from '../assets/globalaihub.png';

export const certificates = [
  {
    id: 'ai-specialization',
    logo: sanayiLogo,
    link: "https://drdogrulama.sanayi.gov.tr/tr/verify/06255633266403/?ref=email"
  },
  {
    id: 'docker-workshop',
    logo: techcareerLogo,
    link: "https://certificates.techcareer.net/tr/verify/27736101661623"
  },
  {
    id: 'akbank-bootcamp',
    logo: globalaihubLogo,
    link: "https://courses.10million.ai/saas-certificate/12D0849A0-12D0849A2-2F3B396/"
  },
  {
    id: 'akbank-bootcamp2',
    logo: globalaihubLogo,
    link: "https://courses.10million.ai/saas-certificate/12D0849A0-12D0849A2-2F3B396/"
  }
  // Yeni sertifikalar eklemek için buraya ekleme yapabilirsiniz
  // {
  //   id: 'new-certificate',
  //   logo: newCertificateLogo,
  //   link: "https://example.com/certificate-link"
  // }
];

// Sertifika istatistikleri
export const certificateStats = {
  totalCertificates: 15,
  totalHours: 500,
  totalBootcamps: 10
}; 