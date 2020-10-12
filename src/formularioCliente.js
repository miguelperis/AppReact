import React from 'react';
import './formularioCliente.css';
/*
const App = (props) => {
  const clickEvent = () => {
    console.log("Click")
  }

  return( <div><button  onClick={clickEvent}>Añadir Cliente</button></div>)
}
*/

class popUp extends React.Component{
    render() {
        return (
            <div className="popup">
                  <div className='popup_inner'>
                  <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
                  </div>
            </div>
        )
    }
}

export default popUp

