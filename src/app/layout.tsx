import {Geist, Geist_Mono, Roboto} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: "400"
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});



import {ThemeProvider} from "@/context/ThemeProvider";
import {UserSettingProvider} from "@/context/UserSettingsProvider";
import {RootContainer} from "@/app/book/_root_container";



export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
            <ThemeProvider>
                <UserSettingProvider>
                    <RootContainer>
                        {children}
                    </RootContainer>
                </UserSettingProvider>
            </ThemeProvider>
            </body>
        </html>
    );
}