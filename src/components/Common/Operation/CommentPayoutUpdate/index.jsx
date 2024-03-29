import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"
import {Link} from "react-router-dom"

const ClaimRewardBalance = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {author, permlink} = data

  return <div className="op op-mini" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <span className="account">{author}</span>
      {` comment_payout_update `}
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
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
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
