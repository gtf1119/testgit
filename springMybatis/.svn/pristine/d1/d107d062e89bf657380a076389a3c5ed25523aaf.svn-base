var x ;
$(function() {

	
	
	shopCartNum.init({
		rendTo : ".cartNum",
		dataSource : "queryAllCartCount.action"
	});
	
	x= new xdialog({
		rendTo : "#xdialog"
	});
		


	
	$(".close").click(function(){
		x.hide({
			height : 500,
			width :"100%"
		});
	});
		
	tabResize();
	$(window).resize(function() {
		tabResize();
	});

	$.post("queryUserById.action", function(json) {
		if (json.userimg != null) {
			$("<img class='userImgItem' src='upload/" + json.userimg + "' />").appendTo(
					$(".userImgIcon")).attr("userImg", json.userimg);

		} else {
			$("<img class='userImgItem' src='image/tx.jpg' />").appendTo($(".userImgIcon"));

		}
		$(".infoName").text(json.name).attr("userId", json.id);
		$(".infoLoginName").text(json.loginname).attr("loginname", json.loginname);

		if (json.sex == "男") {
			$(".infoSex").text("♂").css("color", "#0ba1e4");
		} else if (json.sex == "女") {
			$(".infoSex").text("♀").css("color", "#f44336");
		}
		$(".infoMoney").text(json.money);
		if(json.autoGraph == null || json.autoGraph == ""){
			$(".infoAutoGraph").text("你真的很懒，什么都没有留下");
		}else{
			$(".infoAutoGraph").text(json.autoGraph);
		}

		$(".nametxt").text(json.loginname).attr("loginname", json.loginname);
		$(".sextxt").text(json.sex).attr("sex", json.sex);
		$(".moneytxt").text(json.money).attr("money", json.money);
		$(".pwdtxt").text(json.pwd).attr("pwd", json.pwd);
		if(json.autoGraph == null || json.autoGraph == ""){
			$(".autoGraphtxt").text("你真的很懒，什么都没有留下").attr("autoGraph",json.autoGraph);
		}else{
			$(".autoGraphtxt").text(json.autoGraph).attr("autoGraph",json.autoGraph);

		}
		
		$(".userImgIcon").mouseenter(function() {
			$(".userImgMask").removeClass("hidden");
			setTimeout(function() {
				$(".userImgMask").css("opacity", 0.3);
			}, 0);

		});
		$(".userImgMask").mouseleave(function() {
			setTimeout(function() {
				$(".userImgMask").addClass("hidden");
			}, 250);

			$(".userImgMask").css("opacity", 0);
		});

		$(".field_content").each(function() {
			$(this).hover(function() {
				$(".edit", this).removeClass("hidden");
			}, function() {
				$(".edit", this).addClass("hidden");
			});
		});

		$(".edit").each(function() {
			$(".txtEdit", $(this).parent().next()).val($(this).prev().text());
			if ($(this).prev().text() == "男") {
				$("#sex1").prop("checked", "checked");
			} else if ($(this).prev().text() == "女") {
				$("#sex2").prop("checked", "checked");
			}
			$(this).click(function() {
				$(this).parent().addClass("hidden");
				$(this).parent().next().removeClass("hidden");

			});
		});
		$(".btnCancel").each(function() {
			$(this).click(function() {
				$(this).parent().parent().addClass("hidden");
				$(this).parent().parent().prev().removeClass("hidden");
			});

		});

		$("input").change(function() {
			var loginName = $(".txtLoginName").val();
			var userName = $(".infoName").eq(0).text();
			var userId = $(".infoName").attr("userId");
			var passWord = $(".txtPwd").val();
			var sex = $("input[name='sex']:checked").val();
			var autoGraph = $(".txtAutoGraph").val();
			var sexNum;
			if (sex == "男") {
				sexNum = 1;
			} else if (sex == "女") {
				sexNum = 0;
			}
			var txImg = "[" + $(".userImgItem").attr("userImg") + "]";

			$(".btnSave").each(function() {
				var ttt = this;
				$(this).click(function() {

					$.post("updateUser.action", {
						loginName : loginName,
						userName : userName,
						userId : userId,
						passWord : passWord,
						sex : sex,
						sexNum : sexNum,
						txImg : txImg,
						autoGraph : autoGraph
					}, function(json) {
						if (json.isSuccess == "true" && json.info == null) {
							$(ttt).parent().parent().addClass("hidden");
							$(ttt).parent().parent().prev().removeClass("hidden");
							updateAll();
						} else if (json.info == "pwdHasChange") {
							location.href = $("base").attr("href") + "/html/loginShop.jsp";
						}
					});
				});
			});
		});

	});

	$(".returnTo").click(function() {
		$(this).parent().addClass("hidden");
		$(this).parent().prev().removeClass("hidden");
		$("#tabID").removeClass("hidden");
	});
	$("#btnEdit").click(function() {
		$(this).parent().parent().addClass("hidden");
		$(this).parent().parent().next().removeClass("hidden");
		$("#tabID").addClass("hidden");
	});

	$(".uploadfile").change(function() {
		$("form").submit();

	});
});

