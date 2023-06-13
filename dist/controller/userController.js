"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfile = exports.getUserProfile = exports.logOutUser = exports.registerUser = exports.authUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'Auth User' });
}));
exports.authUser = authUser;
// @desc Register a new user
// route POST /api/users/
// @access Public
const registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'Register User' });
}));
exports.registerUser = registerUser;
// @desc Logout user
// route POST /api/users/logout
// @access Public
const logOutUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'Logout User' });
}));
exports.logOutUser = logOutUser;
// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'Register User' });
}));
exports.getUserProfile = getUserProfile;
// @desc Update user profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'Update user profile' });
}));
exports.updateUserProfile = updateUserProfile;
