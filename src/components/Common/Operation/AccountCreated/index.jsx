import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"

const AccountCreated = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {creator, new_account_name, initial_delegation, initial_vesting_shares} = data
  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-lead" id={trx_id}>
    <a className="tag tag-hash keychainify-checked" href={`/tx/${trx_id}`}>{trimTrxId}</a>

    <div className="action">
      <span className="account">{creator}</span> account_created
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th><samp>new_account_name</samp></th>
            <td>{new_account_name}</td>
          </tr>
          <tr>
            <th><samp>creator</samp></th>
            <td>{creator}</td>
          </tr>
          <tr>
            <th><samp>initial_vesting_shares</samp></th>
            <td><i>{initial_vesting_shares}</i></td>
          </tr>
          <tr>
            <th><samp>initial_delegation</samp></th>
            <td><i>{initial_delegation}</i></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="foot">
      <a href={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

AccountCreated.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default AccountCreated
