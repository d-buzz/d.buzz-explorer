import {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import CustomButton from "../../../Common/CustomButton/index.jsx";

const PowerDetail = ({account}) => {
  const [currentUpvoteMana, setCurrentUpvoteMana] = useState(0)
  const [currentDownvoteMana, setCurrentDownvoteMana] = useState(0)

  useEffect(() => {
    if (account) {
      try {
        console.log('account', account)
        let delegated = parseFloat(account.delegated_vesting_shares.replace('VESTS', ''))
        let received = parseFloat(account.received_vesting_shares.replace('VESTS', ''))
        let vesting = parseFloat(account.vesting_shares.replace('VESTS', ''))
        let withdrawRate = 0

        if (parseInt(account.vesting_withdraw_rate.replace('VESTS', '')) > 0) {
          withdrawRate = Math.min(
            parseInt(account.vesting_withdraw_rate.replace('VESTS', '')),
            parseInt((account.to_withdraw - account.withdrawn) / 1000000)
          )
        }

        let totalvest = vesting + received - delegated - withdrawRate
        let maxMana = Number(totalvest * Math.pow(10, 6))
        const maxManaDown = maxMana * 0.25

        let delta = (Date.now() / 1000 - account.voting_manabar.last_update_time)
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
        else if(percentageDown < 0) percentageDown = 0

        let percentDown = (Math.min(Math.max(percentageDown, 0), 10000) / 100).toFixed(2)

        setCurrentDownvoteMana(percentDown)
      } catch (error) {
        console.error('Error making the request:', error)
      }

    }
  }, [account])

  return (
    <div className="well well-xs" style={{ paddingLeft: '0.8em', paddingRight: '0.8em' }}>

      <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Vote Weight</h5>
      <p className="lead text-center" style={{ marginBottom: '0' }}>
        11 HP
      </p>

      <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Voting Power</h5>
      <div className="progress" style={{ marginBottom: '0', background: 'linear-gradient(to bottom, #cef 0%, #dff 100%)' }}>
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${currentUpvoteMana}%` }}>
          {currentUpvoteMana}%
        </div>
      </div>

      <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
        10.6M / 11M
      </div>

      <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Downvote Power</h5>
      <div className="progress" style={{ marginBottom: '0', background: 'linear-gradient(to bottom, #cef 0%, #dff 100%)' }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-info"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100" style={{ width: `${currentDownvoteMana}%` }}>
          {currentDownvoteMana}%
        </div>
      </div>

      <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
        2.8M
      </div>

      <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Resource Credits</h5>
      <div className="progress" style={{ marginBottom: '0', background: 'linear-gradient(to bottom, #fd9 0%, #fec 100%)' }}>
        <div className="progress-bar progress-bar-striped progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '11.21%' }}>
        </div>
        <span style={{ paddingLeft: '0.25em', color: '#444', fontSize: '12px' }}>11.21%</span>
      </div>

      <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
        1.6M / 14M
      </div>
      <br />

      <div className="row">
        <div className="col col-xs-6">
          <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Reputation</h5>
          <p className="lead text-center" style={{ marginBottom: '0' }}>
            41.7
          </p>
          <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
            9 posts
          </div>
        </div>

        <div className="col col-xs-6">
          <h5 className="text-center" style={{ marginBottom: '0.25em' }}>Age</h5>
          <p className="lead text-center" style={{ marginBottom: '0' }}>
            96 days
          </p>
          <div className="text-muted text-center" style={{ color: '#bbb', fontSize: '0.8em' }}>
            November 2023
          </div>
        </div>
      </div>

      <p className="text-center text-muted" style={{ opacity: '0.5', marginTop: '1.5em' }}>
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
}

export default PowerDetail
