import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import { Button } from "./components/button/Button";

function App() {
  const [count, setCount] = useState(0);
<<<<<<< HEAD
  const [error, setError] = useState("");

  const updateCounter = (increase: boolean) => {
    setCount((currentValue) => {
      if (increase) {
        setError("");
        return currentValue + 1;
      } else {
        if (currentValue > 0) {
          return currentValue - 1;
        } else {
          setError("Counter cannot go below 0");
          return currentValue;
        }
      }
=======

  const updateCounter = (increase: boolean) => {
    setCount((currentValue) => {
      return increase ? currentValue + 1 : currentValue - 1;
>>>>>>> cbcd35757d1d78f8fee84d02d8dd21f245c9603f
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="container d-flex justify-content-center">
        <div className="card bg-white shadow text-center p-4 m-4">
          <h1>Counter: {count}</h1>
<<<<<<< HEAD

          {error && <p style={{ color: "red" }}>{error}</p>}

=======
>>>>>>> cbcd35757d1d78f8fee84d02d8dd21f245c9603f
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Button color="primary" onClick={() => updateCounter(true)}>
              Increase +
            </Button>
            <Button color="secondary" onClick={() => updateCounter(false)}>
              Decrease -
            </Button>
<<<<<<< HEAD
            <Button
              color="danger"
              onClick={() => {
                setCount(0);
                setError("");
              }}
            >
=======
            <Button color="danger" onClick={() => setCount(0)}>
>>>>>>> cbcd35757d1d78f8fee84d02d8dd21f245c9603f
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

//formatting: alt + shift + f
