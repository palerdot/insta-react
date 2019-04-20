import React from 'react'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import { Container, Row, Col } from 'reactstrap'

import Home from './components/container/Home'

// configure toast
toast.configure()

const App = () => (
  <Container fluid className="App-Container">
    <Row className="header">
      <Col s="8" />
      <Col s="4"> </Col>
    </Row>

    <Row className="App">
      <Home />
    </Row>
  </Container>
)

export default App
