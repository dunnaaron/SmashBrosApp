import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'
import FighterInfoConnector from './connectors/FighterInfoConnector/FighterInfoConnector.jsx';
import About from './presenters/About/About.jsx';
import './global.scss'
import Home from './presenters/Home/Home.jsx';
import MobileNavConnector from './connectors/MobileNavConnector/MobileNavConnector.js';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
window.store = store

ReactDOM.render(
<Provider store={store}>
  <Router>
    <MobileNavConnector />
    <Route path="/" exact component={Home} />
    <Route path="/Fighter-info" component={FighterInfoConnector} />
    <Route path='/About' component={About} />
  </Router>
</Provider>, document.getElementById('root'));
