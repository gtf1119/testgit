$(function(){
	
	var link = window.location.search;
	var arr = link.substr(9,32);
	var con = " WHERE O.ID = '"+arr+"' AND 1=1";
	buildEval.init({
		rendTo:"#evalContent",
		dataSource : "queryOrder.action",
		ajaxData:{
			condition:con
		}
	});
});