import {useState, useEffect} from 'react'
import {postData} from "../utils/api.js"

const handleGetDynamicGlobalProperties = async () => {
  try {
    const dataToSend = {
      jsonrpc: '2.0',
      method: 'condenser_api.get_dynamic_global_properties',
      params: [],
      id: 1,
    }
    return await postData(dataToSend)
  } catch (error) {
    console.error('Error in handleGetDynamicGlobalProperties:', error)
    throw error // Re-throw the error to propagate it up
  }
}

const useDynamicGlobalProperties = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [headBlockNumber, setHeadBlockNumber] = useState(null)
  const [headBlockId, setHeadBlockId] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)
  const [currentWitness, setCurrentWitness] = useState(null)
  const [totalPow, setTotalPow] = useState(null)
  const [numPowWitnesses, setNumPowWitnesses] = useState(null)
  const [virtualSupply, setVirtualSupply] = useState(null)
  const [currentSupply, setCurrentSupply] = useState(null)
  const [initHbdSupply, setInitHbdSupply] = useState(null)
  const [currentHbdSupply, setCurrentHbdSupply] = useState(null)
  const [totalVestingFundHive, setTotalVestingFundHive] = useState(null)
  const [totalVestingShares, setTotalVestingShares] = useState(null)
  const [totalRewardFundHive, setTotalRewardFundHive] = useState(null)
  const [totalRewardShares2, setTotalRewardShares2] = useState(null)
  const [pendingRewardedVestingShares, setPendingRewardedVestingShares] = useState(null)
  const [pendingRewardedVestingHive, setPendingRewardedVestingHive] = useState(null)
  const [hbdInterestRate, setHbdInterestRate] = useState(null)
  const [hbdPrintRate, setHbdPrintRate] = useState(null)
  const [maximumBlockSize, setMaximumBlockSize] = useState(null)
  const [requiredActionsPartitionPercent, setRequiredActionsPartitionPercent] = useState(null)
  const [currentAslot, setCurrentAslot] = useState(null)
  const [recentSlotsFilled, setRecentSlotsFilled] = useState(null)
  const [participationCount, setParticipationCount] = useState(null)
  const [lastIrreversibleBlockNum, setLastIrreversibleBlockNum] = useState(null)
  const [votePowerReserveRate, setVotePowerReserveRate] = useState(null)
  const [delegationReturnPeriod, setDelegationReturnPeriod] = useState(null)
  const [reverseAuctionSeconds, setReverseAuctionSeconds] = useState(null)
  const [availableAccountSubsidies, setAvailableAccountSubsidies] = useState(null)
  const [hbdStopPercent, setHbdStopPercent] = useState(null)
  const [hbdStartPercent, setHbdStartPercent] = useState(null)
  const [nextMaintenanceTime, setNextMaintenanceTime] = useState(null)
  const [lastBudgetTime, setLastBudgetTime] = useState(null)
  const [nextDailyMaintenanceTime, setNextDailyMaintenanceTime] = useState(null)
  const [contentRewardPercent, setContentRewardPercent] = useState(null)
  const [vestingRewardPercent, setVestingRewardPercent] = useState(null)
  const [proposalFundPercent, setProposalFundPercent] = useState(null)
  const [dhfIntervalLedger, setDhfIntervalLedger] = useState(null)
  const [downvotePoolPercent, setDownvotePoolPercent] = useState(null)
  const [currentRemoveThreshold, setCurrentRemoveThreshold] = useState(null)
  const [earlyVotingSeconds, setEarlyVotingSeconds] = useState(null)
  const [midVotingSeconds, setMidVotingSeconds] = useState(null)
  const [maxConsecutiveRecurrentTransferFailures, setMaxConsecutiveRecurrentTransferFailures] = useState(null)
  const [maxRecurrentTransferEndDate, setMaxRecurrentTransferEndDate] = useState(null)
  const [minRecurrentTransfersRecurrence, setMinRecurrentTransfersRecurrence] = useState(null)
  const [maxOpenRecurrentTransfers, setMaxOpenRecurrentTransfers] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {result} = await handleGetDynamicGlobalProperties()
        const {
          head_block_number,
          head_block_id,
          time,
          current_witness,
          total_pow,
          num_pow_witnesses,
          virtual_supply,
          current_supply,
          init_hbd_supply,
          current_hbd_supply,
          total_vesting_fund_hive,
          total_vesting_shares,
          total_reward_fund_hive,
          total_reward_shares2,
          pending_rewarded_vesting_shares,
          pending_rewarded_vesting_hive,
          hbd_interest_rate,
          hbd_print_rate,
          maximum_block_size,
          required_actions_partition_percent,
          current_aslot,
          recent_slots_filled,
          participation_count,
          last_irreversible_block_num,
          vote_power_reserve_rate,
          delegation_return_period,
          reverse_auction_seconds,
          available_account_subsidies,
          hbd_stop_percent,
          hbd_start_percent,
          next_maintenance_time,
          last_budget_time,
          next_daily_maintenance_time,
          content_reward_percent,
          vesting_reward_percent,
          proposal_fund_percent,
          dhf_interval_ledger,
          downvote_pool_percent,
          current_remove_threshold,
          early_voting_seconds,
          mid_voting_seconds,
          max_consecutive_recurrent_transfer_failures,
          max_recurrent_transfer_end_date,
          min_recurrent_transfers_recurrence,
          max_open_recurrent_transfers,
        } = await result

        setHeadBlockNumber(head_block_number)
        setHeadBlockId(head_block_id)
        setCurrentTime(time)
        setCurrentWitness(current_witness)
        setTotalPow(total_pow)
        setNumPowWitnesses(num_pow_witnesses)
        setVirtualSupply(virtual_supply)
        setCurrentSupply(current_supply)
        setInitHbdSupply(init_hbd_supply)
        setCurrentHbdSupply(current_hbd_supply)
        setTotalVestingFundHive(total_vesting_fund_hive)
        setTotalVestingShares(total_vesting_shares)
        setTotalRewardFundHive(total_reward_fund_hive)
        setTotalRewardShares2(total_reward_shares2)
        setPendingRewardedVestingShares(pending_rewarded_vesting_shares)
        setPendingRewardedVestingHive(pending_rewarded_vesting_hive)
        setHbdInterestRate(hbd_interest_rate)
        setHbdPrintRate(hbd_print_rate)
        setMaximumBlockSize(maximum_block_size)
        setRequiredActionsPartitionPercent(required_actions_partition_percent)
        setCurrentAslot(current_aslot)
        setRecentSlotsFilled(recent_slots_filled)
        setParticipationCount(participation_count)
        setLastIrreversibleBlockNum(last_irreversible_block_num)
        setVotePowerReserveRate(vote_power_reserve_rate)
        setDelegationReturnPeriod(delegation_return_period)
        setReverseAuctionSeconds(reverse_auction_seconds)
        setAvailableAccountSubsidies(available_account_subsidies)
        setHbdStopPercent(hbd_stop_percent)
        setHbdStartPercent(hbd_start_percent)
        setNextMaintenanceTime(next_maintenance_time)
        setLastBudgetTime(last_budget_time)
        setNextDailyMaintenanceTime(next_daily_maintenance_time)
        setContentRewardPercent(content_reward_percent)
        setVestingRewardPercent(vesting_reward_percent)
        setProposalFundPercent(proposal_fund_percent)
        setDhfIntervalLedger(dhf_interval_ledger)
        setDownvotePoolPercent(downvote_pool_percent)
        setCurrentRemoveThreshold(current_remove_threshold)
        setEarlyVotingSeconds(early_voting_seconds)
        setMidVotingSeconds(mid_voting_seconds)
        setMaxConsecutiveRecurrentTransferFailures(max_consecutive_recurrent_transfer_failures)
        setMaxRecurrentTransferEndDate(max_recurrent_transfer_end_date)
        setMinRecurrentTransfersRecurrence(min_recurrent_transfers_recurrence)
        setMaxOpenRecurrentTransfers(max_open_recurrent_transfers)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching dynamic global properties:', error)
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {
    headBlockNumber,
    headBlockId,
    currentTime,
    currentWitness,
    totalPow,
    numPowWitnesses,
    virtualSupply,
    currentSupply,
    initHbdSupply,
    currentHbdSupply,
    totalVestingFundHive,
    totalVestingShares,
    totalRewardFundHive,
    totalRewardShares2,
    pendingRewardedVestingShares,
    pendingRewardedVestingHive,
    hbdInterestRate,
    hbdPrintRate,
    maximumBlockSize,
    requiredActionsPartitionPercent,
    currentAslot,
    recentSlotsFilled,
    participationCount,
    lastIrreversibleBlockNum,
    votePowerReserveRate,
    delegationReturnPeriod,
    reverseAuctionSeconds,
    availableAccountSubsidies,
    hbdStopPercent,
    hbdStartPercent,
    nextMaintenanceTime,
    lastBudgetTime,
    nextDailyMaintenanceTime,
    contentRewardPercent,
    vestingRewardPercent,
    proposalFundPercent,
    dhfIntervalLedger,
    downvotePoolPercent,
    currentRemoveThreshold,
    earlyVotingSeconds,
    midVotingSeconds,
    maxConsecutiveRecurrentTransferFailures,
    maxRecurrentTransferEndDate,
    minRecurrentTransfersRecurrence,
    maxOpenRecurrentTransfers,
    loading,
    dynamicGlobalError: error,
  }
}

export default useDynamicGlobalProperties
