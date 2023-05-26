import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadate({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post notFound",
    };
  }

  return {
    title: post?.id,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate prose-invert mx-auto text-white/80 prose-strong:text-purple-600">
      <h1 className="text-3xl mt-4 mb-0 text-white">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link className="text-white" href="/">
            ← Back to home
          </Link>
        </p>
      </article>
    </main>
  );
}
