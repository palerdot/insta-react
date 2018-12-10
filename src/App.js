import React from 'react'

import './App.css'

import { 
  BrowserRouter as Router, 
  Route, 
  // Link,
  // withRouter, 
} from "react-router-dom"

import {
  Container, Row, Col
} from 'reactstrap'

import Home from './components/container/Home'

const App = () => (
  <Router>
    <Container fluid className="App-Container">
      <Row className="header">
        <Col s="8">
          {/* <h5>Insta</h5> */}
        </Col>
        <Col s="4">{' '}</Col>
      </Row>

      <Row className="App">
        {/*<Route exact path="/" component={withRouter(Board)}/>*/}
        <Route exact path="/" component={Home}/>
      </Row>

    </Container>
  </Router>
)

export default App
