import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { RiftHome, Sidebar } from './barrels/homeBarrel';

ReactDOM.render(
  <>
    <Sidebar />
    <RiftHome />
  </>,
  document.getElementById('root')
);
