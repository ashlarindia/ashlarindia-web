import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Ashlar Markets',
  description: 'Explore investment and insurance products including Life Insurance, General Insurance, Corporate FDs, Bonds, and Depository Services',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {children}
    </div>
  );
}