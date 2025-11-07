import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Blog {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@j.hariharan005"
        );
        const data = await res.json();
        if (data?.items) {
          setBlogs(data.items.slice(0, 3));
        }
      } catch (err) {
        console.error("Error fetching Medium posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="text-center text-muted-foreground">
          Fetching latest blogs...
        </div>
      </section>
    );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Latest Blogs
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Insights and stories I’ve shared on Medium
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                onClick={() => window.open(blog.link, "_blank")}
                className="hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group border border-border/50 bg-card hover:border-primary/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.thumbnail || "/uploads/medium.png"}
                    alt={blog.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {blog.description.replace(/<[^>]+>/g, "").substring(0, 120)}...
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {new Date(blog.pubDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(blog.link, "_blank");
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs px-4 py-1"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
