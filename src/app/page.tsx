import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockURLs = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.flV_HAhkgpxUwwDRW-5p9AHaHa%26pid%3DApi&f=1&ipt=808979bcd997a062edfb130d1239d330af9558b466085a01d324526cd22c10ae&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZC9x4qJnDJzccRXM-W3s5gHaEo%26pid%3DApi&f=1&ipt=1bf03bd19bc5aa74c11d1a7016f0affac70b9967a8f834efb80d7bbeaad7b1e9&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tt3e-qggWjg2dDbNAgljnAHaEK%26pid%3DApi&f=1&ipt=f9069c4e10a0a204dff15ebbae192a54c5a955365c1fcd71e226b6fa6b2de527&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wviv5Hm5OUp43KJVYFGwJQHaEK%26pid%3DApi&f=1&ipt=a257166994404f2d3240383dad2ee63661357a07893185a394376e5f7b7d7ac2&ipo=images",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
 
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-' + index} className="w-48">
            <a className="m-2">
              <img src={image.url} />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
