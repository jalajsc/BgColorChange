import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="h-screen w-full m-0 justify-center"
      style={{ "background-color": color }}
    >
      <div className="nav fixed flex-wrap justify-center top-10 inset-x-80 p-2 bg-white rounded-full shadow-slate-800 shadow-xl ">
        <button
          className="green text-black text-xl px-4 mx-4 border-4  border-green-900 rounded-full"
          onClick={() => setcolor("green")}
        >
          Green
        </button>
        <button
          className="green text-black text-xl px-4 mx-4 border-4  border-blue-900 rounded-full"
          onClick={() => setcolor("blue")}
        >
          Blue
        </button>
        <button
          className="green text-black text-xl px-4 mx-4 border-4  border-red-700 rounded-full"
          onClick={() => setcolor("red")}
        >
          Red
        </button>
        <button
          className="green text-black text-xl px-4 mx-4 border-4  border-orange-600 rounded-full"
          onClick={() => setcolor("orange")}
        >
          Orange
        </button>
        <button
          className="green text-black text-xl px-4 mx-4 border-4 border-yellow-500 rounded-full"
          onClick={() => setcolor("yellow")}
        >
          Yellow
        </button>
        <button
          className="green text-black text-xl px-4 mx-4 border-4  border-gray-200 rounded-full"
          onClick={() => setcolor("white")}
        >
          White
        </button>
        <button
          className="green text-black text-xl px-4 mx-4 border-4  border-black rounded-full"
          onClick={() => setcolor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
