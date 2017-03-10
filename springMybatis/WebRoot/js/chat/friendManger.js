var friendManger = {
	init : function(args) {
		if (args.ajaxData == null) {
			args.ajaxData = {
				pageNum : 1,
				pageSize : 100,
				condition : "WHERE F.MYID='" + $("#buusscard").attr("userid") + "'"
			};
		} else {
			if (args.ajaxData.pageNum == null) {
				args.ajaxData.pageNum = 1;
			}
			if (args.ajaxData.pageSize == null) {
				args.ajaxData.pageSize = 100;
			}
		}
		$(args.rendTo).data("args", args);
		friendManger.getDataSource(args);
	},
	reload : function(rendTo, pageNum, pageSize) {
		var args = $(rendTo).data("args");
		args.ajaxData.pageNum = pageNum;
		args.ajaxData.pageSize = pageSize;
		friendManger.build(args);
	},
	getDataSource : function(args) {
		if (typeof args.dataSource == "string") {
			$.ajax({
				url : args.dataSource,
				type : "POST",
				dataType : "text",
				data : args.ajaxData,
				success : function(json) {
					var obj = eval("(" + json + ")");
					args.data = obj;
					friendManger.build(args);
				}
			});
		} else {
			args.data = args.dataSource;
			friendManger.build(args);
		}
	},
	build : function(args) {
		var renderTo = $(args.renderTo);
		$(args.data).each(function(i, t) {
			var buscard = $("<div class='bbuscard'userid='" + t.user.id + "'></div>").appendTo(renderTo);
			var tx = $("<div class='txx'></div>").appendTo(buscard);
			var txpic = $("<img class='txpicc' src='upload/" + t.user.userimg + "'>").appendTo(tx);
			var wm = $("<div class='wm' >" + t.user.loginname + "</div>").appendTo(buscard);
			var sex = $("<div class='sex'>" + t.user.sex + "</div>").appendTo(buscard);
			if (t.user.autograph == null) {
				var autograph = $("<div class='autograph'>这家伙很懒，还没有签名</div>").appendTo(buscard);
			} else {
				var autograph = $("<div class='autograph'>" + t.user.autograph + "</div>").appendTo(buscard);
			}
			var shy = $("<div class='shy hidden'>删除</div>").appendTo(buscard);
			var xq = $("<div class='xq hidden'>详情</div>").appendTo(buscard);

			var xingq = $("<div class='xingq hidden'></div>").appendTo(renderTo);
			var titl = $("<div class='titl'>用户详情</div>").appendTo(xingq);
			var guanbi = $("<div class='guanbi'>×</div>").appendTo(xingq);
			var xqtx = $("<div class='xqtx'></div>").appendTo(xingq);
			var xqpic = $("<img class='xqpic' src='upload/" + t.user.userimg + "'></img>").appendTo(xqtx);
			var xm = $("<div class='xm'>姓名：" + t.user.loginname + "</div>").appendTo(xingq);
			var xb = $("<div class='xb'>性别：" + t.user.sex + "</div>").appendTo(xingq);
			var gq = $("<div class='gq'>个签：</div>").appendTo(xingq);
			if (t.user.autograph == null) {
				var sqq = $("<span>这家伙很懒，还没有签名</span>").appendTo(gq);
			} else {
				var sqq = $("<span>" + t.user.autograph + "</span>").appendTo(gq);
			}
		});
		friendManger.event(args);
	},
	event : function(args) {

		$(".xq").each(function() {
			$(this).click(function() {
				$(this).parent().next().css("margin-top", event.pageX - 329);
				$(this).parent().next().css("margin-left", event.pageY - 164);
				$(this).parent().next().removeClass("hidden");
			});
		});
		$(".guanbi").each(function() {
			$(this).click(function() {
				$(this).parent().addClass("hidden");
				$(this).parent().css("margin-top", "0");
				$(this).parent().css("margin-left", "0");
			});
		});
		$(".bbuscard").mouseenter(function() {
			$(".shy", this).removeClass("hidden");
			$(".xq", this).removeClass("hidden");
		});
		$(".bbuscard").mouseleave(function() {
			$(".shy", this).addClass("hidden");
			$(".xq", this).addClass("hidden");
		});
		$(".shy").each(function() {
			$(this).click(function() {
				$.post("deleteFriend.action", {
					myId : $("#buuscard").attr("userid"),
					friendId : $(this).parent().attr("userid")
				}, function(json) {
					$("#schy").removeClass("hidden");
				});
			});
		});
		$("#closed").click(function() {
			$("#schy").addClass("hidden");
			location.reload();
		});
	}
};