import Chamber from "./03_Chamber";

export default function Tower(props) {
  return (
    <div className="flex flex-col items-center pt-2 pb-6 bg-orange-500 w-[90%] flex-1">
      <h1 className="text-white text-sm font-medium my-2">Tower</h1>
      <Chamber
        question={props.question}
        answer={props.answer}
        setAnswer={props.setAnswer}
        isEscapePodBuilt={props.isEscapePodBuilt}
      />
    </div>
  );
}