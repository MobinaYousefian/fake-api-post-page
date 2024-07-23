import {AddPost} from "@/app/AddPost";
import {PostsGrid} from "@/app/PostsGrid";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function Home() {
  return (
      <main className={"bg-blue-50"}>
          <AddPost/>
          <Suspense fallback={<Loading/>}>
              <PostsGrid/>
          </Suspense>
      </main>
  );
}
