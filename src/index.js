import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as Components from './components'
import Reducers from './reducers'

const store = createStore(Reducers)

var destination = document.querySelector("#mount");

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Components.App/>
        </Router>
    </Provider>,
    destination
)
