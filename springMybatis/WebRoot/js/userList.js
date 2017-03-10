var userList = {
	init:function(args){
		userList.getDataSource(args);
	},getDataSource : function(args){
		if(typeof args.dataSource == "string"){
			$.ajax({
				url:args.dataSource,
				type:"POST",
				dataType : "text",
				success : function(json){
					var obj = eval("("+json+")");
					args.dataSource = obj;
					userList.build(args);
				}
			});
		}else if($.isArray(args.dataSource)){
			userList.build(args);
		}
	},
	build : function(args){
		var renderTo = $(args.renderTo);
		$(args.dataSource).each(function(i,d){
			var userCard = $("<div class='userCard'></div>").appendTo(renderTo);
			var pic = $("<div class='pic'></div>").appendTo(userCard);
			$("<img class='image' src='"+d.imgSrc+"'/>").appendTo(pic);
			var messageContainer = $("<div class='messageContainer'></div>").appendTo(userCard);
			var baseMsg = $("<div class='baseMsg'></div>").appendTo(messageContainer);
			var table = $("<table class='msgTable' cellpadding='0' cellspacing='0'></table>").appendTo(baseMsg);
			
			$(args.column).each(function(i2,d2){
				var tr = $("<tr class='msgTR'></tr>").appendTo(table);
				$("<td class='msgTD'>"+d2.name+"</td>").appendTo(tr);
				$("<td class='msgTD'>"+d[d2.alias]+"</td>").appendTo(tr);
			});
		});
		
	}
};