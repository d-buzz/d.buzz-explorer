import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import {useState} from "react"
import KeyAuths from "../../KeyAuths/index.jsx"
import TrimTxId from "../../TrimTxId/index.jsx"
import {Link} from "react-router-dom"

const AccountUpdate = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {account, posting, memo_key, json_metadata} = data
  const [showDetails, setShowDetails] = useState(false)

  const handleDetailsToggle = () => setShowDetails(!showDetails)

  return <div className="op op-lead" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <span className="account">{account}</span>{` `}
      update account data {` `}
      <a onClick={handleDetailsToggle} className="keychainify-checked cursor-pointer">(show details)</a>
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
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
    </div>
  </div>
}

AccountUpdate.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default AccountUpdate
