import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"

const CustomJson = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {id, json, required_auths, required_posting_auths} = data

  const trimTrxId = trx_id.substring(0, 9)
  const authName = required_auths[0] || required_posting_auths[0]

  return <div className="op op-lead" id={trx_id}>
    <a className="tag tag-hash keychainify-checked" href={`/tx/${trx_id}`}>{trimTrxId}</a>

    <div className="action">
      <a className="account keychainify-checked" href={`/@${authName}`}>{authName}</a>
      <span className="account"></span>
      {` custom json `}
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th><samp>required_auths</samp></th>
            <td>
              {required_auths.length > 0
                ? <table className="table table-condensed hash3">
                  <tbody>
                    {required_auths.map((auths, index) => {
                      return <tr key={index}>
                        <th className="idx"><samp>{index}</samp>.</th>
                        <td>{auths}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
                : <samp>[]</samp>
              }
            </td>
          </tr>
          <tr>
            <th><samp>required_posting_auths</samp></th>
            <td>
              {required_posting_auths.length > 0
                ? <table className="table table-condensed hash3">
                  <tbody>
                    {required_posting_auths.map((auths, index) => {
                      return <tr key={index}>
                        <th className="idx"><samp>{index}</samp>.</th>
                        <td>{auths}</td>
                      </tr>
                    })
                    }
                  </tbody>
                </table>
                : <samp>[]</samp>
              }
            </td>
          </tr>
          <tr>
            <th><samp>id</samp></th>
            <td>{id}</td>
          </tr>
          <tr>
            <th><samp>json</samp></th>
            <td>{json}</td>
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

CustomJson.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default CustomJson
