import { useState, useEffect, useRef } from "react";

function ConfettiEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "#f43f5e",
      "#ec4899",
      "#d946ef",
      "#a855f7",
      "#8b5cf6",
      "#6366f1",
      "#3b82f6",
      "#0ea5e9",
      "#06b6d4",
      "#14b8a6",
      "#10b981",
      "#22c55e",
      "#84cc16",
      "#eab308",
      "#f97316",
    ];

    const pieces = Array.from({ length: 160 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      w: Math.random() * 10 + 6,
      h: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
    }));

    let animationFrame;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        if (p.y > canvas.height) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
}

export default function SecretRoom(props) {
  const [prisoner, setPrisoner] = useState({
    name: "Seaking",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  });

  const [hasEscaped, setHasEscaped] = useState(false);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((res) => res.json())
      .then((data) => {
        setPrisoner({
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          image:
            data.sprites.front_default ||
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomId}.png`,
        });
      })
      .catch((err) => {
        console.error("Error fetching random pokemon:", err);
      });
  }, []);

  const handleEnterPod = () => {
    setHasEscaped(true);
  };

  const rescueTeam = [
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
  ];

  return (
    <div className="flex flex-col items-center justify-start pt-6 pb-8 bg-[#1e293b] w-[90%] text-center text-white relative">
      {hasEscaped && <ConfettiEffect />}

      <h1 className="text-white text-base font-medium mb-4">SecretRoom</h1>

      {hasEscaped ? (
        <div className="flex flex-col items-center my-4">
          <h2 className="text-emerald-400 font-bold text-xl md:text-2xl mb-2">
            The prisoner has escaped!
          </h2>
          <p className="text-slate-400 text-sm mb-4">
            The Secret Room is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center border-2 border-red-400 rounded-2xl p-4 w-64 mb-4">
            <p className="text-red-400 font-semibold text-sm mb-2">
              A prisoner is trapped here!
            </p>
            <img
              src={prisoner.image}
              alt={prisoner.name}
              className="w-16 h-16 object-contain grayscale [image-rendering:pixelated]"
            />
            <span className="text-slate-400 text-xs mt-1">{prisoner.name}</span>
          </div>

          {props.isEscapePodBuilt && (
            <div className="flex flex-col items-center mb-4">
              <div className="border-2 border-yellow-400 rounded-2xl px-6 py-4 mb-4">
                <p className="text-yellow-400 font-bold text-sm mb-3">
                  The Escape Pod is here!
                </p>
                <div className="flex flex-row items-center justify-center gap-5">
                  {rescueTeam.map((pokemon) => (
                    <div key={pokemon.id} className="flex flex-col items-center">
                      <img
                        src={pokemon.src}
                        alt={pokemon.name}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain [image-rendering:pixelated]"
                      />
                      <span className="text-gray-300 text-[10px] md:text-xs font-normal mt-1">
                        {pokemon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleEnterPod}
                className="bg-[#2563eb] hover:bg-blue-600 active:scale-95 text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-md cursor-pointer transition-all"
              >
                Enter the Pod!
              </button>
            </div>
          )}
        </>
      )}

      <p className="text-purple-300 text-sm mb-3">
        Message from outside:{" "}
        <span className="text-yellow-300 font-semibold">
          {props.question || "Waiting for a message..."}
        </span>
      </p>

      <textarea
        value={props.answer}
        onChange={(e) => props.setAnswer(e.target.value)}
        className="bg-white text-black rounded p-2 text-sm font-normal w-64 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-md mb-3"
        placeholder="Type your reply here..."
      />

      <p className="text-emerald-400 text-sm">
        Your reply:{" "}
        <span className="text-yellow-300 font-semibold">
          {props.answer || "..."}
        </span>
      </p>
    </div>
  );
}