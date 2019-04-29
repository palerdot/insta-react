// INSTA POSTS
import React from 'react'
import { map as _map, omit as _omit, find as _find } from 'lodash'

import { Container, Row, Button } from 'reactstrap'

// load the initial set of posts statically from our data
// import PostsData from '../../data/posts'
import Post from './PostView'
import PictureModal from './UserPictureModalView'
import UploadModal from './UploadModalView'

class PostsView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_modal: false,
      show_upload_modal: false,
      current_post: false,
    }
  }

  showModal = post =>
    this.setState({
      show_modal: true,
      current_post: _omit(post, 'showUserModal'),
    })

  closeModal = () =>
    this.setState({
      show_modal: false,
    })

  showUploadModal = () =>
    this.setState({
      show_upload_modal: true,
    })

  closeUploadModal = () =>
    this.setState({
      show_upload_modal: false,
    })

  static getDerivedStateFromProps(props, state) {
    return Object.assign({}, state, {
      current_post:
        _find(props.posts, p => p.id === state.current_post.id) || {},
    })
  }

  addCommentHandler = (post_id, comment) =>
    this.props.addCommentHandler(post_id, comment)

  addLikeHandler = post_id => this.props.addLikeHandler(post_id)

  deletePostHandler = post_id => {
    // delete the post
    this.props.deletePostHandler(post_id)
    // close the modal
    this.closeModal()
  }

  // adds a new post
  addNewPostHandler = image_id => {
    this.props.addPostHandler(image_id)
    // close the upload modal
    this.closeUploadModal()
  }

  render() {
    return (
      <Container className="Posts-view">
        {/* <Button
          color="success"
          outline
          size="sm"
          onClick={() => this.showUploadModal()}
        >
          Add Post
        </Button> */}
        <Button
          color="primary"
          outline
          size="sm"
          onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}
        >
          Refresh
        </Button>
        <Row>
          {_map(this.props.posts, (post, index) => (
            <Post
              key={index}
              {...post}
              showUserModal={post => {
                this.showModal(post)
              }}
            />
          ))}
        </Row>
        <PictureModal
          show_modal={this.state.show_modal}
          closeModalHandler={this.closeModal}
          post={this.state.current_post}
          addCommentHandler={this.addCommentHandler}
          addLikeHandler={this.addLikeHandler}
          deletePostHandler={this.deletePostHandler}
        />
        <UploadModal
          show_modal={this.state.show_upload_modal}
          closeModalHandler={this.closeUploadModal}
          addNewPost={this.addNewPostHandler}
        />
      </Container>
    )
  }
}

export default PostsView
