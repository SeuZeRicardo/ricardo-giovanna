import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./style.css";

gsap.registerPlugin(useGSAP);

const Loader = () => {
  const container = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      gsap.from(".loader", {
        opacity: 0,
        y: 100,
        duration: 1,
      });
    },
    { scope: container },
  );

  return (
    <div className="loader" ref={container}>
      <h1>Loading...</h1>

      <button onClick={toggleTimeline}>Toggle Timeline</button>

      <div className="box gradient-blue">Box 1</div>
      <div className="box gradient-blue">Box 2</div>
      <div className="box gradient-blue">Box 3</div>
    </div>
  );
};

export { Loader };
