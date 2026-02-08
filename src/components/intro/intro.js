import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./style.css";
import placeholder from "../../assets/images/placeholder.jpg";

const Intro = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const el = container.current;
      if (!el) return;

      const h1 = el.querySelector("h1");
      if (!h1) return;

      const original = h1.textContent;

      // split into spans for each character
      h1.innerHTML = Array.from(original)
        .map((ch) =>
          ch === " "
            ? '<span class="char">&nbsp;</span>'
            : `<span class="char">${ch}</span>`,
        )
        .join("");

      const chars = el.querySelectorAll(".char");

      gsap.set(h1, { opacity: 1 });
      gsap.from(chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 0.6,
        delay: 1.5,
        ease: "power2.out",
      });

      gsap.from("img", { autoAlpha: 0, duration: 1, delay: 2.5 });

      return () => {
        // revert to original text when scope is reverted
        h1.textContent = original;
      };
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
        <h1>Ricardo & Giovanna</h1>
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
