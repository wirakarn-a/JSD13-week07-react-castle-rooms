import { useContext } from "react";
import Castle from "./components/01_Castle";

import { MessageContext } from "./context/messageContext/MessageContext";

export default function App() {

  const {question, answer, handleQuestion } = useContext(MessageContext);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10">
      <p className="text-purple-300">
        Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {question ? ` ✅️ ${question}` : "⌛ Waiting for a message..."}
        </span>
      </p>

      <textarea 
        value={question} 
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      
      <p className="text-green-300">
        Reply from the Secret Room {" "}
        <span className="text-yellow-300">
          {answer ?  ` ✅️ ${answer}` : "⌛ Waiting for a message..." }
        </span>
      </p>

      <Castle />
    </div>
  );
}