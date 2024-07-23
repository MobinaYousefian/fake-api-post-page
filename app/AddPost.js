export const AddPost = () => {
    const fields =[{header: "Title", des: "Write a title for your post"}, {header: "Description", des: "Write your post"}];

    return (
        <div className={"p-6"}>
            <div className={"mx-auto p-6 rounded-lg border-gray-500 border border-opacity-50 w-2/4 bg-white"}>
                <form className={"flex justify-around items-baseline"}>
                    <div className={"text-xl text-pink-600"}>
                        Add New Post ↗　
                    </div>
                    <div className={"flex flex-col items-end"}>
                        {
                            fields.map((item, i) => (
                                <label className={"p-2 flex items-baseline"} key={i}>
                                    {item.header}
                                    <textarea placeholder={item.des}
                                              className={"bg-blue-50 ml-1.5 text-sm cursor-pointer outline-none focus:border border-blue-400 rounded-lg p-1.5"}/>
                                </label>
                            ))
                        }
                        <button type={"submit"} className={"mt-2 duration-100 text-white bg-pink-600 rounded-lg p-2 px-2.5 focus:bg-pink-400 hover:bg-pink-500"}>
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}