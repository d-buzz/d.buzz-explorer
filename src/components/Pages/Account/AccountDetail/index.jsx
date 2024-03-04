import PropTypes from "prop-types"
import {formatDateTime} from "../../../../utils/helper.js"

const AccountDetail = ({account}) => {
  return (
    <div className="well well-xs">
      <table className="table table-condensed ultra-condensed phash5 phash5-nb">
        <tbody>
          <tr>
            <th>Id</th>
            <td><i>{(account.id)}</i></td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{account.name}</td>
          </tr>
          <tr>
            <th>Posting json metadata</th>
            <td>{account.posting_json_metadata}</td>
          </tr>
          <tr>
            <th>Proxy</th>
            <td>{account.proxy || `""`}</td>
          </tr>
          <tr>
            <th>Previous owner update</th>
            <td>{formatDateTime(account.previous_owner_update)}</td>
          </tr>
          <tr>
            <th>Last owner update</th>
            <td>{formatDateTime(account.last_owner_update)}</td>
          </tr>
          <tr>
            <th>Last account update</th>
            <td>{formatDateTime(account.last_account_update)}</td>
          </tr>
          <tr>
            <th>Created</th>
            <td>{formatDateTime(account.created)}</td>
          </tr>
          <tr>
            <th>Mined</th>
            <td><i>{String(account.mined)}</i></td>
          </tr>
          <tr>
            <th>Recovery account</th>
            <td>{String(account.recovery_account)}</td>
          </tr>
          <tr>
            <th>Last account recovery</th>
            <td>{String(account.last_account_recovery)}</td>
          </tr>
          <tr>
            <th>Reset account</th>
            <td>{String(account.reset_account)}</td>
          </tr>
          <tr>
            <th>Post count</th>
            <td><i>{account.post_count}</i></td>
          </tr>
          <tr>
            <th>Can vote</th>
            <td><i>{String(account.can_vote)}</i></td>
          </tr>
          <tr>
            <th>Downvote manabar</th>
            <td>
              <table className="table table-condensed hash3 ultra-condensed">
                <tbody>
                  <tr>
                    <th><samp>max_mana</samp></th>
                    <td><i>{(account?.downvote_manabar?.current_mana || 0).toLocaleString()}</i></td>
                  </tr>
                  <tr>
                    <th><samp>current_mana</samp></th>
                    <td><i>{(account?.downvote_manabar?.current_mana || 0).toLocaleString()}</i></td>
                  </tr>
                  <tr>
                    <th><samp>current_pct</samp></th>
                    <td><i>0</i></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th>Balance</th>
            <td><i>{account.balance}</i></td>
          </tr>
          <tr>
            <th>Savings balance</th>
            <td><i>{account.savings_balance}</i></td>
          </tr>
          <tr>
            <th>Hbd balance</th>
            <td><i>{account.hbd_balance}</i></td>
          </tr>
          <tr>
            <th>Hbd seconds</th>
            <td>{account.hbd_seconds}</td>
          </tr>
          <tr>
            <th>Hbd seconds last update</th>
            <td>{formatDateTime(account.hbd_seconds_last_update)}</td>
          </tr>
          <tr>
            <th>Hbd last interest payment</th>
            <td>{formatDateTime(account.hbd_last_interest_payment)}</td>
          </tr>
          <tr>
            <th>Savings hbd balance</th>
            <td><i>{account.savings_hbd_balance}</i></td>
          </tr>
          <tr>
            <th>Savings hbd seconds</th>
            <td>{account.savings_hbd_seconds}</td>
          </tr>
          <tr>
            <th>Savings hbd seconds last update</th>
            <td>{formatDateTime(account.savings_hbd_seconds_last_update)}</td>
          </tr>
          <tr>
            <th>Savings hbd last interest payment</th>
            <td>{formatDateTime(account.savings_hbd_last_interest_payment)}</td>
          </tr>
          <tr>
            <th>Savings withdraw requests</th>
            <td><i>{account.savings_withdraw_requests}</i></td>
          </tr>
          <tr>
            <th>Reward hbd balance</th>
            <td><i>{account.reward_hbd_balance}</i></td>
          </tr>
          <tr>
            <th>Reward hive balance</th>
            <td><i>{account.reward_hive_balance}</i></td>
          </tr>
          <tr>
            <th>Reward vesting balance</th>
            <td><i>{account.reward_vesting_balance}</i></td>
          </tr>
          <tr>
            <th>Reward vesting hive</th>
            <td><i>{account.reward_vesting_hive}</i></td>
          </tr>
          <tr>
            <th>Vesting shares</th>
            <td><i>{account.vesting_shares}</i></td>
          </tr>
          <tr>
            <th>Delegated vesting shares</th>
            <td><i>{account.delegated_vesting_shares}</i></td>
          </tr>
          <tr>
            <th>Received vesting shares</th>
            <td><i>{account.received_vesting_shares}</i></td>
          </tr>
          <tr>
            <th>Vesting withdraw rate</th>
            <td><i>{account.vesting_withdraw_rate}</i></td>
          </tr>
          <tr>
            <th>Post voting power</th>
            <td><i>{account.post_voting_power}</i></td>
          </tr>
          <tr>
            <th>Next vesting withdrawal</th>
            <td>{formatDateTime(account.next_vesting_withdrawal)}</td>
          </tr>
          <tr>
            <th>Withdrawn</th>
            <td><i>{(account.withdrawn || 0).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th>To withdraw</th>
            <td><i>{(account.to_withdrawn || 0).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th>Withdraw routes</th>
            <td><i>{(account.withdraw_routes || 0).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th>Pending transfers</th>
            <td><i>{(account.pending_transfers || 0).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th>Curation rewards</th>
            <td><i>{(account.curation_rewards || 0).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th>Posting rewards</th>
            <td><i>{(account.posting_rewards || 0).toLocaleString()}</i></td>
          </tr>
          <tr>
            <th>Proxied vsf votes</th>
            <td><i>{Array.isArray(account.proxied_vsf_votes) ? account.proxied_vsf_votes.reduce((acc, current) => acc + current, 0) : 0} VESTS</i></td>
          </tr>
          <tr>
            <th>Witnesses voted for</th>
            <td><i>{account.witnesses_voted_for}</i></td>
          </tr>
          <tr>
            <th>Last post</th>
            <td>{formatDateTime(account.last_post)}</td>
          </tr>
          <tr>
            <th>Last root post</th>
            <td>{formatDateTime(account.last_root_post)}</td>
          </tr>
          <tr>
            <th>Last vote time</th>
            <td>{formatDateTime(account.last_vote_time)}</td>
          </tr>
          <tr>
            <th>Pending claimed accounts</th>
            <td><i>{account.pending_claimed_accounts}</i></td>
          </tr>
          <tr>
            <th>Governance vote expiration ts</th>
            <td>{formatDateTime(account.governance_vote_expiration)}</td>
          </tr>
          <tr>
            <th>Delayed votes</th>
            <td><samp>[]</samp></td>
          </tr>
          <tr>
            <th>Open recurrent transfers</th>
            <td><i>{account.open_recurrent_transfers}</i></td>
          </tr>
          <tr>
            <th>Reputation</th>
            <td><i>{account.reputation}</i></td>
          </tr>
          <tr>
            <th>Sbd balance</th>
            <td><i>{account.sbd_balance}</i></td>
          </tr>
          <tr>
            <th>Savings sbd balance</th>
            <td><i>{account.savings_sbd_balance}</i></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

AccountDetail.propTypes = {
  account: PropTypes.object.isRequired,
}

export default AccountDetail
