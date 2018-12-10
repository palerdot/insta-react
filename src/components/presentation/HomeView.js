import React from 'react'

import User from './UserView'
import Posts from '../container/Posts'

const Home = (props) => (
  <div>
    <User />
    <Posts 
      posts={props.posts}
    />
  </div>
)

export default Home