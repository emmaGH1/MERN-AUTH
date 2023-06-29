"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const authSlices_1 = __importDefault(require("./slices/authSlices"));
const store = (0, toolkit_1.configureStore)({
    reducer: {
        auth: authSlices_1.default
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
});
exports.default = store;
