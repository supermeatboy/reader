"use client";

import {JSX, useState} from "react";
import BackButton from '@/../public/back_button.svg'

import List from '@/../public/list_button.svg'
import AddBook from '@/../public/add_button.svg'
import Size from '@/../public/size_button.svg'
import Share from '@/../public/share_button.svg'
import Settings from '@/../public/settings_button.svg'
import More from '@/../public/more_horizontal_button.svg'
import {ActionButton} from "@/shared/ui/ActionButton/ActionButton";
import {Avatar} from "@/shared/ui/Avatar/Avatar";
import {SubscribeButton} from "@/shared/ui/SubscribeButton/SubscribeButton";
import Tippy from "@tippyjs/react";
import {ThemeSettingBody} from "@/features/ThemeSettingsPopup/ui/ThemeSettingBody/ThemeSettingBody";

export const Header = (): JSX.Element => {
    const [settingMenu, setMenu] = useState(false)

    return (
        <div className='
        flex
        items-center
        justify-center
        w-full
        h-16
        px-8
        border-b
        border-[var(--border-light)]
        '>
            <div className="flex items-center gap-4 mr-6">
                <a href="/">
                    <BackButton/>
                </a>
                <h2>Коли сонце сідає за схил</h2>
            </div>
            <div className="flex items-center gap-3 mr-auto">
                <Avatar/>
                <SubscribeButton/>
            </div>

            <ActionButton icon={List} onClick={() => {
                alert('List button clicked!')
            }}/>
            <ActionButton icon={AddBook} onClick={() => {
                alert('AddBook button clicked!')
            }}/>
            <ActionButton icon={Size} onClick={() => {
                alert('Size button clicked!')
            }}/>
            <ActionButton icon={Share} onClick={() => {
                alert('Share button clicked!')
            }}/>
            <Tippy
                visible={settingMenu}
                placement='bottom-end'
                allowHTML={true}
                interactive={true}
                arrow={false}
                maxWidth={380}
                content={<ThemeSettingBody/>}
                onClickOutside={() => setMenu((prev): boolean => !prev)}
            >
                {/*<ActionButton icon={Settings} onClick={() => setMenu((prev):boolean => !prev)}/>*/}
                <button
                    onClick={() => setMenu((prev): boolean => !prev)}
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
                    `}>
                    <Settings/>
                </button>
            </Tippy>
            <ActionButton className='mr-[-14px]' icon={More} onClick={() => {
                alert('More button clicked!')
            }}/>
        </div>
    )
}