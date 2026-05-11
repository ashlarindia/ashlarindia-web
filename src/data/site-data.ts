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

export const products = [
  {
    title: 'Equity',
    description: 'Clean order flow, delivery pricing, and research-backed investing journeys.',
    audience: 'For long-term investors',
  },
  {
    title: 'F&O',
    description: 'Fast contract access with margin visibility and trade cost estimates.',
    audience: 'For active traders',
  },
  {
    title: 'Currency',
    description: 'Exchange-driven currency exposure with a clearer risk and pricing UI.',
    audience: 'For hedging needs',
  },
  {
    title: 'Commodities',
    description: 'Focused access to metals and energy products with live overview widgets.',
    audience: 'For diversified traders',
  },
];

export const calculators = [
  {
    title: 'Estimate your order cost',
    label: 'Brokerage calculator',
    badge: 'Popular',
    fields: [
      ['Segment', 'Equity intraday'],
      ['Buy value', '₹1,00,000'],
      ['Sell value', '₹1,02,500'],
      ['Charges', 'Auto calculated'],
    ],
    resultLabel: 'Total cost',
    resultValue: '₹42.80',
  },
  {
    title: 'Know capital requirements',
    label: 'Margin calculator',
    badge: 'Fast view',
    fields: [
      ['Symbol', 'NIFTY FUT'],
      ['Lot size', '25'],
      ['Trade type', 'Carry forward'],
      ['Exposure', 'Preview enabled'],
    ],
    resultLabel: 'Required margin',
    resultValue: '₹1,24,500',
  },
  {
    title: 'Lead capture with low friction',
    label: 'Open account',
    badge: '6-minute flow',
    fields: [
      ['Name', 'Investor name'],
      ['Mobile', '+91 xxxxx xxxxx'],
      ['Email', 'your@email.com'],
      ['PAN / KYC', 'Step-based onboarding'],
    ],
    resultLabel: 'Primary CTA',
    resultValue: 'Start onboarding',
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