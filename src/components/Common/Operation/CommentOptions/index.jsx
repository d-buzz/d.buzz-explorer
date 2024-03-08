import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import TrimTxId from "../../TrimTxId/index.jsx"
import {Link} from "react-router-dom"

const CommentOptions = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    author,
    // permlink,
    // extensions,
    allow_votes,
    percent_hbd,
    // max_accepted_payout,
    allow_curation_rewards
  } = data

  return <div className="op op-mini" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <Link className="account keychainify-checked" to={`/@${author}`}>
        {author}
      </Link>
      {` comment options: ${percent_hbd / 100}% HBD,`}
      {` allow votes: ${allow_votes ? 'true' : 'false'},`}
      {` allow curation rewards: ${allow_curation_rewards ? 'true' : 'false'}`}
    </div>

    <div className="foot">
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
    </div>
  </div>
}

CommentOptions.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default CommentOptions
