import PropTypes from "prop-types"
import {timeAgo} from "../../../../../utils/helper.js"

const Vote = ({transaction}) => {

  const {
    op: [
      opType,
      {voter, author, weight, permlink}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-collapse op-mini" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked text-xs float-right ml-2 font-mono text-gray-500"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <span className="account">{voter}</span>
      {` upvote `}
      <a href={`/@${author}/${permlink}`} className="keychainify-checked">
        {`@${author}/${permlink}`}
      </a>
      {` (${weight / 100}%)`}
    </div>

    <div className="foot">
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

Vote.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default Vote
