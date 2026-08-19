import SecretRoom from "./09_SecretRoom";

export default function Nook(props) {
  return (
    <div className="flex flex-col items-center pt-2 pb-6 bg-[#c4b5fd] w-[90%] flex-1">
      <h1 className="text-white text-sm font-medium my-2">Nook</h1>
      <SecretRoom
        question={props.question}
        answer={props.answer}
        setAnswer={props.setAnswer}
        isEscapePodBuilt={props.isEscapePodBuilt}
      />
    </div>
  );
}