// component to display user details
import React from 'react'

import { 
  Container, Row,
  Button
} from 'reactstrap'

const User = (props) => (
  <Container>
    <Row>
      <header style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
      }}>
        <section style={{
          flex: 7,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="profile-img-holder">
	   <img alt="" src="/images/0.jpg" style={{width: "150px", height: "150px"}}/>
          </div>
        </section>
        <section style={{
          flex: 11,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <section style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <h5 className="user-name">
              <a href="https://www.instagram.com/shraddhakapoor/?hl=en" target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                Shraddha Kapoor
              </a>
            </h5>
            <span className="verified-badge"></span>
            <Button outline size="sm" style={{marginLeft: '29px'}}>Following</Button>
          </section>
          <section style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <span className="user-meta-info">
              <strong>1207</strong>{' '} Posts
            </span>
            <span className="user-meta-info">
              <strong>25.7mn</strong>{' '} followers
            </span>
            <span className="user-meta-info">
              <strong>101</strong>{' '} following
            </span>
          </section>
          <section style={{flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <span className="muted-text">Followed by</span>
            <span>hello, universe </span>
            <span className="muted-text">+1 more</span>
          </section>
        </section>
      </header>
    </Row>
  </Container>
)

export default User
