import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface SpreadingDotProps {
  size: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  animationDuration?: number;
}

const SpreadingDot: React.FC<SpreadingDotProps> = ({
  size,
  fillColor = 'black',
  strokeColor = 'none',
  strokeWidth = 0,
  animationDuration = 2000,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const animate = (circle: d3.Selection<SVGCircleElement, unknown, null, undefined>) => {
    circle
      .transition()
      .duration(animationDuration)
      .ease(d3.easeCubic)
      .attr('r', size / 2)
      .style('opacity', 0)
      .on('end', () => {
        circle.attr('r', 0).style('opacity', 1);
        animate(circle);
      });
  };

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);

      svg.attr('overflow', 'hidden');

      const circle = svg
        .append('circle')
        .attr('cx', size / 2)
        .attr('cy', size / 2)
        .attr('r', 0)
        .attr('fill', fillColor)
        .attr('stroke', strokeColor)
        .attr('stroke-width', strokeWidth);

      animate(circle);
    }

    return () => {
      if (svgRef.current) {
        d3.select(svgRef.current).selectAll('*').interrupt();
      }
    };
  }, [size, fillColor, strokeColor, strokeWidth, animationDuration]);

  return <svg ref={svgRef} width={size} height={size} />;
};

export default SpreadingDot;
