import React from 'react';
import ReactDOM from 'react-dom';
import { RiftHome } from './barrels/homeBarrel.js';
import './index.css';
// import MessageArea from './components/Messaging/MessageArea/MessageArea.js';
// import './components/Messaging/Message/MessageList.js';

class Main extends React.Component {

  // instance of websocket connection as a class property
  render(){
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