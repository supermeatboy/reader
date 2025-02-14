"use client";

import {ElementType} from "react";

export const ActionButton = ({
    icon: Icon,
    onClick,
    className,
}: {
    icon: ElementType,
    onClick: () => void,
    className?: string,
}) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`
                relative
                text-[var(--text)]
                bg-transparent
                hover:bg-transparent
                hover:text-[var(--primary-color)]
                outline-none
                font-medium
                rounded-lg
                text-sm
                text-center
                inline-flex
                items-center
                transition ease-in duration-300
                p-2.5
                ${className}
              `}>
            <Icon/>
        </button>
    )
}