"use client"
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import {useEffect} from "react";
import {closeStatus} from "@/redux/features/statusSlice";

export const StatusModal = () => {
    const dispatch = useDispatch();
    const {isActive, statusIcon, statusText} = useSelector(state => state.status);

    useEffect(() => {
        setTimeout(() => {
            dispatch(closeStatus())
        }, 5000)

        return () => {clearTimeout()}
    },[isActive])

    if (isActive === false) return null;
    return (
        <div className={"fixed right-0 top-0 p-7 z-50"}>
            <div className={"flex justify-between items-center bg-neutral-100 p-4 rounded-lg"}>
                <p className={"p-1 text-gray-500"}>
                    {statusText}
                </p>
                <div className={"p-1"}>
                    <Image src={statusIcon} width={32} height={32} alt={statusText}/>
                </div>
            </div>
        </div>
    )
}