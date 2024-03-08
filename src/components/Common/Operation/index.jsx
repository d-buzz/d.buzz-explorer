import PropTypes from "prop-types"
import CustomJson from "./CustomJson/index.jsx"
import EffectiveCommentVote from "./EffectiveCommentVote/index.jsx"
import CommentPayoutUpdate from "./CommentPayoutUpdate/index.jsx"
import CommentReward from "./CommentReward/index.jsx"
import AuthorReward from "./AuthorReward/index.jsx"
import AccountUpdate from "./AccountUpdate/index.jsx"
import Vote from "./Vote/index.jsx"
import ClaimRewardBalance from "./ClaimRewardBalance/index.jsx"
import CommentOptions from "./CommentOptions/index.jsx"
import CurationReward from "./CurationReward/index.jsx"
import Transfer from "./Transfer/index.jsx"
import ClaimAccount from "./ClaimAccount/index.jsx"
import Comment from "./Comment/index.jsx"
import CommentBenefactorReward from "./CommentBenefactorReward/index.jsx"
import AccountCreated from "./AccountCreated/index.jsx"
import CreateClaimedAccount from "./CreateClaimedAccount/index.jsx"
import LimitOrderCancel from "./LimitOrderCancel/index.jsx"
import LimitOrderCreate from "./LimitOrderCreate/index.jsx"
import WitnessSetProperties from "./WitnessSetProperties/index.jsx"

const Operation = ({
  opType,
  opData,
  timestamp,
  transaction_id,
  headBlockNumber,
  index,
  totalVestingFundHive,
  totalVestingShares
}) => {

  opData['totalVestingShares'] = totalVestingShares
  opData['totalVestingFundHive'] = totalVestingFundHive

  if (opType === 'custom_json') {
    return <CustomJson
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'effective_comment_vote') {
    return <EffectiveCommentVote
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'comment_payout_update') {
    return <CommentPayoutUpdate
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'comment_reward') {
    return <CommentReward
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'author_reward') {
    return <AuthorReward
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'custom_json') {
    return <CustomJson
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'account_update') {
    return <AccountUpdate
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'vote') {
    return <Vote
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'claim_reward_balance') {
    return <ClaimRewardBalance
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'comment_options') {
    return <CommentOptions
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'curation_reward') {
    return <CurationReward
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'transfer') {
    return <Transfer
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'claim_account') {
    return <ClaimAccount
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'comment') {
    return <Comment
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'comment_benefactor_reward') {
    return <CommentBenefactorReward
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'account_created') {
    return <AccountCreated
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'create_claimed_account') {
    return <CreateClaimedAccount
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'limit_order_cancel') {
    return <LimitOrderCancel
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'limit_order_create') {
    return <LimitOrderCreate
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  if (opType === 'witness_set_properties') {
    return <WitnessSetProperties
      data={opData}
      timestamp={timestamp}
      trx_id={transaction_id}
      headBlockNumber={headBlockNumber}
      key={index}
    />
  }

  return <p key={index}>{opType}</p>
}

Operation.propTypes = {
  opType: PropTypes.string.isRequired,
  opData: PropTypes.object.isRequired,
  timestamp: PropTypes.string.isRequired,
  transaction_id: PropTypes.string.isRequired,
  totalVestingShares: PropTypes.string.isRequired,
  totalVestingFundHive: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

export default Operation
