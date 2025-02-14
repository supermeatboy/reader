import {IconLabel} from "@/shared/ui/IconLabel/IconLabel";
import Comment from '@/../public/comment.svg'
import TextSize from '@/../public/text_size.svg'
import SpaceSize from '@/../public/space_size.svg'
import Theme from '@/../public/theme.svg'
import TextType from '@/../public/text_type.svg'
import {useState} from "react";

export const ThemeSettingBody = () => {
    const [settings, setSettings] = useState({
        comments: false,
    });

    const buttonStyle = `
        w-full
        font-medium
        p-3
        border
        transition ease-in duration-300
        focus:outline-none
        font-medium
        text-xs
    `
    const btnActive: string = `
        text-[var(--text-light)]
        bg-[var(--primary-color)]
        border-[var(--primary-color)]
        `

    const btnDefault: string = `
        text-[var(--text)]
        bg-[var(--secondary-color)]
        border-[rgba(0,0,0,.1)]
        hover:bg-[rgba(0,0,0,.1)]`

    return (
        <div className='
        gap-8
        flex
        flex-wrap
        bg-[var(--background)]
        px-6
        py-8
        rounded-xl
        shadow-xl
        w-[380px]
        '>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={Comment} text='Коментарі до абзаців'/>
                <div className='flex items-center justify-center w-full'>
                    <button
                        onClick={(prev) => setSettings({
                            ...prev,
                            comments: true,
                        })}
                        className={`
                        ${buttonStyle}
                        rounded-s-full
                        ${settings.comments ? btnActive : btnDefault}
                        `}>Сховати</button>
                    <button
                        onClick={(prev) => setSettings({
                            ...prev,
                            comments: false,
                        })}

                        className={`
                        ${buttonStyle}
                        rounded-e-full
                        ${settings.comments ? btnDefault : btnActive}}
                        `}>Показувати</button>
                </div>
            </div>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={TextSize} text='Розмір тексту'/>
                <div className='flex items-center justify-center w-full'>
                    <input type="range" min="1" max="100" accept="images/*" className="w-full"/>
                </div>
            </div>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={SpaceSize} text='Ширина полів'/>
            </div>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={Theme} text='Колір теми'/>
            </div>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={TextType} text='Шрифт'/>
            </div>
        </div>
    )
}