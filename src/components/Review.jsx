import PropTypes from 'prop-types'
import Card from './Card'
import { MdFormatQuote } from "react-icons/md";

function Review({text}) {
  return (
    <div className='review p-3'>
      <Card>
          <MdFormatQuote size={40} color={'#9D6740'} />
          <p className='text-secondary'>{text}</p>
      </Card>
    </div>
  )
}

Review.defaultProps = {
  text: 'review'
}

Review.propTypes = {
  text: PropTypes.string.isRequired
}

export default Review