import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {

  // declare a state variable
  const [question, setQuestion] =useState("hello");
  const [answer, serAnswer] = useState("hello");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white pb-80 py-10">
      <Castle/>
      {question}
      {answer}
    </div>
  );
}