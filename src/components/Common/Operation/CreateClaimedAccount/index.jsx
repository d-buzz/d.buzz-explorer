import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import {useState} from "react"
import KeyAuths from "../../KeyAuths/index.jsx"
import TrimTxId from "../../TrimTxId/index.jsx"

const CreateClaimedAccount = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    owner,
    active,
    creator,
    posting,
    memo_key,
    extensions,
    json_metadata,
    new_account_name
  } = data

  const [showDetails, setShowDetails] = useState(false)
  const handleDetailsToggle = () => setShowDetails(!showDetails)

  return <div className="op op-collapse op-lead" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <span className="account">{creator}</span>
      {`create claimed account `}
      <a className="account keychainify-checked" href={`/@${new_account_name}`}>{new_account_name}</a>
      <a onClick={handleDetailsToggle} className="keychainify-checked cursor-pointer">(show details)</a>
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
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

CreateClaimedAccount.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default CreateClaimedAccount
