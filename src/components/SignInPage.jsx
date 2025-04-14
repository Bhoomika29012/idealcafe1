// src/components/SignInPage.jsx
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function SignInPage() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h3 className="text-center mb-4">Sign In to Ideal Café</h3>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Sign In
                </Button>
              </Form>

              <div className="text-center mt-3">
                <small>Don't have an account? <a href="/signup">Sign Up</a></small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