function updateAll() {
	$.post("queryUserById.action", function(json) {
		if (json.userimg != null) {
			$("<img class='userImgItem' src='upload/" + json.userimg + "' />").appendTo(
					$(".userImgIcon")).attr("userImg", json.userimg);

		} else {
			$("<img class='userImgItem' src='image/tx.jpg' />").appendTo($(".userImgIcon"));

		}
		$(".infoName").text(json.name).attr("userId", json.id);
		$(".infoLoginName").text(json.loginname).attr("loginname", json.loginname);

		if (json.sex == "男") {
			$(".infoSex").text("♂").css("color", "#0ba1e4");
		} else if (json.sex == "女") {
			$(".infoSex").text("♀").css("color", "#f44336");
		}
		
		$(".infoMoney").text(json.money);
		if(json.autoGraph == null || json.autoGraph == ""){
			$(".infoAutoGraph").text("你真的很懒，什么都没有留下");
		}else{
			$(".infoAutoGraph").text(json.autoGraph);
		}

		$(".nametxt").text(json.loginname).attr("loginname", json.loginname);
		$(".sextxt").text(json.sex).attr("sex", json.sex);
		$(".moneytxt").text(json.money).attr("money", json.money);
		$(".pwdtxt").text(json.pwd).attr("pwd", json.pwd);
		if(json.autoGraph == null || json.autoGraph == ""){
			$(".autoGraphtxt").text("你真的很懒，什么都没有留下").attr("autoGraph",json.autoGraph);
		}else{
			$(".autoGraphtxt").text(json.autoGraph).attr("autoGraph",json.autoGraph);
		}
		
	});
}

function postGoodsInfo(allImgFileNameStr) {
	console.log(allImgFileNameStr);
	var loginName = $(".txtLoginName").val();
	var userName = $(".infoName").eq(0).text();
	var userId = $(".infoName").attr("userId");
	var passWord = $(".txtPwd").val();
	var sex = $("input[name='sex']:checked").val();
	var sexNum;
	if (sex == "男") {
		sexNum = 1;
	} else if (sex == "女") {
		sexNum = 0;
	}
	$.post("updateUser.action", {
		loginName : loginName,
		userName : userName,
		userId : userId,
		passWord : passWord,
		sex : sex,
		sexNum : sexNum,
		txImg : allImgFileNameStr
	}, function(json) {
		if (json.isSuccess == "true") {
			location.reload();
		}
	});
}

function tabResize() {
	$(".moveBar").addClass("hidden");
	$(".tab").width($("#tabID").width() / $(".tab").length);
	$(".moveBar").width($(".tab").eq(0).width());
	$(".moveBar").height($(".allCon").eq(0).height());
	$(".allCon").on("click", function() {
		$(".moveBar").removeClass("hidden");
		show($(this));
		hide($(this).siblings().find(".tabItemCon"));

		stopEvent(event);

	});
	$(".tabItem",$(".chatItem")).each(function() {
		$(this).click(function() {
			$("#ifra").removeClass("hidden");
			hide($(this).parent());
			var url = $(this).attr("url");
			var base = $("base").attr("href");
			$("#ifra").attr("src", base + "/html/" + url);

			stopEvent(event);
		});
	});
	$(".tabItem",$(".shop")).each(function(){
		$(this).click(function(){
			hide($(this).parent());
			var url = $(this).attr("url");
			var base = $("base").attr("href");
			location.href=base + "/html/taobao/" + url;
		});
	});
	
	$(".hot").click(function(){
		x.show({
			url : "html/demo.jsp",
			title : "",
			height : 500,
			width :"80%"
		});
		top.x = x;
	});
	
	$(".bill").click(function(){
		x.show({
			url : "html/echarts.jsp",
			title : "",
			height : 500,
			width :"100%"
		});
		top.x = x;
	});
	
	$(".disk").click(function(){
		var url = $(this).attr("url");
		var base = $("base").attr("href");
		location.href=base + "/html/" + url;
	});


	$(".allCon").on("click", function() {
		var index = $(this).index();
		$(".moveBar").css("left", index * $(this).width());
	});

	$("body").click(function() {
		$(".tabItemCon").each(function() {
			hide($(this));
		});
	});

}

function show(renderTo) {
	$(".tabItemCon", $(renderTo)).removeClass("hidden");
	var t = $(renderTo);
	if (util.isLTIE10()) {
		$(".tabItemCon", $(t)).css("opacity", "0");
		var style = {
			opacity : 1
		};
		style.top = 59;
		$(".tabItemCon", $(t)).animate(style, "fast");
	} else {

		setTimeout(function() {
			$(".tabItemCon", $(t)).css({
				"top" : 59,
				opacity : 1
			});
		}, 1);
	}

}
function hide(renderTo) {
	var t = $(renderTo);
	if (util.isLTIE10()) {
		var style = {
			opacity : 0
		};
		style.top = 1;
		$(".tabItemCon", $(t)).animate(style, "fast");
	} else {
		$(t).css({
			"top" : 1,
			opacity : 0
		});
	}

	setTimeout(function() {
		$(t).addClass("hidden");
	}, 100);
}
function stopEvent(event) { // 阻止冒泡事件
	// 取消事件冒泡
	var e = arguments.callee.caller.arguments[0] || event; // 若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
	if (e && e.stopPropagation) {
		// this code is for Mozilla and Opera
		e.stopPropagation();
	} else if (window.event) {
		// this code is for IE
		window.event.cancelBubble = true;
	}
}