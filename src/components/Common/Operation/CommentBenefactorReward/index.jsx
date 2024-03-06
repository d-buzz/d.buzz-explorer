import PropTypes from "prop-types"
import {timeAgo, vestToHive} from "../../../../utils/helper.js"
import {Link} from "react-router-dom"

const ClaimAccount = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    author,
    permlink,
    benefactor,
    // hbd_payout,
    // hive_payout,
    vesting_payout,
    // payout_must_be_claimed,
    totalVestingShares,
    totalVestingFundHive,
  } = data

  return <div className="op op-mini" id={trx_id}>
    <span className="tag tag-virt">virtual</span>

    <div className="action">
      <span className="account">{benefactor}</span>
      {` comment benefactor reward: `}
      {vestToHive(vesting_payout, totalVestingShares, totalVestingFundHive).toFixed(3)}
      {` HP for `}
      <Link to={`/@${author}/${permlink}`} className="keychainify-checked">{`@${author}/${permlink}`}</Link>
    </div>

    <div className="foot">
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
    </div>
  </div>
}

ClaimAccount.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}
export default ClaimAccount
