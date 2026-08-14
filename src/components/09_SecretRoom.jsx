export default function SecretRoom({question, answer}) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gray-800 w-[90%]">
      <h1>SecretRoom</h1>
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
    </div>
  );
}