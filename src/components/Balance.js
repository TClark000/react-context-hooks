import React from 'react'
import AccountContext from '../context/AccountContext'

export default function Balance() {

  const currentAccountName = React.useContext(AccountContext)

  return(
    <section className="ui basic segment balance">
      <div className="content-accountName">
        <div>Account name:</div>
        <div>{currentAccountName[0]}</div>
      </div>
      <div className="content-balance-title">
        <div>Balance</div>
        <div className="content-balance-number">£1,234</div>
      </div>
  </section>
  )
}