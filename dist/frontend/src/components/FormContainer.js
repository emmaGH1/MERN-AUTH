"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
const FormContainer = ({ children }) => {
    return (<react_bootstrap_1.Container>
      <react_bootstrap_1.Row className='mt-5 justify-content-md-center'>
        <react_bootstrap_1.Col xs={12} md={6} className="p-5 card">
            {children}
        </react_bootstrap_1.Col>
      </react_bootstrap_1.Row>
    </react_bootstrap_1.Container>);
};
exports.default = FormContainer;
