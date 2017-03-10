$(function() {
	addfriend.init({
		renderTo : "#buuscard",
		dataSource : "getAllUser.action"
	});
	
	friendManger.init({
		renderTo : "#buusscard",
		dataSource : "queryAllFriend.action",
	});
	
	var lastMenu = util.cookie.get("lastMenu");
	if (lastMenu != null && lastMenu != "") {
		$(".tabCard[key='"+lastMenu+"']").addClass("tabCardSelected");
	}
});