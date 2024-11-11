import PropTypes from 'prop-types'

function Category({bgImg, text}) {
  return (
    <>
      <div className='category border rounded' style={{
        backgroundImage: `url(${bgImg})`
      }}>
        <div className='dark-overlay row d-flex justify-content-center align-items-center rounded'>
          <h3 className='text-uppercase'>{text}</h3>
        </div>
      </div>
    </>
  )
}

Category.defaultProps = {
  bgImg: '',
  text: 'text'
}

Category.propTypes = {
  bgImg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Category