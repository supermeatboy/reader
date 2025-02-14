
export const SubscribeButton = () => {
    return (
        <button type="button"
                className="
                    text-[var(--text-subscribe)]
                    text-xs
                    bg-transparent
                    border
                    border-[var(--text-subscribe)]
                    focus:outline-none
                    hover:text-[var(--text-light)]
                    hover:bg-[var(--text-subscribe)]
                    transition ease-in duration-300
                    focus:ring-4
                    font-medium
                    rounded-lg
                    px-2
                    py-1
                    me-2
                ">
            Підписатися
        </button>
    )
}