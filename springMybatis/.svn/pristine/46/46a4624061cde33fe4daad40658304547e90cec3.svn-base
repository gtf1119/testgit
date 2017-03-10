$(function(){
	//生成表格
	
	
	
	
	select.init({
		rendTo : "#conditionSlt",
		dataSource :"queryGoodType.action",
		defaultSelected : "-1",
		defaultItem :[{
			id : "-1",
			name : "全部"
		}],
		mapping : {
			key : "id",
			value : "name"
		},onLoad : function(){
			loadGrid();
		}
	
	});
	
	$("#btnQuery").click(function(){
		loadGrid();
	});
	
	$("#btnAdd").click(function(){
		showDialog("添加商品分类");
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
		showDialog("编辑商品分类");
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
			title:"删除商品分类",
			width:400,
			height:212,
			confirm:true,
			text:"该商品分类将被删除，删除后无法恢复",
			onClickYes : function(){
				$.post("delType.action",{
					typeId : delObj.id
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
	$(".conditionCols:not(.conText)").width(($(window).width()-212)/3);
}


function showDialog(title){
	top.dialog.show({
		title:title,
		url:"html/dialog/addType.jsp",
		width:540,
		height:200
	});
}

function loadGrid(){
	$("#btnUpdate,#btnDelete").addClass("forbidBtn");
	
	var con = "";
	var type = $("#conditionSlt .defaultSelected").attr("key");
	if(type != "-1"){
		con += "ID ='"+type+"' AND ";
	}
	con = "WHERE "+con + " 1= 1";
	
	grid.init({
		rendTo : "#myGrid",
		column : [ {
			name : "编号",
			alias : "id",
			hide:true
		}, {
			name : "商品分类名称",
			alias : "name"
		}, {
			name : "创建时间",
			alias : "createtime"
		}],
		dataSource : "queryTypeByPage.action",
		ajaxData : {
			condition:con
		},
		onRowClick : function(){
			var tr = $("#myGrid .gridTrSelected");
			if(tr.length>0){
				$(".forbidBtn").removeClass("forbidBtn");
			}else{
				$("#btnUpdate,#btnDelete").addClass("forbidBtn");
			}
		}
		

		
	});
}