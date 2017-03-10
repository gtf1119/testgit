var recid = null;
$(function(){
	
	recid = $(".selected").attr("uid");
	getMsg(recid);
	getActiveUser();
	$("#txtMsg").focus().keydown(function(event){
		if(event.which == 13){
			$("#sendMsg").click();
		}
	});
	
	$("#exit").click(function(){
		$.post("exit.action",function(json){
			if(json.isSuccess == "true"){
				location.href=$("base").attr("href");
			}
		});
	});
	
	$(".allTalk").click(function(){
		$(this).addClass("selected");
		$(".onlineUser").removeClass("selected");
		recid = $(".selected").attr("uid");
		getMsg(recid);
	});
	
	$("#sendMsg").click(function(){
		addMsg(recid);
	});
	
	setInterval(function(){
		getActiveUser();
	},3000);
	setInterval(function(){
		getMsg(recid);
	},3000);
	

});

function addMsg(recid){
	var txt = $("#txtMsg").val();
	if(txt == null || txt == ""){
		return;
	}
	$.post("addMsg.action",{
		txt : txt,
		recid : recid
	},function(json){
		if(json.isSuccess == "true"){

			$("#txtMsg").val("");
		}else{
			alert("失败");
		}
	});
}

function getMsg(recid){

	
	var lastid = $(".line:last-child").attr("cid");
	$.post("queryAllTxt.action",{
		lastid : lastid == null ? "getAll" : lastid,
		recid : recid
	},function(json){
		
		$(json).each(function(i,r){
			var line = $("<div class='line'></div>").appendTo("#chatMsg");
			var info = $("<div class='info'></div>").appendTo(line);
			$("<div style='clear:both'></div>").appendTo(line);
			var msg = $("<div class='msg'>"+r.txt+"</div>").appendTo(line);
			
			$("<img src='upload/"+r.user.userimg+"' class='userimg'>").appendTo(info);
			$("<p class='username'>"+r.user.loginname+"</p>").appendTo(info);
			$("<p class='createtime'>"+r.date+"</p>").appendTo(info);
			$(line).attr("cid",r.id);
			$(line).attr("uid",r.user.id);
			var uid = $("#welcome").attr("uid");
			if($(line).attr("uid") == uid){
				$(line).addClass("lineme");
				$(msg).addClass("me");
				$(info).addClass("lineme");
				$("<div class='fx_me'></div>").appendTo(msg);
			}else{
				$(line).addClass("lineother");
				$(msg).addClass("other");
				$("<div class='fx_other'></div>").appendTo(msg);
			}
		});
		
		if (json.length > 0 && $("#chkAutoScroll").prop("checked"))
			// 自动下拉
			$("#chatMsg").scrollTop($("#chatMsg")[0].scrollHeight);
			
		
	});
}


function getActiveUser(){
	
	$.post("getActiveUsers.action",function(json){
		$(".onlineUserTitle>span").text(json.length);
		$("#userItem>.onlineUser").each(function(){
			var uid = $(this).attr("uid");
			var isHas = false;
		
			$(json).each(function(i,t){
				if(uid == t.id){
					isHas = true;
					return false;
				}
			});
			
		
			if(!isHas){
				$(this).remove();
			}
		});
		
		$(json).each(function(i,t){
			if($("#userItem>.onlineUser[uid='"+t.id+"']").length>0)
				return true;
			
			var user = $("<div class='onlineUser'></div>").attr("uid",t.id).appendTo("#userItem");
			$("<img src=upload/"+t.userimg+" />").appendTo(user);
			$("<div class='username'>"+t.name+"<div>").appendTo(user);
			$("<div class='logintime'>"+t.logintime+"<div>").appendTo(user);	
		});
		
//		$("#userItem>.onlineUser").each(function(){
//			
//			$(this).click(function(){
//				$("#chatMsg").html("");
//				$(".allTalk").removeClass("selected");
//				$(this).addClass("selected").siblings().removeClass("selected");
//				recid = $(this).attr("uid");
//
//			});
//		});
		
	});
	return recid;
}