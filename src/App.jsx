import { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {
  const [crypto, setCrypto] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [link, setLink] = useState('');
  const [pak, setPak] = useState('');
  const [us, setUs] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = () => {
    const url = 'https://api.coingecko.com/api/v3/coins/' + crypto;
    axios.get(url).then(res => {
      const resData = res.data;
      setImage(resData.image.large);
      setName(resData.name);
      setSymbol(resData.symbol);
      setLink(resData.links.homepage[0]);
      setPak('Pakistani Price: Rs ' + resData.market_data.current_price.pkr);
      setUs('United State: $' + resData.market_data.current_price.usd);
      setDesc(JSON.stringify(resData.description.en));
    })
  }
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
            <Button onClick={handleSubmit} variant="outline-secondary" as="input" type="submit" value="Submit" />
          </Col>
        </Row>
        <Row className='m-3 d-flex justify-content-center'>
          <Col md={4} className="p-4">
            <img src={image} alt="" width='150' />
            <br />
            <h2>{name}</h2>
            <h3>{symbol}</h3>
            <h4><a href={link}>{link}</a></h4>
            <br />
            <h3>{pak}</h3>
            <h3>{us}</h3>
          </Col>
          <Col md={8}>
            <p>{desc}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
