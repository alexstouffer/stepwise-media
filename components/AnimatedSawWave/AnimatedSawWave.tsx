import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PricePoint {
  time: number;
  value: number;
}

// Preset data
const data: PricePoint[] = Array.from({ length: 400 }, (_, i) => ({
  time: i,
  value: 75 + 40 * ((i % 100) / 100),
}));

const AnimatedSawWave: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const extendedData = data.concat(data.map((d, i) => ({ ...d, time: d.time + data.length })));

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
    const path = d3.select(svg).append('path').attr('d', lineGenerator(extendedData)).attr('fill', 'none').attr('stroke', 'white').attr('stroke-width', 4);
    const pathNode = path.node();

    if (pathNode) {
      const pathLength = pathNode.getTotalLength() / 2;
      path.attr('stroke-dasharray', `${pathLength} ${pathLength}`).attr('stroke-dashoffset', 0);

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
            const i = d3.interpolateNumber(0, width);
            return (t: number) => {
              const x = i(t);
              return `${x} 0 ${width} ${height}`;
            };
          })
          .on('end', loop);
      };
      loop();
    }
  }, [extendedData]);

  return <svg ref={svgRef} style={{ width: '100%', height: '300px' }} />;
};

export default AnimatedSawWave;
