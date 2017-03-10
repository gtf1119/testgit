$(function(){
	$("#exit").click(function(){
		$.post("exit.action",function(json){
			if(json.isSuccess == "true"){
				location.href=$("base").attr("href")+"/html/login.jsp";
			}
		});
	});
});