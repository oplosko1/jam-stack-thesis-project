import Link from "next/link";
import CoverImage from "../components/cover-image";
import { Date as DateComponent } from "../components/date";
import Avatar from "../components/avatar";
import { PostData } from "../lib/types";
import MorePosts from "../components/more-posts";
import { client } from "@/lib/sanity";
import { allPostsQuery } from "@/lib/queries";

export const revalidate = 60;

export default async function Home() {
  //Get all posts from Sanity
  const allPosts = (await client.fetch(allPostsQuery)) as PostData[];

  //Take first one as a hero post
  const [firstPost, ...otherPosts] = allPosts;

  return (
    <main className="container px-4">
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          JAM Blog.
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A statically generated blog example using{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://sanity.io/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Sanity
          </a>
          .
        </h4>
      </section>
      <section>
        <div className="my-8 md:my-16 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
          <div>
            <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
              <Link
                href={`/blog/${firstPost.slug}`}
                className="hover:underline"
              >
                {firstPost.title}
              </Link>
            </h3>
            <div className="mb-4 text-lg md:mb-0">
              <DateComponent dateString={firstPost.date} />
            </div>
          </div>
          <div>
            <p className="mb-4 text-lg leading-relaxed">{firstPost.excerpt}</p>
            {firstPost.author && (
              <Avatar
                name={firstPost.author.name}
                picture={firstPost.author.image}
              />
            )}
          </div>
        </div>
        <div className="mb-20 md:mb-28">
          <CoverImage
            slug={firstPost.slug}
            title={firstPost.title}
            image={firstPost.mainImage}
          />
        </div>
      </section>
      {otherPosts.length > 0 && <MorePosts posts={otherPosts} />}
    </main>
  );
}
