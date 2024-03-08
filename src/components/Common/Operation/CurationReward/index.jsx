import PropTypes from "prop-types"
import {timeAgo, vestToHive} from "../../../../utils/helper.js"
import {Link} from "react-router-dom"

const CurationReward = ({data, trx_id, timestamp, headBlockNumber}) => {

  const {
    author,
    reward,
    curator,
    permlink,
    comment_author,
    comment_permlink,
    // payout_must_be_claimed,
    totalVestingShares,
    totalVestingFundHive,
  } = data

  console.log(data)

  return <div className="op op-mini" id={trx_id}>
    <span className="tag tag-virt">virtual</span>

    <div className="action">
      <span className="account">{curator}</span>
      {` curation reward: `}
      {vestToHive(reward, totalVestingShares, totalVestingFundHive).toFixed(3)}
      {` HP for `}
      <Link to={`/@${comment_author || author}/${comment_permlink || permlink}`} className="keychainify-checked">
        {`@${comment_author || author}/${comment_permlink || permlink}`}
      </Link>
    </div>

    <div className="foot">
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
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
