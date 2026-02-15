import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./style.css";
import placeholder from "../../assets/images/placeholder.jpg";

gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);

const Intro = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const SplitTextInstance = new SplitText(".principal", {
        type: "chars",
      });

      gsap.from(SplitTextInstance.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 0.6,
        delay: 1.5,
        ease: "power2.out",
      });

      gsap.from("img", { autoAlpha: 0, duration: 1, delay: 2.5 });
    },
    { scope: container },
  );

  return (
    <div className="intro" ref={container}>
      <div className="container">
        <p>
          As Familias Carvalho Motta e Villefort <br />
          convidam para o casamento de
        </p>
        <h1 className="principal">Ricardo & Giovanna</h1>
      </div>
      <img
        className="intro-image"
        src={placeholder}
        alt="Ricardo e Giovanna - Convite"
      />
    </div>
  );
};

export { Intro };
