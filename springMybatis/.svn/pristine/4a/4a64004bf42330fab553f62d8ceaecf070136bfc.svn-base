

var select = {
	init : function(args){
		if(args.mapping == null){
			args.mapping = {
				key:"key",
				value : "value"
			};
		}
		
		//如果没有ajaxData 初始化
		if(args.ajaxData == null){
			args.ajaxData = {};
		}
		
		//如果没有offset 初始化
		if(args.offset == null){
			args.offset = 0;
		}
		
		//如果没有设定弹出方向 初始化
		if(args.direction == null){
			args.direction = "down";
		}
		
		args.direction = args.direction=="down"?"top":"bottom";
		
		//将传入的参数绑定到args.rendTo的div上
		$(args.rendTo).data("args",args);
		
		select.getDataByDataSource(args);
	},getDataByDataSource : function(args){
		if(typeof args.dataSource == "string"){
			$.ajax({
				url:args.dataSource,
				type:"POST",
				data:args.ajaxData,
				dataType:"text",
				success : function(json){
					//把json字符串转成js对象
					var obj = eval("("+json+")");
					args.dataSource = obj;
					select.build(args);
				}
			});
		}else if($.isArray(args.dataSource)){
			select.build(args);
		}
	},
	build : function(args){
		var rendTo = $(args.rendTo);
		$(rendTo).addClass("select");
		$("<div class='txtShow'></div>").appendTo(rendTo);
		$("<img alt='' src='image/arrow2.jpg' class='image'/>").appendTo(rendTo);
		var selList = $("<ul class='selList hidden'></ul>").appendTo(rendTo);
		
		$(args.defaultItem).each(function(i,n){
			$("<li class='gender' key='"+n[args.mapping.key]+"' unselectable='on'>"+n[args.mapping.value]+"</li>").appendTo(selList);
		});
		
		$(args.dataSource).each(function(i,n){
			$("<li class='gender' key='"+n[args.mapping.key]+"' unselectable='on'>"+n[args.mapping.value]+"</li>").appendTo(selList);
		});
		
		if(args.defaultSelected != null){
			$(".txtShow",args.rendTo).text($(".gender[key='"+args.defaultSelected+"']",selList).addClass("defaultSelected").text());
		}else{
			$(".txtShow",args.rendTo).text($(".gender:eq(0)",selList).addClass("defaultSelected").text());
		}
		select.eventBind(args);
		
	},
	eventBind : function(args){
		var rendTo = $(args.rendTo);
		
		//下拉菜单点击事件
		$(rendTo).click(function(event){
			$(".selList", rendTo).hasClass("hidden") ? select.show(rendTo) : select.hide(rendTo);
		
			$(rendTo).attr("flag", "true");
			var nd = $(".select:not([flag='true'])");
			if(nd.length > 0){
				select.hide(nd);
			}
			$(rendTo).removeAttr("flag");
			event.stopPropagation();
		});
		
		//菜单点击
		$(".gender",rendTo).click(function(event){
			
			select.selectedGender(rendTo,this);
			select.hide(rendTo);
			
			if(args.onclick !=null && $.isFunction(args.onclick())){
				args.onclick();
			}
			event.stopPropagation();
		});
		
		$("body").click(function(){
			$(".select").each(function(){
				select.hide(this);
			});
		});
		
		if (args.onLoad != null && $.isFunction(args.onLoad))
			args.onLoad();
	},
	show : function(rendTo){
		var args = $(rendTo).data("args");
		$(".selList",rendTo).css(args.direction, 29+ +args.offset -10);
		$(".selList",rendTo).removeClass("hidden");
		if(util.isLTIE10()){
			$(".selList",rendTo).css("opacity","0");
			var style={
				opacity:1	
			};
			style[args.direction] = 28 + +args.offset;
			$(".selList",rendTo).animate(style,"fast");
		}else{
			setTimeout(function(){
				$(".selList",rendTo).css(args.direction,29 + +args.offset).css("opacity",1);
			},1);
		}
		
	},
	hide : function(rendTo){
		var args = $(rendTo).data("args") ;
		if(util.isLTIE10()){
			var style={
					opacity:0	
				};
				style[args.direction] = 20 + +args.offset;
				$(".selList",rendTo).animate(style,"fast");
		}else{
			$(".selList",rendTo).css(
				args.direction,20 + +args.offset	
			).css("opacity",0);
			
			
		}
		
		setTimeout(function(){
			$(".selList",rendTo).addClass("hidden");
		},250);
		
	},
	selectedGender : function(rendTo,gender){
		$(".gender",rendTo).removeClass("defaultSelected");
		$(gender).addClass("defaultSelected");
		$(".txtShow",rendTo).text($(gender).text());
	}
};