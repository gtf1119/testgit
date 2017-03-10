$(function(){

	/*菜单添加hover事件*/
	$("#nav").hover(function(){
		//显示高亮
		$("#navBg").removeClass("hide");
	},
	function(){
		//隐藏高亮
		$("#navBg").addClass("hide");
	});
	

	/*菜单实现动画和点击出现下拉*/
	$(".menu").on({
		click : function(){
			var index = $(this).index();
			$("#navBg").css("left",index*48);
			var name = $(this).attr("name");
			var hide = $(".hidden")[index];
			if($(hide).attr("id") == name){
				var menu = $(".menu")[index];
				
				$(hide).removeClass("hide").siblings().addClass("hide");
			
			}
		},
		
		mouseenter : function(){
			var index = $(this).index();
			$("#navBg").css("left",index*48);
			var name = $(this).attr("name");
			var hide = $(".hidden")[index];
			if($(hide).attr("id") == name){
				var menu = $(".menu")[index];
				
				$(hide).removeClass("hide").siblings().addClass("hide");
				
			}
		}
	});
	
	
	
	/*浏览下拉选项保持菜单高亮，鼠标离开时隐藏高亮*/

	$(".hidden").on({
		mouseover : function(){
			$("#navBg").removeClass("hide");
		},
		mouseleave : function() {
			$("#navBg").addClass("hide");
		}
	});
	
	/*鼠标离开下拉框时隐藏下拉框*/
	$("#selector").on("mouseleave",".hidden",function(){
		$(this).addClass("hide");
	});
	
	//点击替换展开弹出层
	$("#rep").click(function(){
		$("#dialog,#mask").removeClass("hide");
	});
	
	//点击返回或者关闭按钮退出弹出层
	$("#btnBack,#btnClose").click(function(){
		$("#dialog,#mask").addClass("hide");
		
	});
	
	//替换文本
	$("#btnReplace").click(function(){
		//文本域值
		var txtValue = $("#txtArea").val();
		//要替换的文本
		var txtReplace = $("#txtReplace").val();
		
		//将替换成
		var txtHasReplaced = $("#txtHasReplaced").val();
		
		//replace(reg,xx),批量修改
		var reg = "/"+txtReplace+"/g";
		//替换
		var str = txtValue.replace(eval(reg),txtHasReplaced);
		//重写文本域
		$("#txtArea").val(str);
		if(txtReplace.indexOf(txtValue)>-1){
			if(txtValue == ""){
				alert("没有文字");
			}
		
		}
		$("#dialog,#mask").addClass("hide");
	});
	
});