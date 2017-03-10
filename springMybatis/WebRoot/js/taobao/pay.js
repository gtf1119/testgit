$(function(){
	var allGoodsIdStr =util.cookie.get("allGoodsIdStr");
	
	
	buildPay.init({
		rendTo:"#pay",
		dataSource : "queryPayList.action",
		ajaxData : {
			allGoodsIdStr : allGoodsIdStr
		}
	});
	
	shopCartNum.init({
		rendTo : ".cartNum",
		dataSource : "queryAllCartCount.action"
	});
});