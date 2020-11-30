import React from 'react';
// import Logo from '../../barrels/homeBarrel.js';
import '../../index.css';
import Logo from '../Logo/Logo.js';
import MessageBar from '../Messaging/MessageBar/MessageBar.js';

export default class RiftHome extends React.Component {
  render() {
    return (
      <main>
        <h1 class="title">What is <span class="titlerift">Rift</span></h1>
        {/* <Logo class="center" /> */}
        <h3 class="description">
          Rift is a highly customizable, versatile, and open source communications and cooridnation platform for everyone, from the casual texter, to corporate level team management.
        </h3>
        <footer class="footer">
          The current developers are <a href='https://github.com/xero-lib'>Jonathan Kurtz</a> and <a href='https://github.com/skylerspaeth'>Skyler Spaeth</a>.
        </footer>


        {/* <MessageBar /> */}
      </main>
    );
  }
}