import { getSortedPostsData } from "@/lib/posts";
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
  return <div>page</div>;
}
