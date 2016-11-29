var height = 300;
var width = 800;
var clockData = [{
  value: 12,
  size: 24,
  update: function(date) {
    return date.getHours();
  }
}, {
  value: 30,
  size: 60,
  update: function(date) {
    return date.getMinutes();
  }
}, {
  value: 30,
  size: 60,
  update: function(date) {
    return date.getSeconds();
  }
}];

var backgroundArc = d3.arc()
  .innerRadius(50)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(function(d) { return 2*Math.PI} );

var arc = d3.arc()
  .innerRadius(50)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(function(d) {
    return (d.value / d.size) * 2 * Math.PI;
  });

var svg = d3.select("div").append("svg")
  .attr("width", width)
  .attr("height", height);

var clock = svg.selectAll(".clock")
  .data(clockData)
  .enter().append("g")
  .attr("transform", function(d, i) {
    return "translate(" + (i * 2 + 1.25) / 6.5 * width + "," + height / 2 + ")";
  })
  .attr("class", "clock");

clock.append("path")
  .attr("class", "path background")
  .attr("d", backgroundArc);

clock.append("path")
  .attr("class", "path foreground")
  .attr("d", arc)


function update() {
  var now = new Date();
  console.log(now);
  clock
    .each(function(d) {
      d.value = d.update(now);
    });
  clock.select('.foreground').attr("d", arc)
}
setInterval(update, 1000);

