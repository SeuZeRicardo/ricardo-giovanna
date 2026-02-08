import { Intro, Countdown, Cerimony, Presents } from "./components";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Intro />
      <Countdown />
      <Cerimony />
      <Presents />
    </div>
  );
}
