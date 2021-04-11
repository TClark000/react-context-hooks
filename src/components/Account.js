import React from 'react'
import useForm from '../hooks/useForm'
import { Redirect } from 'react-router-dom'

export default function Account() {

  const {inputs, path, handleInputChange, handleSubmit} = useForm()

  return (
      <form className="ui basic segment" onSubmit={handleSubmit}>
        <Redirect push to={path}/>
        <div className="ui basic segment accountNameInput" >
          <label>Name: </label>
          <input 
            type="text" 
            name="accountName"
            value={inputs.accountName} required
            onChange={handleInputChange}
            className="ui segment"
            />
        </div>
        <div className="ui basic segment">
          <button type="submit" className="ui icon button" 
            >Submit <i class="arrow alternate circle left outline icon"></i>
          </button>
        </div>
      </form>
  )
}