import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// include bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// special helper to pass the store as prop to all the components
import { Provider } from 'react-redux'

// redux persist stuffs
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

// create a redux store
import { createStore } from 'redux'
import appReducer from './reducers'

import App from './App'

import registerServiceWorker from './registerServiceWorker'
// import { unregister } from './registerServiceWorker'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, appReducer)

// create store
// let store = createStore(appReducer)
let store = createStore(persistedReducer)
// persistor for redux-persist
let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    {/*<App />*/}
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
// unregister()
