
var dialog={
	init : function(){
		dialog.build();
	},
	build: function(){
		var dialogDiv = $("<div id='dialog' class='hidden'></div>").appendTo("body");
		var titleBar = $("<div id='titleBar'></div>").appendTo(dialogDiv);
		var titleText = $("<div id='titleText' unselectable='on'>弹出层</div>").appendTo(titleBar);
		var btnClose =  $("<div id='btnClose'unselectable='on'>╳</div>").appendTo(titleBar);
		var iframe = $("<iframe id='dialogIframe' src='' frameborder='0'></iframe>").appendTo(dialogDiv);
		var mask = $("<div id='dialogMask' class='hidden'></div>").appendTo("body");
		
		var dialogContent = $("<div id='dialogContent' class='hidden'></div>").appendTo(dialogDiv);
		var contentMsg = $("<div id='contentMsg'></div>").appendTo(dialogContent);
		var btnBar = $("<div id='btnBar'></div>").appendTo(dialogContent);
		var btnOk = $("<input id='btnOk' class='dialogBtn' type='button' value='确认'></input>").appendTo(btnBar);
		var btnCancel = $("<input id='btnCancel' class='dialogBtn' type='button' value='取消'></input>").appendTo(btnBar);
	  	
		dialog.eventBind();
		
	},
	eventBind : function(){
		$("#btnClose").click(function(){
			dialog.hide();
		});
		$("#btnCancel").click(function(){
			dialog.hide();
		});
	},
	show : function(args){
		var w = document.body.clientWidth;
		var h = document.body.scrollHeight;
		var windowHeight = document.body.clientHeight;
		var scrollHeight = $(window).scrollTop();
		var scrollWidth = document.body.scrollWidth;
		
		$("#dialogMask").css("height",h);
		$("#dialogMask").css("width",scrollWidth);
		
		$("#btnOk").unbind().click(function(){
			args.onClickYes();
		});
		if(args.confirm){
			top.$("#dialogIframe").addClass("hidden");
			top.$("#dialogContent").removeClass("hidden");
			$("#contentMsg").text(args.text);
			if(args.htmlArgument != null){
				$(args.htmlArgument).appendTo($("#contentMsg"));
			}
		}else{
			top.$("#dialogIframe").removeClass("hidden");
			top.$("#dialogContent").addClass("hidden");
			top.$("#dialogIframe").attr("src",args.url);
			top.$("#dialogIframe").height(args.height-37);
		}
		
		
	
		top.$("#dialog").css({
			width:args.width,
			height:args.height,
			marginLeft:-args.width/2,
			marginTop:-args.height/2,
			top:windowHeight/2+scrollHeight
			
		});
		$("#titleText").text(args.title);
	
		top.$("#dialog,#dialogMask").removeClass("hidden");
	},
	hide : function(){
		top.$("#dialog,#dialogMask").addClass("hidden");
	}
};