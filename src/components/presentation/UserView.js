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
            <img alt="" src="https://instagram.fblr1-3.fna.fbcdn.net/vp/673ff496d789e25c3da6aff0bd0e8884/5CA184B0/t51.2885-19/s150x150/37077287_572658719796014_6584344568831934464_n.jpg" />
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