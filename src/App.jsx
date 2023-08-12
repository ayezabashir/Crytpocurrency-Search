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
  const [aed, setAed] = useState('');
  const [inr, setInr] = useState('');
  const [aud, setAud] = useState('');
  const [votesup, setVotesup] = useState('');
  const [votesdown, setVotesdown] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = () => {
    const url = 'https://api.coingecko.com/api/v3/coins/' + crypto;
    axios.get(url).then(res => {
      const resData = res.data;
      setImage(resData.image.large);
      setName(resData.name);
      setSymbol('Symbol "' + resData.symbol + '"');
      setLink(resData.links.homepage[0]);
      setPak('Pakistan: Rs.' + resData.market_data.current_price.pkr);
      setUs('United State: $' + resData.market_data.current_price.usd);
      setAud('Australia: $' + resData.market_data.current_price.usd);
      setAed('UAE : AED ' + resData.market_data.current_price.aed);
      setInr('India :  ' + resData.market_data.current_price.inr);
      setVotesup('Sentiment Votes-up: ' + resData.sentiment_votes_up_percentage + '%');
      setVotesdown('Sentiment Votes-down: ' + resData.sentiment_votes_down_percentage + '%');
      setDesc(JSON.stringify(resData.description.en));
    })
  }
  function createMarkup() {
    return { __html: desc }
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
          <Col md={4} >
            <div className='mt-3 d-flex flex-column align-items-center'>
              <img src={image} alt="" width='150' />
              <h3>{name}</h3>
              <h4>{symbol}</h4>
              <h5><a href={link}>{link}</a></h5>
            </div>
            <div className='mt-4'>
              <h6>{votesup}</h6>
              <h6>{votesdown}</h6>
            </div>
            <div className='mt-4'>
              <h6>{aed}</h6>
              <h6>{aud}</h6>
              <h6>{pak}</h6>
              <h6>{inr}</h6>
              <h6>{us}</h6>
            </div>
          </Col>
          <Col md={8}>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
