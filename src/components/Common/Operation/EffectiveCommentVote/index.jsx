import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"

const EffectiveCommentVote = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    voter,
    author,
    weight,
    rshares,
    permlink,
    pending_payout,
    total_vote_weight
  } = data

  return <div className="op op-lead" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <span className="account">{voter}</span>
      {` effective_comment_vote `}
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
            <td><i>{parseInt(weight).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th><samp>rshares</samp></th>
            <td><i>{parseInt(rshares).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th><samp>total_vote_weight</samp></th>
            <td><i>{parseInt(total_vote_weight).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th><samp>pending_payout</samp></th>
            <td><i>{pending_payout}</i></td>
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

EffectiveCommentVote.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default EffectiveCommentVote
