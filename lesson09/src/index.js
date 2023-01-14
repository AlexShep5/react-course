import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider} from 'react-redux'
import { store } from './store'
// import { PersistGate } from 'redux-persist/integration/react'
// import { store, persistor } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </Router>
)
