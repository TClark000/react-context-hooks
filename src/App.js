import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style/index.css'

import Footer from './components/Footer'
import Balance from './components/Balance'
import Account from './components/Account'

import AccountContext from './context/AccountContext'

export default function App(){

  const accountHook = React.useState('')

  return(
    <AccountContext.Provider value = { accountHook }>
      <BrowserRouter>
      <div className="content-body" >
        <Switch>
            <Route exact path="/" component={Balance} />
            <Route path="/account" component={Account} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
    </AccountContext.Provider>
  )
}