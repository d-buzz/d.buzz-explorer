import PropTypes from "prop-types"
import {timeAgo} from "../../../../utils/helper.js"
import {useState} from "react"
import TrimTxId from "../../TrimTxId/index.jsx"
import {Link} from "react-router-dom"

const WitnessSetProperties = ({data, trx_id, timestamp, headBlockNumber}) => {
  const {extensions, owner, props: opProps} = data

  const [showDetails, setShowDetails] = useState(false)
  const handleDetailsToggle = () => setShowDetails(!showDetails)

  return <div className="op op-collapse op-mini" id={trx_id}>
    <TrimTxId trx_id={trx_id} />


    <div className="action">
      <Link className="account keychainify-checked" to={`/@${owner}`}>{`${owner}`}</Link>
      {` witness_set_properties `}
      <a onClick={handleDetailsToggle} className="keychainify-checked cursor-pointer">(show details)</a>
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th><samp>owner</samp></th>
            <td>{owner}</td>
          </tr>
          <tr>
            <th><samp>props</samp></th>
            <td>
              <table className="table table-condensed hash3">
                <tbody>
                  {opProps && opProps.map((prop, index) => {
                    const [key, value] = prop

                    return <tr key={index}>
                      <th className="idx"><samp>{index}.</samp></th>
                      <td>
                        <table className="table table-condensed hash3">
                          <tbody>
                            <tr>
                              <th className="idx"><samp>0.</samp></th>
                              <td>{key}</td>
                            </tr>
                            <tr>
                              <th className="idx"><samp>1.</samp></th>
                              <td>{value}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </td>

          </tr>
          <tr>
            <th><samp>extensions</samp></th>
            <td>
              {
                extensions.length > 0
                  ? extensions
                  : <samp>[]</samp>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="foot">
      <Link to={`/b/${headBlockNumber}#${trx_id}`} className="keychainify-checked">
        <time className="timeago2" dateTime={timestamp} title={timestamp}>{timeAgo(timestamp)}</time>
      </Link>
    </div>
  </div>
}

WitnessSetProperties.propTypes = {
  data: PropTypes.object.isRequired,
  trx_id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  headBlockNumber: PropTypes.number.isRequired,
}

export default WitnessSetProperties
