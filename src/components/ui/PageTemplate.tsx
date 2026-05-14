type Props = {
  title: string;
};

export default function PageTemplate({ title }: Props) {
  return (
    <div className="min-h-screen bg-[#071028] text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-5xl font-bold mb-5">
          {title}
        </h1>

        <p className="text-slate-400 text-lg">
          This page is under development.
        </p>

      </div>

    </div>
  );
}