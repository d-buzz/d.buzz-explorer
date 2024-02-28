import PropTypes from "prop-types"
import {timeAgo, vestToHive} from "../../../../../utils/helper.js"

const ClaimRewardBalance = ({transaction}) => {

  const {
    op: [
      opType,
      {author, permlink}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-mini" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

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
