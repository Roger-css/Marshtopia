import { BLOGS } from "../blog-data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { notFound } from "next/navigation";

// Define generateStaticParams for static export compatibility if needed
export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.id,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params before using its properties
  const { slug } = await params;
  const blog = BLOGS.find((b) => b.id === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-24 pb-12 transition-colors duration-300">
      {/* Hero Image Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-4xl mx-auto">
          <Link
            href="/Blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors w-fit"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blogs
          </Link>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{blog.author}</span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg dark:prose-invert prose-stone prose-headings:font-display prose-headings:font-bold prose-a:text-primary dark:prose-a:text-accent hover:prose-a:text-primary/80 transition-colors"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Footer Navigation */}
      <div className="max-w-3xl mx-auto px-6 mt-12 border-t border-stone-200 dark:border-stone-800 pt-8">
        <Link
          href="/Blogs"
          className="text-primary dark:text-accent font-bold hover:underline"
        >
          View all stories
        </Link>
      </div>
    </div>
  );
}
