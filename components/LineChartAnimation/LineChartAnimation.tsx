// AnimatedLineChart.tsx
import React, { useEffect, useRef } from 'react';

const AnimatedLineChart: React.FC = () => {
  const chartRef = useRef<SVGSVGElement>(null);

  const animateArrow = () => {
    if (!chartRef.current) return;
    
    const arrow = chartRef.current.querySelector('#arrow');
    const path = chartRef.current.querySelector('#linePath') as SVGPathElement;

    if (!arrow || !path) return;

    const pathLength = path.getTotalLength();

    const animationDuration = 5000;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % animationDuration;
      const position = progress / animationDuration * pathLength;

      const { x, y } = path.getPointAtLength(position);
      arrow.setAttribute('transform', `translate(${x}, ${y})`);

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    animateArrow();
  }, []);

  return (
    <svg ref={chartRef} width="500" height="300" viewBox="0 0 500 300">
      <g id="linePathContainer">
        <path
          id="linePath"
          d="M10,260 Q50,180 100,190 Q150,200 200,140 Q250,80 300,120 Q350,160 400,120 Q450,80 490,140"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </g>
      <g id="arrow" fill="red">
        <path d="M0,0 L-5,-5 L5,-5 Z" />
      </g>
      <g id="xAxis">
        <line x1="10" y1="260" x2="490" y2="260" stroke="black" strokeWidth="2" />
      </g>
      <g id="yAxis">
        <line x1="10" y1="10" x2="10" y2="260" stroke="black" strokeWidth="2" />
      </g>
    </svg>
  );
};

export default AnimatedLineChart;
