import {useParams} from "react-router-dom"
import useGetBlocks from "../../../hooks/useGetBlocks.js"
import HomeOperation from "../Home/HomeOperation/index.jsx"
import {formatDateTime} from "../../../utils/helper.js"
import moment from "moment"
import useDynamicGlobalProperties from "../../../hooks/useDynamicGlobalProperties.js"
import {useState} from "react"

const BlockPage = () => {
  const {block} = useParams()
  const headBlockNumber = parseInt(block)

  const {
    transactions,
    loading,
    timestamp,
    count,
    error,
    blocks,
  } = useGetBlocks(headBlockNumber)
  const {
    headBlockNumber: lastestHeadBlockNumber,
    loading: dynamicGlobalLoading,
  } = useDynamicGlobalProperties()
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => setToggle(!toggle)

  if (loading) {
    return <div className="container">
      <div className='row'>
        Loading...
      </div>
    </div>
  }

  if (error) {
    return <div className="container">
      <div className='row'>
        <h2>{error}</h2>
        <p>
          The latest head_block_numer is <b>{lastestHeadBlockNumber}</b>
        </p>
      </div>
    </div>
  }

  return (
    <div className="container">
      <h2>
        <small className="pull-right">
          <a href={`/b/${headBlockNumber - 1}`} className="keychainify-checked">Prev</a>
          {` | `}
          <a href={`/b/${headBlockNumber + 1}`} className="keychainify-checked">Next</a>
        </small>
        Block <small style={{fontSize: '90%'}}>{headBlockNumber.toLocaleString()}</small>
      </h2>
      <hr/>
      <p className="lead text-muted">
        {`${count} transactions in this block, produced at ${formatDateTime(timestamp ?? moment())}`}
      </p>

      <HomeOperation
        totalVestingFundHive={"301789702225.873285 VESTS"}
        totalVestingShares={"173889896.060 HIVE"}
        transactions={transactions}
        timestamp={timestamp}
        headBlockNumber={headBlockNumber}
      />
    </div>
  )
}

export default BlockPage
