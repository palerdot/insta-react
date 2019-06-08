// define the reducers that changes the state tree based on the dispatched actions
import _ from 'lodash'
// import initial data
import InitialPostsData from '../data/posts'

// reducer for the Insta app
// START: APP STATE
/*
{
  posts: [
    id,
    img,
    comments: []
  ]
}
*/
// END: APP STATE

// define our initial state
const initialState = {
  posts: InitialPostsData,
  starredMeditations: [23, 25, 27],
}

// small helper function to get unique board id by scanning through the entries
function _getUniqueId(collection) {
  let MAX_ID = _.chain(collection)
    .map(c => c.id)
    .max()
    .value()
  MAX_ID = MAX_ID || 0

  return MAX_ID + 1
}

function add_like_to_post(state, action) {
  // extract the details from the action
  const { post_id } = action
  // go through all the posts; and add comment for the given post_id
  let updated_posts = _.map(state, p => {
    if (p.id === post_id) {
      return Object.assign({}, p, {
        likes: p.likes + 1,
      })
    } else {
      return p
    }
  })

  return updated_posts
}

function add_comment_to_post(state, action) {
  // extract the details from the action
  const { post_id, comment } = action
  // go through all the posts; and add comment for the given post_id
  let updated_posts = _.map(state, p => {
    if (p.id === post_id) {
      let updated_comments = p.comments
      updated_comments.push(comment)
      let updated_post = {
        ...p,
        comments: updated_comments,
      }

      return updated_post
    } else {
      return p
    }
  })

  return updated_posts
}

// adds new post with given image id
function add_post(state, action) {
  const { image_id } = action
  return [
    ...state,
    {
      id: _getUniqueId(state),
      Image: `https://www.gstatic.com/webp/gallery/${image_id}.jpg`,
      likes: 0,
      timestamp: new Date(),
      comments: [],
    },
  ]
}

// delete post
function delete_post(state, action) {
  const { post_id } = action
  return _.reject(state, p => p.id === post_id)
}

// posts reducer
function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    // add like to post
    case 'ADD_LIKE_TO_POST':
      return add_like_to_post(state, action)
    // add a comment to post
    case 'ADD_COMMENT_TO_POST':
      return add_comment_to_post(state, action)
    case 'ADD_POST':
      return add_post(state, action)
    case 'DELETE_POST':
      return delete_post(state, action)
    // by default return the state
    default:
      return state
  }
}

// starred meditations reducer
function starredMeditationsReducer(
  state = initialState.starredMeditations,
  action
) {
  switch (action.type) {
    case 'STAR_MEDITATION':
      return _.uniq([...state, action.id])
    case 'UNSTAR_MEDITATION':
      return _.filter(state, m => m !== action.id)
    default:
      return state
  }
}

// OVERALL REDUCER (to be exported)
// we are explicitly not using combineReducers to have better visibility of what is going on
export default function appReducer(state = initialState, action) {
  return {
    posts: postReducer(state.posts, action),
    starredMeditations: starredMeditationsReducer(
      state.starredMeditations,
      action
    ),
  }
}
