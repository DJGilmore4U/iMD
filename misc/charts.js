google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Month/Year', 'Systolic', 'Diastolic', 'Weight'],
   ['Jan 18',  155,      85,      180],
   ['Feb 18',  150,      85,      182],
   ['Mar 18',  155,      105,      180],
   ['Apr 18',  129,      90,      175],
   ['May 18',  120,      80,      160],
   ['Jun 18',  195,      105,      165],
   ['Jul 18',  176,      110,      152],
   ['Aug 18',  165,      115,      145],
   ['Sep 18',  140,      90,      140],
   ['Oct 18',  130,      85,      136],
   ['Nov 18',  145,      90,      127],
   ['Dec 18',  125,      88,      125],
]);

var options = {
title : 'Blood Pressure Trends',
vAxis: {title: 'Blood Pressure | Weight Correlation'},
hAxis: {title: 'Month and Year'},
seriesType: 'bars',
series: {2: {type: 'line'}}
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
chart.draw(data, options);
}