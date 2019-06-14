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

export default connect(mapStateToProps)(HomeView)
