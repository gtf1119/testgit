var classification = {
	init:function(args){
		classification.getDataSource(args);
	},
	getDataSource : function(args){
		if(typeof args.dataSource == "string"){
			$.ajax({
				url:args.dataSource,
				type:"POST",
				dataType : "text",
				data:args.ajaxData,
				success:function(json){
					var obj = eval("("+json+")");
					args.data = obj;
					classification.build(args);
				}
			});
		}else{
			args.data = args.dataSource;
			classification.build(args);
		}
	},
	build : function(args){
		var rendTo = $(args.rendTo);
		$(args.data).each(function(i,d){
			var menuItem = $("<div class='menuItem'></div>").appendTo(rendTo);
			$("<div class='classifi'>"+d.name+"</div>").appendTo(menuItem);
			$("<div class='rightBorder hidden'></div>").appendTo(menuItem);
			var menuCon = $("<div id='menuCon' class='hidden'></div>").appendTo(rendTo);
			
			$(d.ttlist).each(function(i2,t){
				var goodTitleCon = $("<div class='goodTitleCon'></div>").appendTo(menuCon);
				$("<div class='goodTitle'>"+t.ttname+"</div>").appendTo(goodTitleCon);
				var goodIntro = $("<ul class='goodIntro'></ul>").appendTo(goodTitleCon);
				$("<div class='clearfix'></div>").appendTo(goodTitleCon);
				$(t.tglist).each(function(i3,g){
					$("<li><a ishigh='"+g.ishighlight+"' href=''>"+g.tdname+"</a></li>").appendTo(goodIntro);
				});
			});
		});
		
		
		classification.eventBind(args);
	},
	eventBind : function(args){
		var rendTo = $(args.rendTo);
		$(".menuItem").on({
			mouseenter : function(){
				$(this).next().removeClass("hidden");
				$(this).children(".rightBorder").removeClass("hidden");
			},
			mouseleave : function(){
				$(this).next().addClass("hidden");
				$(this).children(".rightBorder").addClass("hidden");
			}
		});
		
		$("#menuCon").mouseenter(function(){
			$(this).removeClass("hidden");
		});
		$("#menuCon").mouseleave(function(){
			$(this).addClass("hidden");
		});
		
		$("a[ishigh='1']").css({
			color:"#e54077"
		});
	}
};