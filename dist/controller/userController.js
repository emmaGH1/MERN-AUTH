"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const authUser = ({ req, res }) => {
    res.status(200).json({ message: 'Auth User' });
};
exports.authUser = authUser;
