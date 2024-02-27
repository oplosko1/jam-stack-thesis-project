import { PortableText } from "@portabletext/react";

export default function PostBody({ content }: { content: any }) {
  return (
    <div className={`max-w-2xl mx-auto markdown`}>
      <PortableText value={content} />
    </div>
  );
}
