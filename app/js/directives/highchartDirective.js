DevDimDirectives.directive('highchart', function () {
        return  function ($scope, element, attrs) {          
            $("#"+element.context.id).highcharts({
                chart: {
                    //type: 'column',
                    //margin: 75,
                    //options3d: {
                    //    enabled: true,
                    //    alpha: 10,
                    //    beta: 25,
                    //    depth: 70
                    //}
                    polar: true,
                    type: 'line',
                    alignTicks: false
                },
                pane: {
                    size: '80%'
                },
                title: {
                    text: 'My skills'
                },
                legend:{
                enabled:false
                },
                    plotOptions: {
                        column: {
                            depth: 25
                        }
                    },
                    xAxis: {
                        categories: ["ASPX",".NET MVC","SignalR","jQuery","AngularJs","SQL","Entity Framework","nHibernate"]
                    },
                    yAxis: {
                        title: {
                            text: "Level"
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                       
                        data: [2, 4, 3, 4, 3, 3, 3, 4],
                        color: '#ff7c00',
                        tooltip: {
                            valueSuffix: '/5'
                        }
                    }]
                });
           

            
        }
    });