
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Fields', 'Number of proffesionals'],
            ['It', 11],
            ['Mnagement', 2],
            ['Marketing', 2],
            ['Construction', 2],
            ['Others', 7]
        ]);

        var options = {
            title: 'Proffesionels in different fields   ',
            pieHole: 0.5,
            backgroundColor: '#ececec',
            chartArea: {  
                top: 70,
                left: 70,
                width: '100%', 
                height: '100%'
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
