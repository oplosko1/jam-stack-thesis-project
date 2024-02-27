import Avatar from "@/components/avatar";
import CoverImage from "@/components/cover-image";
import { Date as DateComponent } from "@/components/date";
import MorePosts from "@/components/more-posts";
import PostBody from "@/components/post-body";
import { postQuery } from "@/lib/queries";
import { client } from "@/lib/sanity";
import { PostData } from "@/lib/types";
import Link from "next/link";

export const revalidate = 60;

export default async function PostPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  //
  //Get a specific post from Sanity by slug from params
  const { post, morePosts } = (await client.fetch(postQuery, {
    slug,
  })) as {
    post: PostData;
    morePosts: PostData[];
  };

  const { title, author, mainImage, date, content } = post;

  return (
    <div className="container">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          JAM Blog
        </Link>
        .
      </h2>
      <article>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {title}
        </h1>
        <div className="hidden md:block md:mb-12">
          {author && <Avatar name={author.name} picture={author.image} />}
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} image={mainImage} />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block mb-6 md:hidden">
            {author && <Avatar name={author.name} picture={author.image} />}
          </div>
          <div className="mb-6 text-lg">
            <DateComponent dateString={date} />
          </div>
        </div>
        <PostBody content={content} />
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </div>
  );
}
