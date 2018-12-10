// define our actions
export const addLike = (post_id) => {
  return {
    type: 'ADD_LIKE_TO_POST',
    post_id
  }
}

export const addComment = (post_id, comment) => {
  return {
    type: 'ADD_COMMENT_TO_POST',
    post_id,
    comment
  }
}

// add a new post with image id
export const addPost = (image_id) => {
  return {
    type: 'ADD_POST',
    image_id
  }
}

export const deletePost = (post_id) => {
  return {
    type: 'DELETE_POST',
    post_id
  }
}