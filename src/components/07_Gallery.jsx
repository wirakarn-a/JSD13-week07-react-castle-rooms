import Nook from "./08_Nook";

export default function Gallery(props) {
  return (
    <div className="flex flex-col items-center pt-2 pb-6 bg-blue-600 w-[90%] flex-1">
      <h1 className="text-white text-sm font-medium my-2">Gallery</h1>
      <Nook
        question={props.question}
        answer={props.answer}
        setAnswer={props.setAnswer}
        isEscapePodBuilt={props.isEscapePodBuilt}
      />
    </div>
  );
}