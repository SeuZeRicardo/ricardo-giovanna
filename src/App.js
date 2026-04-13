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
  FlowerGreen,
  FlowerRight,
  Drink,
  KitchenRight,
  SPFlag,
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
      const matchMedia = gsap.matchMedia();
      if (isLoading) return;
      let containers = gsap.utils.toArray(".animation-section");
      let svgs = gsap.utils.toArray(".icons--side");
      let leftSvgs = gsap.utils.toArray(".icons--side .left");
      let rightSvgs = gsap.utils.toArray(".icons--side .right");
      let leftTitleDraw = gsap.utils.toArray(
        ".animation-section #left-title-draw",
      );
      let rightTitleDraw = gsap.utils.toArray(
        ".animation-section #right-title-draw",
      );
      let titleSection = gsap.utils.toArray(".animation-section h2");

      // split text for section titles
      let titleSplits = titleSection.map(
        (el) => new SplitText(el, { type: "words,chars" }),
      );

      gsap.set([svgs, leftTitleDraw, rightTitleDraw, titleSection], {
        autoAlpha: 0,
      });

      matchMedia.add("(min-width: 1080px)", () => {
        containers.forEach((container, idx) => {
          gsap.set(leftSvgs[idx], { x: 24 });
          gsap.set(rightSvgs[idx], { x: -24 });

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
      });

      containers.forEach((container, idx) => {
        gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse", //onEnter, onLeave, onEnterBack, onLeaveBack
            onEnter: () => {
              // flowers

              if (!leftTitleDraw[idx] || !rightTitleDraw[idx]) return;

              gsap.to([leftTitleDraw[idx], rightTitleDraw[idx]], {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
              });

              // title text animation
              const split = titleSplits[idx];
              if (split) {
                gsap.to(titleSection[idx], {
                  autoAlpha: 1,
                  duration: 0.6,
                  stagger: 0.02,
                });
                gsap.to(split.chars, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.02,
                });
              }
            },
            onLeave: () => {
              if (!leftTitleDraw[idx] || !rightTitleDraw[idx]) return;
              gsap.to([leftTitleDraw[idx], rightTitleDraw[idx]], {
                autoAlpha: 0,
                y: -20,
                duration: 0.6,
                stagger: 0.2,
              });
              const split = titleSplits[idx];
              if (split) {
                gsap.to(titleSection[idx], {
                  autoAlpha: 0,
                  duration: 0.6,
                  stagger: 0.02,
                });
                gsap.to(split.chars, {
                  autoAlpha: 0,
                  y: -20,
                  duration: 0.6,
                  stagger: 0.02,
                });
              }
            },
            onEnterBack: () => {
              gsap.to([leftTitleDraw[idx], rightTitleDraw[idx]], {
                autoAlpha: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
              });
              const split = titleSplits[idx];
              if (split) {
                gsap.to(titleSection[idx], {
                  autoAlpha: 1,
                  duration: 0.6,
                  stagger: 0.02,
                });
                gsap.to(split.chars, {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.02,
                });
              }
            },
            onLeaveBack: () => {
              if (!leftTitleDraw[idx] || !rightTitleDraw[idx]) return;
              gsap.to([leftTitleDraw[idx], rightTitleDraw[idx]], {
                autoAlpha: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.2,
              });
              const split = titleSplits[idx];
              if (split) {
                gsap.to(titleSection[idx], {
                  autoAlpha: 0,
                  duration: 0.6,
                  stagger: 0.02,
                });
                gsap.to(split.chars, {
                  autoAlpha: 0,
                  y: 20,
                  duration: 0.6,
                  stagger: 0.02,
                });
              }
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
          <div className="animation-section special">
            <Footer />
          </div>
          <div className="icons--side">
            <SPFlag className="left anchor" width="186px" />
            <Pequi className="right anchor" height="96px" />
          </div>
          <div className="icons--side">
            <FlowerGreen className="left anchor" width="186px" />
            <FlowerRight className="right anchor" width="186px" />
          </div>
          <div className="icons--side">
            <Drink className="left anchor" height="226px" />
            <KitchenRight className="right anchor" width="186px" />
          </div>
          <div className="icons--side">
            <BirdLeft className="left anchor" width="186px" />
            <BirdRight className="right anchor" width="186px" />
          </div>
        </>
      )}
    </div>
  );
}
