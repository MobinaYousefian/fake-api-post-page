import {AddPost} from "@/app/Components/AddPost";
import {PostsGrid} from "@/app/Components/PostsGrid";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function Home() {
  return (
      <main className={"bg-neutral-200"}>
          <AddPost/>
          <Suspense fallback={<Loading/>}>
              <PostsGrid/>
          </Suspense>
      </main>
  );
}
