# Portfolio Website

Modern ve responsive kişisel portfolio websitesi. React, Tailwind CSS ve Framer Motion ile geliştirilmiştir.

## 🚀 Özellikler

- **Dinamik GitHub Entegrasyonu**: GitHub API ile pinlenmiş projelerinizi otomatik olarak çeker
- **Çok Dilli Destek**: Türkçe ve İngilizce dil seçenekleri
- **Modern Tasarım**: Dark theme, gradient renkler ve animasyonlar
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Performant**: Optimized loading ve smooth animations

## 📦 Teknolojiler

- React 19
- Tailwind CSS
- Framer Motion
- React i18next
- GitHub GraphQL API

## 🛠️ Kurulum

1. Repository'yi klonlayın:
```bash
git clone https://github.com/alialtunoglu/portfolio.git
cd portfolio
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Environment variables oluşturun:
```bash
# .env dosyası oluşturun ve aşağıdaki değerleri ekleyin:
REACT_APP_GITHUB_TOKEN=your_github_token_here
REACT_APP_GITHUB_USERNAME=your_github_username
```

4. Uygulamayı başlatın:
```bash
npm start
```

## 🔧 GitHub Token Oluşturma

1. GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. "Generate new token (classic)" tıklayın
3. Gerekli izinleri verin:
   - `read:user`
   - `repo`
4. Token'ı kopyalayın ve `.env` dosyasına ekleyin

## 📱 Bölümler

- **Hero Section**: Karşılama ve tanıtım
- **About**: Kullandığım teknolojiler ve hizmetler
- **Projects**: GitHub'dan dinamik olarak çekilen pinlenmiş projeler
- **Achievements**: Sertifikalar ve başarılar
- **Blog**: Medium yazıları
- **Experience**: Profesyonel deneyim
- **Skills**: Teknik yetkinlikler
- **Education**: Eğitim geçmişi
- **Contact**: İletişim formu ve bilgileri

## 🌟 Dinamik GitHub Entegrasyonu

Portfolio, GitHub GraphQL API kullanarak pinlenmiş projelerinizi otomatik olarak çeker. GitHub'da pinlediklerinizi değiştirdiğinizde portfolio otomatik olarak güncellenir.

### Avantajlar:
- ✅ Manuel güncelleme gerektirmez
- ✅ Gerçek zamanlı proje bilgileri
- ✅ Star, fork, dil bilgileri otomatik
- ✅ Fallback sistem (API çalışmazsa static veriler)

## 🎨 Kustomizasyon

### Renkler
`tailwind.config.js` dosyasından tema renklerini değiştirebilirsiniz.

### Çeviriler
`src/i18n/locales/` klasöründen dil dosyalarını düzenleyebilirsiniz.

### Animasyonlar
Framer Motion animasyonları her component'te özelleştirilebilir.

## 📁 Proje Yapısı

```
src/
├── components/          # React componentleri
├── hooks/              # Custom hooks
├── i18n/               # Çeviri dosyaları
├── assets/             # Resim ve diğer assets
└── data/               # Static data dosyaları
```

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm run build
# Vercel'e upload edin ve environment variables ekleyin
```

### Netlify
```bash
npm run build
# build/ klasörünü Netlify'a yükleyin
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# package.json'a homepage ekleyin
npm run deploy
```

## 🔒 Güvenlik

- GitHub token'ı `.env` dosyasında saklanır
- `.env` dosyası .gitignore'da yer alır
- Production'da environment variables kullanın

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Ali Altunoğlu**
- GitHub: [@alialtunoglu](https://github.com/alialtunoglu)
- LinkedIn: [Ali Altunoğlu](https://linkedin.com/in/alialtunoglu)
- Medium: [@alialtunoglu](https://medium.com/@alialtunoglu)

---

⭐ Bu projeyi beğendiyseniz star vererek destek olabilirsiniz!
