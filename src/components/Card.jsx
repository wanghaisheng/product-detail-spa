import PropTypes from 'prop-types'

function Card({children, variant}) {
  return (
    <div className={`card ${variant === 'feature' ? 'feature-card' : 'review-card'} h-100`}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  variant: 'review-card'
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string
}

export default Card