import {AddPost} from "@/app/Components/AddPost";
import {PostsGrid} from "@/app/Components/PostsGrid";
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
