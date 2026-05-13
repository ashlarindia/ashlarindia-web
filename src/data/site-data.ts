// src/data/site-data.ts

export const marketStats = [
  { label: 'NIFTY 50', value: '24,328.40', change: '+1.12%' },
  { label: 'BANK NIFTY', value: '52,104.80', change: '+0.84%' },
  { label: 'SENSEX', value: '80,012.55', change: '+0.91%' },
];

export const tickerHighlights = [
  { label: 'Top gainers', value: 'Reliance', status: '+2.48%' },
  { label: 'Top volume', value: 'HDFC Bank', status: '+1.12%' },
  { label: 'Trending IPO', value: 'Nova Energy', status: 'Open now' },
  { label: 'Commodity watch', value: 'Gold MCX', status: '+0.42%' },
];

// Alias for STATS to maintain backward compatibility
export const STATS = marketStats;

// Alias for TICKER_ITEMS to maintain backward compatibility
export const TICKER_ITEMS = tickerHighlights;

// Trust badges data
export const TRUST_BADGES = [
  { text: 'SEBI Registered' },
  { text: 'NSE Member' },
  { text: 'BSE Member' },
  { text: 'MCX Member' },
  { text: 'CDSL Depository' },
  { text: '15+ Years Trusted' },
];

// Why Ashlar features data
export const WHY_FEATURES = [
  {
    icon: 'ShieldCheck',
    title: 'SEBI Registered',
    description: 'Fully compliant with all regulatory requirements, ensuring your investments are safe and secure.',
  },
  {
    icon: 'IndianRupee',
    title: 'Flat ₹10 Brokerage',
    description: 'Pay only ₹10 per executed order across all segments — equity, F&O, currency, and commodities.',
  },
  {
    icon: 'Zap',
    title: 'Lightning Fast Execution',
    description: 'Experience ultra-low latency order execution with our advanced trading infrastructure.',
  },
  {
    icon: 'BarChart2',
    title: 'Advanced Charts',
    description: 'Get access to professional-grade charts with 100+ indicators and drawing tools.',
  },
  {
    icon: 'Headphones',
    title: '24/7 Customer Support',
    description: 'Dedicated support team available round the clock to assist you with any queries.',
  },
  {
    icon: 'Lock',
    title: 'Bank Grade Security',
    description: 'Your funds and data are protected with enterprise-level encryption and security protocols.',
  },
  {
    icon: 'Globe',
    title: 'Multi-Platform Access',
    description: 'Trade seamlessly across web, mobile, and desktop platforms with real-time sync.',
  },
  {
    icon: 'Award',
    title: 'Industry Recognition',
    description: 'Awarded as one of India\'s most trusted and innovative stockbrokers.',
  },
];
// Add to your site-data.ts file

export const PRODUCTS = [
  {
    id: 1,
    name: 'Equity',
    description: 'Invest in stocks with our advanced platform',
    icon: 'TrendingUp',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accentBg: 'from-blue-500/10 to-blue-500/5',
    accentBar: 'bg-blue-500',
    badge: '',
    href: '/equity',
  },
 
  {
    id: 2,
    name: 'Currency',
    description: 'Trade in major currency pairs',
    icon: 'Coins',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    accentBg: 'from-green-500/10 to-green-500/5',
    accentBar: 'bg-green-500',
    badge: '',
    href: '/currency',
  },
  
  {
    id: 3,
    name: 'IPO',
    description: 'Apply to upcoming IPOs instantly',
    icon: 'Rocket',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    accentBg: 'from-red-500/10 to-red-500/5',
    accentBar: 'bg-red-500',
    badge: 'Hot',
    href: '/ipo',
  },
  
 
  {
  id: 4,
  name: 'General Insurance',
  description: 'Coverage for health, vehicle & property',
  icon: 'ShieldCheck',
  iconBg: 'bg-sky-50',
  iconColor: 'text-sky-600',
  accentBg: 'from-sky-500/10 to-sky-500/5',
  accentBar: 'bg-sky-500',
  badge: 'Essential',
  href: '/general-insurance',
},
  
  {
  id: 5,
  name: 'Life Insurance',
  description: 'Secure your family’s financial future',
  icon: 'Shield',
  iconBg: 'bg-emerald-50',
  iconColor: 'text-emerald-600',
  accentBg: 'from-emerald-500/10 to-emerald-500/5',
  accentBar: 'bg-emerald-500',
  badge: 'Popular',
  href: '/life-insurance',
},
{
  id: 6,
  name: 'Commodities',
  description: 'Trade gold, silver, oil & agri products',
  icon: 'BarChart3',
  iconBg: 'bg-amber-50',
  iconColor: 'text-amber-600',
  accentBg: 'from-amber-500/10 to-amber-500/5',
  accentBar: 'bg-amber-500',
  badge: 'Trending',
  href: '/commodities',
},
];

