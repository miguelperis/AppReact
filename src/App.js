import React from 'react';
import './App.css';
import PopUp from './formularioCliente'
/*
function App() {
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
}
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render (){
    return (
      <div className="App">
       <h1>Añadir Cliente</h1>
        <button onClick={this.togglePopup.bind(this)}>show popup</button>

        {this.state.showPopup ? 
          <PopUp
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }

      </div>)
  }

}


export default App;
