import PropTypes from "prop-types"
import moment from "moment"
import {timeAgo} from "../../../../../utils/helper.js"

const EffectiveCommentVote = ({transaction}) => {

  const {
    op: [
      opType,
      {voter, author, weight, rshares, permlink, pending_payout, total_vote_weight}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-lead" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <span className="account">{voter}</span> {opType}
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th><samp>voter</samp></th>
            <td>{voter}</td>
          </tr>
          <tr>
            <th><samp>author</samp></th>
            <td><span className="text-green-700">{author}</span></td>
          </tr>
          <tr>
            <th><samp>permlink</samp></th>
            <td><span className="text-green-700">{permlink}</span></td>
          </tr>
          <tr>
            <th><samp>weight</samp></th>
            <td><i>{weight.toLocaleString()}</i></td>
          </tr>
          <tr>
            <th><samp>rshares</samp></th>
            <td><i>{rshares.toLocaleString()}</i></td>
          </tr>
          <tr>
            <th><samp>total_vote_weight</samp></th>
            <td><i>{total_vote_weight.toLocaleString()}</i></td>
          </tr>
          <tr>
            <th><samp>pending_payout</samp></th>
            <td><i>{pending_payout}</i></td>
          </tr>
        </tbody>
      </table>
    </div>

    <span className="foot">
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </span>
  </div>
}

EffectiveCommentVote.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default EffectiveCommentVote
