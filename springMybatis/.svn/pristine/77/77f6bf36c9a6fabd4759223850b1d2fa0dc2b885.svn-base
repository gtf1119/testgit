$(function(){
	dialog.init();
	var userId = $(".userid").text();
	var con = " WHERE C.USER_ID='"+ userId + "' AND 1 = 1 ";
	buildCart.init({
		rendTo:"#cart",
		dataSource : "queryShopCart.action",
		ajaxData : {
			condition : con
		}
	});
	
	shopCartNum.init({
		rendTo : ".cartNum",
		dataSource : "queryAllCartCount.action"
	});
});