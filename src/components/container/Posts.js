// home component that handles all the boards
// redux related
import { connect } from 'react-redux'

import {
  addLike,
  addComment,
  addPost,
  deletePost
} from '../../actions/'

// import utils
import {
  alert
} from '../../utils/'

// import our presentation component to connect 
import PostsView from '../presentation/PostsView'

// define our mapStateToProps, mapDispatchToProps
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCommentHandler: (post_id, comment) => {
      dispatch( addComment(post_id, comment) )
      alert({
        text: 'New comment added'
      })
    },
    addLikeHandler: (post_id) => {
      dispatch( addLike(post_id) )
      alert({
        text: 'You liked this post !!!'
      })
    },
    addPostHandler: (image_id) => {
      dispatch( addPost(image_id) )
      alert({
        text: "Post added successfully ..."
      })
    },
    deletePostHandler: (post_id) => {
      dispatch( deletePost(post_id) )
      alert({
        text: 'Post deleted successfully ...'
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsView)

