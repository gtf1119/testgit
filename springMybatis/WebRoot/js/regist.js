var sex;
var sexNum;
$(function(){
	$("#txtResLoginName").focus();
	$("input[type='text'],input[type='password']",$("#registContent")).focus(function(){
		hideErr(this);
	}).blur(function(){
		checkTxt(this);
	}).keydown(function(event){
		if(event.which == 13){
			$("btnReg").click();
		}
	}).keyup(function(){
		if($(this).val() == ""){
			$(this).next().removeClass("hidden");
		}else{
			$(this).next().addClass("hidden");
		}
	});
	
	$(".placeholder").click(function(){
		$(this).prev().focus();
	});

	$("#btnReg").click(function(){
		var errCount = 0;
		$("input[type='text'],input[type='password']",$("#registContent")).each(function() {
			errCount += checkTxt(this);
		});
		
		if (errCount > 0) {
			return;// 退出方法
		}
		
		
		if($("#sex1").prop("checked")){
			sexNum = 1;
		}else{
			sexNum = 0;
		}
		
		
		if(sexNum == 1){
			sex="男";
		}else if(sexNum == 0){
			sex="女";
		}
		
		$.post("regist.action",
				{	
					loginName : $("#txtResLoginName").val(),
					userName : $("#txtName").val(),
					passWord : $("#txtPwd").val(),
					sex : sex,
					sexNum : sexNum
				}
				,function(json){
			if(json.isSuccess == "true"){
				$("#btnReg").addClass("btnSuccess").val("注册成功，请稍候");
				setTimeout(function(){
					location.href=$("base").attr("href")+"html/login.jsp";
				},1500);
			}else{
				$("#btnReg").addClass("btnErr").val("注册失败，原因："+json.errMsg);
				setTimeout(function(){
					$("#btnReg").removeClass("btnErr").val("注册");
				},1500);
			}
		});
	});
		
});

function checkResTxt(objTxt){
	var textStr = $(objTxt).val();
	var errTips = $(objTxt).next();

	var isHasErr = false;
	
	var getErrMsg = function(){
		var msgTxt = $(objTxt).prev().text();
		if($.trim(textStr)==""){
			isHasErr = true;
			return "不能为空";
		}
		if($.trim(textStr).length<parseInt($(objTxt).attr("minlength"))){
			isHasErr = true;
			return "长度太短";
		}
		if(!util.string.validate(textStr,$(objTxt).attr("validate"))){
			isHasErr = true;
			return "不能含有违规字符";
		}
		var p1 = $("#txtPwd").val();
		var p2 = $("#txtRePwd").val();
		if($(objTxt).attr("id")=="txtRePwd" && p1.length>0 && !$("#txtPwd").hasClass("txtErr") && p1 != p2 ){
			isHasErr = true;
			return "密码必须一致";
		}
		
	};
	var errMsg = getErrMsg();
	return isHasErr?showErr(objTxt,errMsg):hideErr(objTxt,errMsg);
	
};

//显示错误信息
function showErr(objTxt,errMsg,txtClass,errTipClass){
	txtClass = txtClass == null ? "txtErr" : txtClass;
	errTipClass = errTipClass == null ? "showErrTips" : errTipClass;
	
	$(objTxt).addClass(txtClass);
	var errTipObj = $(objTxt).next().next();
	$(errTipObj).text(errMsg);
	if (util.isLTIE10()) {
		// 使用jq实现动画
		$(errTipObj).animate({
			opacity : "1",
			marginRight : 15
		}, "fast");
	} else {
		// 给错误提示文字加上显示的样式，同时修改内部文字为errMsg
		$(errTipObj).addClass(errTipClass);
	}
	return 1;
};

//隐藏错误信息
function hideErr(objTxt,errMsg,txtClass,errTipClass){
	txtClass = txtClass == null ? "txtErr" : txtClass;
	errTipClass = errTipClass == null ? "showErrTips" : errTipClass;
	var errTipObj = $(objTxt).next().next();
	$(objTxt).removeClass(txtClass);
	if (util.isLTIE10()) {
		// 使用jq实现动画
		$(errTipObj).animate({
			opacity : "0",
			marginRight : "0px"
		}, "fast");
	} else {
		// 隐藏错误提示文字
		$(errTipObj).removeClass(errTipClass);
	}
	return 0;
};


function postGoodsInfo(allImgFileNameStr){
	
}


