var socket = io();
var messages = document.getElementById("messages");

(function() {
  $("form").submit(function(e) {
    let li = document.createElement("li");
    e.preventDefault(); // prevents page reloading
    socket.emit("chat message", $("#message").val());

    messages.appendChild(li).append($("#message").val());
    let span = document.createElement("span");
    messages.appendChild(span).append("by " + "Anonymous" + ": " + "just now");

    $("#message").val("");

    return false;
  });

  socket.on("received", data => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    var messages = document.getElementById("messages");
    messages.appendChild(li).append(data.message);
    messages.appendChild(span).append("by " + "anonymous" + ": " + "just now");
    console.log("Hello bingo!");
  });
})();

// fetching initial chat messages from the database
(function() {
  fetch("/chats")
    .then(data => {
      return data.json();
    })
    .then(json => {
      json.map(data => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        messages.appendChild(li).append(data.message);
        messages
          .appendChild(span)
          .append("by " + data.sender + ": " + formatTimeAgo(data.createdAt));
      });
    });
})();

//is typing...

let messageInput = document.getElementById("message");
let typing = document.getElementById("typing");

//isTyping event
messageInput.addEventListener("keypress", () => {
  socket.emit("typing", { user: "Someone", message: "is typing..." });
});

socket.on("notifyTyping", data => {
  typing.innerText = data.user + " " + data.message;
  console.log(data.user + data.message);
});

//stop typing
messageInput.addEventListener("keyup", () => {
  socket.emit("stopTyping", "");
});

socket.on("notifyStopTyping", () => {
  typing.innerText = "";
});

class MessageList extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <title>Rift</title>
                    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                    <link href="/css/style.css" type="text/css" rel="stylesheet"/>
                </head>
                <body>
                    <div class="chat_window">
                    <div class="top_menu">
                        <div class="title">Chat</div>
                    </div>
                    <ul id ="messages" class="messages">
                        
                    </ul>
                    
                    <div class="bottom_wrapper clearfix">
                <i id="typing"></i>
                    <form id="form">
                        <div class="message_input_wrapper">
                            <input id="message" class="message_input" placeholder="Type your message here..." />
                        </div>
                        <button class="send_message">
                        Send
                        </button>
                    </form>
                    </div>
                </div>

                    <script src="/js/socket.js"></script>
                    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/rexeze/formatTimeStamp/src/index-cdn.js"></script>
                    <script src="/js/chat.js"></script>

                </body>
            </html>
        );
    }
}