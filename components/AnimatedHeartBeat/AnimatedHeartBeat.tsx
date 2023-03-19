import React, { useEffect, useRef } from 'react';

const AnimatedHeartBeat: React.FC = () => {
  const lineRef = useRef<SVGPathElement>(null);

  const animate = () => {
    if (lineRef.current) {
      const pathLength = lineRef.current.getTotalLength();
      lineRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
      lineRef.current.style.strokeDashoffset = `${pathLength}`;
      lineRef.current.getBoundingClientRect();
      lineRef.current.style.transition = 'stroke-dashoffset 3s linear, opacity .25s linear';
      lineRef.current.style.strokeDashoffset = '0';
      lineRef.current.style.opacity = '1';
    }
  };

  useEffect(() => {
    animate();
    const interval = setInterval(() => {
      setTimeout(animate, 100);
      if (lineRef.current) {
        lineRef.current.style.transition = 'none';
        lineRef.current.style.opacity = '0';
        void lineRef.current.getBoundingClientRect(); // Trigger reflow to restart the animation
      }
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        className="w-2/3 h-2/3 text-green-500"
        viewBox="0 0 200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={lineRef}
          d="M0,50 L90,50 Q95,55 100,40 Q105,25 110,50 L200,50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          opacity="0"
        />
      </svg>
    </div>
  );
};

export default AnimatedHeartBeat;
