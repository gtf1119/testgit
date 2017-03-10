$(function(){
	dialog.init();
	shopCartNum.init({
		rendTo : ".cartNum",
		dataSource : "queryAllCartCount.action"
	});
	
	var link = window.location.search;
	var arr = link.substr(9,32);
	var con = " WHERE G.ID = '"+ arr +"'";
	
	
	buildDes.init({
		rendTo:"#detailCon",
		dataSource:"queryByGoodsId.action",
		ajaxData:{
			condition : con
		}
		
	});
	
	buildComment.init({
		rendTo : "#comment",
		dataSource :"queryAllComment.action",
		ajaxData:{
			condition : con
		}
	});
	
	$(".hover_gt").each(function(){
		$(this).parent().mouseenter(function(){
			$(this).find(".hover_gt").css({
				opacity:1,
				top:-55
			});
		});
		
		$(this).parent().mouseleave(function(){
			$(this).find(".hover_gt").css({
				opacity:0,
				top:-9
			});
		});
	});
	
	
	$(window).bind("scroll",function(){
		 var sTop = $(window).scrollTop();  
         var sTop = parseInt(sTop); 
         if(sTop>600){
        	 $("#scrollSearch").removeClass("hidden");
        	 $("#toTop").removeClass("hidden");
        	 
        	
         }else{
        	 $("#scrollSearch").addClass("hidden");
        	 $("#toTop").addClass("hidden");
         }
	});
	
	 $("#toTop").click(function(){
		 $("html,body").animate({
			 scrollTop : 0 
		 },500);
	 });
	 
	 
	
});