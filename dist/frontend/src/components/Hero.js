"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const react_router_bootstrap_1 = require("react-router-bootstrap");
const Hero = () => {
    return (<div className='py-5'>
      <react_bootstrap_1.Container className='d-flex justify-content-center'>
        <react_bootstrap_1.Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='mb-4 text-center'>MERN Authentication</h1>
          <p className='mb-4 text-center'>
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </p>
          <div className='d-flex'>
            <react_router_bootstrap_1.LinkContainer to='/login'>
              <react_bootstrap_1.Button variant='primary' href='/login' className='me-3'>
                Sign In
              </react_bootstrap_1.Button>              
            </react_router_bootstrap_1.LinkContainer>
            <react_router_bootstrap_1.LinkContainer to='/register'>
              <react_bootstrap_1.Button variant='secondary' href='/register'>
                Sign Up
              </react_bootstrap_1.Button>
            </react_router_bootstrap_1.LinkContainer>
          </div> 
        </react_bootstrap_1.Card>
      </react_bootstrap_1.Container>
    </div>);
};
exports.default = Hero;
