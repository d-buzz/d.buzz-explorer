import BrandIcon from "../../Icon/BrandIcon/index.jsx"
import SearchBar from "../SearchBar/index.jsx"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="container" style={{textTransform: 'lowercase'}}>
        <Link id="logo" to='https://d.buzz/' className="keychainify-checked" style={{display: 'inline-block', marginLeft: '1%'}}>
          {/*<img src="https://hiveblocks.com/images/logo-hive.png" alt="Logo hive"/>*/}
          <BrandIcon/>

        </Link>
        <Link to={'/'} style={{fontSize: '15px', position: 'relative', left: '-3%'}}>
          <span style={{fontSize: '15px'}}>
            Explorer
          </span>
        </Link>
        <small>
          <Link to="https://join.d.buzz/" className="pull-right keychainify-checked">create account</Link>
        </small>

        <SearchBar/>

        <div style={{display: 'inline-block'}} id="nav">
          <Link to="https://peakd.com/witnesses" className="keychainify-checked">witnesses</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
