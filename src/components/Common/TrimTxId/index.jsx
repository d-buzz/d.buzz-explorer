import PropTypes from "prop-types"

const TrimTxId = ({trx_id}) => {
  const trimTrxId = trx_id.substring(0, 9)

  return <a className="tag tag-hash keychainify-checked" href={`/tx/${trx_id}`}>{trimTrxId}</a>
}

TrimTxId.propTypes = {
  trx_id: PropTypes.string.isRequired,
}

export default TrimTxId
