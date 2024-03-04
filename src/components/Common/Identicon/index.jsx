import {useEffect} from 'react'
import * as jdenticon from 'jdenticon'
import PropTypes from "prop-types"

const Identicon = ({ hash, size = 48 }) => {
  useEffect(() => {
    document.getElementById('identicon-container').innerHTML = jdenticon.toSvg(hash, size)
  }, [hash])

  return <div className='canvas' id="identicon-container"></div>
}

Identicon.propTypes = {
  hash: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}
export default Identicon
