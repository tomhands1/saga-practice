import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { lineData } from '../utilities/constants';

const LineGraph = (props) => {

    useEffect(() => {

        const width = 800;
        const height = 800;
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        const x = d3.scaleBand()
            .domain(lineData.map(d => d.date))
            .range([margin.left, width - margin.right])
            .padding(1)
        
        const y = d3.scaleLinear()
            .domain([0, d3.max(lineData, d => d.value)]).nice()
            .range([height - margin.bottom, margin.top])
        
        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .attr('color', 'steelblue')
            .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
        
        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .attr('color', 'steelblue')
            .call(d3.axisLeft(y))
        
        const line = d3.line()
            .defined(d => !isNaN(d.value))
            .x(d => x(d.date))
            .y(d => y(d.value))

        const svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height)

        svg.append("g")
            .call(xAxis)

        svg.append("g")
            .call(yAxis)

        d3.select("#animate").on("click", function() {
            const path = svg.append("path")
                .datum(lineData)
                .attr("class", "line")
                .attr("d", line)
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("fill", "none")

            const totalLength = path.node().getTotalLength();

            path
                .attr("stroke-dasharray", totalLength + " " + totalLength)
                .attr("stroke-dashoffset", totalLength)
            .transition() 
                .duration(10000) 
                .ease(d3.easeLinear) 
                .attr("stroke-dashoffset", 0)
        });

        d3.select("#reset").on("click", function() {
            d3.select(".line").remove()
        });
    });

    return (
        <div className="line-graph-container">
            <button className="animate-graph-button" id="animate" >Animate</button>
            <button className="animate-graph-button" id="reset" >Reset</button>
            <svg />
        </div>
    );
};

export default LineGraph;
