"use client"
import {AddPostFields} from "@/app/Components/AddPostFields";
import {useDispatch, useSelector} from "react-redux";
import {setDescription, setHeadline, setPost} from "@/redux/features/postSlice";
import {useRef} from "react";

export const AddPost = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const {headline, description, postList} = useSelector(state => state.post);

    const handleChangeTitle = (e) => {
        dispatch(setHeadline(e.target.value))
    };

    const handleChangeDescription = (e) => {
        dispatch(setDescription(e.target.value))
    };

    async function PostRequest () {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
                method: "POST",
                body: JSON.stringify({
                    title: headline,
                    body: description,
                    userId: Math.floor(Math.random() * (100 - 10) + 10)
                }),
                headers : {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            const data = await response.json();
            dispatch(setPost([data, ...postList]));
            dispatch(setHeadline(""));
            dispatch(setDescription(""));
        }catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        PostRequest();
        inputRef.current.focus();

    };

    return (
        <div className={"p-6"}>
            <div className={"mx-auto p-6 rounded-lg border-gray-500 border border-opacity-50 w-full max-w-[420px] bg-white sm:w-2/4"}>
                <form onSubmit={handleSubmit}>
                    <div className={"text-xl text-sky-600 mb-3"}>
                        Add New Post ↗　
                    </div>
                    <div className={"flex flex-col items-end"}>
                        <AddPostFields
                            headline={headline}
                            description={description}
                            handleChangeDescription={handleChangeDescription}
                            handleChangeTitle={handleChangeTitle}
                            inputRef={inputRef}
                        />
                        <button type={"submit"} className={"mt-2 duration-100 text-white bg-cyan-700 rounded-lg p-2 px-2.5 focus:bg-cyan-500 hover:bg-cyan-600"}>
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}