import React, { useEffect, useState } from "react";
import "./style.css";

const TIMEZONE = "America/Sao_Paulo";

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

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeParts(target - new Date()));
      setTick((t) => !t);
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
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
        <div className="digit">{String(timeLeft.minutes).padStart(2, "0")}</div>
        <div className="label">minutos</div>
      </div>

      <div className="sep">:</div>

      <div className="countdown-col">
        <div className="digit">{String(timeLeft.seconds).padStart(2, "0")}</div>
        <div className="label">segundos</div>
      </div>
    </div>
  );
};

export { Countdown };
