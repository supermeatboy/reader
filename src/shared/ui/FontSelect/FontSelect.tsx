import BackArrow from '@/../public/back_arrow.svg'
import NextArrow from '@/../public/next_arrow.svg'
import {useUserSetting} from "@/context/UserSettingsProvider";
import {fonts} from '@/shared/constants/fonts'

export const FontSelect = () => {
    // @ts-ignore
    const {userSettings, setData} = useUserSetting();

    const nextFont = () => {
        setData({fontIndex: (userSettings?.fontIndex + 1) % fonts.length});
    };

    const prevFont = () => {
        setData({fontIndex: (userSettings?.fontIndex - 1 + fonts.length) % fonts.length});
    };


    return (
        <div className='
        flex items-center justify-between w-full gap-3.5 max-w-56
        py-2
        px-4
        bg-[var(--secondary-color)]
        border-[rgba(0,0,0,.1)]
        rounded-full
        '>
            <BackArrow onClick={prevFont} className="cursor-pointer text-[var(--primary-color)]" />
            <div className='font-medium text-sm'>{fonts[userSettings?.fontIndex]}</div>
            <NextArrow onClick={nextFont} className="cursor-pointer text-[var(--primary-color)]" />
        </div>
    )
}