// component to display user details
import React, { Fragment } from 'react'
import { toast } from 'react-toastify'

import { Container, Row, Button } from 'reactstrap'

const User = props => (
  <Container>
    <Row>
      <header
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
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
          <section
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <h5 className="user-name">
              <a
                href="https://www.instagram.com/shraddhakapoor/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Shraddha Kapoor
              </a>
            </h5>
            <span className="verified-badge" />
            <Button
              outline
              size="sm"
              style={{
                marginLeft: '29px',
                color: '#fff',
                backgroundColor: '#6c757d',
                borderColor: '#6c757d',
              }}
            >
              Following
            </Button>
          </section>
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
          <section
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <span className="muted-text">Followed by</span>
            <MeditationsLink />
            <span className="muted-text">+1 more</span>
          </section>
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
      text: 'hello',
      meditation: `“If you suffer distress because of some external cause, it is not the thing itself that troubles you but your judgement about it, and it is within your power to cancel that judgement at any moment. But if what distresses you is something that lies in your own disposition, who is to prevent you from correcting your way of thinking? And likewise, if you are distressed because you are failing to accomplish some particular action which strikes you as sound, why do you not persist in the action rather than yield to the distress? ‘But something too strong for me is blocking my way.’ Then you should not be distressed, because the responsibility for your failure to act does not rest with you.—‘But my life is not worth living if this act is left undone.’—Then depart from life with generous feelings in your heart, dying in the same spirit as one who achieves his purpose, and reconciled, too, to what has stood in his way.”
      `,
    },
    {
      id: 1,
      text: 'universe',
      meditation: `“Remember that your ruling centre becomes invincible when it withdraws into itself and rests content with itself, doing nothing other than what it wishes, even where its refusal to act is not reasonably based; and how much more contented it will be, then, when it founds its decision on reason and careful reflection. By virtue of this, an intelligence free from passions is a mighty citadel;* for man has no stronghold more secure to which he can retreat to remain unassailable from that time onward. One who has failed to see this is merely ignorant, but one who has seen it and fails to take refuge there is beyond the aid of fortune.”`,
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
              padding: '0 3px',
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