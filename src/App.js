import React from 'react';
import logo from './logo.svg';
import './App.css';
/*
function App() {
  //react aceita apenas um elemento do dom no retorno
  // <> </> engloba elementos na versão mais nova
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}*/
/*
function App() {
  //react aceita apenas um elemento do dom no retorno
  // <> </> engloba elementos na versão mais nova
  return (
      <>
        <p>lalala</p>
        <h4>kkkk</h4>
      </>
  );
}*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {name:"danilo"};
  }
  update(){ return null; }
  render(){
    return <p>Ok</p>;
  }
}


export default App;
