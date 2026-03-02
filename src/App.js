import { useState } from "react";
import {
  Intro,
  Countdown,
  Cerimony,
  Presents,
  Loader,
  Footer,
  Transport,
  Tips,
} from "./components";

import {
  BirdLeft,
  BirdRight,
  FlowerLeft,
  FlowerRight,
  KitchenLeft,
  KitchenRight,
  Pan,
  Pequi,
} from "./assets/draw";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import "./App.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(
    () => {
      if (isLoading) return;
      let containers = gsap.utils.toArray(".animation-section");
      let svgs = gsap.utils.toArray(".icons--side");

      gsap.set(svgs, { autoAlpha: 0 });

      containers.forEach((container, idx) => {
        gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse", //onEnter, onLeave, onEnterBack, onLeaveBack
            onEnter: () => {
              gsap.to(svgs[idx], {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
              });
            },
            onLeave: () => {
              gsap.to(svgs[idx], {
                autoAlpha: 0,
                y: -20,
                duration: 0.6,
                stagger: 0.2,
              });
            },
            onEnterBack: () => {
              gsap.to(svgs[idx], {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
              });
            },
            onLeaveBack: () => {
              gsap.to(svgs[idx], {
                autoAlpha: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.2,
              });
            },
          },
        });
      });
    },
    { dependencies: [isLoading] },
  );

  return (
    <div className="app">
      {isLoading && <Loader setIsLoading={setIsLoading} />}
      {!isLoading && (
        <>
          <Intro />
          <Countdown />
          <div className="animation-section">
            <Cerimony />
          </div>
          <div className="animation-section">
            <Transport />
          </div>
          <div className="animation-section">
            <Tips />
          </div>
          <div className="animation-section">
            <Presents />
          </div>
          <Footer />
          <div className="icons--side">
            <Pan className="left anchor" />
            <Pequi className="right anchor" />
          </div>
          <div className="icons--side">
            <FlowerLeft className="left anchor" />
            <FlowerRight className="right anchor" />
          </div>
          <div className="icons--side">
            <KitchenLeft className="left anchor" />
            <KitchenRight className="right anchor" />
          </div>
          <div className="icons--side">
            <BirdLeft className="left anchor" />
            <BirdRight className="right anchor" />
          </div>
        </>
      )}
    </div>
  );
}
