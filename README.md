# Ashlar India - Online Trading & Stock Broking Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)](https://www.typescriptlang.org/)

A modern, responsive trading platform website built for Ashlar India - a SEBI-registered stockbroking company offering transparent trading solutions with flat ₹10 brokerage.

## 🌟 Features

### Core Features

- **Live Market Ticker** - Real-time market updates with scrolling ticker
- **Interactive Calculators** - Brokerage and margin calculators for trade planning
- **Product Showcase** - Display of trading products (Equity, F&O, Currency, Commodities)
- **IPO Section** - Latest IPO announcements and details
- **Leadership Section** - Company leadership and testimonials
- **Contact Form** - With math CAPTCHA for spam protection
- **Responsive Design** - Fully responsive across all devices

### User Features

- 🔐 SEBI Registered compliant
- 📊 Real-time market statistics
- 💰 Flat ₹10 brokerage calculator
- 📱 Mobile-responsive navigation
- 🎯 Trust badges and certifications
- 📞 Callback request functionality
- ✉️ Contact form with validation

## 🚀 Tech Stack

### Frontend

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS Transitions & Keyframes

### Development Tools

- **Language**: TypeScript
- **Package Manager**: npm / yarn
- **Code Quality**: ESLint
- **Git Hooks**: Husky

## 📁 Project Structure

ashlar-frontend/
├── src/
│ ├── app/ # Next.js App Router pages
│ │ ├── page.tsx # Homepage
│ │ ├── about/ # About page
│ │ ├── calculators/ # Calculators page
│ │ ├── contact/ # Contact page
│ │ ├── mutual-funds/ # Mutual funds page
│ │ └── products/ # Products page
│ ├── components/ # Reusable components
│ │ └── home/ # Homepage sections
│ │ ├── Hero-Section.tsx
│ │ ├── StatsSection.tsx
│ │ ├── ProductsSection.tsx
│ │ ├── WhyAshlar.tsx
│ │ ├── LeadershipSection.tsx
│ │ ├── ContactForm.tsx
│ │ └── RiskDisclosure.tsx
│ ├── data/ # Static data
│ │ └── site-data.ts # Site configuration
│ └── styles/ # Global styles
├── public/ # Static assets
│ ├── logo.png
│ └── stock.jpg
├── .env.local # Environment variables
└── package.json # Dependencies

text

## 🛠️ Installation

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Step 1: Clone the repository

```bash
git clone https://github.com/yourusername/ashlar-frontend.git
cd ashlar-frontend
Step 2: Install dependencies
bash
npm install
# or
yarn install
Step 3: Environment Setup
Create a .env.local file in the root directory:

env
# Optional: For Google reCAPTCHA (if implementing)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# API endpoints (if needed)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
Step 4: Run development server
bash
npm run dev
# or
yarn dev
Open http://localhost:3000 to view the application.

📦 Available Scripts
bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check

# Production
npm run build        # Create optimized production build
npm run start        # Start production server
🎨 Design System
Color Palette
Primary: #0066CC / #5367FF (Blue)

Dark Background: #1A1A2E

Light Background: #F7F8FA

Text Dark: #1A1A2E

Text Light: #9B9BAA

Success: #00C853 (Green)

Error: #FF3B30 (Red)

Border: #E8E8E8

Typography
Font Family: Inter, system-ui, sans-serif

Headings: Bold, tight tracking

Body: Regular weight, comfortable leading

🔧 Configuration Files
Tailwind Configuration
js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        dark: '#1A1A2E',
      },
    },
  },
}
📱 Responsive Breakpoints
Mobile: 640px and below

Tablet: 641px - 768px

Desktop: 769px - 1024px

Wide: 1025px and above

🔒 Security Features
Form Protection
Math CAPTCHA validation

Input sanitization

Rate limiting ready

CSRF protection

Data Privacy
No sensitive data stored

GDPR compliant

SSL/TLS encryption

Secure API endpoints

🚀 Deployment
Build for Production
bash
npm run build
Deploy to Vercel (Recommended)
bash
npm install -g vercel
vercel
Deploy to Netlify
bash
npm run build
# Deploy the 'out' folder to Netlify
📊 Performance Optimization
✅ Image optimization with Next.js Image component

✅ Code splitting and lazy loading

✅ Static generation for content pages

✅ Optimized font loading

✅ CSS purging with Tailwind

✅ Compression enabled

🧪 Testing
bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
📈 SEO Features
Meta tags configuration

Open Graph support

JSON-LD structured data

Sitemap generation

Robots.txt configuration

Semantic HTML5

🤝 Contributing
Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

Commit Convention
feat: New feature

fix: Bug fix

docs: Documentation

style: Code style

refactor: Code refactor

perf: Performance

test: Testing

chore: Maintenance

📄 License
This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

© 2024 Ashlar India. All rights reserved.

👥 Contact
Ashlar India

Website: https://ashlarindia.com

Email: investorcell@ashlarindia.com

Phone: 0120-6633299

Toll Free: 1800-123-9343

Development Team

Repository Issues: GitHub Issues

🙏 Acknowledgments
Design inspiration from modern trading platforms

Icons by Lucide React

UI components styled with Tailwind CSS

Built with Next.js App Router

📝 Changelog
v1.0.0 (2024)
Initial release

Hero section with live ticker

Products showcase

Brokerage & margin calculators

Contact form with CAPTCHA

Responsive navigation

SEBI compliance sections

Upcoming Features
Live price API integration

User dashboard

Portfolio tracker

Watchlist functionality

Mobile app download section

Multi-language support

📞 Support
For support, email investorcell@ashlarindia.com or raise an issue in the repository.

Disclaimer: Trading in stock markets involves risk. Please read all related documents carefully before investing. Past performance doesn't guarantee future returns.

text

This README provides a comprehensive overview of your project, including setup instructions, features, tech stack, and deployment guidelines. You can customize the repository URLs, contact information, and specific details based on your actual project configuration.
```
