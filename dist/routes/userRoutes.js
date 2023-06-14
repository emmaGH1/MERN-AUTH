"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController_1 = require("../controller/userController");
router.post('/', userController_1.registerUser);
router.post('/auth', userController_1.authUser);
router.post('/logout', userController_1.logOutUser);
router.route('/profile').get(userController_1.getUserProfile).put(userController_1.updateUserProfile);
exports.default = router;
