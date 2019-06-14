import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import StarStatus from '../container/StarStatus'

export default function Footer({ starred }) {
  const footer_meditations = [
    {
      meditation:
        '“They kill you, cut you up, pursue you with curses.’ And how does that prevent your mind from remaining pure, balanced, temperate, and just? It is as if someone were standing by a sweet clear-flowing spring* and hurling curses at it: but for all that, it never stops brimming over with water good to drink, and if he throws mud into it, or dung, the spring will swiftly disperse it and wash it away, and suffer no defilement. How, then, are you to have an ever-flowing spring in you, and not a pool of standing water? If you hold firm to independence at every hour, along with kindness, simplicity, and reverence.”\n      ',
      source: 'Book 8. Verse 51',
      id: 1,
    },
    {
      meditation:
        '“Accordingly, anyone who is not himself neutral towards pleasure and pain, or life and death, or reputation and disrepute, to which universal nature adopts a neutral attitude, commits a manifest impiety.”\n      ',
      source: 'Book 9. Verse 1',
      id: 2,
    },
    {
      meditation:
        '“Blot out imagination; put a curb on impulse; quench desire; ensure that your ruling centre remains under its own control”\n      ',
      source: 'Book 9. Verse 7',
      id: 3,
    },
    {
      meditation:
        '“Today I escaped the power of circumstance, or rather I cast all circumstance out; for it was not outside me, but within me, in my judgements.”\n      ',
      source: 'Book 9, Verse 13',
      id: 4,
    },
    {
      meditation:
        '“Things stand outside the gates [of our soul], keeping themselves to themselves, neither knowing nor stating anything about themselves. So what is it that states a judgement about them? Our ruling centre.”\n      ',
      source: 'Book 9, Verse 15',
      id: 5,
    },
    {
      meditation:
        '“For the stone thrown into the air, it is no bad thing to fall down again, just as it was no good thing to rise up”\n      ',
      source: 'Book 9, Verse 17',
      id: 6,
    },
    {
      meditation:
        '“Penetrate within them, into their ruling centres, and you will see what judges you are afraid of, and what manner of judges they are with regard to themselves”\n      ',
      source: 'Book 9, Verse 18',
      id: 7,
    },
    {
      meditation:
        '“You have the power to rid yourself of many superfluous troubles which exist only in your own imagination; and you will then create ample room for yourself to embrace the whole universe in your thoughts and encompass everlasting time, and to reflect on the rapid change in every part of every particular thing, and the briefness of the span of time between birth and dissolution, and how vast is the expanse of time that stretches before our birth and how equally boundless the time that will follow after our dissolution.”\n      ',
      source: 'Book 9, Verse 32',
      id: 8,
    },
    {
      meditation:
        '“ Loss is nothing other than change; and change is the delight of universal nature, according to whose will all things come to pass well.”\n      ',
      source: 'Book 9, Verse 35',
      id: 9,
    },
    {
      meditation:
        '“Enough of all this miserable way of life, this whining and apishness. Why are you troubled? What is new in all this? What is there to disconcert you? Is it the causal aspect of things? Consider that. The material? Then consider that. Apart from these, there is nothing.”\n      ',
      source: 'Book 9, Verse 37',
      id: 10,
    },
    {
      meditation:
        '“In any case, who told you that the gods do not assist us even in things that lie within our power? Begin at least to pray so, and you will see. That man prays, ‘May I come to sleep with that woman,’ but you, ‘May I not desire to sleep with her.’ Another prays, ‘May I be rid of this man,’ but you, ‘May I no longer wish to be rid of him.’ Or another, ‘May I not lose my little child,’ but you, ‘May I not be afraid of losing him.’ In a word, turn your prayers round in such a way, and see what comes of it”\n      ',
      source: 'Book 9, Verse 40',
      id: 11,
    },
    {
      meditation:
        '“Accordingly, a healthy mind should be ready for all that comes about; but the mind which cries ‘Let my children be safe and sound!’ or ‘Let everyone praise me whatever I do!’ is like an eye that seeks only for green, or teeth that seek only for what is tender.”\n      ',
      source: 'Book 10, Verse 35',
      id: 12,
    },
    {
      meditation:
        '“The sphere* of the soul remains faithful to its form when it neither reaches out towards anything outside itself nor contracts inwards, and when it is neither dispersed abroad nor sinks back into itself, but shines forth with a steady light by which it sees the truth of all things and the truth within itself.”\n      ',
      source: 'Book 11, Verse 12',
      id: 13,
    },
    {
      meditation:
        '“Always live the finest of lives; and the power to do so lies in one’s soul, if one is indifferent to things that are indifferent.”\n      \n      “Bear in mind, too, that we shall have to attend to these matters for only a short while, and then our life shall be over. And after all, what trouble can they bring? If they are in accordance with nature, rejoice in them, and let them be no hardship to you; and if they are contrary to nature, seek for what your own nature requires and strive towards that, inglorious though it may be; for everyone can be pardoned for seeking his own good.” \n      ',
      source: 'Book 11, Verse 16',
      id: 14,
    },
    {
      meditation:
        '“that it is not people’s actions that trouble us (for those are a matter for their own ruling centres) but the opinions that we form about those actions. So eliminate your judgement that this or that is of harm to you, make up your mind to discard that opinion, and your anger will be at an end.”\n      \n      “that the anger and distress that we feel at such behaviour bring us more suffering than the very things that give rise to that anger and distress.”\n      ',
      source: 'Book 11, Verse 18',
      id: 15,
    },
    {
      meditation:
        '“And if you will, accept this tenth gift from Apollo, the leader of the Muses, namely, that it is sheer madness to expect the bad to do no wrong; for that is to wish for the impossible. But to allow that they should do wrong to others, yet demand that they should do no wrong to yourself, is senseless and tyrannical.”\n      ',
      source: 'Book 11, Verse 18',
      id: 16,
    },
    {
      meditation:
        '“There are four principal lapses of the ruling centre which you must guard against at all times, and, whenever they are detected, wholly extirpate, reminding yourself with regard to each: this idea is not necessary; this other leads to a loosening of social ties; or again, what you are about to say does not come from your heart (and to say something that does not come from your heart you must consider to be altogether out of place). And the fourth lapse which should cause you to reproach yourself is this, that the more divine part of you* has been overpowered and has succumbed to what is inferior and perishable in you, your body, and its gross pleasures.”\n      ',
      source: 'Book 11, Verse 19',
      id: 17,
    },
    {
      meditation:
        '\n      “All those things which you hope to attain by a circuitous route, you can secure at this moment, if you do not deny them to yourself; I mean, if you leave all the past behind you and entrust the future to providence, and, concerning yourself with the present alone, guide that to holiness and justice; to holiness, so that you may love what is allotted to you, for nature brought it to you, and you to it; and to justice, so that you may speak the truth freely and without equivocation, and conform in your actions to what is lawful and equitable. And do not allow yourself to be hindered by another’s evil or opinion or words, and still less, the sensations of the flesh that has congealed around you (for the part that suffers the ill must see to that). If then, when the time for your departure draws near, you have put all else behind you and you honour your ruling centre alone and what is divine within you, and if what you hold in fear is not that some day you will cease to live, but rather that you may never begin to live according to “nature, you will be a man who is worthy of the universe that brought you to birth, and you will no longer be a stranger in your native land, wondering at what happens “day after day as if it were beyond foreseeing, and hanging on to one thing after another.”\n      ',
      source: 'Book 12, Verse 1',
      id: 18,
    },
    {
      meditation:
        '\n      “I have often marvelled at how everyone loves himself above all others, yet places less value on his own opinion of himself than that of everyone else. At all events, if a god or some wise teacher presented himself and told him not to entertain any thought or idea in his mind without stating it aloud as soon as he had conceived it, he would not abide it for even a single day. So much greater is our respect for what our neighbours think of us than what we think of ourselves!”\n      ',
      source: 'Book 12, Verse 4',
      id: 19,
    },
    {
      meditation:
        '“Look at the underlying causes of things, stripped of their covering; and consider what your actions are aiming at, and what pain, pleasure, death, and fame truly are, and who is really to blame if a person is disturbed within, and how no one can be obstructed by another, and that everything turns on opinion.”\n     ',
      source: 'Book 12, Verse 8',
      id: 20,
    },
    {
      meditation:
        '“How ridiculous and ignorant of the world is one who is surprised at anything that comes to pass in life.”\n     ',
      source: 'Book 12, Verse 13',
      id: 21,
    },
    {
      meditation:
        '“Always consider exactly what it is that is creating an impression in your mind, and unfold its nature by analysing it into its cause, its matter, its relation, and its natural duration within which it must reach its cessation.”\n    ',
      source: 'Book 12, Verse 18',
      id: 22,
    },
    {
      meditation:
        '“Realize at last that you have something more powerful and more divine within you than the things that give rise to your passions and set you moving like a puppet. What is your mind taken up with at the present moment? Is it not fear? Suspicion? Appetite? Or something else of that kind?”\n\n    ',
      source: 'Book 12, Verse 19',
      id: 23,
    },
    {
      meditation:
        '“All turns on judgement, and that rests with you. So when you will, pluck out the judgement, and then, as though you had passed the headland, the sea is calm, and all is still, and there is not a wave in the bay.”\n\n    ',
      source: 'Book 12, Verse 22',
      id: 24,
    },
    {
      meditation:
        '“and bear in mind that whatever happens to you from outside is due either to chance or to providence, and that one should neither blame chance nor bring accusations against providence.”\n\n     ',
      source: 'Book 12, Verse 24',
      id: 25,
    },
    {
      meditation:
        '“Cast out the judgement, and then you are saved. So what is preventing you from casting it out?”\n\n    ',
      source: 'Book 12, Verse 25',
      id: 26,
    },
    {
      meditation:
        '“How small a fraction of infinite and unfathomable time has been assigned to each one of us. For all too swiftly it is swallowed up in eternity. And how small a part of universal substance, how small a part of universal soul. And how small is this clod of earth that you are creeping over when set against the earth as a whole. Bearing all of this in mind, imagine nothing to be of any great moment apart from this, that you should act as your own nature directs, and endure whatever universal nature brings.”\n\n     ',
      source: 'Book 12, Verse 32',
      id: 27,
    },
    {
      meditation:
        '“How is your ruling centre employing itself ? For everything rests on that. All else, be it within your control or outside it, is merely dead matter and smoke.”\n\n    ',
      source: 'Book 12, Verse 33',
      id: 28,
    },
    {
      meditation:
        '“One to whom that alone is good which comes in good season, to whom it is all the same whether he performs a greater or a lesser number of actions according to right reason, to whom it makes no difference whether he looks upon the world for a longer or a shorter period of time—to such a person not even death can hold any terror.”\n\n    ',
      source: 'Book 12, Verse 35',
      id: 29,
    },
    {
      meditation:
        '“My friend, you have been a citizen of this great city [of the universe]. What difference* if you live in it for five years or a hundred? For what is laid down in its laws is equitable for all. Where is the hardship, then, if it is no tyrant or unjust judge who sends you out of the city, but nature who brought you into it? It is just as if the director of a show,* after first engaging an actor, were dismissing him from the stage. ‘But I haven’t played all five acts, only three!’ Very well; but in life three can make up a full play. For the one who determines when it is complete is he who once arranged for your composition and now arranges for your dissolution, while you for your part are responsible for neither. So make your departure with a good grace, as he who is releasing you shows a good grace.”\n\n     ',
      source: '*** FINAL *** Book 12, Verse 36',
      id: 30,
    },
  ]

  const [isModalOpen, setModalState] = useState(false)
  const toggleModal = () => setModalState(!isModalOpen)
  const [meditations, setMeditations] = useState(footer_meditations)
  const [currentTab, setCurrentTab] = useState('all')

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
        <ModalHeader toggle={toggleModal}>
          <Nav
            tabs
            style={{
              borderBottom: 'none',
            }}
          >
            <NavItem
              onClick={() => setCurrentTab('all')}
              style={{
                borderBottom:
                  currentTab === 'all' ? 'thin solid #17a2b8' : 'none',
              }}
            >
              <NavLink>
                Meditations
                <Button
                  color="info"
                  outline
                  size={'sm'}
                  style={{
                    display: 'inline-block',
                    margin: '0 0.3em',
                  }}
                  onClick={e => setMeditations([...meditations.reverse()])}
                >
                  Ô
                </Button>
              </NavLink>
            </NavItem>
            <NavItem
              onClick={() => setCurrentTab('starred')}
              style={{
                borderBottom:
                  currentTab === 'starred' ? 'thin solid #17a2b8' : 'none',
              }}
            >
              <NavLink>Starred</NavLink>
            </NavItem>
          </Nav>
        </ModalHeader>
        <ModalBody>
          <TabContent activeTab={currentTab}>
            <TabPane tabId="all">
              {meditations.map(m => (
                <FooterMeditation key={m.id} {...m} />
              ))}
            </TabPane>
            <TabPane tabId="starred">
              {starred.map(s => {
                const meditation = meditations.find(m => m.id === s)
                return <FooterMeditation key={meditation.id} {...meditation} />
              })}
            </TabPane>
          </TabContent>
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
function FooterMeditation({ meditation, source, id }) {
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
        <StarStatus id={id} />
        <Badge
          color="info"
          outline
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {source}
        </Badge>
      </div>
    </div>
  )
}
