import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";

interface FormContainerProps {
    children: ReactNode
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <Container>
      <Row className='mt-5 justify-content-md-center'>
        <Col xs={12} md={6} className="p-5 card">
            {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;