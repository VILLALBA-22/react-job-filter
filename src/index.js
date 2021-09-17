import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0
  }
  body {
    font-family: 'Spartan', sans-serif;
    height: 100vh;
    background-color: hsl(180, 52%, 96%);
  }
`

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
