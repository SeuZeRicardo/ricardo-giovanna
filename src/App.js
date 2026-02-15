import { Intro, Countdown, Cerimony, Presents, Loader } from "./components";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Loader />
      <>
        <Intro />
        <Countdown />
        <Cerimony />
        <Presents />
      </>
    </div>
  );
}
