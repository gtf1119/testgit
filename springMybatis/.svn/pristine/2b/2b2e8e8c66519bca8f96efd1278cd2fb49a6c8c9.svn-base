var buildPay = {
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
		buildPay.getDataSource(args);
	},
	reload : function(rendTo){
		var args = $(rendTo).data("args");
		buildPay.init(args);
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
					buildPay.build(args);
				}
			});
		}else{
			args.data = args.dataSource;
			buildPay.build(args);
		}
	},
	build : function(args){
		var rendTo = $(args.rendTo);
		$(rendTo).html("");
		var cartNav = $("<div class='cartNav'></div>").appendTo(rendTo);
		
		
		$("<div class='column t_goods'>商品</div>").appendTo(cartNav);
		$("<div class='column t_price'>单价</div>").appendTo(cartNav);
		$("<div class='column t_num'>数量</div>").appendTo(cartNav);
		$("<div class='column t_sum'>小计</div>").appendTo(cartNav);
	
		
		var countMoney = 0;
		
		$(args.data).each(function(i,d){
			var cartlist = $("<div class='cartlist'></div>").appendTo(rendTo);
			$("<div class='goodsId hidden'>"+d.goods.goodsId+"</div>").appendTo(cartlist);
			
			var goodcartItem = $("<div class='goodcartItem cartitem'></div>").appendTo(cartlist);
			$("<div class='goodcartprice cartitem'>"+d.goods.goodsPrice+"</div>").appendTo(cartlist);
			var goodcartnum = $("<div class='goodcartnum cartitem'></div>").appendTo(cartlist);
			$("<div class='goodcartsum cartitem'>"+d.goods.goodsPrice*d.goodsnum+"</div>").appendTo(cartlist);
			var goodcartaction = $("<div class='goodcartaction cartitem'></div>").appendTo(cartlist);
			var deslink = $("base").attr("href")+"html/taobao/goodDes.jsp?goodsId="+d.goods.goodsId;
			$("<div class='goodcartimg cartitem'><a class='toDes' href='"+deslink+"'><img src='upload/"+d.goods.goodsImgList[0].filename+"' alt='' /></a></div>").appendTo(goodcartItem);
			$("<div class='goodcartmsg'><a class='toDes' href='"+deslink+"'>"+d.goods.goodsName+"</a></div>").appendTo(goodcartItem);
			
			var numcart = $("<div class='numcart'></div>").appendTo(goodcartnum);
			
			$("<div class='goodsNum'>"+d.goodsnum+"</div>").appendTo(numcart);
			
			
			
			
			countMoney+=d.goods.goodsPrice*d.goodsnum;
		});
		var account = $("<div class='account'></div>").appendTo(rendTo);
		var delCon = $("<div class='delCon'></div>").appendTo(account);
		var accountCon = $("<div class='accountCon'></div>").appendTo(account);
		
		
		$("<div class='totalMoney'>预付： <span class='payMoney'>"+countMoney+"</span></div>").appendTo(accountCon);
		$("<input type='button' value='提交订单' class='accountFinal'>").appendTo(accountCon);
		buildPay.eventBind(args);
		
	},
	eventBind : function(args){
		var rendTo =  $(args.rendTo);
		
		
		
	
		
		
		$(".cartlist").each(function(){
			
			
			
			
			var txtNum = $(".txtNum",$(this));
			var buyNum = $(".txtNum",$(this)).val();
			var goodsId = $(this).find(".goodsId").text();
			
			$(".btnMlus",$(this)).click(function(){
				if(buyNum == 1){
				//	$(".btnMlus").addClass("btnDisable");
					return;
				}
				buyNum --;
				//$(".btnMlus").removeClass("btnDisable");
				//$(".btnPlus").removeClass("btnDisable");
				$(txtNum).val(buyNum);
				
				//changeNum(goodsId,buyNum);
			});
			
			$(".btnPlus",$(this)).click(function(){
				if(buyNum == 99){
//					$(".btnPlus").addClass("btnDisable");
					return;
				}
				buyNum ++;
//				$(".btnMlus").removeClass("btnDisable");
//				$(".btnPlus").removeClass("btnDisable");
				$(txtNum).val(buyNum);
				//changeNum(goodsId,buyNum);
			});
			
			$(txtNum).bind("input propertychange",function(){
				buyNum = $(txtNum).val();
				var reg = new RegExp(eval("/^[0-9]{1,2}$/"));
				if(reg.test(buyNum) == false){
					setTimeout(function(){
							buyNum = 1;
							$(txtNum).val(buyNum);
						//	changeNum(goodsId,buyNum);
					
					},1000);
				}else{
					//changeNum(goodsId,buyNum);
				}
				
			});
			
			
			
		});
		
	
		
//		function changeNum(goodsId,buyNum){
//			$.post("updateShopCart.action",{
//				goodsId : goodsId,
//				goodsNum : buyNum
//			},function(json){
//				if(json.isSuccess == "true"){
//					alert("成功");
//					buildPay.reload(rendTo);
//				}else{
//					alert("失败");
//				}
//			});
//		}
		
		var payMoney = $(".payMoney").text();
		var orderStrArr = [];

		$(args.data).each(function(i,d){
			var orderStr = d.goods.goodsId +"|"+ d.goodsnum;
	
			orderStrArr.push(orderStr);
		});
		var orderStr = orderStrArr.join(",");
		
		$(".accountFinal").click(function(){
			$.post("addOrder.action",{
				payMoney : payMoney,
				orderStr : orderStr
			},function(json){
				if(json.isSuccess == "true"){
					//alert("成功");
					$.post("updateSaleAndNum.action",{
						goodsIdStr : orderStr
					},function(json){
						if(json.isSuccess == "true"){
//							alert("ok");
						}else{
							alert("no");
						}
					});
					var linkhref = $("base").attr("href");
					setTimeout(function(){
						location.href=linkhref+"/html/taobao/shopCart.jsp";
					},1000);
					shopCartNum.init({
						rendTo : ".cartNum",
						dataSource : "queryAllCartCount.action"
					});
				}else{
					if(json.errMsg != null){
						alert(json.errMsg);
					}else{
						alert("失败");
					}
					
				}
			});
			
			
			
		});
		
		
	}
};