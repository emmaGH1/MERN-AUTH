"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
};
exports.default = config;
