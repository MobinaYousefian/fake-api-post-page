export const AddPostFields = ({description, handleChangeDescription, handleChangeTitle, headline, inputRef}) => {

    return (
        <>
            <label className={"p-2 flex items-baseline flex-col md:flex-row w-full max-w-[18.5rem]"}>
                Title
                <input ref={inputRef} value={headline} onChange={handleChangeTitle} type={"text"} placeholder={"Write a title for your post"}
                          className={"w-full bg-blue-50 ml-1.5 text-sm cursor-pointer outline-none focus:border border-blue-400 rounded-lg p-1.5"}/>
            </label>
            <label className={"p-2 flex items-baseline flex-col md:flex-row w-full max-w-[18.5rem]"}>
                Description
                <textarea required value={description} onChange={handleChangeDescription} placeholder={"Write your post"}
                          className={"w-full bg-blue-50 ml-1.5 text-sm cursor-pointer outline-none focus:border border-blue-400 rounded-lg p-1.5"}/>
            </label>
        </>
    )
}