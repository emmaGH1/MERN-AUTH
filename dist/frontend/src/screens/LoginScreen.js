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
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const FormContainer_1 = __importDefault(require("../components/FormContainer"));
const LoginScreen = () => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const submitHandler = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        console.log('Submit');
    });
    return (<FormContainer_1.default>
        <h1>Sign In</h1>

        <react_bootstrap_1.Form onSubmit={submitHandler}>
            <react_bootstrap_1.Form.Group className='my-2' controlId='email'>
            <react_bootstrap_1.Form.Label>Email Address</react_bootstrap_1.Form.Label>
            <react_bootstrap_1.Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></react_bootstrap_1.Form.Control>
            </react_bootstrap_1.Form.Group>

            <react_bootstrap_1.Form.Group className='my-2' controlId='password'>
            <react_bootstrap_1.Form.Label>Password</react_bootstrap_1.Form.Label>
            <react_bootstrap_1.Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></react_bootstrap_1.Form.Control>
            </react_bootstrap_1.Form.Group>

            <react_bootstrap_1.Button type='submit' variant='primary' className='mt-3 bg-blue-500'>
            Sign In
            </react_bootstrap_1.Button>
        </react_bootstrap_1.Form>

        <react_bootstrap_1.Row className='py-3'>
            <react_bootstrap_1.Col>
            New Customer? <react_router_dom_1.Link to={`/register`}>Register</react_router_dom_1.Link>
            </react_bootstrap_1.Col>
        </react_bootstrap_1.Row>
        </FormContainer_1.default>);
};
exports.default = LoginScreen;
