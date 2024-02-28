import PropTypes from "prop-types"
import {timeAgo, vestToHive} from "../../../../../utils/helper.js"

const ClaimRewardBalance = ({transaction, getDynamicGlobalProperties}) => {

  // {
  //   "author": "joycebuzz",
  //   "permlink": "697yivqo1l71rt3z09acm7",
  //   "hbd_payout": "0.070 HBD",
  //   "hive_payout": "0.000 HIVE",
  //   "vesting_payout": "366.420682 VESTS",
  //   "payout_must_be_claimed": true,
  //   "curators_vesting_payout": "718.948638 VESTS"
  // }
  const {
    op: [
      opType,
      {author, permlink, hbd_payout, hive_payout, vesting_payout, payout_must_be_claimed, curators_vesting_payout}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  const formatVestToHive = (vest) => vestToHive(
    vest,
    getDynamicGlobalProperties?.total_vesting_shares,
    getDynamicGlobalProperties?.total_vesting_fund_hive
  ).toFixed(3)

  return <div className="op op-collapse op-under op-mini" id={trx_id}>
    <span className="tag tag-virt">virtual</span>

    <div className="action">
      <span className="account">{author}</span>{` `}
      author reward: {hbd_payout} and {formatVestToHive(vesting_payout)} HP for {` `}
      <a href={`/@${author}/${permlink}`} className="keychainify-checked">{`@${author}/${permlink}`}</a>
    </div>

    <div className="foot">
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

ClaimRewardBalance.propTypes = {
  transaction: PropTypes.object.isRequired,
  getDynamicGlobalProperties: PropTypes.object.isRequired,
}

export default ClaimRewardBalance
