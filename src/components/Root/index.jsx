import {Outlet} from 'react-router-dom'
import Header from "../Common/Header/index.jsx"
import PageTitle from "../Common/PageTitle/index.jsx"

const Root = () => {
  return (
    <>
      <PageTitle title={'Hive Explorer'} />
      <Header />
      <main id={'body'}>
        <Outlet/>
      </main>
    </>
  )
}


export default Root
