"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const Header_1 = __importDefault(require("./components/Header"));
const App = () => {
    return (<>
      <Header_1.default />
      <react_bootstrap_1.Container className='my-2'>
        <react_router_dom_1.Outlet /> 
      </react_bootstrap_1.Container>
    </>);
};
exports.default = App;
