import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/38408236-5d63-49bc-b6d9-ce981098be8a-k3vyhf.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/ca5de913-5411-4f54-874f-093e45a43bef-b6q2fg.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/1642431d-376a-4272-80e9-60d5ce8c0d10-79w4hx.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/327da037-0a43-4c84-9951-ec45517c481f-70m0rw.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/0343b1a2-a073-498a-82bc-690bb06afb99-ksxvr5.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/9cd7296b-a510-4ee7-84e0-3baaa08ccd1b-jen30j.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/019eb0f6-3214-4eaf-abaa-5866de6e69c0-osfxw7.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const allPosts = await db.select().from(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {allPosts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}></img>
          </div>
        ))}
      </div>
    </main>
  );
}
