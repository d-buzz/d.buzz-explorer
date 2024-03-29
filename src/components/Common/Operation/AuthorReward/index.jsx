import PropTypes from "prop-types"
import {timeAgo, vestToHive} from "../../../../utils/helper.js"
import {Link} from "react-router-dom"

const AuthorReward = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    author,
    permlink,
    hbd_payout,
    // hive_payout,
    vesting_payout,
    // payout_must_be_claimed,
    // curators_vesting_payout,
    totalVestingShares,
    totalVestingFundHive
  } = data

  const formatVestToHive = (vest) => vestToHive(
    vest,
    totalVestingShares,
    totalVestingFundHive
  ).toFixed(3)

  return <div className="op op-collapse op-under op-mini" id={trx_id}>
    <span className="tag tag-virt">virtual</span>

    <div className="action">
      <span className="account">{author}</span>{` `}
      author reward: {hbd_payout} and {formatVestToHive(vesting_payout)} HP for {` `}
      <Link to={`/@${author}/${permlink}`} className="keychainify-checked">{`@${author}/${permlink}`}</Link>
    </div>

    <div className="foot">
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
    </div>
  </div>
}

AuthorReward.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default AuthorReward
