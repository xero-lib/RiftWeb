// import MessageArea from "../MessageArea/MessageArea";

let messages = document.getElementById("messages");
let textbox = document.getElementById("textbox");
let sendButton = document.getElementById("sendButton");

let user = {
    sendPerms: true
}

sendButton.addEventListener("click", () => {
    if(true) {
        let newMessage = document.createElement("li");
        newMessage.innerHTML = textbox.value;
        console.log('Sent');
        messages.appendChild(newMessage);
    }
});