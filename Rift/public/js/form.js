function submitHandler(event) {
  let formData = $('#form').serializeJSON();
  // event.preventDefault();
  // const socket = io();
  formData.type = "rift";
  socket.emit('create', formData);
  let url = `https://skylerspaeth.com:3000/_/${formData.title}`;
  window.location.href = url;
}

function newUser() {
  socket.emit('create', { type: "user" });
  alert('Done');
}

function newPost() {
  socket.emit('create', { type: "post" });
  alert('Post Submited');
}

function newMessage() {
  socket.emit('create', { type: 'message' });
  alert('Message Submited');
}
function newComment() {
  socket.emit('create', { type: 'comment' });
  alert('Comment Submitted');
}

function sendEmail() {
  let email = prompt('Email to test:');
  socket.emit('emailTest', { recipient: email });
  alert('Email sending...');
}