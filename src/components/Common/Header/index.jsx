import BrandIcon from "../../Icon/BrandIcon/index.jsx"

const Header = () => {
  return (
    <header>
      <div className="container" style={{textTransform: 'lowercase'}}>
        <a id="logo" href={'/'} className="keychainify-checked">
          {/*<img src="/images/logo-hive.png" alt="Logo hive"/>*/}
          {/*<BrandIcon height={10}/>*/}
          Explorer
        </a>
        <small>
          <a href="https://signup.hive.io/" className="pull-right keychainify-checked">create account</a>
        </small>

        <form id="search" action="/search" method="post" className="pull-right">
          <input name="query" size="25" type="text" placeholder="Account, transaction, or block."/>
          <button type="submit">
            <i className="glyphicon glyphicon-search"></i>
          </button>
        </form>

        <div style={{display: 'inline-block'}} id="nav">
          <a href="https://hiveblocks.com/witnesses" className="keychainify-checked">witnesses</a>
        </div>
      </div>
    </header>
  )
}

export default Header
