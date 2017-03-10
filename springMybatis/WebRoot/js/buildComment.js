var buildComment = {
	init : function(args){
		if(args.ajaxData == null){
			args.ajaxData = {
				pageNum : 1,
				pageSize : 10
			};
		}else{
			if(args.ajaxData.pageNum == null){
				args.ajaxData.pageNum = 1;
			}
			if(args.ajaxData.pageSize == null){
				args.ajaxData.pageSize = 10;
			}
		}
		$(args.rendTo).data("args",args);
		buildComment.getDataSource(args);
	},
	reload : function(rendTo,pageNum,pageSize){
		var args = $(rendTo).data("args");
		args.ajaxData.pageNum = pageNum;
		args.ajaxData.pageSize = pageSize;
		buildComment.build(args);
	},
	getDataSource : function(args){
		if(typeof args.dataSource == "string"){
			$.ajax({
				url:args.dataSource,
				type:"POST",
				dataType:"text",
				data:args.ajaxData,
				success : function(json){
					var obj = eval("("+json+")");
					args.data = obj;
					buildComment.build(args);
				}
			});
		}else{
			args.data = args.dataSource;
			buildComment.build(args);
		}
	},
	build : function(args){
		var rendTo = $(args.rendTo);
		$(rendTo).html("");
		var commentNav = $("<div class='commentNav'></div>").appendTo(rendTo);
		var commentUl = $("<ul class='commentUl'></ul>").appendTo(commentNav);
		$("<li>商品评价</li>").appendTo(commentUl);
		$(args.data.rows).each(function(i,t){
			
			
			var commentContent = $("<div class='commentContent'></div>").appendTo(rendTo);
			
			
			
			var commentArea = $("<div class='commentArea'></div>").appendTo(commentContent);
			var userInfo = $("<div class='userInfo'></div>").appendTo(commentArea);
			var commentInfo = $("<div class='commentInfo'>").appendTo(commentArea);
			
			$("<img class='userimg' src='upload/"+t.user.userimg+"' alt='' />").appendTo(userInfo);
			$("<div class='username'>"+t.user.name+"</div>").appendTo(userInfo);
			
			$("<div class='matter'>"+t.content+"</div>").appendTo(commentInfo);
			$("<div class='comtime'><span>"+t.comtime+"</span></div>").appendTo(commentInfo);
			
		});
	
		
		
		$("<div style='clear:both'><div>").appendTo(args.rendTo);
		var html = "";
		
		var page = $("<div class='page'></div>").appendTo(args.rendTo);
		var pageTable = $("<table class='pageTable' cellpadding='0' cellspacing='0'>").appendTo(
				page);
		var pageTr = $("<tr></tr>").appendTo(pageTable);
		var html = "";
		html += "<td style='width: 140px;'>共<span class='total'>"+args.data.total+"</span>项,每页显示</td>";
		html += "<td style='width: 80px;'><div class='sltSize'></div></td>";
		html += "<td style='padding:0 18px'>项</td>";
		html += "<td style='width: 80px;'><div class='btnPrev pageBtn'>上一页</div></td>";
		html += "<td style='width: 40px;'><span class='currentPage'>"+args.ajaxData.pageNum+"</span>/" +
				"<span class='totalPage'>"+Math.ceil(args.data.total/args.ajaxData.pageSize)+"</span></td>";
		html += "<td style='width: 80px;'><div class='btnNext pageBtn'>下一页</div></td>";

		$(pageTr).html(html);
		buildComment.eventBind(args);
	},
	eventBind : function(args){
		var rendTo = $(args.rendTo);
		select.init({
			rendTo : args.rendTo + " .sltSize",
			dataSource : [{
				key:"10",
				value:"10"
			},{
				key:"20",
				value:"20"
			},{
				key:"30",
				value:"30"
			},{
				key:"40",
				value:"40"
			},{
				key:"50",
				value:"50"
			}],
			defaultSelected : args.ajaxData.pageSize,
			offset:"-2",
			direction:"up",
			onclick : function(){
				buildComment.reload(rendTo,1,$(".page .defaultSelected",rendTo).attr("key"));
			
			}
		});
	}
};