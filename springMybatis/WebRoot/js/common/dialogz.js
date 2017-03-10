var dialog = {

	init : function() {
         
		var dialogDiv = $("<div id='dialog' class='hidden'></div>").appendTo("body");
		var titleBar = $("<div id='titleBar'></div>").appendTo(dialogDiv);
		var dialogIframe=$("<iframe id='dialogIframe' src='' frameborder='no'></iframe>").appendTo(dialogDiv);
        var titltTxt =$("<div id='titleTxt'></div>").appendTo(titleBar); 
		var btnDialogClose= $("<div id='btnDialogClose'>╳</div>").appendTo(titleBar);
		var mask = $("<div id='dialogMask' class='hidden'><div>").appendTo("body");
		$("#btnDialogClose").click(function() {
			dialog.hide();
		});
	},

	show : function(args) {
       
		top.$("#dialogIframe").attr("src",args.url);
		top.$("#dialogIframe").height(args.height -38);
		top.$("#dialog").css({
			width:args.width,
			height:args.height,
			marginLeft: -args.width/2,
			marginTop: -args.height/2
		});
		$("#titleTxt").text(args.title);
		top.$("#dialog , #dialogMask").removeClass("hidden");
	},

	hide : function() {
		top.$("#dialog , #dialogMask").addClass("hidden");
	}
};

//===============横屏弹出层===========
function XDialog(args){
	this.renderTo = args.renderTo;
	this.init();
}
XDialog.prototype.init = function(){
	if(!this.renderTo)
		return;
	this.objRenderTo = $(this.renderTo);
	this.build();
};

XDialog.prototype.build = function(){
	this.objRenderTo.removeClass().addClass("xdialog xdialogHidden hidden");
    var html="<div class='xdialogContent'>";
    html +="<div class='xdialogTitle'></div>";
  
    if(this.confirm){
    	
    }else{
    	html+="<iframe class='xdialogIframe' src='' frameborder='0'></iframe>";
    }
    html +="</div>";
    this.objRenderTo.html(html);
    if(!this.objRenderTo.next().hasClass("xdialogMask"))
    	$("<div class='xdialogMask hidden'></div>").insertAfter(this.objRenderTo);
     this.eventBind();
}
XDialog.prototype.eventBind = function(){

	
		
		
	
	
	
};

XDialog.prototype.show = function(args){
	$(".xdialogIframe",this.objRenderTo).attr("src",args.url);
	var h=$(window).height();
	var dialogTop = h/2 - args.height / 2;
	
	$(this.objRenderTo).css("top",dialogTop);
	$(".xdialogContent",this.objRenderTo).css("width",args.width);
	$(".xdialogIframe",this.objRenderTo).css("height",args.height);
	$(".xdialogTitle",this.objRenderTo).text(args.title);
	this.objRenderTo.removeClass("hidden");
	if(util.isLTIE10()){
		$(this.objRenderTo).height(0).css("top",h/2).removeClass("hidden xdialogHidden");
		$(this.objRenderTo).animte({
			height : args.height,
			top : dialogTop
		});
		$(".xdialogMask").removeClass("hidden");
		$(".xdialogMask").css("opacity",0);
		$(".xdialogMask").animate({
			opacity :.2
		},"fast");
	}else{
		this.objRenderTo.css("transition","all 250ms");
		var t = this.objRenderTo;
		setTimeout(function(){
			t.removeClass("xdialogHidden");
		},0);
		setTimeout(function(){
			t.css("transition","all 0ms");
		},250);
		$(".xdialogMask").removeClass("hidden");
		$(".xdialogMask").css("opacity",0);
		$(".xdialogMask").css("transition","all 250ms");
		setTimeout(function(){
			$(".xdialogMask").css("opacity",0.2);
		},0);
		setTimeout(function(){
			$(".xdialogMask").css("transition","all 0ms");
		},250);
	}
};
XDialog.prototype.hide = function(args){
	if(util.isLTIE10()){
		var h = $(window).height();
		$(this.objRenderTo).animate({
			height :0,
			top:h/2
		});
		
		$(".xdialogMask").animate({
			opacity:0
		},"fast");
		setTimeout(function() {
			// 隐藏弹出层遮罩层
			$(".xdialogMask").addClass("hidden");
		}, 250);
	}else{
		// 使用CSS3样式实现动画
		this.objRenderTo.css("transition", "all 250ms");
		var t = this.objRenderTo;
		setTimeout(function() {
			t.addClass("xdialogHidden");
		}, 0);
		setTimeout(function() {
			t.css("transition", "all 0ms");
		}, 250);
		// 背景淡出
		$(".xdialogMask").css("transition", "all 250ms");
		setTimeout(function() {
			$(".xdialogMask").css("opacity", 0);
		}, 0);
		setTimeout(function() {
			$(".xdialogMask").addClass("hidden");
			$(".xdialogMask").css("transition", "all 0ms");
		}, 250);
	};
};

