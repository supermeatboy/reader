import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"], // Використовуємо svgr для обробки SVG
        });
        return config;
    },
};

export default nextConfig;
