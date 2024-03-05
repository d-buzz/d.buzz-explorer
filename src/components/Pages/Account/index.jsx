import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import PowerDetail from "./PowerDetail/index.jsx"
import ResourceCredits from "./ResourceCredits/index.jsx"
import AccountDetail from "./AccountDetail/index.jsx"
import HiveStat from "./HiveStat.jsx"
import {isObjectEmpty, vestToHive} from "../../../utils/helper.js"
import useDynamicGlobalProperties from "../../../hooks/useDynamicGlobalProperties.js"
import AccountOperation from "../Account/AccountOperation/index.jsx"
import useAccountHistory from "../../../hooks/useAccountHistory.js"
import useFindRcAccount from "../../../hooks/useFindRcAccount.js"
import useAccount from "../../../hooks/useAccount.js"
import useAccountReputation from "../../../hooks/useAccountReputation.js"

const AccountPage = () => {
  const {username} = useParams()
  const trimmedUsername = username.startsWith('@') ? username.slice(1) : username
  const [stat, setStat] = useState([])

  const {
    totalVestingShares,
    totalVestingFundHive,
    loading: dynamicGlobalLoading,
  } = useDynamicGlobalProperties()

  const {accountHistory, loading: accountHistoryLoading} = useAccountHistory(trimmedUsername)
  const {rcAccount, loading: rcAccountLoading} = useFindRcAccount(trimmedUsername)
  const {accountReputation, loading: accountReputationLoading} = useAccountReputation(trimmedUsername)
  const {
    account,
    propertyKeys,
    loading: accountLoading,
    jsonMetadata,
    witnessVotes,
  } = useAccount(trimmedUsername)

  useEffect(() => {
    if (!accountLoading && !isObjectEmpty(account)) {
      const {vesting_shares, balance, hbd_balance, savings_hbd_balance} = account
      setStat([
        vestToHive(vesting_shares, totalVestingShares, totalVestingFundHive),
        parseFloat(balance),
        parseFloat(hbd_balance) + parseFloat(savings_hbd_balance),
      ])
    }
  }, [account, accountLoading, totalVestingFundHive, totalVestingShares])


  if (dynamicGlobalLoading || accountHistoryLoading || rcAccountLoading || accountLoading || accountReputationLoading) {
    return <div className="container">
      <div className="row">
        Loading...
      </div>
    </div>
  }

  if (isObjectEmpty(account)) {
    return <div className="container">
      <div className="row">
        User not found
      </div>
    </div>
  }

  return (
    <div className="container">
      <HiveStat list={stat}/>
      <h2>
        <span className="text-muted">@</span>
        {trimmedUsername}
      </h2>
      <hr/>
      <div className="row">
        <div className="col-md-4">
          <PowerDetail
            account={account}
            rcAccount={rcAccount}
            totalVestingShares={totalVestingShares}
            totalVestingFundHive={totalVestingFundHive}
            accountReputation={accountReputation}
          />
          <ResourceCredits/>
          <AccountDetail account={account} propertyKeys={propertyKeys}/>

          <div className="well well-xs">
            <span className="lead">JSON Metadata</span><br/>
            <code style={{wordWrap: 'break-word', fontSize: '70%', display: 'block'}}>
              {jsonMetadata}
            </code>
          </div>

          <div className="well well-xs">
            <a href="/@iamjco/~owners" className="keychainify-checked">Owner key history</a>
          </div>

          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Authorities</h3>
            </div>
            <div className="panel-body panel-table-plain" style={{paddingTop: '0', paddingBottom: '0'}}>
              {
                ['owner', 'active', 'posting', 'memo_key'].map((key) => {
                  return Object.prototype.hasOwnProperty.call(account, key) && (
                    <pre key={key}>
                      {JSON.stringify(account[key].account_auths)}
                      {JSON.stringify(account[key].key_auths)}
                    </pre>
                  )
                })
              }
            </div>
          </div>

          <div className="well well-xs">
            <span className="lead">{username} votes for:</span>
            <br/>
            <ol>
              {
                witnessVotes && witnessVotes.map((vote, index) => {
                  return <li key={vote}>
                    <a className="account keychainify-checked" href={`/@${vote}`}>
                      {index + 1}. {vote}
                    </a>
                  </li>
                })
              }
            </ol>
          </div>
        </div>

        <div className="col-md-8">
          <AccountOperation
            totalVestingFundHive={totalVestingFundHive}
            totalVestingShares={totalVestingShares}
            operations={accountHistory}
          />
        </div>
      </div>
    </div>
  )
}

export default AccountPage
