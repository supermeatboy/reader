import {ElementType} from "react";

export const IconLabel = (
    {
        icon: Icon,
        text
    }: {
        icon: ElementType;
        text: string;
    }
) => {
    return (
        <div className='
        flex
        flex-col
        flex-grow
        max-w-[90px]
        items-center
        justify-center
        text-center
        text-[13px]/[17px]
        tracking-tight
        '>
            <Icon/>
            <div>{text}</div>
        </div>
    )
}