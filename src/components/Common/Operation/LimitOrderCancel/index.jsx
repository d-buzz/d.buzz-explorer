import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"
import {Link} from "react-router-dom"

const LimitCancelOrder = ({data, trx_id, timestamp, headBlockNumber}) => {
  const { owner, orderid } = data

  return <div className="op op-collapse op-mini" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <Link className="account keychainify-checked" to={`/@${owner}`}>{`${owner}`}</Link>
      {` cancel order #${orderid}`}
    </div>

    <div className="foot">
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
    </div>
  </div>
}

LimitCancelOrder.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default LimitCancelOrder
