"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const fa_1 = require("react-icons/fa");
const react_router_bootstrap_1 = require("react-router-bootstrap");
const Header = () => {
    return (<header>
      <react_bootstrap_1.Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
         <react_bootstrap_1.Container>
           <react_router_bootstrap_1.LinkContainer to='/'>
              <react_bootstrap_1.Navbar.Brand>MERN Auth</react_bootstrap_1.Navbar.Brand>
           </react_router_bootstrap_1.LinkContainer>
           <react_bootstrap_1.Navbar.Toggle aria-controls='basic-navbar-nav'/>
           <react_bootstrap_1.Navbar.Collapse id='basic-navbar-nav'>
             <react_bootstrap_1.Nav className='ms-auto'>
               <react_bootstrap_1.Nav className='ms-auto'>
                 <react_router_bootstrap_1.LinkContainer to='/login'>
                    <react_bootstrap_1.Nav.Link>
                      <fa_1.FaSignInAlt /> Sign In 
                    </react_bootstrap_1.Nav.Link>
                 </react_router_bootstrap_1.LinkContainer>
                 <react_router_bootstrap_1.LinkContainer to='/register'>
                    <react_bootstrap_1.Nav.Link>
                      <fa_1.FaSignOutAlt /> Sign Up
                    </react_bootstrap_1.Nav.Link>
                 </react_router_bootstrap_1.LinkContainer>
               </react_bootstrap_1.Nav>
             </react_bootstrap_1.Nav>
           </react_bootstrap_1.Navbar.Collapse>
         </react_bootstrap_1.Container>
      </react_bootstrap_1.Navbar>
    </header>);
};
exports.default = Header;
