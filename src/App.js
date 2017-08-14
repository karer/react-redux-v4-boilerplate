import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './store'

import './styles/main.css'

import MainLayout from './components/MainLayout'
import Home from './components/Home'
import Help from './components/Help'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainLayout>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/help" component={Help} />
            </Switch>
          </ConnectedRouter>
        </MainLayout>
      </Provider>
    )
  }
}

export default App
