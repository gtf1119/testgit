
var shopCartNum= {
	init:function(args){
		shopCartNum.getDataSource(args);
		$(args.rendTo).data("args",args);
	},
	reload : function(rendTo){
		args = $(rendTo).data("args");
		shopCartNum.init(args);
	},
	getDataSource : function(args){
		if(typeof args.dataSource == "string"){
			$.ajax({
				url : args.dataSource,
				type : "POST",
				dataType : "text",
				data : args.ajaxData,
				success : function(json){
					var obj = eval("("+json+")");
					args.data = obj;
					shopCartNum.build(args);
				}
			});
		}else{
			args.data = args.dataSource;
			shopCartNum.build(args);
		}
	},
	build : function(args){
		var rendTo = $(args.rendTo);
		$(rendTo).text(args.data);
	}
};