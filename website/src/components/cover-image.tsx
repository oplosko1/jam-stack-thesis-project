import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../lib/sanity";
import { cn } from "../lib/utils";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

type Props = {
  title: string;
  slug?: string;
  image?: SanityAsset;
};

export default function CoverImage({ title, slug, image: source }: Props) {
  const image = source?.asset?._ref ? (
    <div
      className={cn("shadow-small rounded-md overflow-hidden", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    >
      <Image
        className="w-full h-auto"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority
      />
    </div>
  ) : (
    <div
      className="rounded-md overflow-hidden shadow-small hover:shadow-medium bg-neutral-100 transition-shadow duration-200"
      style={{ paddingTop: "50%" }}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
