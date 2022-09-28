import { FaStar } from 'react-icons/fa'

const Star = ({ rating }) => {
  return [1, 2, 3, 4, 5].map((value) => (
      <FaStar
          key={value}
          color={value <= rating ? 'orange': 'lightgray'}
      />
  ))
}
export default Star
