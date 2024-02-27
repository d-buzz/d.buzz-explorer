import PropTypes from "prop-types"
import {timeAgo} from "../../../../../utils/helper.js"
import {useState} from "react"
import KeyAuths from "../../../../Common/KeyAuths/index.jsx"

const AccountUpdate = ({transaction}) => {

  const {
    op: [
      opType,
      {account, posting, memo_key, json_metadata}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  const [showDetails, setShowDetails] = useState(false)

  const handleDetailsToggle = () => {
    setShowDetails(!showDetails)
  }

  return <div className="op op-lead" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <span className="account">{account}</span>{` `}
      update account data {` `}
      <button onClick={handleDetailsToggle} className="keychainify-checked ">(show details)</button>
      {showDetails && (
        <div>
          <table className="table table-condensed hash3 ultra-condensed">
            <tbody>
              <tr>
                <th><samp>account</samp></th>
                <td>{account}</td>
              </tr>
              <KeyAuths auth={posting} authName={'posting'}/>
              <tr>
                <th><samp>memo_key</samp></th>
                <td>{memo_key}</td>
              </tr>
              <tr>
                <th><samp>json_metadata</samp></th>
                <td>{json_metadata ?? `[]`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>

    <div className="foot">
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

AccountUpdate.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default AccountUpdate
