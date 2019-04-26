// component to display user details
import React, { Fragment } from 'react'
import { toast } from 'react-toastify'

import { Container, Row, Col, Button } from 'reactstrap'

const User = props => (
  <Container>
    <Row>
      <header
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          marginBottom: '1.7em',
        }}
      >
        <section
          style={{
            flex: 7,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="profile-img-holder">
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/images/0.jpg`}
              style={{ width: '150px', height: '150px' }}
            />
          </div>
        </section>
        <section
          style={{
            flex: 11,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <section
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            
          </section> */}
          <Row
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Col xs="12" md="8">
              <h5 className="user-name">
                <a
                  href="https://www.instagram.com/shraddhakapoor/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize: '1.71rem',
                  }}
                >
                  Shraddha Kapoor
                </a>
              </h5>
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
              <Button
                outline
                size="sm"
                style={{
                  color: '#fff',
                  backgroundColor: '#6c757d',
                  borderColor: '#6c757d',
                }}
              >
                Following
              </Button>
            </Col>
          </Row>
          <section
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <span className="user-meta-info">
              <strong>1207</strong> Posts
            </span>
            <span className="user-meta-info">
              <strong>25.7mn</strong> followers
            </span>
            <span className="user-meta-info">
              <strong>101</strong> following
            </span>
          </section>
          <Row
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Col xs="12" md="4">
              <span className="muted-text">Followed by</span>
            </Col>
            <Col
              xs="12"
              md="4"
              style={{
                paddingLeft: '19px',
              }}
            >
              <MeditationsLink />
            </Col>
            <Col xs="12" md="4">
              <span className="muted-text">+1 more</span>
            </Col>
          </Row>
        </section>
      </header>
    </Row>
  </Container>
)

export default User

function MeditationsLink() {
  const meditations = [
    {
      id: 0,
      text: 'porumai',
      meditation: `“If you suffer distress because of some external cause, it is not the thing itself that troubles you but your judgement about it, and it is within your power to cancel that judgement at any moment. But if what distresses you is something that lies in your own disposition, who is to prevent you from correcting your way of thinking? And likewise, if you are distressed because you are failing to accomplish some particular action which strikes you as sound, why do you not persist in the action rather than yield to the distress? ‘But something too strong for me is blocking my way.’ Then you should not be distressed, because the responsibility for your failure to act does not rest with you.—‘But my life is not worth living if this act is left undone.’—Then depart from life with generous feelings in your heart, dying in the same spirit as one who achieves his purpose, and reconciled, too, to what has stood in his way.”
      
      Book 8: verse 47
      `,
    },
    {
      id: 1,
      text: 'patience',
      meditation: `“Remember that your ruling centre becomes invincible when it withdraws into itself and rests content with itself, doing nothing other than what it wishes, even where its refusal to act is not reasonably based; and how much more contented it will be, then, when it founds its decision on reason and careful reflection. By virtue of this, an intelligence free from passions is a mighty citadel;* for man has no stronghold more secure to which he can retreat to remain unassailable from that time onward. One who has failed to see this is merely ignorant, but one who has seen it and fails to take refuge there is beyond the aid of fortune.”
      
      Book 8: verse 48
      `,
    },
    {
      id: 2,
      text: 'amaidhi',
      meditation: `“Say nothing more to yourself than what the first impressions* report. You have been told that some person is speaking ill of you? That is what you have been told: as to the further point, that he has harmed you, that you have not been told. I see that my little child is ill? I see just that; I do not see that his life is at risk. And so, in this way, always keep to first impressions and add nothing of your own from within, and then nothing bad will befall you. Or rather, add that you are well acquainted with everything that comes to pass in the world.”
      
      Book 8: verse 49
      `,
    },
  ]

  const toastOptions = {
    className: 'meditation-main',
    bodyClassName: 'meditation-body',
    progressClassName: 'meditation-progress',
    autoClose: 29000,
  }

  // construct the meditation link for each of them
  return (
    <Fragment>
      {meditations.map((m, index) => (
        <Fragment key={m.id}>
          {index > 0 ? ', ' : null}
          <span
            style={{
              color: '#DEDEDE',
              cursor: 'pointer',
              fontSize: '13px',
            }}
            onClick={() => toast(m.meditation, toastOptions)}
          >
            {m.text}{' '}
          </span>
        </Fragment>
      ))}
    </Fragment>
  )
}
