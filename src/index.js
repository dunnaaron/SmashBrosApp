import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer.js'
import FighterInfoConnector from './connectors/FighterInfoConnector/FighterInfoConnector.jsx';
import About from './presenters/About/About.jsx';
import './global.css'
import Home from './presenters/Home/Home.jsx';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //This line allows use of the redux debugger
)
window.store = store //What does this do?

ReactDOM.render(
<Provider store={store}>
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/Fighter-info" component={FighterInfoConnector} />
    <Route path='/About' component={About} />
  </Router>
</Provider>, document.getElementById('root'));
