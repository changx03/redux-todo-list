import PropTypes from 'prop-types'
import React from 'react'

function Link({ active, children, onClick }) {
  return (
    <button onClick={onClick} disabled={active} style={{ marginLeft: 4 }}>
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
