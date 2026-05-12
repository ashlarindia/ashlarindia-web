'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, IndianRupee, ArrowRight, Info } from 'lucide-react';

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<'brokerage' | 'margin'>('brokerage');
  
  // Brokerage Calculator State
  const [buyPrice, setBuyPrice] = useState<number>(100);
  const [sellPrice, setSellPrice] = useState<number>(105);
  const [quantity, setQuantity] = useState<number>(100);
  const [segment, setSegment] = useState<'equity' | 'fno' | 'currency' | 'commodity'>('equity');
  
  // Margin Calculator State
  const [marginSegment, setMarginSegment] = useState<'equity' | 'fno'>('equity');
  const [tradeType, setTradeType] = useState<'delivery' | 'intraday'>('delivery');
  const [positionSize, setPositionSize] = useState<number>(1);
  const [lotSize, setLotSize] = useState<number>(25);
  const [price, setPrice] = useState<number>(1000);

  // Brokerage Calculation Logic
  const calculateBrokerage = () => {
    const turnover = (buyPrice + sellPrice) * quantity;
    let brokerage = 0;
    let exchangeCharges = 0;
    let gst = 0;
    let stampDuty = 0;
    let sebiCharges = 0;
    
    if (segment === 'equity') {
      // Flat ₹10 per order for equity
      brokerage = 20; // ₹10 for buy + ₹10 for sell
      exchangeCharges = turnover * 0.0000325; // 0.00325%
      sebiCharges = turnover * 0.000001; // 0.0001%
      stampDuty = (buyPrice * quantity) * 0.00015; // 0.015% on buy side
    } else if (segment === 'fno') {
      brokerage = 20; // Flat ₹10 per order
      exchangeCharges = turnover * 0.000053; // 0.0053%
      sebiCharges = turnover * 0.000001;
      stampDuty = (buyPrice * quantity) * 0.00002; // 0.002%
    } else if (segment === 'currency') {
      brokerage = 20;
      exchangeCharges = turnover * 0.000032;
      sebiCharges = turnover * 0.000001;
      stampDuty = (buyPrice * quantity) * 0.00001;
    } else {
      brokerage = 20;
      exchangeCharges = turnover * 0.000032;
      sebiCharges = turnover * 0.000001;
      stampDuty = (buyPrice * quantity) * 0.00002;
    }
    
    gst = (brokerage + exchangeCharges + sebiCharges) * 0.18;
    
    const totalCharges = brokerage + exchangeCharges + gst + stampDuty + sebiCharges;
    const netProfit = ((sellPrice - buyPrice) * quantity) - totalCharges;
    
    return {
      brokerage: Math.round(brokerage),
      exchangeCharges: Math.round(exchangeCharges),
      gst: Math.round(gst),
      stampDuty: Math.round(stampDuty),
      sebiCharges: Math.round(sebiCharges),
      totalCharges: Math.round(totalCharges),
      netProfit: Math.round(netProfit),
      turnover: Math.round(turnover),
    };
  };
  
  // Margin Calculation Logic
  const calculateMargin = () => {
    let marginPercentage = 0;
    let exposure = 0;
    
    if (marginSegment === 'equity') {
      if (tradeType === 'delivery') {
        marginPercentage = 100; // 100% margin for delivery
      } else {
        marginPercentage = 20; // 20% margin for intraday
      }
    } else if (marginSegment === 'fno') {
      marginPercentage = 12; // 12-14% for F&O typically
      if (tradeType === 'intraday') {
        marginPercentage = 8;
      }
    }
    
    const totalValue = positionSize * lotSize * price;
    const requiredMargin = (totalValue * marginPercentage) / 100;
    exposure = totalValue;
    
    return {
      requiredMargin: Math.round(requiredMargin),
      totalValue: Math.round(totalValue),
      marginPercentage,
      exposure,
    };
  };
  
  const brokerageResult = calculateBrokerage();
  const marginResult = calculateMargin();

  return (
    <div className="bg-[#F7F8FA] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-[#2D2D4A] overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border border-white/10 bg-white/5">
              <Calculator size={16} className="text-[#00C853]" />
              <span className="text-[#C0C0D0] text-xs font-medium tracking-wide">Calculators · Plan Your Trades</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-6">
              Trade{' '}
              <span style={{ background: 'linear-gradient(90deg, #4D9FFF 0%, #00C9A7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Smarter
              </span>
            </h1>
            <p className="text-[#9B9BAA] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Calculate your brokerage costs and margin requirements before placing trades
            </p>
          </div>
        </div>
      </section> */}

      {/* Calculator Tabs */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-4 mb-8 border-b border-[#E8E8E8]">
            <button
              onClick={() => setActiveTab('brokerage')}
              className={`pb-3 px-4 text-base font-semibold transition-colors relative ${
                activeTab === 'brokerage' 
                  ? 'text-[#0066CC]' 
                  : 'text-[#6B6B7B] hover:text-[#1A1A2E]'
              }`}
            >
              Brokerage Calculator
              {activeTab === 'brokerage' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066CC] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('margin')}
              className={`pb-3 px-4 text-base font-semibold transition-colors relative ${
                activeTab === 'margin' 
                  ? 'text-[#0066CC]' 
                  : 'text-[#6B6B7B] hover:text-[#1A1A2E]'
              }`}
            >
              Margin Calculator
              {activeTab === 'margin' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0066CC] rounded-full" />
              )}
            </button>
          </div>

          {/* Brokerage Calculator */}
          {activeTab === 'brokerage' && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E8E8]">
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Trade Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Segment</label>
                    <select
                      value={segment}
                      onChange={(e) => setSegment(e.target.value as any)}
                      className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                    >
                      <option value="equity">Equity</option>
                      <option value="fno">Futures & Options</option>
                      <option value="currency">Currency</option>
                      <option value="commodity">Commodity</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Buy Price (₹)</label>
                    <input
                      type="number"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Sell Price (₹)</label>
                    <input
                      type="number"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Quantity</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                    />
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E8E8]">
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Charges Breakdown</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">Turnover</span>
                    <span className="font-semibold text-[#1A1A2E]">₹{brokerageResult.turnover.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">Brokerage (₹10/order)</span>
                    <span className="font-semibold text-[#1A1A2E]">₹{brokerageResult.brokerage}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">Exchange Charges</span>
                    <span className="font-semibold text-[#1A1A2E]">₹{brokerageResult.exchangeCharges}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">GST (18%)</span>
                    <span className="font-semibold text-[#1A1A2E]">₹{brokerageResult.gst}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">Stamp Duty</span>
                    <span className="font-semibold text-[#1A1A2E]">₹{brokerageResult.stampDuty}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">SEBI Charges</span>
                    <span className="font-semibold text-[#1A1A2E]">₹{brokerageResult.sebiCharges}</span>
                  </div>
                </div>
                
                <div className="bg-[#F7F8FA] rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#1A1A2E]">Total Charges</span>
                    <span className="text-2xl font-bold text-[#FF3B30]">₹{brokerageResult.totalCharges}</span>
                  </div>
                </div>
                
                <div className="bg-[#E8F5E9] rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#1A1A2E]">Net Profit/Loss</span>
                    <span className={`text-2xl font-bold ${brokerageResult.netProfit >= 0 ? 'text-[#00C853]' : 'text-[#FF3B30]'}`}>
                      ₹{brokerageResult.netProfit.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Margin Calculator */}
          {activeTab === 'margin' && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E8E8]">
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Position Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Segment</label>
                    <select
                      value={marginSegment}
                      onChange={(e) => setMarginSegment(e.target.value as any)}
                      className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                    >
                      <option value="equity">Equity</option>
                      <option value="fno">Futures & Options</option>
                    </select>
                  </div>
                  
                  {marginSegment === 'equity' && (
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Trade Type</label>
                      <select
                        value={tradeType}
                        onChange={(e) => setTradeType(e.target.value as any)}
                        className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                      >
                        <option value="delivery">Delivery (100% Margin)</option>
                        <option value="intraday">Intraday (20% Margin)</option>
                      </select>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Price per Unit (₹)</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                    />
                  </div>
                  
                  {marginSegment === 'fno' && (
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Lot Size</label>
                      <input
                        type="number"
                        value={lotSize}
                        onChange={(e) => setLotSize(Number(e.target.value))}
                        className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">Number of Lots</label>
                    <input
                      type="number"
                      value={positionSize}
                      onChange={(e) => setPositionSize(Number(e.target.value))}
                      className="w-full px-4 py-2 rounded-lg border border-[#E8E8E8] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                    />
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E8E8]">
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Margin Requirements</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">Total Position Value</span>
                    <span className="font-semibold text-[#1A1A2E]">₹{marginResult.totalValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">Margin Percentage</span>
                    <span className="font-semibold text-[#1A1A2E]">{marginResult.marginPercentage}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E8E8E8]">
                    <span className="text-[#6B6B7B]">Exposure</span>
                    <span className="font-semibold text-[#1A1A2E]">₹{marginResult.exposure.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="bg-[#E8F5E9] rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#1A1A2E]">Required Margin</span>
                    <span className="text-2xl font-bold text-[#0066CC]">₹{marginResult.requiredMargin.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start gap-2">
                  <Info size={16} className="text-[#0066CC] mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-[#6B6B7B]">
                    Margin requirements are indicative and subject to change based on market volatility and regulatory updates.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-[#0066CC] mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">Flat ₹10 Brokerage</h3>
              <p className="text-sm text-[#6B6B7B]">Pay only ₹10 per executed order across all segments</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-[#00C853] mb-4">
                <IndianRupee size={24} />
              </div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">No Hidden Charges</h3>
              <p className="text-sm text-[#6B6B7B]">Transparent pricing with no surprises</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 text-purple-600 mb-4">
                <ArrowRight size={24} />
              </div>
              <h3 className="font-semibold text-[#1A1A2E] mb-2">Real-time Margin</h3>
              <p className="text-sm text-[#6B6B7B]">Get up to 5x leverage on selective stocks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}