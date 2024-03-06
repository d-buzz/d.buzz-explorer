import PropTypes from "prop-types"
import {Link} from "react-router-dom"

const TrimTxId = ({trx_id}) => {
  const trimTrxId = trx_id.substring(0, 8)

  return <Link className="tag tag-hash keychainify-checked text-xs float-right ml-2 font-mono text-gray-500" to={`/tx/${trx_id}`}>{trimTrxId}</Link>
}

TrimTxId.propTypes = {
  trx_id: PropTypes.string.isRequired,
}

export default TrimTxId
