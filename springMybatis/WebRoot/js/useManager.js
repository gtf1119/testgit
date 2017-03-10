$(function(){
	//生成表格
	
	
	
	
	select.init({
		rendTo : "#conditionSlt",
		dataSource :[{
			key : "1",
			value : "男"
		},
		{
			key : "0",
			value : "女"
		}],
		defaultSelected : "-1",
		defaultItem :[{
			key : "-1",
			value : "全部"
		}],onLoad :function(){
			loadGrid();
		}
	});
	
	$("#btnQuery").click(function(){
		loadGrid();
	});
	
	$("#btnAdd").click(function(){
		showDialog("添加用户");
	});
	
	
	$("#btnUpdate").click(function(){
		if($(this).hasClass("forbidBtn")){
			return;
		}
		var tr = $("#myGrid .gridTrSelected");
		var editObj = {};
		$("td",tr).each(function(){
			var alias = $(this).attr("alias");
			editObj[alias] = $(this).attr("originalvalue");
		});
		top.editObj = editObj;
		showDialog("编辑用户");
	});
	
	$("#btnDelete").click(function(){
		if($(this).hasClass("forbidBtn")){
			return;
		}
		var tr = $("#myGrid .gridTrSelected");
		var delObj = {};
		$("td",tr).each(function(){
			var alias = $(this).attr("alias");
			delObj[alias] = $(this).attr("originalvalue");
		});
		
		top.dialog.show({
			title:"删除用户",
			width:400,
			height:212,
			confirm:true,
			text:"该用户将被删除，删除后无法恢复",
			onClickYes : function(){
				$.post("delUser.action",{
					userId : delObj.id
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
	$(".conditionCols:not(.conText)").width(($(window).width()-250)/3);
}

function showDialog(title){
	top.dialog.show({
		title:title,
		url:"html/dialog/userAdd.jsp",
		width:804,
		height:300
	});
}


function loadGrid(){
	$("#btnUpdate,#btnDelete").addClass("forbidBtn");
	
	var con ="";
	var txtLoginName = $("#txtLogin").val();
	if(txtLoginName != null){
		con += "LOGINNAME LIKE '%"+txtLoginName+"%' AND ";
	}
	var txtName = $("txtName").val();
	if(txtName != null){
		con += "NAME LIKE '%"+txtName+"%' AND ";
	}
	
	var sltUserSex = $("#conditionSlt .defaultSelected").attr("key");

	if(sltUserSex!="-1"){
		con += "SEXNUM =" +sltUserSex+" AND ";
	}
	con = "WHERE "+ con + " 1=1";
	grid.init({
			rendTo : "#myGrid",
			column : [ {
			name : "编号",
			alias : "id",
			hide : true
		}, {
			name : "登录名",
			alias : "loginname"
		} , {
			name : "姓名",
			alias : "name"
		}, {
			name : "金额",
			alias : "money",
			align : "right"
		}, {
			name : "密码",
			alias : "pwd"
		} , {
			name : "性别",
			alias : "sex",
			formatter : function(cellValue){
				cellValue =  "<div class='" + (cellValue == "男" ? "boy" : "girl") + "'><span>"+(cellValue == "男" ? "♂" : "♀")+"</span> " + cellValue + "</div>";
				return cellValue;
			}
		} , {
			name : "创建时间",
			alias : "createtime"
		} ,{
			name : "头像",
			alias : "userimg",
			formatter : function(cellValue){
				var html="";
				if(cellValue != null){
					
						html+="<img class='gridImg' src='upload/"+cellValue+"'></img>";
					
				}else{
					html+="<img class='gridImg' src='image/tx.jpg'></img>";
				}
				
				return html;
			},
			originalValueFormatter : function(cellValue){
				var arr = [];
				
					arr.push(cellValue);
				
				return arr.join(",");
			}
		}],
		dataSource : "getAllUserByPage.action",
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
