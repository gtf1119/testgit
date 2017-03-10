$(function(){
	
	dialog.init();
	
	buildOrder.init({
		rendTo : "#orderContent",
		dataSource : "queryOrder.action"
	});
	
	shopCartNum.init({
		rendTo : ".cartNum",
		dataSource : "queryAllCartCount.action"
	});
	
	var con;
	$(".chooseOrder").each(function(){
		$(this).click(function(){
			
			$(this).addClass("orderClick").siblings().removeClass("orderClick");
			var status = $(this).attr("status");
			if(status != null){
				con = " WHERE STATUS='" + status +"' AND 1=1";
				buildOrder.init({
					rendTo : "#orderContent",
					dataSource : "queryOrder.action",
					ajaxData :{
						condition : con
					}
					
				});
			}else {
				buildOrder.init({
					rendTo : "#orderContent",
					dataSource : "queryOrder.action"
				});
			}
			
		});
	});
	
	
	$(".btnSearchId").click(function(){
		var txt = $(".txtSearchId").val();
		if(txt == null || txt == ""){
			return;
		}else{
			con = " WHERE O.ID='" + txt +"' AND 1=1";
			buildOrder.init({
				rendTo : "#orderContent",
				dataSource : "queryOrder.action",
				ajaxData :{
					condition : con
				}
				
			});
		}
		
	});
	
	
});