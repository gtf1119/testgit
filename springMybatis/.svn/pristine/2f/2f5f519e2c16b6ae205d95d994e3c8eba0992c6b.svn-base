$(function(){
	
	
	
	//初始化
	dialog.init();
	
	//导航的json
	var menuArray = [{
		name:"用户管理",
		url:"html/userManager1.jsp"
	},{
		name:"商品管理",
		url:"html/goods.jsp"
	},{
		name:"商品分类管理",
		url:"html/goodsClassifi.jsp"
	},{
		name:"评论管理",
		url:"html/comment.jsp"
	}
	];
	
	//遍历生成导航页面元素
	$(menuArray).each(function(index,t){
		var menuItem = $("<div class='menuItem'></div>").appendTo("#menu");
		
		$("<div class='leftBoder'></div>").appendTo(menuItem);
		$("<div class='rightBoder'></div>").appendTo(menuItem);
		$("<div class='leftMenuBtn' url='"+t.url+"' unselectable='on'>"+t.name+"</div>").appendTo(menuItem);
	});
	
	var navBg = $("<div id='navBg' class='hidden'></div>").appendTo("#menu");
	
	
	
	$("#menu").hover(function(){
		$("#navBg").removeClass("hidden");
	},
	function(){
		$("#navBg").addClass("hidden");
	});
	
	
	var last = util.cookie.get("last");
	if(last != null && last != ""){
		$(".leftMenuBtn[url='"+last+"']").parent().addClass("selected");
	}
	
	$(".menuItem").on({
		click : function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			$("#ifra").attr("src",$(".leftMenuBtn",this).attr("url"));
			var index = $(this).index();
			$("#navBg").css("top",index*43.18);
			
			var url = $(".leftMenuBtn",this).attr("url");
			util.cookie.set("last", url);
		},
		mouseenter : function(){
			var index = $(this).index();
			$("#navBg").css("top",index*43.18);
		}
	});
	
	$(".selected").click();
	
	$("#btnExit").click(function(){
		$.post("exit.action",function(json){
			if(json.isSuccess == "true"){
				location.href=$("base").attr("href");
			}
		});
	});
	
	
	$("#userImg").mouseenter(function(){
		$("#txCon").show();
	});
	$("#userImg").mouseleave(function(){
		$("#txCon").hide();
	});

	$("#txCon").mouseenter(function(){
		$("#txCon").show();
	});
	$("#txCon").mouseleave(function(){
		$("#txCon").hide();
	});
	
	$("#btnSave").click(function(){
		$("form").submit();
	});
	
	
	if($(".tx").attr("src") == null){
		$(".tx").attr("src","image/tx.jpg");
	}
	
	
	$("#targetFirst").click(function(){
		var userid = $(".userid").text();
		if(util.isIE())
			location.href="taobao/home.jsp?userid="+userid;
		else
			location.href="html/taobao/home.jsp?userid="+userid;
	});
	
	
	
	$(window).resize(function(){
		
		updateSize();
		
	});
	updateSize();
});



function updateSize(){
	$("#ifra").height($(window).height()-50);
}