import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'
import FighterConnector from './connectors/FighterConnector';
import FighterInfoConnector from './connectors/FighterInfoConnector/FighterInfoConnector.jsx';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
window.store = store

ReactDOM.render(
<Provider store={store}>
  <Router>
    <Route path="/" exact component={FighterConnector} />
    <Route path="/Fighter-info" component={FighterInfoConnector} />
  </Router>
</Provider>, document.getElementById('mount'));
