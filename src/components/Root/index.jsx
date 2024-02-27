import {Outlet} from 'react-router-dom'
import Header from "../Common/Header/index.jsx"

const Root = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}


export default Root