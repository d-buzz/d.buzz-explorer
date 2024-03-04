import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"

const CommentOptions = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    author,
    permlink,
    extensions,
    allow_votes,
    percent_hbd,
    max_accepted_payout,
    allow_curation_rewards
  } = data

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-mini" id={trx_id}>
    <a className="tag tag-hash keychainify-checked" href={`/tx/${trx_id}`}>{trimTrxId}</a>

    <div className="action">
      <a className="account keychainify-checked" href={`/@${author}`}>
        {author}
      </a>
      {` comment options: ${percent_hbd / 100}% HBD,`}
      {` allow votes: ${allow_votes ? 'true' : 'false'},`}
      {` allow curation rewards: ${allow_curation_rewards ? 'true' : 'false'}`}
    </div>

    <div className="foot">
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
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
