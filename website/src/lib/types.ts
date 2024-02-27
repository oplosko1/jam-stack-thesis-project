import { SanityAsset } from "@sanity/image-url/lib/types/types";

export type PostData = {
  title: string;
  slug: string;
  mainImage?: SanityAsset;
  date: string;
  author: {
    name: string;
    image?: SanityAsset;
  };
  excerpt: string;
  content: any;
};
