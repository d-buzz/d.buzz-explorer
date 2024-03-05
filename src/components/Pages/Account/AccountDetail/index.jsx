import PropTypes from "prop-types"
import {convertVariableToText, formatDateTime, isDatetime, isNumber} from "../../../../utils/helper.js"

const AccountDetail = ({account, propertyKeys}) => {
  return (
    <div className="well well-xs">
      <table className="table table-condensed ultra-condensed phash5 phash5-nb">
        <tbody>
          {
            propertyKeys.map((key, index) => {

              return Object.prototype.hasOwnProperty.call(account, key) && (
                <tr key={index}>
                  <th>{convertVariableToText(key)}</th>
                  <td>
                    {
                      key === 'downvote_manabar'
                        ? <table className="table table-condensed hash3 ultra-condensed">
                          <tbody>
                            <tr>
                              <th><samp>max_mana</samp></th>
                              <td><i>{(account[key].current_mana || 0).toLocaleString()}</i></td>
                            </tr>
                            <tr>
                              <th><samp>current_mana</samp></th>
                              <td><i>{(account[key].current_mana || 0).toLocaleString()}</i></td>
                            </tr>
                            <tr>
                              <th><samp>current_pct</samp></th>
                              <td><i>0</i></td>
                            </tr>
                          </tbody>
                        </table>
                        : (
                          isDatetime(account[key])
                            ? formatDateTime(account[key])
                            : (
                              isNumber(account[key])
                                ? <i>{account[key].toLocaleString()}</i>
                                : (
                                  key === 'proxied_vsf_votes'
                                    ? account[key].reduce((acc, current) => parseInt(acc) + parseInt(current), 0)
                                    : (
                                      key === 'recovery_account'
                                        ? <a href={`/@${account[key]}`}>{account[key]}</a>
                                        : (
                                          account[key] === ""
                                            ? <samp>{`""`}</samp>
                                            : (
                                              Array.isArray(account[key]) && account[key].length === 0
                                                ? <samp>[]</samp>
                                                : account[key]
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    }
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

AccountDetail.propTypes = {
  account: PropTypes.object.isRequired,
  propertyKeys: PropTypes.array.isRequired,
}

export default AccountDetail
