import Hall from "./05_Hall";

export default function Room(props) {
  return (
    <div className="flex flex-col items-center pt-2 pb-6 bg-emerald-500 w-[90%] flex-1">
      <h1 className="text-white text-sm font-medium my-2">Room</h1>
      <Hall
        question={props.question}
        answer={props.answer}
        setAnswer={props.setAnswer}
        isEscapePodBuilt={props.isEscapePodBuilt}
      />
    </div>
  );
}