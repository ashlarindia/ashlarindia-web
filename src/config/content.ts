// src/config/content.ts

export const SITE_CONTENT = {
  // Global Site Settings
  site: {
    name: 'Ashlar India',
    tagline: 'Trade Smarter',
    description: 'India\'s most trusted stockbroker since 2009',
  },

  // Hero Section
  hero: {
    badge: 'SEBI Registered · Trusted since 2009',
    title: 'Trade smarter with',
    highlightedText: 'Ashlar India',
    description: 'India\'s most transparent broker — flat ₹10 brokerage, zero hidden charges, and a platform built for confident investors.',
    ctaPrimary: 'Open Free Account',
    ctaSecondary: 'Explore Products',
  },

  // Stats Section
  stats: {
    title: 'Our Achievements',
    subtitle: 'Trusted by investors across India',
    items: [
      { value: '15+', label: 'Years of Experience' },
      { value: '1000+', label: 'Satisfied Clients' },
      { value: '150+', label: 'Team Members' },
      { value: '10+', label: 'Asset Classes' },
    ],
  },

  // Products Section
  products: {
    badge: 'Everything you need',
    title: 'One account, multiple investment options',
    subtitle: 'From your first stock to complex derivatives — every asset class that matters, all in one place.',
    highlightStats: [
      { value: '₹0', label: 'Delivery brokerage' },
      { value: '₹10', label: 'Flat F&O charges' },
      { value: '5 min', label: 'Account opening' },
      { value: '10+', label: 'Asset classes' },
    ],
    tradingPlatforms: {
      title: 'Our Trading Platforms',
      subtitle: 'Advanced tools for seamless trading experience',
      web: {
        title: 'Web Trading Platform',
        description: 'Trade from anywhere with our powerful web-based platform',
        buttonText: 'Access Web Platform →',
        href: 'https://trade.wisdomcapital.in/#!/app',
      },
      mobile: {
        title: 'Mobile Trading App',
        description: 'Trade on the go with our feature-rich mobile application',
        buttonText: 'Download App →',
        href: 'https://play.google.com/store/search?q=wisdom+neo&c=apps&hl=en-IN',
      },
    },
    ctaCard: {
      title: 'Ready to start investing?',
      description: 'Open a free demat account in 5 minutes. Zero charges · 10+ asset classes',
      buttonText: 'Open Free Account →',
    },
  },

  // Calculators Section
  calculators: {
    title: 'Trading Calculators',
    subtitle: 'Plan your trades with our free calculators',
    brokerageLabel: 'Brokerage',
    brokerageDesc: 'Calculate charges',
    marginLabel: 'Margin',
    marginDesc: 'Check requirements',
    note: 'Instant calculations • No hidden charges • Updated regularly',
  },

  // Why Ashlar Section
  whyAshlar: {
    title: 'Why Choose Ashlar India?',
    subtitle: 'Experience trading with India\'s most transparent broker',
    features: [
      { icon: 'ShieldCheck', title: 'SEBI Registered', description: 'Fully compliant with all regulatory requirements' },
      { icon: 'IndianRupee', title: 'Flat ₹10 Brokerage', description: 'Pay only ₹10 per executed order across all segments' },
      { icon: 'Zap', title: 'Lightning Fast Execution', description: 'Ultra-low latency order execution' },
      { icon: 'BarChart2', title: 'Advanced Charts', description: 'Professional-grade charts with 100+ indicators' },
      { icon: 'Headphones', title: '24/7 Support', description: 'Dedicated support team available round the clock' },
      { icon: 'Lock', title: 'Bank Grade Security', description: 'Enterprise-level encryption and security' },
      { icon: 'Globe', title: 'Multi-Platform Access', description: 'Trade across web, mobile, and desktop' },
      { icon: 'Award', title: 'Industry Recognition', description: 'Awarded as most trusted stockbroker' },
    ],
  },

  // Testimonials Section
  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Real stories from satisfied investors',
    items: [
      { name: 'Rajesh Kumar', role: 'Retail Investor', text: 'Excellent platform with transparent pricing. The flat ₹10 brokerage has saved me thousands.' },
      { name: 'Priya Sharma', role: 'Professional Trader', text: 'As a full-time trader, I need reliable execution. Ashlar delivers exactly that.' },
      { name: 'Amit Patel', role: 'First-time Investor', text: 'Opening my demat account was seamless. The step-by-step guidance helped me understand the market.' },
    ],
  },

  // Contact Section
  contact: {
    title: 'Get in Touch',
    subtitle: 'Have a question? We\'re here to help you with your trading journey',
    callInfo: [
      { icon: '📞', label: 'Call us', value: '0120-6633299', sub: 'Mon–Sat, 9 AM – 6 PM' },
      { icon: '✉️', label: 'Email us', value: 'investorcell@ashlarindia.com', sub: 'Reply within 24 hours' },
      { icon: '📍', label: 'Head office', value: 'A-38, Sector-10, Noida-201301', sub: 'Near Metro Station' },
    ],
    callbackTitle: 'Please enter your phone number',
    callbackSubtitle: 'and we call you back soon',
    callbackButton: 'Request Callback',
    formLabels: {
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone number',
      subject: 'Subject',
      message: 'Message',
    },
    submitButton: 'Send Message',
  },

  // Footer
  footer: {
    companyName: 'Ashlar India',
    tagline: 'SEBI registered stock broker offering equity, F&O, commodities, currency, and depository services across India since 2009.',
    sections: {
      products: 'Products',
      accounts: 'Accounts',
      support: 'Support',
      company: 'Company',
    },
    legal: {
      investorCharter: 'Investor Charter',
      forInvestors: 'For Investors',
      cybersecurity: 'Cybersecurity Awareness',
      escalationMatrix: 'Escalation Matrix',
      regulatory: 'Regulatory & other info',
      policies: 'Policies & Procedure',
      terms: 'Terms & Conditions',
      disclaimer: 'WS Disclaimer',
      privacy: 'Privacy Policy',
    },
  },

  // Risk Disclosure
  riskDisclosure: {
    title: 'Risk Disclosure on Derivatives',
    bullets: [
      '9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.',
      'On an average, loss makers registered net trading loss close to ₹ 50,000.',
      'Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.',
      'Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.',
    ],
    source: 'Source: SEBI Study. Data available on request.',
    disclaimer: {
      prefix: 'Disclaimer:',
      text: 'Trading in stock markets involves risk. Please read all related documents carefully before investing. Past performance does not guarantee future returns.',
    },
  },
  // src/config/content.ts - Add this to your existing file


  // ... existing content ...
 // Why Ashlar Section (Traders Prefer Ashlar)
  whyAshlarDetails: {
    title: 'Why do Traders Prefer Ashlar',
    description: 'Ashlar has created a niche as a financial service provider and is a trusted name where business is all about building relationships with our clients. We boast of the capability to offer a "one stop solution" for retail and corporate investors to meet their diverse needs in an effective manner. Customer satisfaction is our prime motive and thousands of satisfied customers in different parts of India can testify to that.',
    reasonsTitle: 'Some of the reasons why you should choose us',
    reasons: [
      {
        icon: 'Users',
        title: 'Dedicated Relationship Managers',
        description: 'We allocate dedicated relationship managers to help understand your individual needs better.',
      },
      {
        icon: 'Settings',
        title: 'Customized Product & Services',
        description: 'We offer an array of personalized products and services to meet specific needs of our clients.',
      },
      {
        icon: 'Laptop',
        title: 'Online and Offline Trading Platform',
        description: 'We facilitate easier access through online and offline trading platforms for ease of use.',
      },
    ],
    trustBadges: [
      { icon: 'Shield', text: 'SEBI Registered' },
      { icon: 'Building2', text: 'NSE Member' },
      { icon: 'Award', text: 'Trusted Since 2009' },
    ],
  },
  // Leadership Section
  leadership: {
    badge: 'About Ashlar India',
    title: 'Leadership Team',
    subtitle: 'Ashlar India is led and managed by a highly experienced team of professionals with deep expertise in stock broking, capital markets, compliance, risk management, and investor services.',
    leaders: [
      {
        id: 1,
        name: 'Mr. Bharat Bansal',
        designation: 'Chairman & Managing Director',
        experience: '35+ Years Experience',
        image: '/leadership/BharatBansal.webp',
        bio: 'Mr. Bharat Bansal is one of the Founder Directors of Ashlar Group with extensive experience in capital markets, public issues, commodity trading, and financial services. He has played a vital role in building Ashlar India into a trusted financial services brand.',
        linkedin: '#',
        email: 'bharat@ashlarindia.com',
      },
      {
        id: 2,
        name: 'Mr. Sunil Kumar',
        designation: 'Whole-time Director',
        experience: '20+ Years Experience',
        image: '/leadership/SunilKumar.jpeg',
        bio: 'Mr. Sunil Kumar has deep experience in financial markets and investor services. He has contributed significantly towards operational efficiency, client servicing, and execution of key business functions.',
        linkedin: '#',
        email: 'sunil@ashlarindia.com',
      },
      {
        id: 3,
        name: 'Mr. Sudhir Bhalla',
        designation: 'Director',
        experience: '17+ Years Experience',
        image: '/leadership/SudhirBhalla.jpeg',
        bio: 'Mr. Sudhir Bhalla is responsible for strategic planning, operational management, and corporate expansion initiatives. His leadership and industry expertise have supported the long-term growth of Ashlar India.',
        linkedin: '#',
        email: 'sudhir@ashlarindia.com',
      },
      {
        id: 4,
        name: 'Mr. Ankit Garg',
        designation: 'Chief Operating Officer',
        experience: '15+ Years Experience',
        image: '/leadership/AnkitGarg.jpeg',
        bio: 'Mr. Ankit Garg brings extensive experience in operations management and business development. He focuses on enhancing client experience and streamlining internal processes.',
        linkedin: '#',
        email: 'ankit@ashlarindia.com',
      },
    ],
    timeline: {
      title: 'Company Timeline',
      subtitle: 'Key milestones in Ashlar India\'s journey',
      items: [
        { year: '2009', title: 'Company Founded', desc: 'Ashlar India was established to provide transparent and reliable financial market services.' },
        { year: '2010', title: 'SEBI Registration', desc: 'Registered with SEBI as a stock broker and investment service provider.' },
        { year: '2011', title: 'NSE & BSE Membership', desc: 'Expanded operations through NSE and BSE memberships.' },
        { year: '2013', title: 'MCX Membership', desc: 'Entered commodity trading services through MCX membership.' },
        { year: '2016', title: 'NSDL Depository Services', desc: 'Started Depository Participant services under NSDL.' },
      ],
    },
    registrations: {
      title: 'Memberships & Registrations',
      subtitle: 'Official registrations and exchange memberships',
      items: [
        { title: 'SEBI Registration', value: 'INZ000203739' },
        { title: 'NSE Member', value: '13718' },
        { title: 'BSE Member', value: '3302' },
        { title: 'MCX Member', value: '56815' },
        { title: 'NCDEX Member', value: '01002' },
        { title: 'NSDL DP-ID', value: 'IN303921' },
        { title: 'SEBI DP Registration', value: 'IN-DP-2362016' },
        { title: 'CIN', value: 'U74899UP1994PTC016662' },
      ],
    },
  },
}


export default SITE_CONTENT;