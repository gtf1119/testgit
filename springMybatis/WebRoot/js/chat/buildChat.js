function Chat(args){
	this.rendTo = args.rendTo;
	this.dataSource = args.dataSource;
	this.init();
}

Chat.prototype.init = function(){
	if(this.rendTo == null || this.dataSource == null){
		return ;
	}
	this.getDataSource();
};

Chat.prototype.getDataSource = function(){
	if(typeof this.dataSource == "string"){
		var t = this;
		$.ajax({
			url:t.dataSource,
			type:"POST",
			dataType:"text",
			ajaxData : t.ajaxData,
			success : function(json){
				var obj = eval("("+json+")");
				t.dataSource = obj;
				t.build();
			}
		});
	}else if($.isArray(this.dataSource)){
		this.build();
	}
};

Chat.prototype.build = function(){
	var rendTo = $(this.rendTo);
	rendTo.html("");
	var ttt = this;
	$(this.dataSource.rows).each(function(i,r){
		var line = $("<div class='line'></div>").appendTo(rendTo);
		var info = $("<div class='info'></div>").appendTo(line);
		$("<p class='msg'>"+r.txt+"</p>").appendTo(line);
		$("<img src='upload/"+r.user.userimg+"' class='userimg'>").appendTo(info);
		$("<p class='username'>"+r.user.loginname+"</p>").appendTo(info);
		$("<p class='createtime'>"+r.date+"</p>").appendTo(info);
		$(line).attr("cid",r.id);
		$(line).attr("uid",r.user.id);
		var uid = $("#welcome").attr("uid");
		if($(line).attr("uid") == uid){
			$(line).addClass("me");
		}else{
			$(line).addClass("other");
		}
	});
};

Chat.prototype.reload = function(){
	this.init();
};
