$(function(){
	 
	$.post("queryVolume.action",function(json){
		var dataArr = [];
		var columArr = [];
		$(json).each(function(i,t){
		
			if(t.value != 0){
				dataArr.push(t);
				columArr.push(t.name);
			}
		});
		var myChart = echarts.init(document.getElementById('main'));
		option = {
			    title : {
			        text: '个人本月清单',
			        subtext: '来自商城数据库',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: columArr
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:dataArr,
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};
		 myChart.setOption(option);
	});
	
	
});