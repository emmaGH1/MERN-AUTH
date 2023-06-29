"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCredentials = exports.setCredentials = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const storedUserInfo = localStorage.getItem('userInfo');
const initialState = {
    userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null
};
const authslice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        clearCredentials: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
});
_a = authslice.actions, exports.setCredentials = _a.setCredentials, exports.clearCredentials = _a.clearCredentials;
exports.default = authslice.reducer;
