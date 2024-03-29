import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PricePoint {
  time: number;
  value: number;
}

const generateRandomData = (length: number): PricePoint[] => {
  const data: PricePoint[] = [];
  let lastValue = 50 + Math.random() * 50;

  for (let i = 0; i < length; i++) {
    lastValue += Math.random() * 10 - 5;
    data.push({
      time: i,
      value: lastValue,
    });
  }

  return data;
};

const PriceChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const data = generateRandomData(400);
  const extendedData = data;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Calculate dimensions and scales
    const width = svg.clientWidth;
    const height = svg.clientHeight;
    const xScale = d3.scaleLinear().domain([0, extendedData.length - 1]).range([0, width * 2]);
    const yScale = d3.scaleLinear().domain([0, 150]).range([height, 0]);

    // Create line generator
    const lineGenerator = d3
      .line<PricePoint>()
      .x((d) => xScale(d.time))
      .y((d) => yScale(d.value));

    // Create the path
    const path = d3.select(svg)
      .append('path')
      .attr('d', lineGenerator(extendedData))
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    const pathNode = path.node();

    if (pathNode) {
      const pathLength = pathNode.getTotalLength();
      path.attr('stroke-dasharray', pathLength).attr('stroke-dashoffset', 0);

      // Loop the animation
      const loop = () => {
        path.transition()
          .duration(10000)
          .ease(d3.easeLinear)
          .attr('stroke-dashoffset', -pathLength)
          .on('end', () => {
            path.attr('stroke-dashoffset', 0);
            loop();
          });

        d3.select(svg)
          .transition()
          .duration(10000)
          .ease(d3.easeLinear)
          .attrTween('viewBox', () => {
            const i = d3.interpolateNumber(0, width * 2);
            return (t: number) => {
              const x = i(t);
              return `${x} 0 ${width} ${height}`;
            };
          });
      };
      loop();
    }
  }, [extendedData]);

  return (
    <svg ref={svgRef} style={{ width: '100%', height: '300px' }}>
      <style>
        {`
          svg text {
            fill: none;
            stroke: white;
            stroke-width: 2px;
          }
        `}
      </style>
    </svg>
  );
};

export default PriceChart;
