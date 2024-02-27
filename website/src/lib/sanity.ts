import { createClient, type ClientConfig } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config = {
  projectId: "ujkhprep",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
} satisfies ClientConfig;

export const imageBuilder = createImageUrlBuilder(config);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto("format").fit("max");

export const client = createClient(config);
