var buildEval = {
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
		buildEval.getDataSource(args);
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
					buildEval.build(args);
				}
			});
		}else{
			args.data = args.dataSource;
			buildEval.build(args);
		}
	},
	build : function(args){
		var rendTo = $(args.rendTo);
		var evalTable = $("<table class='evalTable' cellpadding='0' cellspacing='0'></table>").appendTo(rendTo);
		$("<tr><th colspan='3' class='orderid'>订单编号:<span class='orderSpan'>"+args.data.rows[0].id+"</span></th></tr>").appendTo(evalTable);
		
		$(args.data.rows[0].goodslist).each(function(i,g){
			var tr = $("<tr class='contentTr'></tr>").appendTo(evalTable);
			
			var td = $("<td style='width:30%;position:relative;padding:0 20px;'></td>").appendTo(tr);
			$("<div class='imgCon'><img src='upload/"+g.goodsImgList[0].filename+"' alt='' class='goodsimg' /></div>").appendTo(td);
			$("<div class='goodsinfo' goodsid='"+g.goodsId+"'>"+g.goodsName+"</div>").appendTo(td);
		
			
			$("<td><textarea name='txtEval' class='txtEval'></textarea></td>").appendTo(tr);
		});
		var evaluationTr = $("<tr></tr>").appendTo(evalTable);
		$("<td class='evaluationTd' colspan='3'><input class='submitEval' type='button' value='提交评价'  /><td>").appendTo(evaluationTr);
		buildEval.eventBind(args);
	},
	eventBind : function(args){
		
		
		$(".submitEval").click(function(){
			var orderid = $(".orderSpan").text();
			var infoArr = [];
			var info;
			var count = 0;
			$(".contentTr").each(function(){
				$(this).find(".txtEval").focus(function(){
					$(this).removeClass("txtErr");
				});
				
				var goodsid = $(this).find(".goodsinfo").attr("goodsid");
				var txtEval = $(this).find(".txtEval").val();
				if(txtEval == null || txtEval == ""){
					count++;
					$(this).find(".txtEval").addClass("txtErr");
				}
				info = goodsid+"|"+txtEval;
				infoArr.push(info);
			});
			if(count>0){
				return;
			}
			
			var infoStr = infoArr.join(",");
			$.post("addComment.action",{
				infoStr : infoStr
			},function(json){
				if(json.isSuccess == "true"){
					$.post("updateStatus.action",{
						orderid:orderid,
						status : "3"
					},function(json){
						if(json.isSuccess =="true"){
							setTimeout(function(){
								location.href=$("base").attr("href")+"html/taobao/order.jsp";
							},1000);
						}else{
							alert("no");
						}
					});
				}else{
					alert("失败");
				}
			});
		});
		
	}
};