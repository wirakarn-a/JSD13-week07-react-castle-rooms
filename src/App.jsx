import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {

  // declare a state variable
  const [question, setQuestion] =useState("");
  const [answer, setAnswer] = useState("How are you?");

  const handleQuestion = (e) => {
    console.log(e)
    setQuestion(e.target.value)
  }

  const handleAnswer = (e) => {
    console.log(e)
    setAnswer(e.target.value)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10">
      <p className="text-purple-300">
        Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {question ? ` ✅️ ${question}` : "⌛ Waiting for a message..."}</span>
      </p>

      <textarea 
        value={question} 
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />
      <Castle question={question} answer={answer} handleAnswer={handleAnswer}/>
    </div>
  );
}