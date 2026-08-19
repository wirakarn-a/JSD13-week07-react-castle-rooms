import Gallery from "./07_Gallery";

export default function Corridor(props) {
  return (
    <div className="flex flex-col items-center pt-2 pb-6 bg-sky-400 w-[90%] flex-1">
      <h1 className="text-white text-sm font-medium my-2">Corridor</h1>
      <Gallery
        question={props.question}
        answer={props.answer}
        setAnswer={props.setAnswer}
        isEscapePodBuilt={props.isEscapePodBuilt}
      />
    </div>
  );
}