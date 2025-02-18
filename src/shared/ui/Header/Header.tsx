"use client";

import {JSX, useEffect, useState} from "react";
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
import Link from "next/link";

export const Header = (): JSX.Element => {
    const [settingMenu, setMenu] = useState(false)

    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        let lastX = 0;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const currentScrollX = window.scrollX;

            if (currentScrollY < 60) {
                setIsHidden(false);
            } else if (currentScrollY > lastScrollY) {
                setIsHidden(true);
            } else if (currentScrollX !== lastX) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
            lastX = currentScrollX;
        };

        const handleTap = (event: TouchEvent) => {
            if (event.touches.length === 1) {
                const { clientX, clientY } = event.touches[0];
                const screenWidth = window.innerWidth;
                const screenHeight = window.innerHeight;

                const centerXStart = screenWidth * 0.35;
                const centerXEnd = screenWidth * 0.65;
                const centerYStart = screenHeight * 0.3;
                const centerYEnd = screenHeight * 0.7;

                if (clientX > centerXStart && clientX < centerXEnd && clientY > centerYStart && clientY < centerYEnd) {
                    setIsHidden(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchstart', handleTap);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', handleTap);
        };

    }, [isMobile, lastScrollY]);

    return (
        <div className={`
            sticky
            -top-[1px]
            flex
            items-center
            justify-center
            w-full
            h-14
            sm:h-16
            px-4
            sm:px-8
            border-b
            border-[var(--border-light)]
            bg-[var(--background-light)]

            transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}
            `}>
            <div className="flex items-center gap-4 mr-6">
                <Link href="/"><BackButton/></Link>
                <h2>Коли сонце сідає за схил</h2>
            </div>
            <div className="items-center gap-3 hidden md:flex">
                <Avatar/>
                <SubscribeButton/>
            </div>

            <ActionButton className='ml-auto' icon={List} onClick={() => {
                alert('List button clicked!')
            }}/>
            <ActionButton className='hidden md:block' icon={AddBook} onClick={() => {
                alert('AddBook button clicked!')
            }}/>
            <ActionButton className='hidden md:block' icon={Size} onClick={() => {
                alert('Size button clicked!')
            }}/>
            <ActionButton icon={Share} onClick={() => {
                alert('Share button clicked!')
            }}/>
            <Tippy
                visible={settingMenu}

                placement='bottom-end'
                animation={ isMobile ? 'slide-from-bottom' : false}
                allowHTML={true}
                interactive={true}
                arrow={false}
                maxWidth={isMobile? '100%' : 380}
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