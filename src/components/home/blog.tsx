import type { FC } from "react";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const blogs: BlogPost[] = [
  {
    title: "How to Start Trading in 2024",
    date: "Jan 15, 2024",
    excerpt:
      "A step-by-step beginner guide to opening a demat account, understanding market orders, and placing your first trade confidently.",
    category: "Beginners",
    readTime: "5 min read",
  },
  {
    title: "Top 10 Stocks to Watch in 2024",
    date: "Jan 10, 2024",
    excerpt:
      "Our research team's picks across banking, IT, and pharma sectors — with valuations, targets, and risk levels explained clearly.",
    category: "Research",
    readTime: "7 min read",
  },
  {
    title: "Understanding F&O Trading",
    date: "Jan 5, 2024",
    excerpt:
      "A complete guide to futures and options — how they work, key strategies for hedging and speculation, and common mistakes to avoid.",
    category: "Advanced",
    readTime: "9 min read",
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Beginners: { bg: "bg-teal-50", text: "text-teal-700" },
  Research:  { bg: "bg-blue-50",  text: "text-blue-700"  },
  Advanced:  { bg: "bg-amber-50", text: "text-amber-700" },
};

const Blog: FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
            Market Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Latest from our blog
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Expert analysis, trading guides, and market updates — written for
            investors at every level.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => {
            const color = categoryColors[blog.category] ?? {
              bg: "bg-slate-100",
              text: "text-slate-600",
            };

            return (
              <article
                key={i}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                {/* Top accent bar */}
                <div
                  className={`h-1 w-full ${
                    i === 0
                      ? "bg-teal-500"
                      : i === 1
                      ? "bg-blue-500"
                      : "bg-amber-500"
                  }`}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta row */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md ${color.bg} ${color.text}`}
                    >
                      {blog.category}
                    </span>
                    <span className="text-xs text-slate-400">{blog.readTime}</span>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-slate-400 mb-2">{blog.date}</p>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors duration-150">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-slate-100 mt-5 pt-4">
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-150 group/btn">
                      Read article
                      <span className="inline-block transition-transform duration-150 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200">
            View all articles
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Blog;