import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"

const Vote = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {voter, author, weight, permlink} = data


  return <div className="op op-mini" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

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
