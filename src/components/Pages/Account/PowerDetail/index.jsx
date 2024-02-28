import {useEffect, useState} from 'react'
import PropTypes from "prop-types"
import {tidyNumber, vestToHive} from "../../../../utils/helper.js"

const PowerDetail = ({account, rcAccount, getDynamicGlobalProperties, totalVestingFundHive, totalVestingShares}) => {
  const [currentUpvoteMana, setCurrentUpvoteMana] = useState(0)
  const [currentDownvoteMana, setCurrentDownvoteMana] = useState(0)
  const [rcPercent, setRcPercent] = useState(0)
  const [effectiveHP, setEffectiveHP] = useState(0)
  const [effectiveHPTidy, setEffectiveHPTidy] = useState('')
  const rc = rcAccount?.rc_accounts?.[0]

  const [vestingShares, setVestingShares] = useState(0)
  const [delegatedVestingShares, setDelegatedVestingShares] = useState(0)
  const [receivedVestingShares, setReceivedVestingShares] = useState(0)
  const [vestingWithdrawRate, setVestingWithdrawRate] = useState(0)

  console.log(totalVestingFundHive, totalVestingShares)
  console.log(getDynamicGlobalProperties)

  useEffect(() => {
    if (Object.keys(account).length !== 0) {
      try {
        let delegated = parseFloat(account.delegated_vesting_shares)
        let received = parseFloat(account.received_vesting_shares)
        let vesting = parseFloat(account.vesting_shares)
        let withdrawRate = 0

        setDelegatedVestingShares(delegated)
        setReceivedVestingShares(received)
        setVestingShares(vesting)


        if (parseInt(account.vesting_withdraw_rate) > 0) {
          withdrawRate = Math.min(
            parseInt(account.vesting_withdraw_rate),
            parseInt((account.to_withdraw - account.withdrawn) / 1000000)
          )
          setVestingWithdrawRate(withdrawRate)
        }


        console.log(delegated, received, vesting, withdrawRate)
        console.log(account.delegated_vesting_shares, account.received_vesting_shares, account.vesting_shares)

        let totalVest = vesting + received - delegated - withdrawRate

        let maxMana = Number(totalVest * Math.pow(10, 6))
        const maxManaDown = maxMana * 0.25
        let delta = (Date.now() / 1000 - account.voting_manabar.last_update_time)

        setEffectiveHP(formatVestToHive(totalVest))
        setEffectiveHPTidy(tidyNumber(formatVestToHive(totalVest)))

        console.log('qweqweqeqw', vestToHive(totalVest, totalVestingShares, totalVestingFundHive))


        let currentMana = Number(account.voting_manabar.current_mana) + (delta * maxMana / 432000)
        let percentage = Math.round(currentMana / maxMana * 10000)
        let percent = (Math.min(Math.max(percentage, 0), 10000) / 100).toFixed(2)

        if (!isFinite(percentage)) percentage = 0
        if (percentage > 10000) percentage = 10000
        else if (percentage < 0) percentage = 0

        setCurrentUpvoteMana(percent)

        let deltaDown = (Date.now() / 1000 - account.downvote_manabar.last_update_time)
        let currentManaDown = Number(account.downvote_manabar.current_mana) + (deltaDown * maxManaDown / 432000)
        let percentageDown = Math.round(currentManaDown / maxManaDown * 10000)

        if (!isFinite(percentageDown)) percentageDown = 0
        if (percentageDown > 10000) percentageDown = 10000
        else if (percentageDown < 0) percentageDown = 0

        let percentDown = (Math.min(Math.max(percentageDown, 0), 10000) / 100).toFixed(2)

        setCurrentDownvoteMana(percentDown)
      } catch (error) {
        console.error('Error making the request:', error)
      }
    }
  }, [account])

  const formatVestToHive = (vest) => vestToHive(vest, getDynamicGlobalProperties.total_vesting_shares, getDynamicGlobalProperties.total_vesting_fund_hive).toFixed(3)

  useEffect(() => {
    if (rc) {
      const result = parseFloat(((rc.rc_manabar.current_mana / rc.max_rc)))
      setRcPercent((result * 100).toFixed(2))
    }
  }, [rc])

  return (
    <div className="well well-xs" style={{paddingLeft: '0.8em', paddingRight: '0.8em'}}>

      <h5 className="text-center" style={{marginBottom: '0.25em'}}>Vote Weight</h5>
      <p className="lead text-center" style={{marginBottom: '0'}}>
        {Math.round(effectiveHP).toLocaleString()} HP
      </p>

      <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
        {Math.round(formatVestToHive(vestingShares)).toLocaleString()}
        {` + `}
        {Math.round(formatVestToHive(receivedVestingShares)).toLocaleString()}
        {` - `}
        {Math.round(formatVestToHive(delegatedVestingShares)).toLocaleString()} HP
      </div>
      <h5 className="text-center" style={{marginBottom: '0.25em'}}>Voting Power</h5>
      <div
        className="progress"
        style={{marginBottom: '0', background: 'linear-gradient(to bottom, #cef 0%, #dff 100%)'}}>
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          aria-valuenow={currentUpvoteMana}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width: `${currentUpvoteMana}%`}}>
          {currentUpvoteMana}%
        </div>
      </div>

      <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
        {Math.round(((currentUpvoteMana / 100) * effectiveHP)).toLocaleString()}M
        / {Math.round(effectiveHP).toLocaleString()}M
      </div>

      <h5 className="text-center" style={{marginBottom: '0.25em'}}>Downvote Power</h5>
      <div
        className="progress"
        style={{marginBottom: '0', background: 'linear-gradient(to bottom, #cef 0%, #dff 100%)'}}>
        <div
          className="progress-bar progress-bar-striped progress-bar-info"
          role="progressbar"
          aria-valuenow={currentDownvoteMana}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width: `${currentDownvoteMana}%`}}>
          {currentDownvoteMana}%
        </div>
      </div>

      <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
        2.8M
      </div>

      <h5 className="text-center" style={{marginBottom: '0.25em'}}>Resource Credits</h5>
      <div
        className="progress"
        style={{marginBottom: '0', background: 'linear-gradient(to bottom, #fd9 0%, #fec 100%)'}}>
        <div
          className="progress-bar progress-bar-striped progress-bar-success"
          role="progressbar"
          aria-valuenow={rcPercent}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width: `${rcPercent}%`}}>
        </div>
        <span style={{paddingLeft: '0.25em', color: '#444', fontSize: '12px'}}>{rcPercent}%</span>
      </div>

      <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
        1.6M / 14M
      </div>
      <br/>

      <div className="row">
        <div className="col col-xs-6">
          <h5 className="text-center" style={{marginBottom: '0.25em'}}>Reputation</h5>
          <p className="lead text-center" style={{marginBottom: '0'}}>
            41.7
          </p>
          <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
            9 posts
          </div>
        </div>

        <div className="col col-xs-6">
          <h5 className="text-center" style={{marginBottom: '0.25em'}}>Age</h5>
          <p className="lead text-center" style={{marginBottom: '0'}}>
            96 days
          </p>
          <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
            November 2023
          </div>
        </div>
      </div>

      <p className="text-center text-muted" style={{opacity: '0.5', marginTop: '1.5em'}}>
        view on:
        <a href="https://hive.blog/@iamjco" className="keychainify-checked">hive.blog</a>
        | <a href="https://peakd.com/@iamjco" className="keychainify-checked">peakd</a>
        | <a href="https://ecency.com/@iamjco" className="keychainify-checked">ecency</a>
      </p>
    </div>
  )
}

PowerDetail.propTypes = {
  account: PropTypes.object.isRequired,
  getDynamicGlobalProperties: PropTypes.object.isRequired,
  rcAccount: PropTypes.array.isRequired,
  totalVestingShares: PropTypes.string,
  totalVestingFundHive: PropTypes.string,
}

export default PowerDetail
