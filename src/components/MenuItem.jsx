import PropTypes from 'prop-types'

function MenuItem({name, price, description, top}) {
  return (
    <div className='my-4'>
      <div id='menuItem' className="d-flex justify-content-between text-uppercase border-bottom border-light mb-0">
        <h5>{name} {top && <span className="badge badge-primary text-uppercase text-white">top pick</span>}</h5>
        <h5><span>p</span>{price}</h5>
      </div>
      <p className='menu-description mt-1'>{description}</p>
    </div>
  )
}

MenuItem.defaultProps = {
  name: 'name',
  price: 100,
  description: '',
  top: false
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  top: PropTypes.bool
}

export default MenuItem