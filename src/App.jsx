import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function App() {
  const [crypto, setCrypto] = useState()

  return (
    <>
      <Container >
        <Row>
          <Col>
            <h1 className='title p-2 d-flex justify-content-center'>Cryptocurrency Search</h1>
          </Col>
        </Row>
        <Row className='m-3'>
          <Col sm={10}>
            <Form className="ml-5">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control required type="text" value={crypto} onChange={(e) => setCrypto(e.target.value)} placeholder="Search cryptocurrency here..." />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={2}>
            <Button variant="outline-secondary" as="input" type="submit" value="Submit" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
