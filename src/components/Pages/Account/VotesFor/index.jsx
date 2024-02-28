import {useParams} from "react-router-dom";

const VotesFor = () => {

  const {username} = useParams()

  return <div className="well well-xs">
    <span className="lead">{username} votes for:</span>
    <br/>
    <ol>
      <li><a className="account keychainify-checked" href="/@anyx">WORKING</a></li>
      {/*<li><a className="account keychainify-checked" href="/@anyx">anyx</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@arcange">arcange</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@ausbitbank">ausbitbank</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@blocktrades">blocktrades</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@curie">curie</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@drakos">drakos</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@emrebeyler">emrebeyler</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@good-karma">good-karma</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@gtg">gtg</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@guiltyparties">guiltyparties</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@jesta">jesta</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@leofinance">leofinance</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@mahdiyari">mahdiyari</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@pharesim">pharesim</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@roelandp">roelandp</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@sagarkothari88">sagarkothari88</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@someguy123">someguy123</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@steemitboard">steemitboard</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@steempeak">steempeak</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@thecryptodrive">thecryptodrive</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@themarkymark">themarkymark</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@therealwolf">therealwolf</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@threespeak">threespeak</a></li>*/}
      {/*<li><a className="account keychainify-checked" href="/@yabapmatt">yabapmatt</a></li>*/}
    </ol>
  </div>

}

export default VotesFor
