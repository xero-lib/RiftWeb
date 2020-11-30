import React from 'react';
import './Logo.css';
// import RiftLogo from './rift.png'
// import '../../css/index.css';

export default class Logo extends React.Component {
    render() {
        return (
            <div>
                <img class="icon" alt="Rift Logo" src="/brand/rift.png" />
            </div>
        );
    }
}
