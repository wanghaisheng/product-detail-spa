import PropTypes from 'prop-types'

function Button({children, hash, variant}) {
  return (
   <a href={hash} className={`btn-block text-capitalize custom-btn btn btn-${variant === 'primary' && 'primary'}`}>{children}</a>
  )
}

Button.defaultProps = {
  hash: '',
  variant: 'caramel'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  hash: PropTypes.string,
  variant: PropTypes.string
}

export default Button