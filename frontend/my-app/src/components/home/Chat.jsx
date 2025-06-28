
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Nav from '../Nav/Nav';
import { SendHorizonal } from 'lucide-react';

export default function Chat() {
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi, how can I help you today?' }
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', content: "⚠️ No reply received." }]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { role: 'assistant', content: "❌ Failed to connect to AI." }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <Nav menu={visible} setMenu={setVisible}/>
      <div className='flex h-[91vh] '>
        {visible && <Sidebar />}
        <div className="w-full h-full bg-[#ECDFCC]/70 flex flex-col justify-between p-4 overflow-y-auto">
          
          {/* Chat Messages */}
          <div className="flex flex-col gap-3 overflow-y-auto mb-5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 max-w-[75%] rounded-xl ${
                  msg.role === 'user'
                    ? 'bg-[#181C14]/70 self-end text-white'
                    : 'bg-white text-black self-start'
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="w-full bg-[#181C14]/40 border-[#181C14] border-2 rounded-4xl flex ">
            <input
              className='p-3 w-full bg-transparent text-black outline-none'
              type="text"
              placeholder="Enter your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={sendMessage}>
              <SendHorizonal size={25} color='#181C14' className='m-4' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
