import React from 'react'
import {
  map as _map
} from 'lodash'
import { 
  Button, Modal, ModalBody,
  Input
} from 'reactstrap'

const externalCloseBtn = (props) => (<button className="close" style={{ position: 'absolute', top: '19px', right: '19px', color: 'white', fontSize: '3em' }} onClick={props.closeModalHandler}>&times;</button>)

const UserPictureModalView = (props) => (
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
              <div>
                <img src={props.post.Image} style={{display: 'flex', width: '100%'}} alt="" />
              </div>
            </section>
            <section style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 2,
              marginLeft: '3em'
            }}>
              <section style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center'}} className="modal-info-section">
                <h6 className="user-name">Shraddha Kapoor</h6>
                <span className="verified-badge"></span>
                <span className="muted-text" style={{marginLeft: '29px'}}>Following</span>
              </section>
              <section style={{flex: 7, overflowY: 'auto'}} className="modal-info-section">
                {_map(props.post.comments, (c, index) => <div key={index}>{c}</div>)}
              </section>
              <section style={{flex: 1}} className="modal-info-section">
                <div>
                  <span className="empty-heart-badge" style={{width: '24px', height: '24px', display: 'inline-block', cursor: 'pointer'}}
                    onClick={() => props.addLikeHandler(props.post.id)}
                  ></span>{" "}
                  <strong>
                    {props.post.likes} likes
                  </strong>
                  <Button color="danger" size="sm" style={{marginLeft: '3em'}} outline
                    onClick={() => props.deletePostHandler(props.post.id)}
                  >Delete?</Button>{' '}
                </div>
                <div>
                  Posted on: <span className="muted-text">{new Date(props.post.timestamp).toLocaleString()}</span>
                </div>
              </section>
              <section style={{flex: 1}}>
                <Input placeholder="Add Comment ..." 
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      props.addCommentHandler(props.post.id, event.target.value)
                      // clear the text input?
                      event.target.value = ''
                    }
                  }}
                />
              </section>
              
            </section>
            
          </ModalBody>
        </Modal>
      </div>
    
)

export default UserPictureModalView