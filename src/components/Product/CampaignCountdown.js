import React, { useEffect, useState } from "react";
import { Statistic } from "antd";

// antd's Countdown re-renders 30 times per second per card. The format only shows
// seconds, so every countdown on the page shares one 1-second ticker instead.
const listeners = new Set();
let timer = null;

const subscribe = (listener) => {
  listeners.add(listener);
  if (!timer) {
    timer = setInterval(() => {
      const now = Date.now();
      listeners.forEach((fn) => fn(now));
    }, 1000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      clearInterval(timer);
      timer = null;
    }
  };
};

const pad = (value) => String(value).padStart(2, "0");

// Same output as antd's "DD gün: HH:mm:ss" countdown format.
const formatRemaining = (target, now) => {
  let diff = Math.max(target - now, 0);
  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);
  diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);
  return `${pad(days)} gün: ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const removeTitle = (node) => React.cloneElement(node, { title: undefined });

const CampaignCountdown = ({ value, style }) => {
  // Starts empty so the server render and the first client render match.
  const [now, setNow] = useState(null);
  const target = new Date(value).getTime();

  useEffect(() => {
    setNow(Date.now());
    return subscribe(setNow);
  }, []);

  return (
    <Statistic
      style={style}
      value={target}
      valueRender={removeTitle}
      formatter={() => (now === null ? "" : formatRemaining(target, now))}
    />
  );
};

export default CampaignCountdown;
