import Link from "next/link";
import Image from "next/image";
import { BLOGS } from "./blog-data";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-24 pb-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Our Stories
          </h1>
          <p className="text-stone-600 dark:text-stone-300 max-w-2xl mx-auto text-lg hover:text-primary transition-colors">
            Discover the stories, history, and life of the Mesopotamian Marshes.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <Link href={`/Blogs/${blog.id}`} key={blog.id} className="group">
              <article className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-stone-100 dark:border-stone-800">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center text-xs text-stone-500 dark:text-stone-400 mb-3 space-x-2">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.author}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-stone-800 dark:text-stone-100 mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-3 mb-4 grow">
                    {blog.excerpt}
                  </p>
                  <span className="text-primary dark:text-accent text-sm font-bold uppercase tracking-wider mt-auto inline-flex items-center gap-1">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
