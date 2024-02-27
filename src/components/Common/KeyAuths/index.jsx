import PropTypes from "prop-types"

const OwnerAuth = ({auth, authName}) => {

  console.log(auth)

  return <tr>
    <th><samp>{authName}</samp></th>
    <td>
      <table className="table table-condensed hash3 ultra-condensed">
        {/* Owner Weight Threshold */}
        <tbody>
          <tr>
            <th><samp>weight_threshold</samp></th>
            <td><i>{auth.weight_threshold}</i></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th><samp>account_auths</samp></th>
            <td>
              <table className="table table-condensed hash3">
                <tbody>
                  {
                    auth.account_auths.length > 0
                      ? auth.account_auths.map((item, index) => {

                        return <tr key={index}>
                          <th className="idx"><samp>{index}</samp>.</th>
                          <td>
                            <table className="table table-condensed hash3">
                              <tbody>
                                <tr>
                                  <th className="idx"><samp>0</samp>.</th>
                                  <td>{item[0]}</td>
                                </tr>
                                <tr>
                                  <th className="idx"><samp>1</samp>.</th>
                                  <td><i>{item[1]}</i></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      })
                      : <samp>{`[]`}</samp>
                  }

                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
        {/* Owner Key Auths */}
        <tbody>
          <tr>
            <th><samp>key_auths</samp></th>
            <td>
              <table className="table table-condensed hash3">
                <tbody>
                  {
                    auth.key_auths.length > 0
                      ? auth.key_auths.map((item, index) => {

                        return <tr key={index}>
                          <th className="idx"><samp>0</samp>.</th>
                          <td>
                            <table className="table table-condensed hash3">
                              <tbody>
                                <tr>
                                  <th className="idx"><samp>0</samp>.</th>
                                  <td>{item[0]}</td>
                                </tr>
                                <tr>
                                  <th className="idx"><samp>1</samp>.</th>
                                  <td><i>{item[1]}</i></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      })
                      : <samp>{`[]`}</samp>
                  }

                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
}

OwnerAuth.propTypes = {
  auth: PropTypes.object.isRequired,
  authName: PropTypes.string.isRequired
}

export default OwnerAuth
