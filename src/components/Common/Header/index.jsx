import BrandIcon from "../../Icon/BrandIcon/index.jsx"
import SearchBar from "../SearchBar/index.jsx"

const Header = () => {
  return (
    <header>
      <div className="container" style={{textTransform: 'lowercase'}}>
        <a id="logo" href='https://d.buzz/' className="keychainify-checked ml-1" style={{display: 'inline-block'}} >
          {/*<img src="https://hiveblocks.com/images/logo-hive.png" alt="Logo hive"/>*/}
          <BrandIcon />
          {/*Explorer*/}
        </a>
        <small>
          <a href="https://signup.hive.io/" className="pull-right keychainify-checked">create account</a>
        </small>

        <SearchBar />

        <div style={{display: 'inline-block'}} id="nav">
          <a href="https://peakd.com/witnesses" className="keychainify-checked">witnesses</a>
        </div>
      </div>
    </header>
  )
}

export default Header
