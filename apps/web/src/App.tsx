import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4  h-screen">
        <h1 className="text-4xl">Count is {count}</h1>
        <div className="flex space-x-4">
          <Button
            className="bg-blue-500 text-white hover:bg-blue-700"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment
          </Button>
          <Button
            className="text-white hover:bg-black/80"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrement
          </Button>
        </div>

        <img src={reactLogo} alt="React Logo" />
        <img src={viteLogo} alt="Vite Logo" />
      </div>
    </>
  );
}

export default App;
