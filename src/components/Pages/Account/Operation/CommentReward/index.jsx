import PropTypes from "prop-types"
import {timeAgo, vestToHive} from "../../../../../utils/helper.js"

const ClaimRewardBalance = ({transaction}) => {

  const {
    op: [
      opType,
      {author, payout, permlink, author_rewards, total_payout_value, curator_payout_value, beneficiary_payout_value}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

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
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

ClaimRewardBalance.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default ClaimRewardBalance
