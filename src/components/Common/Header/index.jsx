import BrandIcon from "../../Icon/BrandIcon/index.jsx"
import SearchBar from "../SearchBar/index.jsx"

const Header = () => {
  return (
    <header>
      <div className="container" style={{textTransform: 'lowercase'}}>
        <a id="logo" href='https://d.buzz/' className="keychainify-checked" style={{display: 'inline-block'}}>
          {/*<img src="https://hiveblocks.com/images/logo-hive.png" alt="Logo hive"/>*/}
          <BrandIcon/>

        </a>
        <a href={'/'} style={{fontSize: '15px', position: 'relative', left: '-3%'}}>
          <span style={{fontSize: '15px'}}>
            Explorer
          </span>
        </a>
        <small>
          <a href="https://join.d.buzz/" className="pull-right keychainify-checked">create account</a>
        </small>

        <SearchBar/>

        <div style={{display: 'inline-block'}} id="nav">
          <a href="https://peakd.com/witnesses" className="keychainify-checked">witnesses</a>
        </div>
      </div>
    </header>
  )
}

export default Header
