"use client";
import { useEffect, useRef, useState } from "react";

const Marquee = ({
  children,
  speed = 50,
  direction = "left",
}: {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setContentWidth(marqueeRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div className="relative w-full overflow-hidden text-white h-[100px] py-2">
      <div
        ref={marqueeRef}
        className={`flex whitespace-nowrap absolute ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{ minWidth: contentWidth }}
      >
        <div className="ml-8">{children}</div>
      </div>
    </div>
  );
};

export default Marquee;
