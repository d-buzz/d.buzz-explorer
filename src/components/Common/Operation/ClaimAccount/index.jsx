import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"

const ClaimAccount = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    // fee,
    creator,
    // extensions,
  } = data

  return <div className="op op-mini" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <span className="account">{creator}</span> claimed a discounted account
    </div>

    <div className="foot">
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

ClaimAccount.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default ClaimAccount
