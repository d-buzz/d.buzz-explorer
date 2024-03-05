import {useParams} from "react-router-dom"
import useGetTransaction from "../../../hooks/useGetTransaction.js"
import Operation from "../../Common/Operation/index.jsx"
import useGetBlocks from "../../../hooks/useGetBlocks.js"
import {formatDateTime, isDatetime, isNumber} from "../../../utils/helper.js"
import useDynamicGlobalProperties from "../../../hooks/useDynamicGlobalProperties.js"
import PageTitle from "../../Common/PageTitle/index.jsx"

const TransactionPage = () => {
  const {transaction: trxId} = useParams()
  const {
    operations,
    transactionId,
    blockNum,
    loading: transactionLoading,
    transaction,
  } = useGetTransaction(trxId)

  const {
    timestamp,
    loading: blockLoading,
  } = useGetBlocks(blockNum)

  const {
    totalVestingShares,
    totalVestingFundHive,
  } = useDynamicGlobalProperties()

  if (transactionLoading || blockLoading) {
    return <div className="container">
      <div className='row'>
        Loading...
      </div>
    </div>
  }

  return (
    <div className="container">
      <PageTitle title={`Tx ${trxId.substring(0, 9)} | Hive Block ${blockNum} | Dbuzz - Explorer`} />
      <h2>
        <strong>Tx</strong>
        {` `}
        <small className="mono" style={{fontSize: '50%', color: '#999'}}>
          {transactionId}
          <span style={{color: '#ccc'}}>@</span>
          {blockNum}
        </small>
      </h2>
      <p className="lead text-muted">
        {`Included in block `}
        <a href={`/b/${blockNum}#${transactionId}`} className="keychainify-checked">
          <strong>{blockNum.toLocaleString()}</strong>
        </a>
        {` at ${formatDateTime(timestamp)} (UTC)`}
      </p>

      {
        operations.map((opx, index) => {
          const [opType, opData] = opx

          return <Operation
            key={index}
            transaction_id={transactionId}
            opType={opType}
            index={index}
            headBlockNumber={blockNum}
            opData={opData}
            timestamp={timestamp}
            totalVestingFundHive={totalVestingFundHive}
            totalVestingShares={totalVestingShares}
          />
        })
      }
      <hr/>

      <div id="details" style={{display: 'block'}}>
        <h3>Raw transaction</h3>
        <table className="table table-condensed hash3 ultra-condensed">
          <tbody>
            {
              Object.keys(transaction).map((trxKey) => {

                return <tr key={trxKey}>
                  <th><samp>{trxKey}</samp></th>
                  <td>
                    {
                      trxKey === 'operations'
                        ? <table className="table table-condensed hash3">
                          <tbody>
                            {
                              operations.map((opx, index) => {
                                const [opType, opData] = opx

                                return <tr key={index}>
                                  <th className="idx"><samp>{index}.</samp></th>
                                  <td>
                                    <table className="table table-condensed hash3">
                                      <tbody>
                                        <tr>
                                          <th className="idx"><samp>0.</samp></th>
                                          <td>{opType}</td>
                                        </tr>
                                        <tr>
                                          <th className="idx"><samp>1.</samp></th>
                                          <td>
                                            <table className="table table-condensed hash3 ultra-condensed">
                                              <tbody>
                                                {
                                                  Object.keys(opData).map((opDataKey) => {
                                                    return <tr key={opDataKey}>
                                                      <th><samp>{opDataKey}</samp></th>
                                                      <td>
                                                        {
                                                          Array.isArray(opData[opDataKey]) && opData[opDataKey].length === 0
                                                            ? <samp>[]</samp>
                                                            : (
                                                              Array.isArray(opData[opDataKey])
                                                                ? opData[opDataKey].map((authName, index) => {
                                                                  return <table key={index} className="table table-condensed hash3">
                                                                    <tbody>
                                                                      <tr>
                                                                        <th className="idx"><samp>{index}.</samp></th>
                                                                        <td>{authName}</td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                })
                                                                : opData[opDataKey]
                                                            )
                                                        }
                                                      </td>
                                                    </tr>
                                                  })
                                                }
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              })
                            }
                          </tbody>
                        </table>
                        : (
                          isNumber(transaction[trxKey])
                            ? <i>{transaction[trxKey].toLocaleString()}</i>
                            : (
                              trxKey === 'signatures'
                                ? transaction[trxKey].map((signature, index) => {
                                  return <table key={index} className="table table-condensed hash3">
                                    <tbody>
                                      <tr>
                                        <th className="idx"><samp>{index}.</samp></th>
                                        <td>
                                          <samp style={{display: 'inline-block', wordBreak: 'break-all', fontSize: '85%'}}>
                                            {signature}
                                          </samp>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                })
                                : (
                                  Array.isArray(transaction[trxKey]) && transaction[trxKey].length === 0
                                    ? <samp>[]</samp>
                                    : (
                                      isDatetime(transaction[trxKey])
                                        ? formatDateTime(transaction[trxKey])
                                        : (
                                          trxKey === 'transaction_id'
                                            ? <samp style={{display: 'inline-block', wordBreak: 'break-all', fontSize: '85%'}}>
                                              {transaction[trxKey]}
                                            </samp>
                                            : transaction[trxKey]
                                        )
                                    )
                                )
                            )
                        )
                    }
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TransactionPage
