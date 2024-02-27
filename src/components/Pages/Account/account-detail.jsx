
const AccountDetail = () => {
  return (
    <div className="well well-xs">
      <table className="table table-condensed ultra-condensed phash5 phash5-nb">
        <tbody>
          <tr>
            <th>Id</th>
            <td><i>2,478,415</i></td>
          </tr>
          <tr>
            <th>Name</th>
            <td>iamjco</td>
          </tr>
          <tr>
            <th>Posting json metadata</th>
            <td>{`{"profile":{"profile_image":"https://images.d.buzz/dbuzz-image-1702085740913.png","cover_image":"https://images.d.buzz/dbuzz-image-1702085714062.png","website":"","version":2}}`}</td>
          </tr>
          {/* ... Other table rows ... */}
          <tr>
            <th>Reputation</th>
            <td><i>70,732,950,458</i></td>
          </tr>
          <tr>
            <th>Sbd balance</th>
            <td><i>0.373 HBD</i></td>
          </tr>
          <tr>
            <th>Savings sbd balance</th>
            <td><i>0.000 HBD</i></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AccountDetail
