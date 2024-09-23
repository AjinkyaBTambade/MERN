import React, { useEffect, useState } from 'react';

function ChatReceiver({ emitter }) {
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    const handleNewMessage = (msg) => {
      setReceivedMessage(msg);  // Update the state when a new message is received
    };

    emitter.on('newMessage', handleNewMessage);  // Listen to the 'newMessage' event

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      emitter.off('newMessage', handleNewMessage);
    };
  }, [emitter]);

  return (
    <>
      <h3>Chat Receiver</h3>
      <p>Last message received: {receivedMessage}</p>
    </>
  );
}

export default ChatReceiver;
