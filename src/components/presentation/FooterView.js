import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from 'reactstrap'

export default function Footer(props) {
  const [isModalOpen, setModalState] = useState(false)
  const toggleModal = () => setModalState(!isModalOpen)

  const footer_meditations = [
    {
      meditation: `“They kill you, cut you up, pursue you with curses.’ And how does that prevent your mind from remaining pure, balanced, temperate, and just? It is as if someone were standing by a sweet clear-flowing spring* and hurling curses at it: but for all that, it never stops brimming over with water good to drink, and if he throws mud into it, or dung, the spring will swiftly disperse it and wash it away, and suffer no defilement. How, then, are you to have an ever-flowing spring in you, and not a pool of standing water? If you hold firm to independence at every hour, along with kindness, simplicity, and reverence.”
      `,
      source: 'Book 8. Verse 51',
    },
    {
      meditation: `“Accordingly, anyone who is not himself neutral towards pleasure and pain, or life and death, or reputation and disrepute, to which universal nature adopts a neutral attitude, commits a manifest impiety.”
      `,
      source: `Book 9. Verse 1`,
    },
    {
      meditation: `“Blot out imagination; put a curb on impulse; quench desire; ensure that your ruling centre remains under its own control”
      `,
      source: `Book 9. Verse 7`,
    },
    {
      meditation: `“Today I escaped the power of circumstance, or rather I cast all circumstance out; for it was not outside me, but within me, in my judgements.”
      `,
      source: `Book 9, Verse 13`,
    },
    {
      meditation: `“Things stand outside the gates [of our soul], keeping themselves to themselves, neither knowing nor stating anything about themselves. So what is it that states a judgement about them? Our ruling centre.”
      `,
      source: `Book 9, Verse 15`,
    },
    {
      meditation: `“For the stone thrown into the air, it is no bad thing to fall down again, just as it was no good thing to rise up”
      `,
      source: `Book 9, Verse 17`,
    },
    {
      meditation: `“Penetrate within them, into their ruling centres, and you will see what judges you are afraid of, and what manner of judges they are with regard to themselves”
      `,
      source: `Book 9, Verse 18`,
    },
    {
      meditation: `“You have the power to rid yourself of many superfluous troubles which exist only in your own imagination; and you will then create ample room for yourself to embrace the whole universe in your thoughts and encompass everlasting time, and to reflect on the rapid change in every part of every particular thing, and the briefness of the span of time between birth and dissolution, and how vast is the expanse of time that stretches before our birth and how equally boundless the time that will follow after our dissolution.”
      `,
      source: `Book 9, Verse 32`,
    },
    {
      meditation: `“ Loss is nothing other than change; and change is the delight of universal nature, according to whose will all things come to pass well.”
      `,
      source: `Book 9, Verse 35`,
    },
    {
      meditation: `“Enough of all this miserable way of life, this whining and apishness. Why are you troubled? What is new in all this? What is there to disconcert you? Is it the causal aspect of things? Consider that. The material? Then consider that. Apart from these, there is nothing.”
      `,
      source: `Book 9, Verse 37`,
    },
  ]

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '17px 0',
      }}
    >
      <Button color="info" outline size="sm" onClick={toggleModal}>
        Meditations
      </Button>
      <Modal
        isOpen={isModalOpen}
        toggle={toggleModal}
        className={'meditation-modal'}
      >
        <ModalHeader toggle={toggleModal}>Meditations</ModalHeader>
        <ModalBody>
          {footer_meditations.map((m, index) => (
            <FooterMeditation key={index} {...m} />
          ))}
        </ModalBody>
        <ModalFooter>
          {' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

// footer meditation
function FooterMeditation({ meditation, source }) {
  return (
    <div
      style={{
        borderBottom: 'thin solid #555',
        paddingBottom: '19px',
      }}
    >
      <div
        style={{
          padding: '7px 11px',
          background: '#555',
          fontSize: '1rem',
          lineHeight: '1.9rem',
        }}
      >
        {meditation}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '13px 0',
        }}
      >
        <Badge color="info" outline>
          {source}
        </Badge>
      </div>
    </div>
  )
}
