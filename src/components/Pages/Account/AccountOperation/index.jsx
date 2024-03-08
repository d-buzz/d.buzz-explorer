import PropTypes from "prop-types"
import Operation from "../../../Common/Operation/index.jsx"

const AccountOperation = ({operations, totalVestingShares, totalVestingFundHive}) => {
  return <>
    {operations && operations.map((opx, index) => {

      const {op, block, trx_id, timestamp} = opx[1]
      const [opType, opData] = op

      return <Operation
        key={index}
        transaction_id={trx_id}
        opType={opType}
        index={index}
        headBlockNumber={block}
        opData={opData}
        timestamp={timestamp}
        totalVestingFundHive={totalVestingFundHive}
        totalVestingShares={totalVestingShares}
      />
    })}
  </>
}

AccountOperation.propTypes = {
  operations: PropTypes.array.isRequired,
  totalVestingShares: PropTypes.string.isRequired,
  totalVestingFundHive: PropTypes.string.isRequired,
}

export default AccountOperation
