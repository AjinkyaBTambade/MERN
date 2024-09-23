import React, { useEffect, useState } from 'react';
import EventEmitter from 'eventemitter3';

// Initialize the event emitter
const emitter = new EventEmitter();

// Publisher component: Simulates sending a chat message
function ChatSender() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    emitter.emit('newMessage', message);  // Emit 'newMessage' event when sending a message
    setMessage(''); // Clear the input field after sending
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

// Subscriber component: Simulates receiving and displaying a chat message
function ChatReceiver() {
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    const handleNewMessage = (msg) => {
      setReceivedMessage(msg); // Update the state with the new message
    };

    // Attach event listener for 'newMessage' event
    emitter.on('newMessage', handleNewMessage);

    // Clean up event listener when component unmounts
    return () => {
      emitter.off('newMessage', handleNewMessage);
    };
  }, []);

  return (
    <>
      <h3>Chat Receiver</h3>
      <p>Last message received: {receivedMessage}</p>
    </>
  );
}

// Main App component
function App() {
  return (
    <>
      <div>
        <h2>Simple Chat System</h2>
        <table>
          <tr>
            <td><ChatSender /></td>
            <td></td>
          </tr>
          <tr>
            <td><ChatReceiver /></td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
