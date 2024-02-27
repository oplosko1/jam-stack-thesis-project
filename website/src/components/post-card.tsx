import { SanityAsset } from "@sanity/image-url/lib/types/types";
import Avatar from "./avatar";
import { Date } from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { PostData } from "../lib/types";

type Props = Omit<PostData, "content">;

export default function PostCard({
  title,
  mainImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={mainImage} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.image} />}
    </div>
  );
}
