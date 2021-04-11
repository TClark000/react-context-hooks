import React from 'react'
import AccountContext from '../context/AccountContext'

export default function useForm(){

  const [ accountName, setAccountName ] = React.useContext(AccountContext)
  const [inputs, setInputs ] = React.useState({ accountName: accountName })
  const [path, setPath ] = React.useState('/account')

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    setAccountName(inputs.accountName)
    setPath('/')
  }

  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
  }

  return {
    inputs,
    path,
    handleSubmit,
    handleInputChange
  }
}