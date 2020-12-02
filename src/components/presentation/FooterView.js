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
        ' wait’ and ‘hope’! ====> “there is neither happiness nor misfortune in this world, there is merely the comparison between one state and another, nothing more. Only someone who has suffered the deepest misfortune is capable of experiencing the heights of felicity. Maximilien, you must needs have wished to die, to know how good it is to live. So, do live and be happy, children dear to my heart, and never forget that, until the day when God deigns to unveil the future to mankind, all human wisdom is contained in these two words: ‘wait’ and ‘hope’!',
      source: 'The Count of Monte Cristo',
      id: 0,
    },
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

    {
      id: 31,
      meditation: `“I yawned and grew sick to my stomach at the thought of sitting in an office, deprived of my liberty; ceasing to be master of my own time,’ wrote Adolf in Mein Kampf.”`,
      source: `*** Ian Kershaw/Hitler  ***(Read on May 2020)`,
    },

    {
      id: 32,
      meditation: `
      """
      But what a humiliation for me when someone standing next to me heard 
      a flute in the distance and I heard nothing, or someone heard a shepherd singing and
      again I heard nothing. Such incidents drove me almost to despair,

      It was only my art that held me back. 
      Oh, it seemed impossible to me to leave this world before 
      I had produced all that I felt capable of producing, 
      and so I prolonged this wretched existence—truly wretched for so susceptible 
      a body that a sudden change can plunge me from the best into the worst of states

      Patience, they say, is what I must now choose for my guide, and I have done so—

      Forced to become a philosopher already in my 28th year, (31 actually)
      oh it is not easy, and for the artist much more difficult than for anyone else

      it is so long since real joy echoed in my heart—Oh when—Oh when, 
      Oh divine One—shall I feel it again in the temple of nature and of mankind—Never?
      —No—Oh that would be too hard
      """

      From this moment on, without hope and, he feared, without joy, 
      he needed to be heroic just to live and to work. 
      The Heiligenstadt Testament shows that he understood this with excruciating clarity. 
      True heroism is usually called for in the face of suffering and death. 
      It is rarely joyful. But in the letter Beethoven vowed to live with suffering and for his art, 
      and he kept vows like that. His crisis had little observable effect on his output. 
      In his work he had been soaring, and he was about to soar higher.
      `,
      source: `Beethoven (Heiliegenstadt letter) - Jan Swafford: Beethoven - Anguish and Triumph`,
    },

    {
      id: 33,
      meditation: `
      He spends hours lost in his raptus, improvising at the keyboard, 
      ideas flowing from his fingers into sound, 
      sketchbook on a table beside him to fix the sounds before they are gone. 
      As he writes out the sketches he drums the beat with his hands and feet, 
      cursing the notes for their recalcitrance. 
      For Beethoven composing is a process physical as well as mental; 
      his whole body is involved in it. 
      Every day in all weathers he walks in hills and woods and country lanes, 
      growling and howling and waving his arms conducting the music in his head, 
      stopping to pencil ideas in the pocket sketchbooks he carries with him.
      `,
      source: `Beethoven - Anguish and Triumph`,
    },

    {
      id: 34,
      meditation: `
      Beethoven’s art and life had heated up to what would seem an unbearable degree. 
      But he was capable of bearing extraordinary burdens, including the ones he heaped on himself. 
      One of them was the height of the bar the new symphony set in his work. 
      Another was the maddening and often debilitating state of his health: 
      recurring fevers, painful and frightening abscesses, headaches that assaulted him for months, 
      on top of his long-standing episodes of vomiting and diarrhea and the ongoing deterioration of his hearing
      `,
      source: `Beethoven - Anguish and Triumph`,
    },

    {
      id: 35,
      meditation: `
      திரும்ப வந்த போது பம்பாய் விமான நிலையத்த்தில் தரையெங்கும் சிதறியிருந்த அம்மான் அகதிகளின் கூட்டமும், 
      இண்டியன் கவுண்டரில் வெயிட் லிஸ்ட் பயணிகளின்  காட்டுக்கத்தலும், 
      செண்டுவார் ஓடலின் கொசு மருந்து வாசனையும் என்னுடைய ஜெட்லாகைப் போக்கி எச்சமிருந்த 
      அமெரிக்க தீட்டை என் உடம்பிலிருந்து நீக்கி விட்டது.

      பல்லாயிரம் டாலர்கள் கொடுத்து எல்லாம் கொடுத்து இருக்கச் சொன்னாலும் அமெரிக்கா போய் வசிக்க மாட்டேன். 
      இந்தியாவில் சந்தோஷத்தின் அர்த்தங்கள் விளக்கங்கள் வேறு.

      க்யுக்களில் காத்திருத்தலில் சந்தோஷம். நினைத்தது நடக்காதது சந்தோஷம். எல்லாமே லேட்டாகும் சந்தோஷம்.
      `,
      source: `சுஜாதா - கணையாழி கடைசி பக்கம், நவம்பர் 1990`,
    },

    {
      id: 36,
      meditation: `
      Trémont observed a good deal and wrote one of the most vivid firsthand descriptions 
      of the Beethoven household style (worse than usual at that point because he had no servant):
 
      Picture to yourself the dirtiest, 
      most disorderly place imaginable—blotches of moisture covered the ceiling; an oldish grand piano, 
      on which the dust disputed the place with various pieces of engraved and manuscript music; 
      under the piano (I do not exaggerate) an unemptied chamber pot; beside it, 
      a small walnut table accustomed to the frequent overturning of the secretary placed upon it; 
      a quantity of pens encrusted with ink . . . then more music. 
      The chairs, mostly cane-seated, were covered with plates 
      bearing the remains of last night’s supper, and with wearing apparel, etc
      `,
      source: `Beethoven - Anguish and Triumph`,
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
                  onClick={(e) => setMeditations([...meditations.reverse()])}
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
              {meditations.map((m) => (
                <FooterMeditation key={m.id} {...m} />
              ))}
            </TabPane>
            <TabPane tabId="starred">
              {starred.map((s) => {
                const meditation = meditations.find((m) => m.id === s)
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
          whiteSpace: 'pre-line',
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
