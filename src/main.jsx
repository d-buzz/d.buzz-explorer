import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {Provider} from 'react-redux'
import App from './App'
import store from './redux/store/configureStore'
import './index.css'
import {Flowbite} from "flowbite-react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/*<React.StrictMode>*/}
    <Flowbite>
      <App/>
    </Flowbite>
    {/*</React.StrictMode>*/}
  </Provider>
)
