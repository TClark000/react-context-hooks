# React App with Context and Hooks
> A simple React app that manages state with Context and Hooks.

[React hosted on Netlify] https://react-contexthooks-c3c030.netlify.app/

[a similar app built with React Native hosted on Expo Snack] https://snack.expo.io/@teresajclark/41bb0a

## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Example](#code-example)
* [Status](#status)
* [Contact](#contact)

## Technologies
* React
* UI Semantic
* Netlify
----
* React Native
* UI Semantic
* Snack Expo 

## Setup

`yarn start` run the development server

`yarn build` create a build directory

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Continuous Deployment with git and GitHub:
[React hosted on Netlify] https://react-contexthooks-c3c030.netlify.app/

[a similar app built with React Native hosted on Expo Snack] https://snack.expo.io/@teresajclark/41bb0a

## Code Example

Custom hook for form management:
```js
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
```

## Status
Project is: _finished_

## Contact
Created by [@teresaclark](https://github.com/tclark000/)