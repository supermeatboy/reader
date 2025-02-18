import {IconLabel} from "@/shared/ui/IconLabel/IconLabel";
import Comment from '@/../public/comment.svg'
import TextSize from '@/../public/text_size.svg'
import SpaceSize from '@/../public/space_size.svg'
import Theme from '@/../public/theme.svg'
import TextType from '@/../public/text_type.svg'
import {useState} from "react";
import {FontSelect} from "@/shared/ui/FontSelect/FontSelect";
import {useTheme} from "@/context/ThemeProvider";
import {useUserSetting} from "@/context/UserSettingsProvider";

export const ThemeSettingBody = () => {
    const { theme, toggleTheme } = useTheme();
    const [settings, setSettings] = useState({
        comments: false,
    });

    const {userSettings, setData} = useUserSetting();

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
        border-[var(--border-sm)]
        text-[var(--text)]
        bg-[var(--secondary-color)]
        `

    return (
        <div className='
        gap-8
        flex
        flex-wrap
        bg-[var(--bg-popup)]
        px-6
        py-8
        rounded-xl
        shadow-xl
        w-full
        sm:w-[380px]
        '>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={Comment} text='Коментарі до абзаців'/>
                <div className='flex items-center justify-center w-full max-w-56'>
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
                <div className='flex flex-wrap items-center justify-between w-full gap-3.5 max-w-56'>
                    <input
                        onChange={e => setData({fontSize: +e?.target?.value})}
                        value={userSettings?.fontSize} type="range" min="2" step="1" max="7"  className="w-full"/>
                    <span className='text-[13px] text-[var(--text-subscribe)] tracking-wider'>Менше</span>
                    <span className='text-[13px] text-[var(--text-subscribe)] tracking-wider'>Більше</span>
                </div>
            </div>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={SpaceSize} text='Ширина полів'/>
                <div className='flex flex-wrap items-center justify-between w-full gap-3.5 max-w-56'>
                    <input
                        onChange={e => setData({fieldsWidth: +e?.target?.value})}
                        value={userSettings?.fieldsWidth} type="range" min="60" step="5" max="95" className="w-full"/>
                    <span className='text-[13px] text-[var(--text-subscribe)] tracking-wider'>Менше</span>
                    <span className='text-[13px] text-[var(--text-subscribe)] tracking-wider'>Більше</span>
                </div>
            </div>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={Theme} text='Колір теми'/>
                <div className='flex flex-wrap items-center justify-between w-full gap-3.5 max-w-56'>
                    <input value={theme==='light'? 2 : 1} onChange={toggleTheme} type="range" min="1" max="2" step="1" className="w-full"/>
                    <span className='text-[13px] text-[var(--text-subscribe)] tracking-wider'>Темніше</span>
                    <span className='text-[13px] text-[var(--text-subscribe)] tracking-wider'>Світліше</span>
                </div>
            </div>
            <div className='flex gap-4 items-center justify-between w-full'>
                <IconLabel icon={TextType} text='Шрифт'/>
                <FontSelect/>
            </div>
            <div className='flex gap-4 items-center justify-between w-full py-4 border-t border-[var(--divider)]'>
                <div className='
                    text-base
                    font-medium
                '>Перенос тексту</div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="
                    relative
                    w-11
                    h-6
                    bg-[var(--bg-checkbox-off)]
                    peer-focus:outline-none
                    rounded-full
                    peer
                    peer-checked:after:translate-x-full
                    rtl:peer-checked:after:-translate-x-1
                    peer-checked:after:border-white
                    after:content-['']
                    after:absolute
                    after:top-[2px]
                    after:start-[2px]
                    after:bg-white
                    after:border-gray-300
                    after:border after:rounded-full
                    after:h-5
                    after:w-5
                    after:transition-all
                    peer-checked:bg-[var(--primary-color)]
                    "/>
                </label>
            </div>
            <div className='hidden sm:flex gap-4 items-center justify-between w-full pt-4 -mt-8 border-t border-[var(--divider)]'>
                <div>Книжний режим прочитання</div>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="
                    relative
                    w-11
                    h-6
                    bg-[var(--bg-checkbox-off)]
                    peer-focus:outline-none
                    rounded-full
                    peer
                    peer-checked:after:translate-x-full
                    rtl:peer-checked:after:-translate-x-1
                    peer-checked:after:border-white
                    after:content-['']
                    after:absolute
                    after:top-[2px]
                    after:start-[2px]
                    after:bg-white
                    after:border-gray-300
                    after:border after:rounded-full
                    after:h-5
                    after:w-5
                    after:transition-all
                    peer-checked:bg-[var(--primary-color)]
                    "/>
                </label>
            </div>
        </div>
    )
}