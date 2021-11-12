import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import authReducer from './reducers/auth'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const client = new QueryClient()
const store = createStore(authReducer, applyMiddleware(thunk))
ReactDOM.render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
)
