import React from 'react'
// import {
//   map as _map
// } from 'lodash'
import { 
  Modal, ModalBody, 
  Alert,
  Container, Row, Col
} from 'reactstrap'

const externalCloseBtn = (props) => (<button className="close" style={{ position: 'absolute', top: '19px', right: '19px', color: 'white', fontSize: '3em' }} onClick={props.closeModalHandler}>&times;</button>)

const UploadModalView = (props) => (
  <div>
    <Modal isOpen={props.show_modal} fade={false} className={props.className} centered={true} size="lg" external={externalCloseBtn(props)}>
      <ModalBody style={{
        display: 'flex',
        flex: 1,
        minHeight: '37em'
      }}>
        <section style={{
          display: 'flex',
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Container>
            <Row>
              <Col xs="4" style={{cursor: 'pointer'}} onClick={() => props.addNewPost(1)}>
                <img src="https://www.gstatic.com/webp/gallery/1.jpg" style={{display: 'flex', width: '100%'}} alt="" />
              </Col>
              <Col xs="4" style={{cursor: 'pointer'}} onClick={() => props.addNewPost(2)}>
                <img src="https://www.gstatic.com/webp/gallery/2.jpg" style={{display: 'flex', width: '100%'}} alt="" />
              </Col>
              <Col xs="4" style={{cursor: 'pointer'}} onClick={() => props.addNewPost(3)}>
                <img src="https://www.gstatic.com/webp/gallery/3.jpg" style={{display: 'flex', width: '100%'}} alt="" />
              </Col>
              <Col xs="4" style={{cursor: 'pointer'}} onClick={() => props.addNewPost(4)}>
                <img src="https://www.gstatic.com/webp/gallery/4.jpg" style={{display: 'flex', width: '100%'}} alt="" />
              </Col>
              <Col xs="4" style={{cursor: 'pointer'}} onClick={() => props.addNewPost(5)}>
                <img src="https://www.gstatic.com/webp/gallery/5.jpg" style={{display: 'flex', width: '100%'}} alt="" />
              </Col>
            </Row>
            <Row>
            <Alert color="light">
              Please select one of the above images to upload a new picture.
            </Alert>
            </Row>
          </Container>
        </section>
      </ModalBody>
    </Modal>
  </div>
)



export default UploadModalView