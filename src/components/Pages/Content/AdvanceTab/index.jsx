import {formatDateTime} from "../../../../utils/helper.js"
import {useState} from "react"
import PropTypes from "prop-types"

const AdvanceTab = ({propertyKeys, content, activeVotes}) => {
  const [toggleVoteDetails, setToggleVoteDetails] = useState(false)
  const [toggleProperties, setToggleProperties] = useState(false)

  return <div className="advanced" style={{padding: '0 5px', borderTop: '1px solid #DDD'}}>
    <a
      onClick={() => setToggleProperties(!toggleProperties)}
      style={{padding: '0 2em 0 0', fontSize: '0.8em', color: '#666'}}
      className="keychainify-checked cursor-pointer">
      properties (23)
    </a>

    {toggleProperties && (
      <div id="properties" style={{margin: '5px'}}>
        <table className="table table-condensed hash3 ultra-condensed">
          <tbody>
            {
              propertyKeys.map((key, index) => {
                return Object.prototype.hasOwnProperty.call(content, key) && (
                  <tr key={index}>
                    <th><samp>{key}</samp></th>
                    <td>{JSON.stringify(content[key])}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )}

    <a
      onClick={() => setToggleVoteDetails(!toggleVoteDetails)}
      style={{padding: '0 2em 0 0', fontSize: '0.8em', color: '#666'}}
      className="keychainify-checked cursor-pointer">
      vote details ({activeVotes.length})
    </a>
    {toggleVoteDetails && (
      <table id="vote-details" className="table table-condensed ultra-condensed" style={{
        padding: 0,
        margin: '5px',
        overflow: 'hidden',
        width: '700px',
        fontSize: '90%'
      }}>
        <tbody>
          <tr>
            <th>voter</th>
            <th className="text-right">weight</th>
            <th className="text-center">wgt%</th>
            <th className="text-right">rshares</th>
            <th className="text-center">pct</th>
            <th>time</th>
          </tr>
          {activeVotes.map((voteDetail, index) => (
            <tr key={index}>
              <td>{voteDetail.voter}</td>
              <td align="right">
              0
                <m> B</m>
              </td>
              <td className="text-center"></td>
              <td align="right">{voteDetail.rshares.toLocaleString()}</td>
              <td className="text-center">{voteDetail.percent / 100}%</td>
              <td>{formatDateTime(voteDetail.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
}

AdvanceTab.propTypes = {
  propertyKeys: PropTypes.array.isRequired,
  content: PropTypes.object.isRequired,
  activeVotes: PropTypes.array.isRequired,
}

export default AdvanceTab
