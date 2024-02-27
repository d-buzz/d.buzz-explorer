// /utils/helpers.js

// Example helper function for formatting dates
import moment from "moment/moment.js"

export const formatDate = (date) => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(date).toLocaleDateString(undefined, options)
}

export const timeAgo = (timestamp) => !timestamp.endsWith('Z')
  ? moment(`${timestamp}Z`).local().fromNow()
  : moment(timestamp).local().fromNow()

// Other helper functions can be added as needed

export const operationType = (type) => {
  switch (type) {
  case 'fill_convert_request':
    return 'test'
  case 'author_reward':
    return 'test'
  case 'curation_reward':
    return 'test'
  case 'comment_reward':
    return 'test'
  case 'liquidity_reward':
    return 'test'
  case 'interest':
    return 'test'
  case 'fill_vesting_withdraw':
    return 'test'
  case 'fill_order':
    return 'test'
  case 'shutdown_witness':
    return 'test'
  case 'fill_transfer_from_savings':
    return 'test'
  case 'hardfork':
    return 'test'
  case 'comment_payout_update':
    return 'test'
  case 'return_vesting_delegation':
    return 'test'
  case 'comment_benefactor_reward':
    return 'test'
  case 'producer_reward':
    return 'test'
  case 'clear_null_account_balance':
    return 'test'
  case 'proposal_pay':
    return 'test'
  case 'sps_fund':
    return 'test'
  case 'hardfork_hive':
    return 'test'
  case 'hardfork_hive_restore':
    return 'test'
  case 'delayed_voting':
    return 'test'
  case 'consolidate_treasury_balance':
    return 'test'
  case 'effective_comment_vote':
    return 'test'
  case 'ineffective_delete_comment':
    return 'test'
  case 'sps_convert':
    return 'test'
  case 'dhf_funding':
    return 'test'
  case 'dhf_conversion':
    return 'test'
  case 'expired_account_notification':
    return 'test'
  case 'changed_recovery_account':
    return 'test'
  case 'transfer_to_vesting_completed':
    return 'test'
  case 'pow_reward':
    return 'test'
  case 'vesting_shares_split':
    return 'test'
  case 'account_created':
    return 'test'
  case 'fill_collateralized_convert_request':
    return 'test'
  case 'system_warning':
    return 'test'
  case 'fill_recurrent_transfer':
    return 'test'
  case 'failed_recurrent_transfer':
    return 'test'
  case 'limit_order_cancelled':
    return 'test'
  case 'producer_missed':
    return 'test'
  case 'proposal_fee':
    return 'test'
  case 'collateralized_convert_immediate_conversion':
    return 'test'
  case 'escrow_approved':
    return 'test'
  case 'escrow_rejected':
    return 'test'
  case 'proxy_cleared':
    return 'test'

  default:
    return null // Default case, return null or handle accordingly
  }
}
