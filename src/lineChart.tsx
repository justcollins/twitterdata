var React = require('react');
var ReactDOM = require('react-dom');
var BarChart = require('react-d3-basic').BarChart;
//import d3 from 'd3';


export function createChart(data){

    var width = 2000,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'values',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.word;
    },
    xScale = 'ordinal',
    xLabel = "Letter",
    yLabel = "Frequency",
    yTicks = [10, ""];

    ReactDOM.render(
        <div>
        <p>Should be something here </p>
        <BarChart
        title= {title}
        data= {data.slice(0,30)}
        width= {width}
        height= {height}
        chartSeries = {chartSeries}
        x= {x}
        xLabel= {xLabel}
        xScale= {xScale}
        yTicks= {yTicks}
        yLabel = {yLabel}
      />
    </div> ,document.getElementById('line-user'))
    }
export default createChart;