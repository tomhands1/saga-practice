import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { data } from '../utilities/constants';

const BarChart = () => {
        
    useEffect(() => {

        const svgWidth = 800;
        const svgHeight = 800;

        const barPadding = 20;
        const barWidth = (svgWidth / data.length);

        const margin = {top: 20, right: 0, bottom: 30, left: 40}

        const x = d3.scaleBand()
            .domain(data.map(d => d.name))
            .range([margin.left, svgWidth - margin.right])
            .padding(0.2)
        
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)]).nice()
            .range([svgHeight - margin.bottom, margin.top])
        
        const xAxis = g => g
            .attr("transform", `translate(0,${svgHeight - margin.bottom})`)
            .attr('color', 'steelblue')
            .call(d3.axisBottom(x).tickSizeOuter(0))
        
        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .attr('color', 'steelblue')
            .call(d3.axisLeft(y))

        const svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)

        svg.append('g')
            .attr('fill', 'steelblue')
            .selectAll('rect')
            .data(data)
            .join('rect')
                .attr('x', d => x(d.name))
                .attr('y', d => y(d.value))
                .attr("height", d => y(0) - y(d.value))
                .attr("width", barWidth - barPadding)
                
        svg.append("g")
            .call(xAxis);

        svg.append("g")
            .call(yAxis);
        
    }, []);

    return (
        <div className="bar-chart-container">
            Bar Chart
            <svg className="bar-chart" />
        </div>
    )
}

export default BarChart;