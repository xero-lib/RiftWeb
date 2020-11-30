import React from 'react';
// import './MessageBar.css';

export default class TextArea extends React.Component {
    render() {
        return (
            <div>
                <textarea placeholder="Type a message..."></textarea>
            </div>
        );
    }
}
