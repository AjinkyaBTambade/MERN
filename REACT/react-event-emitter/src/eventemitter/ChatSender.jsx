import React, { useState } from 'react';

function ChatSender({ emitter }) {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    emitter.emit('newMessage', message);  // Emit the 'newMessage' event with the message
    setMessage('');  // Clear the input after sending the message
  };

  return (
    <>
      <h3>Chat Sender</h3>
      <input 
        type="text" 
        value={message} 
        onChange={handleChange} 
        placeholder="Type your message"
      />
      <button onClick={handleSend}>Send Message</button>
    </>
  );
}

export default ChatSender;
