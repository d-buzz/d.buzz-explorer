import PropTypes from "prop-types"
import {timeAgo, vestToHive} from "../../../../utils/helper.js"
import Identicon from "../../Identicon/index.jsx"

const ClaimRewardBalance = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    account,
    reward_hbd,
    reward_hive,
    reward_vests,
    totalVestingShares,
    totalVestingFundHive,
  } = data

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-mini" id={trx_id}>
    <a className="tag tag-hash keychainify-checked" href={`/tx/${trx_id}`}>{trimTrxId}</a>

    <div className="action">
      <span className="account">{account}</span>
      {` claim reward: `}
      {vestToHive(reward_vests, totalVestingShares, totalVestingFundHive).toFixed(3)} HP
    </div>

    <div className="foot">
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

ClaimRewardBalance.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default ClaimRewardBalance
