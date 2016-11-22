
var svg = d3.select("svg");
var myMoney = [
  {x: 7, y: 2},
  {x: 10, y: 4},
  {x: 12, y: 5},
  {x: 15, y: 10},
  {x: 18, y: 15},
  {x: 20, y: 20},
  {x: 22, y: 25},
  {x: 24, y: 30},
  {x: 26, y: 0}
  
];


var height = 500;
var width = 500;
var margin = {left: 60, bottom: 60, right: 15, top: 25};

var moneyScale     = d3.scaleLinear().domain([0,30]).range([height - margin.bottom, margin.top]);
var ageScale        = d3.scaleLinear().domain([0,26]).range([margin.left, width - margin.right]);


function moneyToY (data) {
 return moneyScale(data.y);
};

function ageToX (data) {
  return ageScale(data.x);
};


var line = d3.line()
        .x(function(d) {
            return ageScale(d.x)
        })
        .y(function(d) {
            return moneyScale(d.y);
        })
      

var path = svg.append('path')
  .attr('class', 'line')
  .attr('d', line(myMoney))
 .attr("stroke-width", 2)
 .attr("fill", "none");
 
  

var svg = d3.select('svg');
var axisBottom =d3.axisBottom(ageScale);
var axisLeft =d3.axisLeft(moneyScale);





svg.append('g')
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(axisBottom);

svg.append('g')
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(axisLeft);





// text label for the y axis
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", margin.left/2.5)
  .attr("x", 0 - (height / 2))
  .style("text-anchor", "middle")
  .text("Daily Allowance");

// text label for the x axis
svg.append("text")
  .attr("y", height - margin.bottom/3)
  .attr("x", width / 2)
  .style("text-anchor", "middle")
  .text("Age");




