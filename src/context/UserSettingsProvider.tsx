"use client";

import {createContext, useContext, useEffect, useState} from "react";
import {IUserSettings, IUserSettingsContextProps} from "@/@types/userSettings";
import {settingsDefault} from "@/shared/constants/settings";
import {LS} from "@/shared/utils/storage";


const UserSetting = createContext<IUserSettingsContextProps | null>(null);

export const UserSettingProvider = ({children}: { children: React.ReactNode }) => {
    const [userSettings, setUserSettings] = useState<IUserSettings | null>(null);

    useEffect(() => {
        const storedSettings = LS.get("userSettings") as IUserSettings | null;
        setUserSettings(storedSettings ?? settingsDefault);
    }, []);

    const setData = (data: IUserSettings): void => {
        setUserSettings((prev) => {
            const newSettings = { ...prev, ...data };
            LS.set("userSettings", newSettings);
            return newSettings;
        });
    };

    if (!userSettings) {
        return null;
    }

    return (
        <UserSetting.Provider value={{ userSettings, setData }}>
            {children}
        </UserSetting.Provider>
    );
};

export const useUserSetting = ():IUserSettingsContextProps  => {
    const context = useContext(UserSetting);

    if (!context) {
        throw new Error("useUserSetting must be used within a UserSettingProvider");
    }

    return context;
};
