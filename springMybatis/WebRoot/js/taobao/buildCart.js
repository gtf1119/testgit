var buildCart = {
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
		buildCart.getDataSource(args);
	},
	reload : function(rendTo){
		var args = $(rendTo).data("args");
		buildCart.init(args);
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
					buildCart.build(args);
				}
			});
		}else{
			args.data = args.dataSource;
			buildCart.build(args);
		}
	},
	build : function(args){
		var rendTo = $(args.rendTo);
		$(rendTo).html("");
		var cartNav = $("<div class='cartNav'></div>").appendTo(rendTo);
		
		
		
		var t_checkbox =  $("<div class='column t_checkbox'></div>").appendTo(cartNav);
		$("<label id='lblcheck'><input type='checkbox' name='checks' checked='checked' class='checkBoxs'/>全选</label>").appendTo(t_checkbox);
		$("<div class='column t_goods'>商品</div>").appendTo(cartNav);
		$("<div class='column t_price'>单价</div>").appendTo(cartNav);
		$("<div class='column t_num'>数量</div>").appendTo(cartNav);
		$("<div class='column t_sum'>小计</div>").appendTo(cartNav);
		$("<div class='column t_action'>操作</div>").appendTo(cartNav);
		
		var countMoney = 0;
		
		$(args.data).each(function(i,d){
			var cartlist = $("<div class='cartlist'></div>").appendTo(rendTo);
			$("<div class='goodsId hidden'>"+d.goods.goodsId+"</div>").appendTo(cartlist);
			$("<div class='cartcheck'><input type='checkbox' name='cartCheck' class='check'/></div>").appendTo(cartlist);
			var goodcartItem = $("<div class='goodcartItem cartitem'></div>").appendTo(cartlist);
			$("<div class='goodcartprice cartitem'>"+d.goods.goodsPrice+"</div>").appendTo(cartlist);
			var goodcartnum = $("<div class='goodcartnum cartitem'></div>").appendTo(cartlist);
			$("<div class='goodcartsum cartitem'>"+d.goods.goodsPrice*d.goodsnum+"</div>").appendTo(cartlist);
			var goodcartaction = $("<div class='goodcartaction cartitem'></div>").appendTo(cartlist);
			var deslink = $("base").attr("href")+"html/taobao/goodDes.jsp?goodsId="+d.goods.goodsId;
			$("<div class='goodcartimg cartitem'><a class='toDes' href='"+deslink+"'><img src='upload/"+d.goods.goodsImgList[0].filename+"' alt='' /></a></div>").appendTo(goodcartItem);
			$("<div class='goodcartmsg'><a class='toDes' href='"+deslink+"'>"+d.goods.goodsName+"</a></div>").appendTo(goodcartItem);
			
			var numcart = $("<div class='numcart'></div>").appendTo(goodcartnum);
			$("<input type='button' value='+' class='btnPlus' />").appendTo(numcart);
			$("<input type='text' class='txtNum' value='"+d.goodsnum+"'/>").appendTo(numcart);
			$("<input type='button' value='-' class='btnMlus' />").appendTo(numcart);
			
			$("<a class='del' href='javascript:void(0);'>删除</a>").appendTo(goodcartaction);
			
			countMoney+=d.goods.goodsPrice*d.goodsnum;
		});
		var account = $("<div class='account'></div>").appendTo(rendTo);
		var delCon = $("<div class='delCon'></div>").appendTo(account);
		var accountCon = $("<div class='accountCon'></div>").appendTo(account);
		$("<a class='delAll' href='javascript:void(0);'>删除选中商品</a>").appendTo(delCon);
		
		$("<div class='totalMoney'>总价：<span class='countMoney'> "+countMoney+"</span></div>").appendTo(accountCon);
		$("<input type='button' value='结算' class='accountFinal'>").appendTo(accountCon);
		buildCart.eventBind(args);
		
	},
	eventBind : function(args){
		var rendTo =  $(args.rendTo);
		
		
		
		//全选
		if($(".checkBoxs").prop("checked"))
			$(".check").prop("checked","checked");
		$(".checkBoxs").click(function(){
			if($(".checkBoxs").prop("checked")){
				$(".check").prop("checked","checked");
			}else{
				$(".check").prop("checked","");
			}
		});
		
		
		$(".check").click(function(){
			if($(this).prop("checked") == false){
				$(".checkBoxs").prop("checked","");
			}else{
				var checkedNum =0;
				
				for(var i=0;i<$(".check").length;i++){
					if($(".check:eq("+i+")").prop("checked") == false){
						return;
					}else{
						checkedNum ++;
					}
				}
				if(checkedNum == $(".check").length){
					$(".checkBoxs").prop("checked","checked");
				}
				
			}
			
		});
		
		var countMoney =0;
		
		$(".cartlist").each(function(){
			
			if($(this).find(".check").prop("checked")){
				countMoney += $(".goodcartprice",$(this)).text()*$(".txtNum",$(this)).val();
			};
			
			
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
				changeNum(goodsId,buyNum);
				changeCartNum();
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
				changeNum(goodsId,buyNum);
				changeCartNum();
			});
			
			$(txtNum).bind("input propertychange",function(){
				buyNum = $(txtNum).val();
				var reg = new RegExp(eval("/^[0-9]{1,2}$/"));
				if(reg.test(buyNum) == false){
					setTimeout(function(){
							buyNum = 1;
							$(txtNum).val(buyNum);
							changeNum(goodsId,buyNum);
							changeCartNum();
					},1000);
				}else{
					changeNum(goodsId,buyNum);
					changeCartNum();
				}
				
			});
			
			$(this).find(".del").click(function(){
				var goodsId = $(this).parents(".cartlist").find(".goodsId").text();
				
				dialog.show({
					title:"删除商品",
					width:400,
					height:198,
					confirm:true,
					text:"该商品将被删除，你可以选择确定或取消",
					onClickYes : function(){
						$.post("deleteShopCart.action",{
							goodsId : goodsId
						},function(json){
							if(json.isSuccess == "true"){
								top.dialog.hide();
								//alert("成功");
								buildCart.reload(rendTo);
								changeCartNum();
							}else{
								alert("失败");
							}
						});
					}
				});
			

			});
			
		});
		
		$(".countMoney").text(countMoney);
		
		$(".delAll").click(function(){
			var goodsIdArr = [];
			$(".cartlist").each(function(){
				var goodsId = $(this).find(".goodsId").text();
				if($(this).find(".check").prop("checked")){
					goodsIdArr.push(goodsId);
				};
			});
			
			var allGoodsIdStr = goodsIdArr.join(",");
			
			dialog.show({
				title:"删除商品",
				width:400,
				height:200,
				confirm:true,
				text:"选中商品将被删除，你可以选择确定或取消",
				onClickYes : function(){
					$.post("deleteMuchShopCart.action",{
						allGoodsIdStr : allGoodsIdStr
					},function(json){
						if(json.isSuccess == "true"){
							top.dialog.hide();
							buildCart.reload(rendTo);
							changeCartNum();
						}else{
							alert("失败");
						}
					});
				}
			});
			
			
		});
		
		
		function changeNum(goodsId,buyNum){
			$.post("updateShopCart.action",{
				goodsId : goodsId,
				goodsNum : buyNum
			},function(json){
				if(json.isSuccess == "true"){
//					alert("成功");
					buildCart.reload(rendTo);
				}else{
					alert("失败");
				}
			});
		}
		
		function changeCartNum(){
			//不延时查询数据会有错误
			setTimeout(function(){
				shopCartNum.init({
					rendTo : ".cartNum",
					dataSource : "queryAllCartCount.action"
				});
			},50);
			
		}
		
		
		$(".accountFinal").click(function(){
			var goodsIdArr = [];
			$(".cartlist").each(function(){
				var goodsId = $(this).find(".goodsId").text();
				if($(this).find(".check").prop("checked")){
					goodsIdArr.push(goodsId);
				};
			});
			
			var allGoodsIdStr = goodsIdArr.join(",");
			
			util.cookie.set("allGoodsIdStr", allGoodsIdStr);
			var linkhref = $("base").attr("href");
			location.href=linkhref+"/html/taobao/pay.jsp";
		});
		
	}
};