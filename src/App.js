import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Products from './Products'
//import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => (
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin />

    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossOrigin
    />

    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossOrigin
    />

    <Products />
  </>
  )


export default App;
