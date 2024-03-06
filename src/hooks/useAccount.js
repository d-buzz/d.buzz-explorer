import {useState, useEffect} from 'react'
import {postData} from "../utils/api.js"

const handleGetAccount = async (username) => {
  try {
    const dataToSend = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_accounts',
      params: [[username]],
      id: 1,
    }
    return await postData(dataToSend)
  } catch (error) {
    console.error('Error in handleGetAccount:', error)
    throw error // Re-throw the error to propagate it up
  }
}

const useAccount = (username) => {
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)

  const [id, setId] = useState(null)
  const [name, setName] = useState(null)
  const [owner, setOwner] = useState(null)
  const [active, setActive] = useState(null)
  const [posting, setPosting] = useState(null)
  const [memoKey, setMemoKey] = useState(null)
  const [jsonMetadata, setJsonMetadata] = useState(null)
  const [postingJsonMetadata, setPostingJsonMetadata] = useState(null)
  const [proxy, setProxy] = useState(null)
  const [previousOwnerUpdate, setPreviousOwnerUpdate] = useState(null)
  const [lastOwnerUpdate, setLastOwnerUpdate] = useState(null)
  const [lastAccountUpdate, setLastAccountUpdate] = useState(null)
  const [created, setCreated] = useState(null)
  const [mined, setMined] = useState(null)
  const [recoveryAccount, setRecoveryAccount] = useState(null)
  const [lastAccountRecovery, setLastAccountRecovery] = useState(null)
  const [resetAccount, setResetAccount] = useState(null)
  const [commentCount, setCommentCount] = useState(null)
  const [lifetimeVoteCount, setLifetimeVoteCount] = useState(null)
  const [postCount, setPostCount] = useState(null)
  const [canVote, setCanVote] = useState(null)
  const [votingManabar, setVotingManabar] = useState(null)
  const [downvoteManabar, setDownvoteManabar] = useState(null)
  const [votingPower, setVotingPower] = useState(null)
  const [balance, setBalance] = useState(null)
  const [savingsBalance, setSavingsBalance] = useState(null)
  const [hbdBalance, setHbdBalance] = useState(null)
  const [hbdSeconds, setHbdSeconds] = useState(null)
  const [hbdSecondsLastUpdate, setHbdSecondsLastUpdate] = useState(null)
  const [hbdLastInterestPayment, setHbdLastInterestPayment] = useState(null)
  const [savingsHbdBalance, setSavingsHbdBalance] = useState(null)
  const [savingsHbdSeconds, setSavingsHbdSeconds] = useState(null)
  const [savingsHbdSecondsLastUpdate, setSavingsHbdSecondsLastUpdate] = useState(null)
  const [savingsHbdLastInterestPayment, setSavingsHbdLastInterestPayment] = useState(null)
  const [savingsWithdrawRequests, setSavingsWithdrawRequests] = useState(null)
  const [rewardHbdBalance, setRewardHbdBalance] = useState(null)
  const [rewardHiveBalance, setRewardHiveBalance] = useState(null)
  const [rewardVestingBalance, setRewardVestingBalance] = useState(null)
  const [rewardVestingHive, setRewardVestingHive] = useState(null)
  const [vestingShares, setVestingShares] = useState(null)
  const [delegatedVestingShares, setDelegatedVestingShares] = useState(null)
  const [receivedVestingShares, setReceivedVestingShares] = useState(null)
  const [vestingWithdrawRate, setVestingWithdrawRate] = useState(null)
  const [postVotingPower, setPostVotingPower] = useState(null)
  const [nextVestingWithdrawal, setNextVestingWithdrawal] = useState(null)
  const [withdrawn, setWithdrawn] = useState(null)
  const [toWithdraw, setToWithdraw] = useState(null)
  const [withdrawRoutes, setWithdrawRoutes] = useState(null)
  const [pendingTransfers, setPendingTransfers] = useState(null)
  const [curationRewards, setCurationRewards] = useState(null)
  const [postingRewards, setPostingRewards] = useState(null)
  const [proxiedVsfVotes, setProxiedVsfVotes] = useState(null)
  const [witnessesVotedFor, setWitnessesVotedFor] = useState(null)
  const [lastPost, setLastPost] = useState(null)
  const [lastRootPost, setLastRootPost] = useState(null)
  const [lastVoteTime, setLastVoteTime] = useState(null)
  const [postBandwidth, setPostBandwidth] = useState(null)
  const [pendingClaimedAccounts, setPendingClaimedAccounts] = useState(null)
  const [governanceVoteExpirationTs, setGovernanceVoteExpirationTs] = useState(null)
  const [openRecurrentTransfers, setOpenRecurrentTransfers] = useState(null)
  const [vestingBalance, setVestingBalance] = useState(null)
  const [reputation, setReputation] = useState(null)
  const [transferHistory, setTransferHistory] = useState(null)
  const [marketHistory, setMarketHistory] = useState(null)
  const [postHistory, setPostHistory] = useState(null)
  const [voteHistory, setVoteHistory] = useState(null)
  const [otherHistory, setOtherHistory] = useState(null)
  const [witnessVotes, setWitnessVotes] = useState(null)
  const [tagsUsage, setTagsUsage] = useState(null)
  const [guestBloggers, setGuestBloggers] = useState(null)

  const propertyKeys = [
    'id',
    'name',
    // 'owner',
    // 'active',
    // 'posting',
    'memo_key',
    'json_metadata',
    'posting_json_metadata',
    'proxy',
    'previous_owner_update',
    'last_owner_update',
    'last_account_update',
    'created',
    'mined',
    'recovery_account',
    'last_account_recovery',
    'reset_account',
    'comment_count',
    'lifetime_vote_count',
    'post_count',
    'can_vote',
    // 'voting_manabar',
    'downvote_manabar',
    'voting_power',
    'balance',
    'savings_balance',
    'hbd_balance',
    'hbd_seconds',
    'hbd_seconds_last_update',
    'hbd_last_interest_payment',
    'savings_hbd_balance',
    'savings_hbd_seconds',
    'savings_hbd_seconds_last_update',
    'savings_hbd_last_interest_payment',
    'savings_withdraw_requests',
    'reward_hbd_balance',
    'reward_hive_balance',
    'reward_vesting_balance',
    'reward_vesting_hive',
    'vesting_shares',
    'delegated_vesting_shares',
    'received_vesting_shares',
    'vesting_withdraw_rate',
    'post_voting_power',
    'next_vesting_withdrawal',
    'withdrawn',
    'to_withdraw',
    'withdraw_routes',
    'pending_transfers',
    'curation_rewards',
    'posting_rewards',
    'proxied_vsf_votes',
    'witnesses_voted_for',
    'last_post',
    'last_root_post',
    'last_vote_time',
    'post_bandwidth',
    'pending_claimed_accounts',
    'governance_vote_expiration_ts',
    'open_recurrent_transfers',
    'vesting_balance',
    // 'reputation',
    // 'transfer_history',
    // 'market_history',
    // 'post_history',
    // 'vote_history',
    // 'other_history',
    // 'witness_votes',
    // 'tags_usage',
    // 'guest_bloggers',
  ]

  const computeMana = () => {
    let delegated = parseFloat(delegatedVestingShares)
    let received = parseFloat(receivedVestingShares)
    let vesting = parseFloat(vestingShares)
    let withdrawRate = 0

    if (parseInt(vestingWithdrawRate) > 0) {
      withdrawRate = Math.min(
        parseInt(vestingWithdrawRate),
        parseInt((toWithdraw - withdrawn) / 1000000)
      )
    }

    const totalVest = vesting + received - delegated - withdrawRate

    const maxMana = Number(totalVest * Math.pow(10, 6))
    const maxManaDown = maxMana * 0.25
    let delta = (Date.now() / 1000 - votingManabar.last_update_time)

    const currentMana = Number(votingManabar.current_mana) + (delta * maxMana / 432000)
    let percentage = Math.round(currentMana / maxMana * 10000)
    const percent = (Math.min(Math.max(percentage, 0), 10000) / 100).toFixed(2)

    if (!isFinite(percentage)) percentage = 0
    if (percentage > 10000) percentage = 10000
    else if (percentage < 0) percentage = 0

    let deltaDown = (Date.now() / 1000 - downvoteManabar.last_update_time)
    let currentManaDown = Number(downvoteManabar.current_mana) + (deltaDown * maxManaDown / 432000)
    let percentageDown = Math.round(currentManaDown / maxManaDown * 10000)

    if (!isFinite(percentageDown)) percentageDown = 0
    if (percentageDown > 10000) percentageDown = 10000
    else if (percentageDown < 0) percentageDown = 0

    let percentDown = (Math.min(Math.max(percentageDown, 0), 10000) / 100).toFixed(2)

    return {
      currentDownvoteMana: percentDown,
      currentUpvoteMana: percent,
      totalVest: totalVest,
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {result} = await handleGetAccount(username)

        const {
          id,
          name,
          owner,
          active,
          posting,
          memo_key,
          json_metadata,
          posting_json_metadata,
          proxy,
          previous_owner_update,
          last_owner_update,
          last_account_update,
          created,
          mined,
          recovery_account,
          last_account_recovery,
          reset_account,
          comment_count,
          lifetime_vote_count,
          post_count,
          can_vote,
          voting_manabar,
          downvote_manabar,
          voting_power,
          balance,
          savings_balance,
          hbd_balance,
          hbd_seconds,
          hbd_seconds_last_update,
          hbd_last_interest_payment,
          savings_hbd_balance,
          savings_hbd_seconds,
          savings_hbd_seconds_last_update,
          savings_hbd_last_interest_payment,
          savings_withdraw_requests,
          reward_hbd_balance,
          reward_hive_balance,
          reward_vesting_balance,
          reward_vesting_hive,
          vesting_shares,
          delegated_vesting_shares,
          received_vesting_shares,
          vesting_withdraw_rate,
          post_voting_power,
          next_vesting_withdrawal,
          withdrawn,
          to_withdraw,
          withdraw_routes,
          pending_transfers,
          curation_rewards,
          posting_rewards,
          proxied_vsf_votes,
          witnesses_voted_for,
          last_post,
          last_root_post,
          last_vote_time,
          post_bandwidth,
          pending_claimed_accounts,
          governance_vote_expiration_ts,
          open_recurrent_transfers,
          vesting_balance,
          reputation,
          transfer_history,
          market_history,
          post_history,
          vote_history,
          other_history,
          witness_votes,
          tags_usage,
          guest_bloggers,
        } = result[0] || {}

        setId(id)
        setName(name)
        setOwner(owner)
        setActive(active)
        setPosting(posting)
        setMemoKey(memo_key)
        setJsonMetadata(json_metadata)
        setPostingJsonMetadata(posting_json_metadata)
        setProxy(proxy)
        setPreviousOwnerUpdate(previous_owner_update)
        setLastOwnerUpdate(last_owner_update)
        setLastAccountUpdate(last_account_update)
        setCreated(created)
        setMined(mined)
        setRecoveryAccount(recovery_account)
        setLastAccountRecovery(last_account_recovery)
        setResetAccount(reset_account)
        setCommentCount(comment_count)
        setLifetimeVoteCount(lifetime_vote_count)
        setPostCount(post_count)
        setCanVote(can_vote)
        setVotingManabar(voting_manabar)
        setDownvoteManabar(downvote_manabar)
        setVotingPower(voting_power)
        setBalance(balance)
        setSavingsBalance(savings_balance)
        setHbdBalance(hbd_balance)
        setHbdSeconds(hbd_seconds)
        setHbdSecondsLastUpdate(hbd_seconds_last_update)
        setHbdLastInterestPayment(hbd_last_interest_payment)
        setSavingsHbdBalance(savings_hbd_balance)
        setSavingsHbdSeconds(savings_hbd_seconds)
        setSavingsHbdSecondsLastUpdate(savings_hbd_seconds_last_update)
        setSavingsHbdLastInterestPayment(savings_hbd_last_interest_payment)
        setSavingsWithdrawRequests(savings_withdraw_requests)
        setRewardHbdBalance(reward_hbd_balance)
        setRewardHiveBalance(reward_hive_balance)
        setRewardVestingBalance(reward_vesting_balance)
        setRewardVestingHive(reward_vesting_hive)
        setVestingShares(vesting_shares)
        setDelegatedVestingShares(delegated_vesting_shares)
        setReceivedVestingShares(received_vesting_shares)
        setVestingWithdrawRate(vesting_withdraw_rate)
        setPostVotingPower(post_voting_power)
        setNextVestingWithdrawal(next_vesting_withdrawal)
        setWithdrawn(withdrawn)
        setToWithdraw(to_withdraw)
        setWithdrawRoutes(withdraw_routes)
        setPendingTransfers(pending_transfers)
        setCurationRewards(curation_rewards)
        setPostingRewards(posting_rewards)
        setProxiedVsfVotes(proxied_vsf_votes)
        setWitnessesVotedFor(witnesses_voted_for)
        setLastPost(last_post)
        setLastRootPost(last_root_post)
        setLastVoteTime(last_vote_time)
        setPostBandwidth(post_bandwidth)
        setPendingClaimedAccounts(pending_claimed_accounts)
        setGovernanceVoteExpirationTs(governance_vote_expiration_ts)
        setOpenRecurrentTransfers(open_recurrent_transfers)
        setVestingBalance(vesting_balance)
        setReputation(reputation)
        setTransferHistory(transfer_history)
        setMarketHistory(market_history)
        setPostHistory(post_history)
        setVoteHistory(vote_history)
        setOtherHistory(other_history)
        setWitnessVotes(witness_votes)
        setTagsUsage(tags_usage)
        setGuestBloggers(guest_bloggers)

        setAccount(result[0] || {})
        setLoading(false)
      } catch (error) {
        console.error('Error fetching dynamic global properties:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [username])

  return {
    account,
    id,
    name,
    owner,
    active,
    posting,
    memoKey,
    jsonMetadata,
    postingJsonMetadata,
    proxy,
    previousOwnerUpdate,
    lastOwnerUpdate,
    lastAccountUpdate,
    created,
    mined,
    recoveryAccount,
    lastAccountRecovery,
    resetAccount,
    commentCount,
    lifetimeVoteCount,
    postCount,
    canVote,
    votingManabar,
    downvoteManabar,
    votingPower,
    balance,
    savingsBalance,
    hbdBalance,
    hbdSeconds,
    hbdSecondsLastUpdate,
    hbdLastInterestPayment,
    savingsHbdBalance,
    savingsHbdSeconds,
    savingsHbdSecondsLastUpdate,
    savingsHbdLastInterestPayment,
    savingsWithdrawRequests,
    rewardHbdBalance,
    rewardHiveBalance,
    rewardVestingBalance,
    rewardVestingHive,
    vestingShares,
    delegatedVestingShares,
    receivedVestingShares,
    vestingWithdrawRate,
    postVotingPower,
    nextVestingWithdrawal,
    withdrawn,
    toWithdraw,
    withdrawRoutes,
    pendingTransfers,
    curationRewards,
    postingRewards,
    proxiedVsfVotes,
    witnessesVotedFor,
    lastPost,
    lastRootPost,
    lastVoteTime,
    postBandwidth,
    pendingClaimedAccounts,
    governanceVoteExpirationTs,
    openRecurrentTransfers,
    vestingBalance,
    reputation,
    transferHistory,
    marketHistory,
    postHistory,
    voteHistory,
    otherHistory,
    witnessVotes,
    tagsUsage,
    guestBloggers,
    loading,
    propertyKeys,
    computeMana,
  }
}

export default useAccount
