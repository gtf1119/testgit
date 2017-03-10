$(function () {
	
	$.post("queryHotSale.action",function(json){
		
		var allArr = [];
		$(json).each(function(i,r){
			var goodItem = [];
			goodItem.push(r.goodsName);
			goodItem.push(parseInt(r.goodsSales));
			allArr.push(goodItem);
		});
		 $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '热销分析'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'sale （件）'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f} 件</b>'
        },
        series: [{
            name: 'sale',
            data: allArr
            ,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
	});
   
});