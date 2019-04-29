// component for displaying single post
import React from 'react'

import { Card, CardText, CardImg, CardImgOverlay, Col } from 'reactstrap'

class PostView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_info: false,
    }
  }

  render() {
    const { props } = this
    return (
      <Col
        xs="6"
        md="4"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1em',
        }}
      >
        <Card
          inverse
          onMouseEnter={() => this.setState({ show_info: true })}
          onMouseLeave={() => this.setState({ show_info: false })}
          onClick={() => this.props.showUserModal(this.props)}
        >
          {props.type === 'video' ? (
            <video
              controls={false}
              style={{
                width: '100%',
              }}
            >
              <source src={props.Image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <CardImg width="100%" src={props.Image} alt="Card image cap" />
          )}

          <CardImgOverlay
            style={{
              visibility: this.state.show_info ? 'visible' : 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(0, 0, 0, 0.3)',
              color: 'white',
            }}
          >
            <CardText style={{ display: 'flex' }}>
              <span style={{ display: 'flex' }}>
                <span className="heart-badge" /> {props.likes}
              </span>
            </CardText>
          </CardImgOverlay>
        </Card>
      </Col>
    )
  }
}

export default PostView
