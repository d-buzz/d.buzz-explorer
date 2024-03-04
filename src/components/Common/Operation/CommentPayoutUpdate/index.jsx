import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"

const ClaimRewardBalance = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {author, permlink} = data

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-mini" id={trx_id}>
    <a className="tag tag-hash keychainify-checked" href={`/tx/${trx_id}`}>{trimTrxId}</a>

    <div className="action">
      <span className="account">{author}</span>
      comment_payout_update
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th>
              <samp>author</samp>
            </th>
            <td>
              <span style={{color: '#080'}}>{author}</span>
            </td>
          </tr>
          <tr>
            <th>
              <samp>permlink</samp>
            </th>
            <td>
              <span style={{color: '#080'}}>{permlink}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="foot">
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

ClaimRewardBalance.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default ClaimRewardBalance
