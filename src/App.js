import { useState } from "react";
import { Intro, Countdown, Cerimony, Presents, Loader } from "./components";

import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app">
      {isLoading && <Loader setIsLoading={setIsLoading} />}
      {!isLoading && (
        <>
          <Intro />
          <Countdown />
          <Cerimony />
          <Presents />
        </>
      )}
    </div>
  );
}
