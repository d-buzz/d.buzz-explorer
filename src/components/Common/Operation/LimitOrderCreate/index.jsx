import PropTypes from "prop-types"
import {formatDateTime, formatHbdVestHiveToText, timeAgo} from "../../../../utils/helper.js"
import {useState} from "react"
import TrimTxId from "../../TrimTxId/index.jsx"

const LimitCancelCreate = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {
    owner,
    orderid,
    amount_to_sell,
    min_to_receive,
    fill_or_kill,
    expiration
  } = data

  const [showDetails, setShowDetails] = useState(false)
  const handleDetailsToggle = () => setShowDetails(!showDetails)

  return <div className="op op-collapse op-mini" id={trx_id}>
    <TrimTxId trx_id={trx_id} />

    <div className="action">
      <a className="account keychainify-checked" href={`/@${owner}`}>{`${owner}`}</a>
      {` wants ${formatHbdVestHiveToText(min_to_receive)} for ${formatHbdVestHiveToText(amount_to_sell)} `}
      <a onClick={handleDetailsToggle} className="keychainify-checked cursor-pointer">(show details)</a>
      {showDetails && (
        <div>
          <table className="table table-condensed hash3 ultra-condensed">
            <tbody>
              <tr>
                <th><samp>owner</samp></th>
                <td>{owner}</td>
              </tr>
              <tr>
                <th><samp>orderid</samp></th>
                <td><i>{orderid.toLocaleString()}</i></td>
              </tr>
              <tr>
                <th><samp>amount_to_sell</samp></th>
                <td><i>{formatHbdVestHiveToText(amount_to_sell, true)}</i></td>
              </tr>
              <tr>
                <th><samp>min_to_receive</samp></th>
                <td><i>{formatHbdVestHiveToText(min_to_receive, true)}</i></td>
              </tr>
              <tr>
                <th><samp>fill_or_kill</samp></th>
                <td><i>{String(fill_or_kill)}</i></td>
              </tr>
              <tr>
                <th><samp>expiration</samp></th>
                <td>{formatDateTime(expiration)}</td>
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

LimitCancelCreate.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default LimitCancelCreate
