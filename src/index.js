import React from 'react';
import ReactDOM from 'react-dom';
import { RiftHome } from './barrels/homeBarrel';
import './index.css';
// import MessageArea from './components/Messaging/MessageArea/MessageArea.js';
// import './components/Messaging/Message/MessageList.js';

class Main extends React.Component {

  // instance of websocket connection as a class property
  ws = new WebSocket('ws://localhost:3500/')

  componentDidMount() {
      this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
      }

      this.ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      this.setState({dataFromServer: message})
      console.log(message)
      }

      this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss

      }

  }

  render(){
      <websocket websocket={this.ws} />
    return(
      <div>  
        {/* <MessageArea />  */}
        <RiftHome />
      </div>
    )
  }
}



ReactDOM.render(
  <Main />,
  document.getElementById('root')
);