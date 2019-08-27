import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'
import CharacterConnector from './connectors/CharacterConnector';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
window.store = store

ReactDOM.render(<Provider store={store}><CharacterConnector /></Provider>, document.getElementById('mount'));
