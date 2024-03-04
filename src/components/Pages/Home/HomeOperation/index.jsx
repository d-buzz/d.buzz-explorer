import PropTypes from "prop-types"
import Operation from "../../../Common/Operation/index.jsx"

const HomeOperation = ({transactions, totalVestingShares, totalVestingFundHive, timestamp, headBlockNumber}) => {
  return <>
    {transactions && transactions.map((tx) => {
      const {operations, transaction_id} = tx

      return operations.map((op, index) => {
        let [opType, opData] = op
        opData['totalVestingShares'] = totalVestingShares
        opData['totalVestingFundHive'] = totalVestingFundHive

        return <Operation
          key={index}
          opType={opType}
          opData={opData}
          timestamp={timestamp}
          headBlockNumber={headBlockNumber}
          index={index}
          transaction_id={transaction_id}
        />
      })
    })}
  </>
}

HomeOperation.propTypes = {
  transactions: PropTypes.array.isRequired,
  totalVestingShares: PropTypes.string.isRequired,
  totalVestingFundHive: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default HomeOperation
