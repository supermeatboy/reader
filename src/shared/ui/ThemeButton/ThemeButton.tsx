"use client";

import { useTheme } from "@/context/ThemeProvider";
import {JSX} from "react";

export default function ThemeToggle(): JSX.Element {
    // @ts-ignore
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}
