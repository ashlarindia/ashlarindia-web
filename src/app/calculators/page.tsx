'use client';

import { useMemo, useState } from 'react';
import {
  Calculator,
  TrendingUp,
  IndianRupee,
  ArrowRight,
  Info,
} from 'lucide-react';

type Segment = 'equity' | 'fno' | 'currency' | 'commodity';
type MarginSegment = 'equity' | 'fno';
type TradeType = 'delivery' | 'intraday';

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<'brokerage' | 'margin'>(
    'brokerage'
  );

  // Brokerage State
  const [buyPrice, setBuyPrice] = useState<number>(100);
  const [sellPrice, setSellPrice] = useState<number>(105);
  const [quantity, setQuantity] = useState<number>(100);
  const [segment, setSegment] = useState<Segment>('equity');

  // Margin State
  const [marginSegment, setMarginSegment] =
    useState<MarginSegment>('equity');

  const [tradeType, setTradeType] =
    useState<TradeType>('delivery');

  const [positionSize, setPositionSize] = useState<number>(1);
  const [lotSize, setLotSize] = useState<number>(25);
  const [price, setPrice] = useState<number>(1000);

  // --------------------------
  // BROKERAGE CALCULATOR
  // --------------------------

  const brokerageResult = useMemo(() => {
    const safeBuy = Math.max(buyPrice, 0);
    const safeSell = Math.max(sellPrice, 0);
    const safeQty = Math.max(quantity, 1);

    const buyTurnover = safeBuy * safeQty;
    const sellTurnover = safeSell * safeQty;
    const turnover = buyTurnover + sellTurnover;

    let brokerage = 20;
    let exchangeCharges = 0;
    let sebiCharges = turnover * 0.000001;
    let stampDuty = 0;

    switch (segment) {
      case 'equity':
        exchangeCharges = turnover * 0.0000325;
        stampDuty = buyTurnover * 0.00015;
        break;

      case 'fno':
        exchangeCharges = turnover * 0.000053;
        stampDuty = buyTurnover * 0.00002;
        break;

      case 'currency':
        exchangeCharges = turnover * 0.000032;
        stampDuty = buyTurnover * 0.00001;
        break;

      case 'commodity':
        exchangeCharges = turnover * 0.000032;
        stampDuty = buyTurnover * 0.00002;
        break;
    }

    const gst =
      (brokerage + exchangeCharges + sebiCharges) * 0.18;

    const totalCharges =
      brokerage +
      exchangeCharges +
      sebiCharges +
      stampDuty +
      gst;

    const grossPnL =
      (safeSell - safeBuy) * safeQty;

    const netProfit = grossPnL - totalCharges;

    return {
      turnover,
      brokerage,
      exchangeCharges,
      sebiCharges,
      stampDuty,
      gst,
      totalCharges,
      netProfit,
    };
  }, [buyPrice, sellPrice, quantity, segment]);

  // --------------------------
  // MARGIN CALCULATOR
  // --------------------------

  const marginResult = useMemo(() => {
    const safePrice = Math.max(price, 0);
    const safeLots = Math.max(positionSize, 1);
    const safeLotSize =
      marginSegment === 'fno'
        ? Math.max(lotSize, 1)
        : 1;

    let marginPercentage = 100;

    if (marginSegment === 'equity') {
      marginPercentage =
        tradeType === 'delivery' ? 100 : 20;
    }

    if (marginSegment === 'fno') {
      marginPercentage =
        tradeType === 'intraday' ? 8 : 12;
    }

    const totalValue =
      safePrice * safeLots * safeLotSize;

    const requiredMargin =
      (totalValue * marginPercentage) / 100;

    return {
      totalValue,
      marginPercentage,
      requiredMargin,
    };
  }, [
    marginSegment,
    tradeType,
    positionSize,
    lotSize,
    price,
  ]);

  const formatCurrency = (value: number) =>
    `₹${value.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
    })}`;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* HERO */}

      <section className="border-b border-[#eadfda] bg-gradient-to-b from-[#f7f2ef] to-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#eadfda] bg-white px-4 py-2 text-sm font-medium text-[#9B2C1F]">
              <Calculator size={16} />
              Trading Calculators
            </div>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
              Brokerage & Margin Calculator
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Estimate brokerage charges, margins, and
              potential profit or loss before placing trades.
            </p>
          </div>
        </div>
      </section>

      {/* TABS */}

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-10 flex gap-4 border-b border-[#eadfda]">
          <button
            onClick={() => setActiveTab('brokerage')}
            className={`relative pb-4 text-sm font-semibold transition ${
              activeTab === 'brokerage'
                ? 'text-[#9B2C1F]'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Brokerage Calculator

            {activeTab === 'brokerage' && (
              <div className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#9B2C1F]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('margin')}
            className={`relative pb-4 text-sm font-semibold transition ${
              activeTab === 'margin'
                ? 'text-[#9B2C1F]'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Margin Calculator

            {activeTab === 'margin' && (
              <div className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#9B2C1F]" />
            )}
          </button>
        </div>

        {/* BROKERAGE */}

        {activeTab === 'brokerage' && (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* FORM */}

            <div className="rounded-[28px] border border-[#eadfda] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Trade Details
              </h2>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Segment
                  </label>

                  <select
                    value={segment}
                    onChange={(e) =>
                      setSegment(
                        e.target.value as Segment
                      )
                    }
                    className="w-full rounded-xl border border-[#d8c4bd] bg-white px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                  >
                    <option value="equity">Equity</option>
                    <option value="fno">
                      Futures & Options
                    </option>
                    <option value="currency">
                      Currency
                    </option>
                    <option value="commodity">
                      Commodity
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Buy Price
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={buyPrice}
                    onChange={(e) =>
                      setBuyPrice(Number(e.target.value))
                    }
                    className="w-full rounded-xl border border-[#d8c4bd] px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Sell Price
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={sellPrice}
                    onChange={(e) =>
                      setSellPrice(Number(e.target.value))
                    }
                    className="w-full rounded-xl border border-[#d8c4bd] px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Quantity
                  </label>

                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Number(e.target.value))
                    }
                    className="w-full rounded-xl border border-[#d8c4bd] px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                  />
                </div>
              </div>
            </div>

            {/* RESULTS */}

            <div className="rounded-[28px] border border-[#eadfda] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Charges Breakdown
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  {
                    label: 'Turnover',
                    value: brokerageResult.turnover,
                  },
                  {
                    label: 'Brokerage',
                    value: brokerageResult.brokerage,
                  },
                  {
                    label: 'Exchange Charges',
                    value:
                      brokerageResult.exchangeCharges,
                  },
                  {
                    label: 'GST',
                    value: brokerageResult.gst,
                  },
                  {
                    label: 'Stamp Duty',
                    value: brokerageResult.stampDuty,
                  },
                  {
                    label: 'SEBI Charges',
                    value:
                      brokerageResult.sebiCharges,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-[#f0e6e2] pb-3"
                  >
                    <span className="text-slate-600">
                      {item.label}
                    </span>

                    <span className="font-semibold text-slate-900">
                      {formatCurrency(item.value)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#faf6f4] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">
                    Total Charges
                  </span>

                  <span className="text-2xl font-bold text-[#9B2C1F]">
                    {formatCurrency(
                      brokerageResult.totalCharges
                    )}
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-[#f4f7f5] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">
                    Net Profit / Loss
                  </span>

                  <span
                    className={`text-2xl font-bold ${
                      brokerageResult.netProfit >= 0
                        ? 'text-emerald-600'
                        : 'text-red-500'
                    }`}
                  >
                    {formatCurrency(
                      brokerageResult.netProfit
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MARGIN */}

        {activeTab === 'margin' && (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* FORM */}

            <div className="rounded-[28px] border border-[#eadfda] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Position Details
              </h2>

              <div className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Segment
                  </label>

                  <select
                    value={marginSegment}
                    onChange={(e) =>
                      setMarginSegment(
                        e.target.value as MarginSegment
                      )
                    }
                    className="w-full rounded-xl border border-[#d8c4bd] px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                  >
                    <option value="equity">Equity</option>
                    <option value="fno">F&O</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Trade Type
                  </label>

                  <select
                    value={tradeType}
                    onChange={(e) =>
                      setTradeType(
                        e.target.value as TradeType
                      )
                    }
                    className="w-full rounded-xl border border-[#d8c4bd] px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                  >
                    <option value="delivery">
                      Delivery
                    </option>

                    <option value="intraday">
                      Intraday
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Price Per Unit
                  </label>

                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(e) =>
                      setPrice(Number(e.target.value))
                    }
                    className="w-full rounded-xl border border-[#d8c4bd] px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                  />
                </div>

                {marginSegment === 'fno' && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Lot Size
                    </label>

                    <input
                      type="number"
                      min="1"
                      value={lotSize}
                      onChange={(e) =>
                        setLotSize(
                          Number(e.target.value)
                        )
                      }
                      className="w-full rounded-xl border border-[#d8c4bd] px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Number of Lots
                  </label>

                  <input
                    type="number"
                    min="1"
                    value={positionSize}
                    onChange={(e) =>
                      setPositionSize(
                        Number(e.target.value)
                      )
                    }
                    className="w-full rounded-xl border border-[#d8c4bd] px-4 py-3 outline-none transition focus:border-[#9B2C1F]"
                  />
                </div>
              </div>
            </div>

            {/* RESULT */}

            <div className="rounded-[28px] border border-[#eadfda] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Margin Requirement
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  {
                    label: 'Position Value',
                    value: marginResult.totalValue,
                  },
                  {
                    label: 'Margin Percentage',
                    value: `${marginResult.marginPercentage}%`,
                  },
                  {
                    label: 'Required Margin',
                    value: formatCurrency(
                      marginResult.requiredMargin
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-[#f0e6e2] pb-3"
                  >
                    <span className="text-slate-600">
                      {item.label}
                    </span>

                    <span className="font-semibold text-slate-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-[#faf6f4] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">
                    Required Margin
                  </span>

                  <span className="text-2xl font-bold text-[#9B2C1F]">
                    {formatCurrency(
                      marginResult.requiredMargin
                    )}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex gap-3 rounded-2xl border border-[#eadfda] bg-[#fffaf8] p-4">
                <Info
                  size={18}
                  className="mt-0.5 text-[#9B2C1F]"
                />

                <p className="text-sm leading-6 text-slate-600">
                  Margin values are indicative and may vary
                  based on exchange regulations and market
                  volatility.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* INFO */}

      <section className="border-t border-[#eadfda] bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
              <TrendingUp size={26} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Flat ₹10 Brokerage
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Transparent brokerage pricing across all
              trading segments.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
              <IndianRupee size={26} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              No Hidden Charges
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Know your exact charges before placing any
              trade.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ef] text-[#9B2C1F]">
              <ArrowRight size={26} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              Real-Time Margin
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Estimate required trading margins instantly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}