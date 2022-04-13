import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './app/redux/store'
import App from "./app"
import "../public/locales/i18n"
import { Center, Loader } from '@mantine/core'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Center><Loader /></Center>} persistor={persistor}>
        <Suspense fallback={<Center><Loader /></Center>}><App /></Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
