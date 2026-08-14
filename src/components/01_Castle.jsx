import Tower from "./02_Tower";

export default function Castle({question, answer, handleAnswer}) {
return (
    <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
        <h1>Castle</h1>
        <p className="text-purple-300">
            Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {question
           ? ` ✅️ ${question}` 
           : "⌛ Waiting for a message..."}</span>
        </p>

        <p className="text-purple-300">
            Message for Secret Room:{" "}
        <span className="text-yellow-300">
          {answer
           ? ` ✅️ ${answer}` 
           : "⌛ Waiting for a message..."}</span>
        </p>
        <Tower question={question} answer={answer} handleAnswer={handleAnswer}/>
    </div>
    );
}