export const faqItems = [
  {
    question: 'How fast should account opening feel?',
    answer: 'Use a short step-based flow with clear progress states and document guidance.',
  },
  {
    question: 'What should be highlighted first on mobile?',
    answer:
      'Primary CTA, key products, trust badges, and a simple market strip should appear before long explanatory content.',
  },
  {
    question: 'Which sections drive conversion best?',
    answer:
      'Hero CTA, calculator previews, pricing clarity, testimonials, and compliance reassurance are the strongest candidates.',
  },
];

export const LOGIN_OPTIONS = [
  { name: 'Online Trading',  href: 'https://trading.ashlarindia.com',          external: true },
  { name: 'Payment Gateway', href: 'https://ashlarindia.com/fund-transfer',    external: true },
  { name: 'Back Office',     href: 'https://bo.ashlarindia.com/Account/Login', external: true },
  { name: 'Webmail',         href: 'http://mail.ashlarindia.com/',             external: true },
  { name: 'Trading API',     href: 'https://ashlarindia.com/trading-api',      external: true },
];
export const NAV_PRODUCTS = [
  { name: 'Equity',       href: '/products/equity'                  },
  { name: 'F&O',          href: '/products/fno'                      },
  { name: 'Commodities',  href: '/products/commodities'             },
  { name: 'Currency',     href: '/products/currency'                },
  { name: 'IPO',          href: '/products/ipo',   badge: 'Hot'     },
  { name: 'Bonds',        href: '/products/bonds'                   },
  { name: 'DP Services',  href: '/products/dp'                      },
];

export const NAV_INVESTMENT = [
  { name: 'Mutual Funds',     href: '/investment/mutual-funds'     },
  { name: 'Life Insurance',   href: '/investment/life-insurance'    },
  { name: 'Corporate FDs',    href: '/investment/corporate-fds'     },
  { name: 'Retirement Plans', href: '/investment/retirement-plans'  },
  { name: 'Child Plans',      href: '/investment/child-plans'       },
];
// Already exists in your file
export const NAV_CALCULATORS = [
  { name: 'Brokerage Calculator', href: '/calculators' },  // Updated path
  { name: 'Margin Calculator',    href: '/calculators' },   // Updated path
];

export const SITE = {
  name:      'Ashlar India',
  sebi:      'INZ000203739',
  nse:       '13718',
  bse:       '3302',
  mcx:       '56815',
  ncdex:     '01002',
  nsdl:      'IN303921',
  cdsl:      'IN-DP-2362016',
  cin:       'U74899UP1994PTC016662',
  tollFree:  '1800-123-9343',
  direct:    '0120-6633205',
  email:     'helpdesk@ashlarindia.com',
  address:   'Abu Lane, Meerut, Uttar Pradesh — 250001',
  kycUrl:    'https://kyc.wisdomcapital.in/',
};

export function getKycUrl(page: string) {
  return `${SITE.kycUrl}?utm_source=ashlarindia&utm_medium=web&utm_campaign=${page}`;
}
// src/data/site-data.ts

// ... (your existing code remains) ...

// Data for new sections
export const COMPANY_STATS = [
  { value: '15+', label: 'Years of experience' },
  { value: '600+', label: 'Satisfied Clients' },
  { value: '50+', label: 'High skilled people' },
  { value: '10+', label: 'Asset classes' },
];

export const OUR_PRODUCTS = [
  {
    name: 'Trading Platforms',
    description: 'Powerful and intuitive platforms for every type of trader.',
    icon: 'LayoutDashboard',
    href: '/platforms',
  },
  {
    name: 'Tutorial Videos',
    description: 'Intensive thorough lessons to master the markets.',
    icon: 'Video',
    href: '/tutorials',
  },
  {
    name: 'Investment Account',
    description: 'Your all-in-one free trading and demat account.',
    icon: 'Wallet',
    href: getKycUrl('products'),
    isCta: true,
  },
];

export const TRADING_TOOLS = [
  {
    name: 'Shree Varahi Web',
    description: 'Web-based trading software with single window experience.',
    icon: 'Globe',
    href: 'https://trading.ashlarindia.com',
    external: true,
  },
  {
    name: 'Shree Varahi Mobile',
    description: 'Seamless trading on your smartphone with our Android & iOS apps.',
    icon: 'Smartphone',
    href: '#', // Add your app download links here
    external: true,
  },
];
// Replace the existing TESTIMONIALS in your site-data.ts with these:

export const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    role: 'Retail Investor',
    text: 'I started my trading journey with Ashlar India 2 years ago. The platform is extremely user-friendly and their customer support is always helpful. The flat ₹10 brokerage has saved me thousands in trading costs.',
    location: 'Delhi',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Professional Trader',
    text: 'As a full-time trader, I need reliable execution and transparent pricing. Ashlar delivers exactly that. Their margin calculator and brokerage calculator help me plan my trades better.',
    location: 'Mumbai',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'First-time Investor',
    text: 'Opening my demat account was seamless. The step-by-step guidance and educational resources helped me understand the market. Now I confidently invest in mutual funds and stocks.',
    location: 'Ahmedabad',
    rating: 4
  },
];