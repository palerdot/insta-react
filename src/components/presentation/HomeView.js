import React from 'react'

import User from './UserView'
import Posts from '../container/Posts'
import Footer from './FooterView'

const Home = props => (
  <div>
    <User />
    <Posts posts={props.posts} />
    <Footer />
  </div>
)

export default Home
