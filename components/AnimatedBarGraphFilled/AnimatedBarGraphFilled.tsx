import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PricePoint {
  time: number;
  value: number;
}

const customHeight = (i: number) => {
  const group = i % 600;
  if (group < 100) return 10;
  if (group < 200) return 20;
  if (group < 300) return 30;
  if (group < 400) return 40;
  if (group < 500) return 50;
  return 60;
};

const data: PricePoint[] = Array.from({ length: 800 }, (_, i) => {
  const isRising = i % 100 < 50;
  return {
    time: i,
    value: isRising ? 85 + customHeight(i) : 85,
  };
});

const AnimatedBarGraphFilled: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const extendedData = data.concat(data.map((d, i) => ({ ...d, time: d.time + data.length })));

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const width = svg.clientWidth;
    const height = svg.clientHeight - 10; // Add padding to the bottom
    const xScale = d3.scaleLinear().domain([0, extendedData.length - 1]).range([0, width * 2]);
    const yScale = d3.scaleLinear().domain([0, 150]).range([height, 0]);

    const bars = extendedData.filter((_, i) => i % 100 < 50);

    bars.forEach((bar, index) => {
      const x1 = xScale(bar.time);
      const y1 = yScale(bar.value);
      const x2 = xScale(bar.time + 25); // Half-width bars
      const y2 = yScale(85);

      const gradientId = `gradient-${index}`;

      const gradient = d3
        .select(svg)
        .append('linearGradient')
        .attr('id', gradientId)
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%');

      gradient
        .append('stop')
        .attr('offset', '0%')
        .attr('stop-color', 'white')
        .attr('stop-opacity', 0.5);

      gradient
        .append('stop')
        .attr('offset', '100%')
        .attr('stop-color', 'white')
        .attr('stop-opacity', 0);

      d3.select(svg)
        .append('rect')
        .attr('x', x1)
        .attr('y', y1)
        .attr('width', x2 - x1)
        .attr('height', y2 - y1)
        .attr('fill', `url(#${gradientId})`);
    });

    const loop = () => {
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
  }, [extendedData]);

  return <svg ref={svgRef} style={{ width: '100%', height: '300px' }} />;
  };
  
  export default AnimatedBarGraphFilled;    