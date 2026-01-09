import Link from "next/link";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type props = {
  post: Post;
};

export default function PostCard({ post }: props) {
  return (
    <article className="border-gray-200 rounded-xl p-4 mb-3">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-3">{post.body}</p>
      <div className="flex gap-3 items-center">
        <Link
          href={`/posts/${post.id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          더보기
        </Link>
      </div>
    </article>
  );
}
