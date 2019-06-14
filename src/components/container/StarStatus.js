import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    starred: state.starredMeditations,
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

function StarStatus({ id, starred, starMeditation, unstarMeditation }) {
  const is_starred = starred.includes(id)
  return (
    <span
      style={{
        margin: '0 7px',
      }}
      className={is_starred ? 'star-badge' : 'nostar-badge'}
      onClick={() =>
        is_starred ? unstarMeditation({ id }) : starMeditation({ id })
      }
    />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarStatus)
