var addfriend = {
	init : function(args) {
		if (args.ajaxData == null) {
			args.ajaxData = {
				pageNum : 1,
				pageSize : 100
			};
		} else {
			if (args.ajaxData.pageNum == null) {
				args.ajaxData.pageNum = 1;
			}
			if (args.ajaxData.pageSize == null) {
				args.ajaxData.pageSize = 10;
			}
		}
		$(args.rendTo).data("args", args);
		addfriend.getDataSource(args);
	},
	reload : function(rendTo, pageNum, pageSize) {
		var args = $(rendTo).data("args");
		args.ajaxData.pageNum = pageNum;
		args.ajaxData.pageSize = pageSize;
		addfriend.build(args);
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
					$.post("queryAllFriend.action", {
						condition : "WHERE F.MYID='" + $("#buusscard").attr("userid") + "'"
					}, function(json) {
						args.user = json;
						addfriend.build(args);
					});

				}
			});
		} else {
			args.data = args.dataSource;
			addfriend.build(args);
		}
	},
	build : function(args) {
		var renderTo = $(args.renderTo);
		$(args.data.rows).each(function(i, t) {
			var userIdArr = [];
			$(args.user).each(function(n, m) {
				userIdArr.push(m.friendId);
			});
			if (userIdArr.indexOf(this.id) > -1 || t.id == $("#buusscard").attr("userid")) {
				var buscard = $("<div class='bbuscard hidden'userid='" + t.id + "'></div>").appendTo(renderTo);
			} else {
				var buscard = $("<div class='bbuscard'userid='" + t.id + "'></div>").appendTo(renderTo);
			}
			var tx = $("<div class='txx'></div>").appendTo(buscard);
			var txpic = $("<img class='txpicc' src='upload/" + t.userimg + "'>").appendTo(tx);
			var wm = $("<div class='wm' >" + t.name + "</div>").appendTo(buscard);
			var sex = $("<div class='sex'>" + t.sex + "</div>").appendTo(buscard);
			if (t.autoGraph == null) {
				var autograph = $("<div class='autograph'>这家伙很懒，还没有签名</div>").appendTo(buscard);
			} else {
				var autograph = $("<div class='autograph'>" + t.autoGraph + "</div>").appendTo(buscard);
			}
			var jhy = $("<div class='jhy hidden'>+加好友</div>").appendTo(buscard);
			var xq = $("<div class='xq hidden'>详情</div>").appendTo(buscard);
		});
		var xingq = $("<div class='xingq hidden'></div>").appendTo(renderTo);
		var titl = $("<div class='titl'>用户详情</div>").appendTo(xingq);
		var guanbi = $("<div class='guanbi'>×</div>").appendTo(xingq);
		var xqtx = $("<div class='xqtx'></div>").appendTo(xingq);
		var xqpic = $("<img class='xqpic' src=''></img>").appendTo(xqtx);
		var xm = $("<div class='xm'>姓名：</div>").appendTo(xingq);
		var xmm = $("<span class='xmm'></span>").appendTo(xm);
		var xb = $("<div class='xb'>性别：</div>").appendTo(xingq);
		var xbb = $("<span class='xbb'></span>").appendTo(xb);
		var gq = $("<div class='gq'>个签：</div>").appendTo(xingq);
		var sqq = $("<span id='sqq'>这家伙很懒，还没有签名</span>").appendTo(gq);
		var xqjhq = $("<div class='xqjhq'>加为好友</div>").appendTo(xingq);

		addfriend.event(args);
	},
	event : function(args) {

		$(".xq").each(function() {
			$(this).click(function() {
				$(".xingq").attr("friendId", $(this).parent().attr("userid"));
				$(".xqpic").attr("src", $(this).parent().find(".txpicc").attr("src"));
				$(".xmm").text($(this).parent().find(".wm").text());
				$(".xbb").text($(this).parent().find(".sex").text());
				$(".sqq").text($(this).parent().find(".autograph").text());
				$(".xingq").css("margin-top", $(this).offset().top - 100);
				$(".xingq").css("margin-left", $(this).offset().left - 300);
				$(".xingq").removeClass("hidden");
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
			$(".jhy", this).removeClass("hidden");
			$(".xq", this).removeClass("hidden");
		});
		$(".bbuscard").mouseleave(function() {
			$(".jhy", this).addClass("hidden");
			$(".xq", this).addClass("hidden");
		});
		$(".jhy").each(function() {
			$(this).click(function() {
				$.post("addFriend.action", {
					myId : $("#buuscard").attr("userid"),
					friendId : $(this).parent().attr("userid")
				}, function(json) {
					$("#tjhy").removeClass("hidden");
				});
			});
		});

		$(".xqjhq").click(function() {
			$.post("addFriend.action", {
				myId : $("#buuscard").attr("userid"),
				friendId : $(".xingq").attr("friendId")
			}, function(json) {
				$("#tjhy").removeClass("hidden");
			});
		});

		$("#close").click(function() {
			$("#tjhy").addClass("hidden");
			location.reload();
		});

		$("#searcd").click(function() {
			loadUser();
		});
	}

};

function loadUser() {
	var con = "";

	var Name = $("#nametxt").val();
	if (Name != "") {
		con += "NAME LIKE '%" + Name + "%' AND ";
	}

	var sltUserSex = $(".sexx:checked").val();
	if (sltUserSex != undefined) {
		con += "SEX ='" + sltUserSex + "' AND ";
	}
	con = "WHERE " + con;

	$.post("getAllUserByPage.action", {
		condition : con
	}, function(json) {
		alert("查询成功");
	});
}