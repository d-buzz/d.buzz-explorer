import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"

const Vote = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {voter, author, weight, permlink} = data

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-mini" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked text-xs float-right ml-2 font-mono text-gray-500"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <span className="account">{voter}</span>
      {` upvote `}
      <a href={`/@${author}/${permlink}`} className="keychainify-checked">
        {(`@${author}/${permlink}`).length > 43
          ? (`@${author}/${permlink}`).substring(0, 43) + `...`
          : (`@${author}/${permlink}`)}
      </a>
      {` (${weight / 100}%)`}
    </div>

    <div className="foot">
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

Vote.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default Vote
