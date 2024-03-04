import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import PowerDetail from "./PowerDetail/index.jsx"
import ResourceCredits from "./ResourceCredits/index.jsx"
import AccountDetail from "./AccountDetail/index.jsx"
import JsonMetadata from "./JsonMetadata/index.jsx"
import KeyHistory from "./KeyHistory/index.jsx"
import Authorities from "./Authorities/index.jsx"
import VotesFor from "./VotesFor/index.jsx"
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
  const {account, loading: accountLoading} = useAccount(trimmedUsername)
  const {accountReputation, loading: accountReputationLoading} = useAccountReputation(trimmedUsername)

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
          <AccountDetail account={account}/>
          <JsonMetadata/>
          <KeyHistory/>
          <Authorities/>
          <VotesFor/>
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
