import {Link, useParams, useSearchParams} from "react-router-dom"
import {useEffect, useState} from "react"
import PowerDetail from "./PowerDetail/index.jsx"
import ResourceCredits from "./ResourceCredits/index.jsx"
import AccountDetail from "./AccountDetail/index.jsx"
import HiveStat from "./HiveStat.jsx"
import {convertVariableToText, isObjectEmpty, usernameWithoutAt, vestToHive} from "../../../utils/helper.js"
import useDynamicGlobalProperties from "../../../hooks/useDynamicGlobalProperties.js"
import AccountOperation from "../Account/AccountOperation/index.jsx"
import useAccountHistory from "../../../hooks/useAccountHistory.js"
import useFindRcAccount from "../../../hooks/useFindRcAccount.js"
import useAccount from "../../../hooks/useAccount.js"
import useAccountReputation from "../../../hooks/useAccountReputation.js"

const AccountPage = () => {
  const {username} = useParams()
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get('page') || 1

  const trimmedUsername = usernameWithoutAt(username)
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
    computeMana,
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
            computeMana={computeMana()}
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
            <Link to="/@iamjco/~owners" className="keychainify-checked">Owner key history</Link>
          </div>

          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">Authorities</h3>
            </div>
            <div className="panel-body panel-table-plain" style={{paddingTop: '0', paddingBottom: '0'}}>
              {
                ['owner', 'active', 'posting', 'memo_key'].map((key) => {
                  return Object.prototype.hasOwnProperty.call(account, key) && (
                    <table key={key} className="table table-condensed ultra-condensed" style={{margin: '6px 0 8px'}}>
                      <thead>
                        <tr>
                          <th colSpan="2">
                            <span style={{fontSize: '1.2em', fontWeight: '200'}}>{convertVariableToText(key)}</span>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="text-right"><span className="glyphicon glyphicon-lock"></span></td>
                          <td>
                            <samp className="mono"  style={{fontSize: '11px'}}>
                              {JSON.stringify(account[key])}
                            </samp>
                          </td>
                        </tr>
                      </tbody>

                    </table>
                  )
                })
              }
            </div>
          </div>

          {
            witnessVotes.length > 0 && (
              <div className="well well-xs">
                <span className="lead">{username} votes for:</span>
                <br/>
                <ol>
                  {
                    witnessVotes.map((vote) => {
                      return <li key={vote}>
                        <Link className="account keychainify-checked" to={`/@${vote}`}>
                          {vote}
                        </Link>
                      </li>
                    })
                  }
                </ol>
              </div>
            )
          }

        </div>

        <div className="col-md-8">
          <AccountOperation
            totalVestingFundHive={totalVestingFundHive}
            totalVestingShares={totalVestingShares}
            operations={accountHistory}
          />

          <div className="text-center">
            <nav>
              <ul className="pagination">
                <li>
                  <Link
                    to={`/${username}?page=${parseInt(currentPage) === 1 ? currentPage : parseInt(currentPage) - 1}`}
                    aria-label="Previous"
                    className="keychainify-checked">
                    <span aria-hidden="true">«</span>
                  </Link>
                </li>
                <li className="active">
                  <Link to={`/${username}?page=${currentPage}`} className="keychainify-checked">{currentPage}</Link>
                </li>
                <li>
                  <Link
                    to={`/${username}?page=${parseInt(currentPage) + 1}`}
                    aria-label="Next"
                    className="keychainify-checked">
                    <span aria-hidden="true">»</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
