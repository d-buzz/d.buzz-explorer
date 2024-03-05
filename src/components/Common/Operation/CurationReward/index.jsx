import PropTypes from "prop-types"
import {timeAgo, vestToHive} from "../../../../utils/helper.js"

const CurationReward = ({data, trx_id, timestamp, headBlockNumber}) => {

  const {
    reward,
    curator,
    comment_author,
    comment_permlink,
    // payout_must_be_claimed,
    totalVestingShares,
    totalVestingFundHive,
  } = data

  return <div className="op op-mini" id={trx_id}>
    <span className="tag tag-virt">virtual</span>

    <div className="action">
      <span className="account">{curator}</span>
      {` curation reward: `}
      {vestToHive(reward, totalVestingShares, totalVestingFundHive).toFixed(3)}
      {` HP for `}
      <a href={`/@${comment_author}/${comment_permlink}`} className="keychainify-checked">
        {`@${comment_author}/${comment_permlink}`}
      </a>
    </div>

    <div className="foot">
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

CurationReward.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default CurationReward
