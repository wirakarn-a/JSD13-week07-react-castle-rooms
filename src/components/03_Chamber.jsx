import Room from "./04_Room";

export default function Chamber(props) {
  return (
    <div className="flex flex-col items-center pt-2 pb-6 bg-amber-400 w-[90%] flex-1">
      <h1 className="text-white text-sm font-medium my-2">Chamber</h1>
      <Room
        question={props.question}
        answer={props.answer}
        setAnswer={props.setAnswer}
        isEscapePodBuilt={props.isEscapePodBuilt}
      />
    </div>
  );
}