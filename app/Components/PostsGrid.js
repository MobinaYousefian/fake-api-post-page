"use client"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPost} from "@/redux/features/postSlice";
import Image from "next/image";

export const PostsGrid = () => {
    const dispatch = useDispatch();
    const {postList} = useSelector(state => state.post);

    const getPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            const data = await response.json();
            dispatch(setPost(data));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect( () => {
        getPosts();
    }, []);

    const deletePost = async (id) => {
      try {
          let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
              method: "DELETE"
          });
          if (response.status === 200) {
              dispatch(setPost(postList.filter((post) => post.id !== id)))
          }
      }  catch (error) {
          console.log(error);
      }
    };

    return (
        <div className={"flex items-baseline justify-between flex-wrap"}>
            {
                postList.map((item, i) => (
                    <div key={i} className={"p-6 w-full sm:w-[50%]"}>
                        <div className={"border rounded-lg bg-white"}>
                            <div className={"text-sm sm:text-xl sm:px-3 bg-cyan-700 text-white flex justify-between items-center p-2 rounded-lg"}>
                                <span className={"font-bold w-[75%]"}>{item.title}</span>
                                <span className={"text-xs sm:text-sm"}>user#{item.id}</span>
                            </div>
                            <div className={"p-3 rounded-b-lg text-xs sm:text-sm"}>
                                {item.body}
                            </div>
                            <div title={"Delete Post"} className={"flex justify-end p-4"}>
                                <button onClick={() => deletePost(item.id)} className={"rounded-lg p-2 text-sm text-red-600 hover:bg-gray-50 duration-100"}>
                                    <Image src={"/delete.svg"} width={18} height={18} alt={"delete icon"}/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );

}