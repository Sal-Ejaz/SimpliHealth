'use client';

import { useState, useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import InputBox from './InputBox';
import Header from './Header';

export default function ChatDisplay() {
  const [messages, setMessages] = useState([]);
  const [animateImage, setAnimateImage] = useState(false); // Track animation state

  const handleSendMessage = async (message) => {
    const userMessage = { role: 'user', content: message };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    await simulateTyping(
      'This is a sample response from the assistant.',
      updatedMessages
    );
  };

  const simulateTyping = (text, currentMessages) => {
    return new Promise((resolve) => {
      let currentText = '';
      let i = 0;

      setMessages([...currentMessages, { role: 'assistant', content: '' }]);

      const interval = setInterval(() => {
        currentText += text[i];
        i++;

        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (lastMessage.role === 'assistant') {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = {
              ...lastMessage,
              content: currentText,
            };
            return updatedMessages;
          }
          return prevMessages;
        });

        if (i === text.length) {
          clearInterval(interval);
          resolve(text);
        }
      }, 50); 
    });
  };

  const isChatStarted = messages.length > 0;

  // Trigger the image animation after a small delay
  useEffect(() => {
    if (isChatStarted) {
      setAnimateImage(true);
    }
  }, [isChatStarted]);

  return (
    <div className="flex flex-col h-screen bg-amber-100 relative">
      {!isChatStarted && (
        <div className="flex flex-col justify-center items-center flex-grow">
          {/* Initially, the image will be positioned at the bottom */}
          <img
            className={`w-64 h-64 p-4 ${animateImage ? 'animate-move-to-header' : ''}`}
            src='/pngegg.png'
            alt="Image"
          />
          <h2 className="text-lime-900 text-2xl mb-4">What's going on?</h2>
          <div className="w-full px-4">
            <InputBox onSendMessage={handleSendMessage} />
          </div>
        </div>
      )}

      {isChatStarted && (
        <>
          <Header />
          <ScrollArea className="flex-grow p-4 overflow-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                } mb-4`}
              >
                <div
                  className={`flex items-start ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`mx-2 p-3 rounded-xl bg-lime-900 text-white animate-fade-in`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
          <InputBox onSendMessage={handleSendMessage} />
        </>
      )}
    </div>
  );
}