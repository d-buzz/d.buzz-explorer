import PropTypes from "prop-types"
import {timeAgo} from "../../../../../utils/helper.js"

const CustomJson = ({transaction}) => {

  const {
    op: [
      opType,
      {id, json, required_auths, required_posting_auths}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-lead" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <span className="account">{required_posting_auths}</span> custom json {` `}
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th><samp>required_auths</samp></th>
            <td><samp>{required_auths ?? `[]`}</samp></td>
          </tr>
          <tr>
            <th><samp>required_posting_auths</samp></th>
            <td>
              <table className="table table-condensed hash3">
                <tbody>
                  <tr>
                    <th className="idx"><samp>0</samp>.</th>
                    <td>{required_posting_auths}</td>
                  </tr>
                </tbody>
              </table>
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
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

CustomJson.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default CustomJson
