import React from 'react'
import { map as _map } from 'lodash'
import { Row, Col, Button, Modal, ModalBody, Input } from 'reactstrap'

const externalCloseBtn = props => (
  <button
    className="close"
    style={{
      position: 'absolute',
      top: '19px',
      right: '19px',
      color: 'white',
      fontSize: '3em',
    }}
    onClick={props.closeModalHandler}
  >
    &times;
  </button>
)

const UserPictureModalView = props => (
  <div>
    <Modal
      isOpen={props.show_modal}
      fade={false}
      className={props.className}
      centered={true}
      size="lg"
      external={externalCloseBtn(props)}
    >
      <ModalBody
        style={{
          display: 'flex',
          flex: 1,
          minHeight: '37em',
        }}
      >
        <Row>
          <Col
            md="7"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div>
              {props.post.type === 'video' ? (
                <video
                  controls
                  style={{
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <source src={props.post.Image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={props.post.Image}
                  style={{ display: 'flex', width: '100%' }}
                  alt=""
                />
              )}
            </div>
          </Col>

          <Col
            md="5"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            className="modal-info-section"
          >
            <Row
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Col xs="12" md="8">
                <h6 className="user-name">Shraddha Kapoor</h6>
              </Col>

              <Col xs="1" md="1">
                <span
                  className="verified-badge"
                  style={{
                    display: 'flex',
                  }}
                />
              </Col>
              <Col xs="10" md="3">
                <span className="muted-text">Following</span>
              </Col>
            </Row>
            <section
              style={{ flex: 7, overflowY: 'auto' }}
              className="modal-info-section"
            >
              {_map(props.post.comments, (c, index) => (
                <div key={index}>{c}</div>
              ))}
            </section>
            <section style={{ flex: 1 }} className="modal-info-section">
              <div>
                <span
                  className="empty-heart-badge"
                  style={{
                    width: '24px',
                    height: '24px',
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                  onClick={() => props.addLikeHandler(props.post.id)}
                />{' '}
                <strong>{props.post.likes} likes</strong>
                <Button
                  color="danger"
                  size="sm"
                  style={{ marginLeft: '3em' }}
                  outline
                  onClick={() => props.deletePostHandler(props.post.id)}
                >
                  Delete?
                </Button>{' '}
              </div>
              <div>
                Posted on:{' '}
                <span className="muted-text">
                  {new Date(props.post.timestamp).toLocaleString()}
                </span>
              </div>
            </section>
            <section style={{ flex: 1 }}>
              <Input
                placeholder="Add Comment ..."
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    props.addCommentHandler(props.post.id, event.target.value)
                    // clear the text input?
                    event.target.value = ''
                  }
                }}
              />
            </section>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  </div>
)

export default UserPictureModalView
