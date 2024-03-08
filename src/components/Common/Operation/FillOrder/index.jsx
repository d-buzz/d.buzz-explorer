import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"
import {Link} from "react-router-dom"

const FillOrder = ({data, trx_id, timestamp, headBlockNumber}) => {

  const {
    open_pays,
    open_owner,
    current_pays,
    // open_orderid,
    current_owner,
    // current_orderid,
  } = data

  return <div className="op op-mini" id={trx_id}>
    <TrimTxId trx_id={trx_id}/>

    <div className="action">
      <span className="account">{current_owner}</span>
      {` paid ${current_pays} for ${open_pays} from `}
      <Link className="account keychainify-checked" to={`/@${open_owner}`}>{`${open_owner}`}</Link>
    </div>

    <div className="foot">
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
    </div>
  </div>
}

FillOrder.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default FillOrder
