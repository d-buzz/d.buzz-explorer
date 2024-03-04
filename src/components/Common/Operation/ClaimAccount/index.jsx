import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"

const ClaimAccount = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {fee, creator, extensions} = data

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-mini" id={trx_id}>
    <a className="tag tag-hash keychainify-checked" href={`/tx/${trx_id}`}>{trimTrxId}</a>

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
