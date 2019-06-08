// home component that handles all the boards
// redux related
import { connect } from 'react-redux'

// import our presentation component to connect
import HomeView from '../presentation/HomeView'

// define our mapStateToProps, mapDispatchToProps
const mapStateToProps = state => {
  return {
    posts: state.posts,
    starredMeditations: state.starredMeditations,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    starMeditation: ({ id }) =>
      dispatch({
        type: 'STAR_MEDITATION',
        id,
      }),
    unstarMeditation: ({ id }) =>
      dispatch({
        type: 'UNSTAR_MEDITATION',
        id,
      }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
