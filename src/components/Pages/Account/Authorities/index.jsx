
const Authorities = () => {
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Authorities</h3>
      </div>
      <div className="panel-body panel-table-plain" style={{ paddingTop: '0', paddingBottom: '0' }}>
        <table className="table table-condensed ultra-condensed" style={{ margin: '6px 0 8px' }}>
          <thead>
            <tr>
              <th colSpan="2">
                <span style={{ fontSize: '1.2em', fontWeight: '200' }}>Owner</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-right"><span className="glyphicon glyphicon-lock"></span></td>
              <td><samp className="mono" style={{ fontSize: '11px' }}>ST<span></span>M5<span></span>es<span></span>PW<span></span>8z<span></span>CH<span></span>RF<span></span>gU<span></span>mn<span></span>nW<span></span>MC<span></span>SN<span></span>xW<span></span>gw<span></span>6J<span></span>8R<span></span>uL<span></span>SV<span></span>2K<span></span>ie<span></span>Bu<span></span>mz<span></span>Yj<span></span>ZZ<span></span>cN<span></span>GY<span></span>Z</samp></td>
            </tr>
          </tbody>
        </table>

        {/* Additional tables for 'ActiveAuth', 'Posting', and 'Memo' authorities go here */}

      </div>
    </div>
  )
}

export default Authorities
