import Tower from "./02_Tower";

export default function Castle(props) {
  return (
    <div className="flex flex-col items-center pt-6 pb-12 bg-red-600 w-full text-white">
      <h1 className="text-white text-base font-medium mb-2">Castle</h1>
      <Tower
        question={props.question}
        answer={props.answer}
        setAnswer={props.setAnswer}
        isEscapePodBuilt={props.isEscapePodBuilt}
      />
    </div>
  );
}