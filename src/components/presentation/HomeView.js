import React from 'react'

import User from './UserView'
import Posts from '../container/Posts'
import Footer from './FooterView'

const Home = props => (
  <div>
    <User />
    <Posts posts={props.posts} />
    <Footer
      starred={props.starredMeditations}
      starMeditation={props.starMeditation}
      unstarMeditation={props.unstarMeditation}
    />
  </div>
)

export default Home
