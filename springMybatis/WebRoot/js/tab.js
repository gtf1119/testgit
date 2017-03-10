var tab = {
	init : function(args){
	
		tab.getDataSource(args);
	},getDataSource : function(args){
		if(typeof args.dataSource == "string"){
			$.ajax({
				url:args.dataSource,
				type:"POST",
				dataType:"text",
				success : function(json){
					var obj = eval("("+json+")");
					args.dataSource = obj;
					tab.build(args);
				}
			});
		}else if($.isArray(args.dataSource)){
			tab.build(args);
		}
	},
	build : function(args){
		var renderTo = $(args.renderTo);
		$(renderTo).addClass("tabCon");
		$(args.dataSource).each(function(i,t){
			$("<div class='tab' key='"+t.key+"' url='"+t.url+"' unselectable='on'>"+t.value+"</div>").width(100/args.dataSource.length + "%").appendTo(renderTo);
		});
		$("<span class='moveBar'><span>").appendTo(renderTo);
		$("<iframe id='ifra' src='' frameborder='0'></iframe>").appendTo(renderTo);
		//设定默认选中
		if(args.defaultSelected != null){
			$(".tab[key='"+args.defaultSelected+"']",renderTo).addClass("tabSelected");
			var url = $(".tab[key='"+args.defaultSelected+"']",renderTo).attr("url");
			$("#ifra").attr("src",url);
		}else{
			$(".tab:eq(0)",renderTo).addClass("tabSelected");
			var url = $(".tab:eq(0)",renderTo).attr("url");
			$("#ifra").attr("src",url);
		}
		tab.eventBind(args);
	},
	eventBind :function(args){
		var renderTo = $(args.renderTo);
		//选项点击切换背景
		$(".tab",renderTo).click(function(){
			if($(this).hasClass("tabSelected")){
				
			}else{
				$(this).addClass("tabSelected").siblings().removeClass("tabSelected");
			}
			
			//点击选项iframe切换页面
			$("#ifra").attr("src",$(this,renderTo).attr("url"));
		
		
		
		});
		
	
	}
};