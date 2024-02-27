const ResourceCreditsComponent = () => {
  return (
    <div className="well well-xs">
      <span className="lead">Resource Credits</span><br />
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th><samp>max_mana</samp></th>
            <td><i>24,613,228,055</i></td>
          </tr>
          <tr>
            <th><samp>current_mana</samp></th>
            <td><i>2,758,094,031</i></td>
          </tr>
          <tr>
            <th><samp>current_pct</samp></th>
            <td><i>11.21</i></td>
          </tr>
          <tr>
            <th><samp>adjustment</samp></th>
            <td>3.023 HP</td>
          </tr>
        </tbody>
      </table>

      Enough credits for approximately:<br />
      1 comments (12 after recharge) <br />
      21 votes (189 after recharge) <br />
      8 transfers (73 after recharge) <br />

      <i>100% recharged <time className="timeago2" dateTime="2024-03-02T17:49:30+01:00" title="2024-03-02 17:49:30+01:00">in 3 days</time></i><br />

      <br />
      Your recharge rate is 2.8M per day.
      Approx costs:
      <table className="table table-condensed hash3 ultra-condensed">
        <tbody>
          <tr>
            <th><samp>comment</samp></th>
            <td>1.17M</td>
          </tr>
          <tr>
            <th><samp>vote</samp></th>
            <td>0.075M</td>
          </tr>
          <tr>
            <th><samp>transfer</samp></th>
            <td>0.19M</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResourceCreditsComponent
