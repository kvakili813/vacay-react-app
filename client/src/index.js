// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// React & Redux stuff
import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import {persistStore, autoRehydrate} from 'redux-persist'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

// Components
import App from './components/App'
import Home from './components/Home'
import VacationList from './components/VacationList'
import Single from './components/Single'

// Reducer
import rootReducer from './reducers/index'

// CSS
import 'normalize.css'
import './styles/css.css'

const history = createHistory()

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      autoRehydrate(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  
  render(
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Route exact path='/' component={Home} />
          <Route exact path='/locations' component={VacationList} />
          <Route exact path='/locations/:id' component={Single} />
        </App>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
  
  persistStore(store)

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
