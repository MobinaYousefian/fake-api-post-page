"use client"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPost} from "@/redux/features/postSlice";

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

    return (
        <div className={"flex items-baseline justify-between flex-wrap"}>
            {
                postList.map((item, i) => (
                    <div key={i} className={"p-6 w-full sm:w-[50%]"}>
                        <div className={"border rounded-lg bg-white"}>
                            <div className={"text-sm sm:text-xl sm:px-3 bg-pink-600 text-white flex justify-between items-center p-2 rounded-lg"}>
                                <span className={"font-bold w-[75%]"}>{item.title}</span>
                                <span className={"text-xs sm:text-sm"}>user#{item.id}</span>
                            </div>
                            <div className={"p-3 rounded-b-lg text-xs sm:text-sm"}>
                                {item.body}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );

}