import React, { useEffect, useState } from 'react';
import { BookOpen, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

interface Blog {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

export const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@j.hariharan005"
        );
        const data = await res.json();
        if (data?.items && data.items.length > 0) {
          setBlogs(data.items.slice(0, 3));
        } else {
          // Fallback static blog item
          setBlogs([
            {
              title: "Exploring Next.js 15 & Headless CMS Workflows",
              link: "https://medium.com/@j.hariharan005",
              pubDate: new Date().toISOString(),
              thumbnail: "/uploads/medium.png",
              description: "Best practices for building high-performance frontend applications with React, Next.js, and Strapi CMS."
            }
          ]);
        }
      } catch (err) {
        console.error("Error fetching Medium posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-24 relative px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Publications & Articles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Medium <span className="text-gradient-cyan">Articles</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Technical writing, tutorials, and engineering lessons shared on Medium.
          </p>
        </div>

        {/* Blogs Grid */}
        {loading ? (
          <div className="text-center text-slate-400 py-12 text-sm">
            Fetching Medium articles...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                onClick={() => window.open(blog.link, "_blank")}
                className="glass-card p-5 sm:p-6 rounded-3xl border border-white/10 glass-card-hover flex flex-col justify-between space-y-4 cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-white/10">
                  <img
                    src={blog.thumbnail || "/uploads/medium.png"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/uploads/medium.png';
                    }}
                  />
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(blog.pubDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {blog.description.replace(/<[^>]+>/g, "").substring(0, 110)}...
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Medium Profile CTA */}
        <div className="text-center pt-4">
          <a
            href="https://medium.com/@j.hariharan005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>View All Articles on Medium</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blogs;
