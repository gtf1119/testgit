$(function(){
	//生成表格
	
	
	
	
	select.init({
		rendTo : "#sltGoodsType",
		dataSource :"queryGoodType.action",
		
		defaultSelected : "-1",
		defaultItem :[{
			id : "-1",
			name : "全部"
		}],
		mapping : {
			key : "id",
			value : "name"
		},
		onLoad : function(){
			loadGrid();
		}
	});
	
	select.init({
		rendTo : "#sltGoodsPrice",
		dataSource :[{
			key:">",
			value:"大于"
		},{
			key: "=",
			value : "等于"
		},{
			key : "<",
			value : "小于"
		}],
		
		defaultSelected : "-1",
		defaultItem :[{
			key : "-1",
			value : "请选择"
		}]
	});
	
	select.init({
		rendTo : "#sltGoodsSales",
		dataSource :[{
			key:">",
			value:"大于"
		},{
			key: "=",
			value : "等于"
		},{
			key : "<",
			value : "小于"
		}],
		
		defaultSelected : "-1",
		defaultItem :[{
			key : "-1",
			value : "请选择"
		}]
	});
	
	select.init({
		rendTo : "#sltGoodsNum",
		dataSource :[{
			key:">",
			value:"大于"
		},{
			key: "=",
			value : "等于"
		},{
			key : "<",
			value : "小于"
		}],
		
		defaultSelected : "-1",
		defaultItem :[{
			key : "-1",
			value : "请选择"
		}]
	});
	
	
	$("#btnQuery").click(function(){
		loadGrid();
	});
	
	$("#btnAdd").click(function(){
		showDialog("添加商品");
	});
	
	$("#btnUpdate").click(function(){
		if($(this).hasClass("forbidBtn")){
			return;
		}
		var tr= $("#myGrid .gridTrSelected");
		
		var editObj = {};
		$("td",tr).each(function(){
			var alias = $(this).attr("alias");
			editObj[alias] = $(this).attr("originalvalue");
		});
		top.editObj = editObj;
		showDialog("编辑商品");
	});
	

	
	$("#btnDelete").click(function(){
		if($(this).hasClass("forbidBtn")){
			return;
		}
		var tr= $("#myGrid .gridTrSelected");
		var delObj = {};
		$("td",tr).each(function(){
			var alias = $(this).attr("alias");
			delObj[alias] = $(this).attr("originalvalue");
		});
		
		top.dialog.show({
			title:"删除商品",
			width:400,
			height:212,
			confirm:true,
			text:"该商品将被删除，删除后无法恢复",
			onClickYes : function(){
				$.post("delGoods.action",{
					goodsId : delObj.goodsId
				},function(json){
					if(json.isSuccess == "true"){
						top.dialog.hide();
						grid.reload("#myGrid",1);
					}else{
						alert(json.errMsg);
					}
				});
			}
		});
		

	});
	
	
	$(window).resize(function(){
		updataSize();
	});
	updataSize();
	
	
});

function updataSize(){
	$(".line:eq(0) .conditionCols:not(.conText)").width(($(window).width()-278)/3);
	$(".line:eq(1) input").width(($(window).width()-621)/3);
}


function showDialog(title){
	top.dialog.show({
		title:title,
		url:"html/dialog/addGoods.jsp",
		width:870,
		height:480
	});
}

function loadGrid(){
	$("#btnUpdate,#btnDelete").addClass("forbidBtn");
	
	var con = "";
	var txtGoodsName = $("#txtGoodsName").val();
	if(txtGoodsName != ""){
		con += "G.NAME LIKE '%" + txtGoodsName + "%' AND ";
	}
	
	var txtUserName = $("#txtUserName").val();
	if(txtUserName != ""){
		con += "U.NAME LIKE '%" + txtUserName + "%' AND ";
	}
	
	var sltGoodsType = $("#sltGoodsType .defaultSelected").attr("key");
	if(sltGoodsType != "-1"){
		con += "G.TYPE_ID = '" + sltGoodsType +"' AND ";
	}
	
	var sltGoodsPrice = $("#sltGoodsPrice .defaultSelected").attr("key");
	var txtGoodsPrice = $("#txtGoodsPrice").val();
	if(sltGoodsPrice != "-1" && txtGoodsPrice != null){
		con += "PRICE "+ sltGoodsPrice + txtGoodsPrice + " AND ";
	}
	
	var sltGoodsNum = $("#sltGoodsNum .defaultSelected").attr("key");
	var txtGoodsNum = $("#txtGoodsNum").val();
	if(sltGoodsNum != "-1" && txtGoodsNum != null){
		con += "NUM "+ sltGoodsNum + txtGoodsNum + " AND ";
	}
	
	var sltGoodsSales = $("#sltGoodsSales .defaultSelected").attr("key");
	var txtGoodsSales = $("#txtGoodsSales").val();
	if(sltGoodsSales != "-1" && txtGoodsPrice != null){
		con += "PRICE "+ sltGoodsSales + txtGoodsSales + " AND ";
	}
	
	con = "WHERE "+con+" 1=1";
	
	grid.init({
		rendTo : "#myGrid",
		column : [ {
			name : "编号",
			alias : "goodsId",
			hide:true
		}, {
			name : "名称",
			alias : "goodsName"
		}, {
			name : "价格",
			alias : "goodsPrice",
			align : "right"
		} , {
			name : "库存",
			alias : "goodsNum",
			align : "right"
		}, {
			name : "销量",
			alias : "goodsSales",
			align : "right"
		}, {
			name : "评论",
			alias : "evaluatenum",
			align : "right"
		}, {
			name : "描述",
			alias : "goodsDes"
		}, {
			name : "创建时间",
			alias : "createTime"
		}, {
			name : "主子",
			alias : "userName"
		}, {
			name : "主子id",
			alias : "userId",
			hide : true
		}, {
			name : "商品类型",
			alias : "typeName"
		}
		, {
			name : "商品类型ID",
			alias : "typeId",
			hide : true
		},{
			name : "商品图片",
			alias : "goodsImgList",
			formatter : function(cellValue){
				var html="";
				$(cellValue).each(function(i,c){
					html+="<img class='gridImg' src='upload/"+c.filename+"'></img>";
					
				});
				return html;
			},
			originalValueFormatter : function(cellValue){
				var arr = [];
				$(cellValue).each(function(i,c){
					arr.push(c.filename);
				});
				return arr.join(",");
			}
		}],
		dataSource : "queryAllGoods.action",
		ajaxData : {
			condition : con
		},
		onRowClick : function(){
			var tr = $("#myGrid .gridTrSelected");
			if(tr.length>0){
				$(".forbidBtn").removeClass("forbidBtn");
			}else{
				$("#btnUpdate,#btnDelete").addClass("forbidBtn");
			}
			

		},
		onLoad : function(){
			
			var imgShowCon = $("#imgShowCon");
			var imgCon = $(".imgCon");
			$(".gridImg").each(function(){
				$(this).mouseenter(function(){
					imgShowCon.removeClass("hidden");
					imgCon.html("");
					var offset = $(this).offset();
					var leftOffset = offset.left;
					var topOffset = offset.top;
				
					$("<img src='"+$(this).attr('src')+"'></img>").appendTo(imgCon).css({
						width:200,
						height:200
					});
					$(imgShowCon).css({
						top:topOffset,
						left:leftOffset-250
					});
				});
				$(this).mouseleave(function(){
					imgShowCon.addClass("hidden");
				});
				
			});
	
		}
		
		

		
	});
}


