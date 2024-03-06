import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import {Link} from "react-router-dom"

const ClaimRewardBalance = ({data, trx_id, timestamp, headBlockNumber}) => {

  const {
    author,
    payout,
    permlink,
    author_rewards,
    total_payout_value,
    curator_payout_value,
    beneficiary_payout_value
  } = data

  return <div className="op op-collapse op-under op-mini" id={trx_id}>
    <span className="tag tag-virt">virtual</span>

    <div className="action">
      <span className="account">{author}</span>
      comment_reward
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th><samp>author</samp></th>
            <td><span style={{color: '#080'}}>{author}</span></td>
          </tr>
          <tr>
            <th><samp>permlink</samp></th>
            <td><span style={{color: '#080'}}>{permlink}</span></td>
          </tr>
          <tr>
            <th><samp>payout</samp></th>
            <td><i>{payout}</i></td>
          </tr>
          <tr>
            <th><samp>author_rewards</samp></th>
            <td><i>{author_rewards}</i></td>
          </tr>
          <tr>
            <th><samp>total_payout_value</samp></th>
            <td><i>{total_payout_value}</i></td>
          </tr>
          <tr>
            <th><samp>curator_payout_value</samp></th>
            <td><i>{curator_payout_value}</i></td>
          </tr>
          <tr>
            <th><samp>beneficiary_payout_value</samp></th>
            <td><i>{beneficiary_payout_value}</i></td>
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
