import React, { useEffect, useState } from "react";
import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";

const TIMEZONE = "America/Sao_Paulo";

gsap.registerPlugin(useGSAP, Observer);

const getOffsetMinutes = (timeZone, date) => {
  try {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "short",
      hour12: false,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const parts = fmt.formatToParts(date);
    const tzPart = parts.find((p) => p.type === "timeZoneName");
    if (!tzPart) return 0;
    const m = tzPart.value.match(/GMT([+-]\d{1,2})(?::?(\d{2}))?/);
    if (!m) return 0;
    const hours = parseInt(m[1], 10);
    const mins = m[2] ? parseInt(m[2], 10) : 0;
    return hours * 60 + (hours >= 0 ? mins : -mins);
  } catch (e) {
    return 0;
  }
};

const computeTarget = () => {
  const now = new Date();
  const year = now.getFullYear();

  const buildTargetFor = (y) => {
    // use midday to get a stable offset for that date
    const middayUtc = new Date(Date.UTC(y, 8, 6, 12, 0, 0));
    const offsetMin = getOffsetMinutes(TIMEZONE, middayUtc);
    const utcMillisForLocal16 =
      Date.UTC(y, 8, 6, 16, 0, 0) - offsetMin * 60 * 1000;
    return new Date(utcMillisForLocal16);
  };

  const targetThisYear = buildTargetFor(year);
  if (now <= targetThisYear) return targetThisYear;
  return buildTargetFor(year + 1);
};

const getTimeParts = (ms) => {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const [target] = useState(computeTarget);
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeParts(target - new Date()),
  );
  const [tick, setTick] = useState(false);

  // useGSAP(() => {
  //   const scrollingText = gsap.utils.toArray(".rail h4");
  //   const tl = horizontalLoop(scrollingText, {
  //     repeat: -1,
  //     paddingRight: 30,
  //   });

  //   Observer.create({
  //     onChangeY(self) {
  //       let base = 0.5;
  //       let factor = base + Math.abs(self.deltaY) / 100;
  //       if (self.deltaY < 0) {
  //         factor *= -1;
  //       }
  //       gsap
  //         .timeline({
  //           defaults: {
  //             ease: "none",
  //           },
  //         })
  //         .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
  //         .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
  //     },
  //   });

  //   function horizontalLoop(items, config) {
  //     items = gsap.utils.toArray(items);
  //     config = config || {};
  //     let tl = gsap.timeline({
  //         repeat: config.repeat,
  //         paused: config.paused,
  //         defaults: { ease: "none" },
  //         onReverseComplete: () =>
  //           tl.totalTime(tl.rawTime() + tl.duration() * 100),
  //       }),
  //       length = items.length,
  //       startX = items[0].offsetLeft,
  //       times = [],
  //       widths = [],
  //       xPercents = [],
  //       curIndex = 0,
  //       pixelsPerSecond = (config.speed || 1) * 100,
  //       snap =
  //         config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
  //       totalWidth,
  //       curX,
  //       distanceToStart,
  //       distanceToLoop,
  //       item,
  //       i;
  //     gsap.set(items, {
  //       // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
  //       xPercent: (i, el) => {
  //         let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
  //         xPercents[i] = snap(
  //           (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
  //             gsap.getProperty(el, "xPercent"),
  //         );
  //         return xPercents[i];
  //       },
  //     });
  //     gsap.set(items, { x: 0 });
  //     totalWidth =
  //       items[length - 1].offsetLeft +
  //       (xPercents[length - 1] / 100) * widths[length - 1] -
  //       startX +
  //       items[length - 1].offsetWidth *
  //         gsap.getProperty(items[length - 1], "scaleX") +
  //       (parseFloat(config.paddingRight) || 0);
  //     for (i = 0; i < length; i++) {
  //       item = items[i];
  //       curX = (xPercents[i] / 100) * widths[i];
  //       distanceToStart = item.offsetLeft + curX - startX;
  //       distanceToLoop =
  //         distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
  //       tl.to(
  //         item,
  //         {
  //           xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
  //           duration: distanceToLoop / pixelsPerSecond,
  //         },
  //         0,
  //       )
  //         .fromTo(
  //           item,
  //           {
  //             xPercent: snap(
  //               ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
  //             ),
  //           },
  //           {
  //             xPercent: xPercents[i],
  //             duration:
  //               (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
  //             immediateRender: false,
  //           },
  //           distanceToLoop / pixelsPerSecond,
  //         )
  //         .add("label" + i, distanceToStart / pixelsPerSecond);
  //       times[i] = distanceToStart / pixelsPerSecond;
  //     }
  //     function toIndex(index, vars) {
  //       vars = vars || {};
  //       Math.abs(index - curIndex) > length / 2 &&
  //         (index += index > curIndex ? -length : length); // always go in the shortest direction
  //       let newIndex = gsap.utils.wrap(0, length, index),
  //         time = times[newIndex];
  //       if (time > tl.time() !== index > curIndex) {
  //         // if we're wrapping the timeline's playhead, make the proper adjustments
  //         vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
  //         time += tl.duration() * (index > curIndex ? 1 : -1);
  //       }
  //       curIndex = newIndex;
  //       vars.overwrite = true;
  //       return tl.tweenTo(time, vars);
  //     }
  //     tl.next = (vars) => toIndex(curIndex + 1, vars);
  //     tl.previous = (vars) => toIndex(curIndex - 1, vars);
  //     tl.current = () => curIndex;
  //     tl.toIndex = (index, vars) => toIndex(index, vars);
  //     tl.times = times;
  //     tl.progress(1, true).progress(0, true); // pre-render for performance
  //     if (config.reversed) {
  //       tl.vars.onReverseComplete();
  //       tl.reverse();
  //     }
  //     return tl;
  //   }
  // }, {});

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeParts(target - new Date()));
      setTick((t) => !t);
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="countdown-wrapper">
      {/* <div class="scrolling-text">
        <div class="rail">
          <h4>Não estamos esperando pela hora...</h4>
          <h4>Contando os minutos...</h4>
          <h4>Vai ser do Balacubaco...</h4>
        </div>
      </div> */}
      <div className={`countdown ${tick ? "tick" : ""}`} aria-live="polite">
        <div className="countdown-col">
          <div className="digit">{timeLeft.days}</div>
          <div className="label">dias</div>
        </div>

        <div className="sep">:</div>

        <div className="countdown-col">
          <div className="digit">{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="label">horas</div>
        </div>

        <div className="sep">:</div>

        <div className="countdown-col">
          <div className="digit">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="label">minutos</div>
        </div>

        <div className="sep">:</div>

        <div className="countdown-col">
          <div className="digit">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="label">segundos</div>
        </div>
      </div>
    </div>
  );
};

export { Countdown };
