import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { Selection } from 'd3';

const AnimatedIntersectCircles = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const drawStars = (svg: Selection<SVGSVGElement, unknown, null, undefined>) => {
    const width = 400;
    const height = 200;
    const n = 150;
    const radius = 100;
    const centerX = width / 2;
    const centerY = height / 2;

    svg.attr('width', width).attr('height', height);

    const stars = svg
      .selectAll('.star')
      .data(d3.range(n))
      .enter()
      .append('circle')
      .attr('class', 'star')
      .attr('r', 2)
      .attr('fill', 'white')
      .attr('cx', (d: number, i: number) => centerX + radius * Math.cos((2 * Math.PI * i) / n))
      .attr('cy', (d: number, i: number) => centerY + radius * Math.sin((2 * Math.PI * i) / n));

    const rotate = () => {
      stars.attr('transform', (d: number, i: number) => {
        const angle = (Date.now() / 1000) * (i % 2 ? 1 : -1); // Change the divisor to control rotation speed
        const x = centerX + radius * Math.cos((2 * Math.PI * i) / n + angle);
        // const y = centerY + radius * Math.sin((2 * Math.PI * i) / n + angle);
        return `translate(${x})`;
      });

      requestAnimationFrame(rotate);
    };

    rotate();
  };

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    drawStars(svg);
  }, [svgRef]);

  return <svg ref={svgRef} viewBox="0 0 800 100"/>;
};

export default AnimatedIntersectCircles;
