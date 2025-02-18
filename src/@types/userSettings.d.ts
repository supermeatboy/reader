type Font = "Roboto" | "Geist" | "Geist_Mono";

export interface IUserSettings {
    fontIndex?: number;
    fontSize?: number;
    fieldsWidth?: number;
}
export interface IUserSettingsContextProps {
    userSettings: IUserSettings;
    setData: (data: IUserSettings) => void;
}