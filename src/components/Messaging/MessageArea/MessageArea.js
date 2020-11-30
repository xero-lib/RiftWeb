import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    }
} 

export default class MessageArea extends React.Component {
    render() {
        return (
            <div>
                <ul id="messages"/>
                <input id="textbox" type="text" placeholder="Message <user or server/channel>" /*if applicable permissions*//>
                <button id="sendButton">Send</button>
            </div>
        )
    }
}