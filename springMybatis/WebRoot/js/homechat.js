$(function() {

	$('.emotion').qqFace({
		id : 'face',

		assign : 'messageTxt',

		path : 'arclist/' // 表情存放的路径

	});

	$("#sendBtn").click(function() {
		var str = $("#messageTxt").val();
	});

	var condition = $(".msgLine:last-child")[0] == null ? "WHERE RECEIVERID IS NULL" : " WHERE RECEIVERID IS NULL AND C.CREATETIME > (SELECT CREATETIME FROM T_CHAT WHERE ID='" + $(".msgLine:last-child").attr("chatid") + "')";
	$("#messageTxt").focus().keydown(function(event) {
		if (event.which == 13 && event.ctrlKey) {
			$("#sendBtn").click();
		}
	});
	getChat("#messageList", condition);
	getActiveUsers();
	$("#sendBtn").click(function() {
		var content = $("#messageTxt").val();
		if (content == "" || content == null) {
			return;
		}
		if ($(this).hasClass("sending")) {
			return;
		}
		$(this).addClass("sending");
		var userId = $("#logoContainer").attr("userid");

		var receiverId = $(".serviceIcon_ww.ww").parent().parent().parent().parent().find(".shop").attr("userid");
		if (receiverId != null) {
			condition = $(".msgLine:last-child")[0] == null ? " WHERE USERID='" + userId + "' AND RECEIVERID='" + receiverId + "'" : " WHERE USERID='" + userId + "' AND RECEIVERID='" + receiverId + "' AND C.CREATETIME > (SELECT CREATETIME FROM T_CHAT WHERE ID='" + $(".msgLine:last-child").attr("chatid") + "')";
		}
		$.post("addChat.action", {
			content : content,
			receiverId : receiverId
		}, function(json) {
			if (json.isSuccess == "true") {
				$("#messageTxt").val("");
				getChat("#messageList", condition);
			} else {
				alert(json.errMsg);
			}
		});
		setTimeout(function() {
			$("#sendBtn").removeClass("sending");
		}, 1000);
	});
	$(".userItem:first").addClass("selectUserItem");

	$("#exitBtn").click(function() {
		$("#chatroom").addClass("hidden");
	});

	setInterval(function() {
		var userId = $("#logoContainer").attr("userid");
		var receiverId = $(".serviceIcon_ww.ww").parent().parent().parent().parent().find(".shop").attr("userid");
		condition = $(".msgLine:last-child")[0] == null ? " WHERE USERID='" + userId + "' AND RECEIVERID='" + receiverId + "' OR USERID='" + receiverId + "' AND RECEIVERID='" + userId + "'" : " WHERE (USERID='" + userId + "' AND RECEIVERID='" + receiverId + "' OR USERID='" + receiverId + "' AND RECEIVERID='" + userId + "') AND C.CREATETIME > (SELECT CREATETIME FROM T_CHAT WHERE ID='" + $(".msgLine:last-child").attr("chatid") + "')";
		if ($("#chatroom").hasClass("hidden")) {
			return;
		}
		getChat("#messageList", condition);
	}, 1000);

});

function getChat(renderTo, condition) {
	$.post("queryAllChat.action", {
		condition : condition
	}, function(json) {
		$(json.rows).each(function() {
			var msgLine = $("<div class='msgLine' chatid='" + this.id + "'></div>").appendTo(renderTo);
			if (this.user.id == $("#logoContainer").attr("userid")) {
				msgLine.addClass("me");
				var userFaceContainer = $("<div class='userFaceContainer'><span class='userInfo'>" + this.user.name + "  " + this.createTime + "</span></div>").appendTo(msgLine);
				$("<img class='userFace' src='upload/" + this.user.userimg + "' width='35' height='35'/>").appendTo(userFaceContainer);
			} else {
				var userFaceContainer = $("<div class='userFaceContainer'><img class='userFace' src='upload/" + this.user.userimg + "' width='35' height='35'/></div>").appendTo(msgLine);
				$("<span class='userInfo'>" + this.user.name + "  " + this.createTime + "</span>").appendTo(userFaceContainer);
			}
			var txtContent;
			var isHas = false;
			for ( var i = 0; i < 75; i++) {
				txtContent = this.content;
				if (txtContent.indexOf("[em_" + (i + 1) + "]") > -1) {
					isHas = true;
					break;
				} else
					isHas = false;

			}
			if (isHas)
				$("<div class='msgContent'></div>").appendTo(msgLine).html(replace_em(this.content));
			else
				$("<div class='msgContent'></div>").appendTo(msgLine).html(this.content);

		});
		if ($("#autoScollBtn").prop("checked")) {
			$(renderTo).scrollTop($(renderTo)[0].scrollHeight);
		}
	});
}

function getActiveUsers() {
	$.post("getActiveUsers.action", function(json) {
		$(".userItem").each(function() {
			var uid = $(this).attr("uid");
			var isHas = false;
			$(json).each(function() {
				if (uid == this.id) {
					isHas = true;
					return false;
				}
			});
		});
		$(json).each(function() {
			if ($(".userItem[uid='" + this.id + "']").length > 0) {
				return true;
			}
			var userItemContainer = $("<div class='userItemContainer'>").appendTo("#userList");
			var userItem = $("<div class='userItem'></div>").attr("uid", this.id).appendTo(userItemContainer);
			$("<img src='upload/" + this.userimg + "' />").appendTo(userItem);
			$("<span class='username'></span>").text(this.name).appendTo(userItem);
			$("<span class='loginTime'></span>").text(this.loginTime).appendTo(userItem);
		});
		$(".userItem").unbind("click");
		$(".userItem").click(function() {
			$(".selectUserItem").removeClass("selectUserItem");
			$(this).addClass("selectUserItem");
			$("#messageList").children().remove();
			var receiverId = $(this).attr("uid");
			var userId = $("#logoContainer").attr("userid");
			condition = $(".msgLine:last-child")[0] == null ? " WHERE USERID='" + userId + "' AND RECEIVERID='" + receiverId + "' OR USERID='" + receiverId + "' AND RECEIVERID='" + userId + "'" : " WHERE (USERID='" + userId + "' AND RECEIVERID='" + receiverId + "' OR USERID='" + receiverId + "' AND RECEIVERID='" + userId + "') AND C.CREATETIME > (SELECT CREATETIME FROM T_CHAT WHERE ID='" + $(".msgLine:last-child").attr("chatid") + "')";
			getChat("#messageList", condition);
		});
		$(".userItem").each(function() {
			if ($(this).attr("uid") == $("#logoContainer").attr("userid")) {
				$(this).remove();
			}
		});
	});
}

function replace_em(str) {

	str = str.replace(/\</g, '&lt;');

	str = str.replace(/\>/g, '&gt;');

	str = str.replace(/\n/g, '<br/>');

	str = str.replace(/\[em_([0-9]*)\]/g, '<img src="arclist/$1.gif" border="0" />');

	return str;

}