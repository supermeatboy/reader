"use client";

import {useUserSetting} from "@/context/UserSettingsProvider";
import {Header} from "@/shared/ui/Header/Header";
import {fonts} from "@/shared/constants/fonts";

export const RootContainer = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { userSettings } = useUserSetting();

    return (
        <>
            <Header/>
            <main
                style={{
                    maxWidth: `${userSettings?.fieldsWidth}%`,
                    fontSize: `${userSettings?.fontSize}px`,
                    fontFamily: `${fonts[userSettings.fontIndex ?? 0]}`
                }}
                className={`root-container flex flex-wrap items-start w-full pt-8 px-[18px] mx-auto`}>
                {children}
            </main>
        </>
    )
}