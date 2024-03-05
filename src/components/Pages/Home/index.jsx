import './style.css'
import {formatDateTime, formatHbdVestHiveToText} from "../../../utils/helper.js"
import useDynamicGlobalProperties from "../../../hooks/useDynamicGlobalProperties.js"
import useGetBlocks from "../../../hooks/useGetBlocks.js"
import HomeOperation from "./HomeOperation/index.jsx"
import PageTitle from "../../Common/PageTitle/index.jsx"

const HomePage = () => {
  const {
    headBlockNumber,
    currentTime,
    totalVestingShares,
    totalVestingFundHive,
    currentWitness,
    currentSupply,
    currentHbdSupply,
    virtualSupply,
    loading: dynamicGlobalLoading,
  } = useDynamicGlobalProperties()

  const {
    timestamp,
    transactions,
    loading: blockLoading,
  } = useGetBlocks(headBlockNumber)

  if (dynamicGlobalLoading && blockLoading && !headBlockNumber) {
    return <div className="container">
      <div className='row'>
        Loading...
      </div>
    </div>
  }

  return (
    <div className="container">
      <PageTitle title={'Latest block | Dbuzz - Explorer'} />
      <div className='row'>
        <div className="col-md-3 col-md-push-9 dgp">
          <h4>Properties</h4>
          <div className="wellx xwell-sm">
            <hr/>
            <h3>Market cap / feed price</h3>
            <div className="val"><samp>$199,609,451<br/>@ $0.39/HIVE</samp></div>
            <hr/>
            <h3>Blockchain time</h3>
            <div className="val"><samp>{formatDateTime(currentTime)}</samp></div>
            <hr/>
            <h3>Head block</h3>
            <div className="val">
              <samp>
                <a href={`/b/${headBlockNumber}`} className="keychainify-checked">
                  #{headBlockNumber.toLocaleString()}
                </a>
              </samp>
            </div>
            <hr/>
            <h3>Current witness</h3>
            <div className="val">
              <samp>
                <a href={`/@${currentWitness}`} className="keychainify-checked">@{currentWitness}</a>
              </samp>
            </div>
            <hr/>
            <h3>Rewards fund</h3>
            <div className="val"><samp>914,496 HIVE<br/>≈ $356,653</samp></div>
            <hr/>
            <h3>Current supply</h3>
            <div className="val">
              <samp>
                {formatHbdVestHiveToText(currentSupply, true)}
                <br/>
                {formatHbdVestHiveToText(currentHbdSupply, true)}
                <br/>
                ≈ {formatHbdVestHiveToText(virtualSupply, true)}
              </samp>
            </div>
            <hr/>
            <h3>Witness uptime</h3>
            <div className="val"><samp>100%</samp></div>
            <hr/>
            <h3>Last irreversible block num</h3>
            <div className="val">
              <samp>
                <a href={`/b/${headBlockNumber}`} className="keychainify-checked">
                  #{headBlockNumber.toLocaleString()}
                </a>
              </samp>
            </div>
            <hr/>
            <h3>Init hbd supply</h3>
            <div className="val"><samp><i>0.000 HBD</i></samp></div>
            <hr/>
            <h3>Current hbd supply</h3>
            <div className="val"><samp><i>34,286,661.434 HBD</i></samp></div>
            <hr/>
            <h3>Total vesting fund hive</h3>
            <div className="val"><samp><i>173,889,586.802 HIVE</i></samp></div>
            <hr/>
            <h3>Total reward fund hive</h3>
            <div className="val"><samp><i>0.000 HIVE</i></samp></div>
            <hr/>
            <h3>Pending rewarded vesting hive</h3>
            <div className="val"><samp><i>496,489.996 HIVE</i></samp></div>
            <hr/>
            <h3>Hbd interest rate</h3>
            <div className="val"><samp><i>2,000</i></samp></div>
            <hr/>
            <h3>Hbd print rate</h3>
            <div className="val"><samp><i>10,000</i></samp></div>
            <hr/>
            <h3>Required actions partition percent</h3>
            <div className="val"><samp><i>0</i></samp></div>
            <hr/>
            <h3>Available account subsidies</h3>
            <div className="val"><samp>1,288</samp></div>
            <hr/>
            <h3>Hbd stop percent</h3>
            <div className="val"><samp><i>2,000</i></samp></div>
            <hr/>
            <h3>Hbd start percent</h3>
            <div className="val"><samp><i>2,000</i></samp></div>
            <hr/>
            <h3>Next maintenance time</h3>
            <div className="val"><samp>2024-03-04 04:36:09</samp></div>
            <hr/>
            <h3>Last budget time</h3>
            <div className="val"><samp>2024-03-04 03:36:09</samp></div>
            <hr/>
            <h3>Next daily maintenance time</h3>
            <div className="val"><samp>2024-03-04 19:31:30</samp></div>
            <hr/>
            <h3>Content reward percent</h3>
            <div className="val"><samp><i>6,500</i></samp></div>
            <hr/>
            <h3>Vesting reward percent</h3>
            <div className="val"><samp><i>1,500</i></samp></div>
            <hr/>
            <h3>Proposal fund percent</h3>
            <div className="val"><samp><i>1,000</i></samp></div>
            <hr/>
            <h3>Dhf interval ledger</h3>
            <div className="val"><samp><i>131.028 HBD</i></samp></div>
            <hr/>
            <h3>Downvote pool percent</h3>
            <div className="val"><samp><i>2,500</i></samp></div>
            <hr/>
            <h3>Current remove threshold</h3>
            <div className="val"><samp><i>200</i></samp></div>
            <hr/>
            <h3>Early voting seconds</h3>
            <div className="val"><samp><i>86,400</i></samp></div>
            <hr/>
            <h3>Mid voting seconds</h3>
            <div className="val"><samp><i>172,800</i></samp></div>
            <hr/>
            <h3>Max consecutive recurrent transfer failures</h3>
            <div className="val"><samp><i>10</i></samp></div>
            <hr/>
            <h3>Max recurrent transfer end date</h3>
            <div className="val"><samp><i>730</i></samp></div>
            <hr/>
            <h3>Min recurrent transfers recurrence</h3>
            <div className="val"><samp><i>24</i></samp></div>
            <hr/>
            <h3>Max open recurrent transfers</h3>
            <div className="val"><samp><i>255</i></samp></div>
          </div>

          <hr/>
          <br/>

          <h4>Endpoint Version</h4>
          <p>https://api.openhive.network @ 1.27.4</p>
          <br/><br/>
        </div>
        <div className='col-md-9 col-md-pull-3' style={{overflow: "hidden", height: "100%"}}>
          <h4>
            Hive blockchain recent transactions
            <span style={{fontWeight: 'normal'}} className="text-muted">(last 5 seconds)</span>
          </h4>

          <HomeOperation
            totalVestingFundHive={totalVestingFundHive}
            totalVestingShares={totalVestingShares}
            transactions={transactions}
            headBlockNumber={headBlockNumber}
            timestamp={timestamp}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
