import {Link, useParams} from "react-router-dom"
import useGetBlocks from "../../../hooks/useGetBlocks.js"
import HomeOperation from "../Home/HomeOperation/index.jsx"
import {formatDateTime} from "../../../utils/helper.js"
import useDynamicGlobalProperties from "../../../hooks/useDynamicGlobalProperties.js"
import PageTitle from "../../Common/PageTitle/index.jsx"

const BlockPage = () => {
  const {block} = useParams()
  const headBlockNumber = parseInt(block)

  const {
    transactions,
    loading,
    timestamp,
    count,
    blockError,
  } = useGetBlocks(headBlockNumber)
  const {
    headBlockNumber: lastestHeadBlockNumber,
    totalVestingShares,
    totalVestingFundHive,
  } = useDynamicGlobalProperties()

  if (loading) {
    return <div className="container">
      <div className='row'>
        Loading...
      </div>
    </div>
  }

  if (blockError) {
    return <div className="container">
      <div className='row'>
        <h2>{JSON.stringify(blockError)}</h2>
        <p>
          The latest head_block_number is <b>{lastestHeadBlockNumber}</b>
        </p>
      </div>
    </div>
  }

  return (
    <div className="container">
      <PageTitle title={`${headBlockNumber} | Dbuzz - Explorer`} />
      <h2>
        <small className="pull-right">
          <Link to={`/b/${headBlockNumber - 1}`} className="keychainify-checked">Prev</Link>
          {` | `}
          <Link to={`/b/${headBlockNumber + 1}`} className="keychainify-checked">Next</Link>
        </small>
        Block <small style={{fontSize: '90%'}}>{headBlockNumber.toLocaleString()}</small>
      </h2>
      <hr/>
      <p className="lead text-muted">
        {`${count} transactions in this block, produced at ${formatDateTime(timestamp)}`}
      </p>

      <HomeOperation
        totalVestingFundHive={totalVestingFundHive}
        totalVestingShares={totalVestingShares}
        transactions={transactions}
        timestamp={timestamp}
        headBlockNumber={headBlockNumber}
      />
    </div>
  )
}

export default BlockPage
