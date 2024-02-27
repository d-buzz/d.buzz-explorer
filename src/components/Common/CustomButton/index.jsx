import PropTypes from 'prop-types'
import { Button } from 'flowbite-react'

const CustomButton = ({onClick, children}) => {
  return (
    <Button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

CustomButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
}

export default CustomButton
