import PropTypes from "prop-types"
import {timeAgo} from "../../../../../utils/helper.js"
import {useState} from "react"
import KeyAuths from "../../../../Common/KeyAuths/index.jsx"

const CreateClaimedAccount = ({transaction}) => {

  const {
    op: [
      opType,
      {owner, active, creator, posting, memo_key, extensions, json_metadata, new_account_name}
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

  return <div className="op op-collapse op-lead" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <span className="account">{creator}</span>
      create claimed account <a className="account keychainify-checked" href={`/@${new_account_name}`}>{new_account_name}</a>
      <button onClick={handleDetailsToggle} className="keychainify-checked ">(show details)</button>
      {showDetails && (
        <div>
          <table className="table table-condensed hash3 ultra-condensed">
            <tbody>
              <tr>
                <th><samp>creator</samp></th>
                <td>{creator}</td>
              </tr>
              <tr>
                <th><samp>new_account_name</samp></th>
                <td>{new_account_name}</td>
              </tr>
              <KeyAuths auth={owner}  authName={'owner'}/>
              <KeyAuths auth={active}  authName={'active'}/>
              <KeyAuths auth={posting}  authName={'posting'}/>
              <tr>
                <th><samp>memo_key</samp></th>
                <td>{memo_key}</td>
              </tr>
              <tr>
                <th><samp>json_metadata</samp></th>
                <td>{json_metadata ?? `[]`}</td>
              </tr>
              <tr>
                <th><samp>extensions</samp></th>
                <td><samp>{extensions.length > 0 ? extensions : `[]`}</samp></td>
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

CreateClaimedAccount.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default CreateClaimedAccount
