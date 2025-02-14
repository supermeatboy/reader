import Image from "next/image";
import UserAvatar from '@/../public/avatar.jpg'

export const Avatar = () => {
    return (
        <div className='flex items-center gap-3'>
            <Image
                className="w-10 h-10 rounded-full"
                src={UserAvatar}
                alt="User avarat"
            />
            <div className="font-medium">
                <div>Jese Leos</div>
            </div>
        </div>
    )
}