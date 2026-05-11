// src/app/margin-calculator/page.tsx
export default function MarginCalculatorPage() {
  return (
    <main className="min-h-screen py-12 bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Margin Calculator
          </h1>
          <p className="text-slate-600">
            Calculate F&O margin requirements instantly
          </p>
        </div>

        {/* Embedded Calculator */}
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <iframe
            src="https://calc.wisdomtreeventures.com/margin/"
            title="Margin Calculator"
            className="w-full h-[700px] md:h-[800px] border-0 rounded-xl"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
          />
          
          {/* Fallback link */}
          <div className="text-center mt-4 pt-4 border-t">
            <a 
              href="https://calc.wisdomtreeventures.com/margin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline text-sm"
            >
              Open calculator in new tab →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}