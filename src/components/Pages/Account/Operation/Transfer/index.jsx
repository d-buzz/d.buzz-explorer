import PropTypes from "prop-types"
import {timeAgo} from "../../../../../utils/helper.js"

const Transfer = ({transaction}) => {

  const {
    op: [
      opType,
      {to, from, memo, amount}
    ],
    block,
    trx_id,
    op_in_trx,
    timestamp,
    virtual_op,
    trx_in_block
  } = transaction

  const trimTrxId = trx_id.substring(0, 9)

  return <div className="op op-mini" id={trx_id}>
    <a
      className="tag tag-hash keychainify-checked"
      href={`/tx/${trx_id}`}>
      {trimTrxId}
    </a>

    <div className="action">
      <a className="account keychainify-checked" href={`/@${from}`}>{`@${from}`}</a> transfer {amount} to <span className="account">{to}</span> <code>{memo}</code>
    </div>

    <div className="foot">
      <a href={`/b/${transaction.block}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </a>
    </div>
  </div>
}

Transfer.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default Transfer
