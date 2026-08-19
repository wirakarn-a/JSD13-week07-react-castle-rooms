import { useState, useEffect } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isBuilding, setIsBuilding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isEscapePodBuilt, setIsEscapePodBuilt] = useState(false);

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleBuildEscapePod = () => {
    setProgress(0);
    setIsBuilding(true);
  };

  useEffect(() => {
    let interval;
    if (isBuilding) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsBuilding(false);
              setIsEscapePodBuilt(true);
            }, 600);
            return 100;
          }
          return prev + 1;
        });
      }, 40);
    }
    return () => clearInterval(interval);
  }, [isBuilding]);

  const hasHelpSignal = answer.trim().toLowerCase().includes("help");

  const pokemonOutside = hasHelpSignal
    ? [
        {
          id: 25,
          name: "Pikachu",
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        {
          id: 1,
          name: "Bulbasaur",
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
        {
          id: 4,
          name: "Charmander",
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        {
          id: 7,
          name: "Squirtle",
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        },
      ]
    : [
        {
          id: 25,
          name: "Pikachu",
          src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
      ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1e293b] text-white pt-8 pb-16 w-full relative">
      {/* Modal: Building Escape Pod */}
      {isBuilding && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-[1px]">
          <div className="bg-[#1e293b] border-2 border-yellow-400 rounded-2xl p-6 md:p-8 w-80 md:w-96 flex flex-col items-center shadow-2xl">
            <h2 className="text-yellow-400 text-lg md:text-xl font-bold mb-4">
              Building Escape Pod...
            </h2>
            <div className="w-full bg-[#334155] rounded-full h-5 overflow-hidden mb-3">
              <div
                className="bg-yellow-400 h-full rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-white text-2xl font-bold">{progress}%</p>
          </div>
        </div>
      )}

      <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
        Outside the Castle
      </h1>
      <p className="text-gray-400 text-sm mb-3">
        {isEscapePodBuilt && hasHelpSignal
          ? "All aboard the Escape Pod!"
          : "Pokemon outside:"}
      </p>

      {isEscapePodBuilt && hasHelpSignal ? (
        <div className="border-2 border-yellow-400 rounded-2xl px-6 py-4 md:px-8 md:py-5 mb-6">
          <div className="flex flex-row items-center justify-center gap-6">
            {pokemonOutside.map((pokemon) => (
              <div key={pokemon.id} className="flex flex-col items-center">
                <img
                  src={pokemon.src}
                  alt={pokemon.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain [image-rendering:pixelated]"
                />
                <span className="text-gray-300 text-xs font-normal mt-1">
                  {pokemon.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-6 mb-5">
          {pokemonOutside.map((pokemon) => (
            <div key={pokemon.id} className="flex flex-col items-center">
              <img
                src={pokemon.src}
                alt={pokemon.name}
                className="w-14 h-14 md:w-16 md:h-16 object-contain [image-rendering:pixelated]"
              />
              <span className="text-gray-300 text-xs font-normal mt-1">
                {pokemon.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {hasHelpSignal && !isEscapePodBuilt && (
        <button
          onClick={handleBuildEscapePod}
          className="bg-[#22c55e] hover:bg-green-600 active:scale-95 text-white text-base font-bold px-6 py-2.5 rounded-lg shadow-md cursor-pointer transition-all mb-4"
        >
          Build Escape Pod!
        </button>
      )}

      <p className="text-purple-300 text-sm mb-3">
        Message to the Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {question || "Waiting..."}
        </span>
      </p>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded p-2 text-sm font-normal w-64 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-md mb-3"
        placeholder="Type your message here..."
      />

      <p className="text-emerald-400 text-sm mb-8">
        Reply from the Secret Room:{" "}
        <span className="text-yellow-300 font-semibold">
          {answer || "Waiting for a reply..."}
        </span>
      </p>

      <Castle
        question={question}
        answer={answer}
        setAnswer={setAnswer}
        isEscapePodBuilt={isEscapePodBuilt}
      />
    </div>
  );
}