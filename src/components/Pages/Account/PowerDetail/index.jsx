import {useEffect, useState} from 'react'
import PropTypes from "prop-types"
import {
  getReputation,
  isObjectEmpty,
  // tidyNumber,
  vestToHive} from "../../../../utils/helper.js"
import moment from "moment"

const PowerDetail = ({account, rcAccount, accountReputation, totalVestingFundHive, totalVestingShares, computeMana}) => {

  const [rcPercent, setRcPercent] = useState(0)
  const [effectiveHP, setEffectiveHP] = useState(0)
  // const [effectiveHPTidy, setEffectiveHPTidy] = useState('')

  const [vestingShares, setVestingShares] = useState(0)
  const [delegatedVestingShares, setDelegatedVestingShares] = useState(0)
  const [receivedVestingShares, setReceivedVestingShares] = useState(0)
  const [reputation, setReputation] = useState(10)

  const { currentDownvoteMana, currentUpvoteMana, totalVest} = computeMana

  useEffect(() => {
    if (!isObjectEmpty(accountReputation)) {
      setReputation(accountReputation.reputation)
    }
  }, [accountReputation])

  const formatVestToHive = (vest) => vestToHive(vest, totalVestingShares, totalVestingFundHive).toFixed(3)

  useEffect(() => {
    if (rcAccount) {

      const result = rcAccount.rc_manabar.current_mana / parseInt(rcAccount.max_rc)
      setRcPercent((result * 100).toFixed(2))
    }
  }, [rcAccount])

  return (
    <div className="well well-xs" style={{paddingLeft: '0.8em', paddingRight: '0.8em'}}>

      <h5 className="text-center" style={{marginBottom: '0.25em'}}>Vote Weight</h5>
      <p className="lead text-center" style={{marginBottom: '0'}}>
        {Math.round(formatVestToHive(totalVest)).toLocaleString()} HP
      </p>

      <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
        {Math.round(formatVestToHive(account.vesting_shares)).toLocaleString()}
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
        {Math.round(((currentUpvoteMana / 100) * formatVestToHive(totalVest))).toLocaleString()}M
        / {Math.round(formatVestToHive(totalVest)).toLocaleString()}M
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
            {getReputation(reputation).toFixed(1)}
          </p>
          <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
            {account.post_count} posts
          </div>
        </div>

        <div className="col col-xs-6">
          <h5 className="text-center" style={{marginBottom: '0.25em'}}>Age</h5>
          <p className="lead text-center" style={{marginBottom: '0'}}>
            {moment(account.created).local().fromNow()}
          </p>
          <div className="text-muted text-center" style={{color: '#bbb', fontSize: '0.8em'}}>
            {moment(account.created).local().format("MMMM YYYY")}
          </div>
        </div>
      </div>

      <p className="text-center text-muted" style={{opacity: '0.5', marginTop: '1.5em'}}>
        view on:
        <a href={`https://hive.blog/@${account.name}`} className="keychainify-checked">hive.blog</a>
        | <a href={`https://peakd.com/@${account.name}`} className="keychainify-checked">peakd</a>
        | <a href={`https://ecency.com/@${account.name}`} className="keychainify-checked">ecency</a>
      </p>
    </div>
  )
}

PowerDetail.propTypes = {
  account: PropTypes.object.isRequired,
  computeMana: PropTypes.object.isRequired,
  totalVestingShares: PropTypes.string.isRequired,
  totalVestingFundHive: PropTypes.string.isRequired,
  rcAccount: PropTypes.object.isRequired,
  accountReputation: PropTypes.object.isRequired,
}

export default PowerDetail
