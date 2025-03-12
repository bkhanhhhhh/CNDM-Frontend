import { useState } from "react";

const GardenFriend = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Garden Friend</h2>
      <div className="h-40 overflow-y-auto bg-gray-100 p-4 rounded-md">
        {messages.map((msg, index) => (
          <p key={index} className="bg-green-200 p-2 my-2 rounded-lg">{msg}</p>
        ))}
      </div>
      
      <div className="flex mt-4">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-md"
          placeholder="Talk to your Garden Friend..."
        />
        <button 
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default GardenFriend;