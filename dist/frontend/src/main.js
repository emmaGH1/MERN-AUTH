"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_router_dom_1 = require("react-router-dom");
const store_ts_1 = __importDefault(require("./store.ts"));
const react_redux_1 = require("react-redux");
const App_tsx_1 = __importDefault(require("./App.tsx"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
const HomeScreen_tsx_1 = __importDefault(require("./screens/HomeScreen.tsx"));
const LoginScreen_tsx_1 = __importDefault(require("./screens/LoginScreen.tsx"));
const RegisterScreen_tsx_1 = __importDefault(require("./screens/RegisterScreen.tsx"));
const router = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(<react_router_dom_1.Route path='/' element={<App_tsx_1.default />}>
      <react_router_dom_1.Route index={true} path='/' element={<HomeScreen_tsx_1.default />}/>
      <react_router_dom_1.Route path='/login' element={<LoginScreen_tsx_1.default />}/>
      <react_router_dom_1.Route path='/register' element={<RegisterScreen_tsx_1.default />}/>
    </react_router_dom_1.Route>));
client_1.default.createRoot(document.getElementById('root')).render(<react_redux_1.Provider store={store_ts_1.default}>
      <react_1.default.StrictMode>
        <react_router_dom_1.RouterProvider router={router}/>
      </react_1.default.StrictMode>
  </react_redux_1.Provider>);
