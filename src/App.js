import { Intro, Countdown, Cerimony, Presents, Loader } from "./components";

import "./App.css";

export default function App() {
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
