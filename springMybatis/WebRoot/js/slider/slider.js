window.onload=function(){
//	var slider = document.getElementsByClassName("slider")[0];
//	var sliderUl = document.getElementsByClassName("sliderUl")[0];
//	var focusUl = document.getElementsByClassName("focusUl")[0];
//	var prev = document.getElementsByClassName("prev")[0];
//	var next = document.getElementsByClassName("next")[0];
//	var focusLi = document.getElementsByClassName("focusLi");
	
	var slider = getClassNames("slider","div")[0];
	var sliderUl = getClassNames("sliderUl","ul")[0];
	var focusUl = getClassNames("focusUl","ul")[0];
	var prev = getClassNames("prev","span")[0];
	var next = getClassNames("next","span")[0];
	var focusLi = getClassNames("focusLi","li");
	var index = 1;
	var time;
	var animated = true;
	sliderUl.style.marginLeft = 0;
	
//	var images = document.getElementsByClassName("slidImg");
	var images = getClassNames("slidImg","img");
	
	function animate(offset){
		var newLeft = parseInt(sliderUl.style.marginLeft)+offset;
		sliderUl.style.marginLeft = newLeft +"%";

		if(newLeft < -400){
			sliderUl.style.marginLeft = 0+"%";
		}
		if(newLeft > 0){
			sliderUl.style.marginLeft = -400+"%";
		}
		animated = false;

	}
	
	prev.onclick = function(){
		stop();
		if(index == 1){
			index = 5;
		}else{
			index -= 1;
		}
		animate(100);
		showButton();
		play();
	};

	next.onclick = function(){
		stop();
		if(index == 5){
			index = 1;
		}else{
			index += 1;
		}
		
		animate(-100);
		showButton();
		play();
	};
	
//	RGBaster.colors(images[0], {
//		  paletteSize: 30, // 调色板大小
//		  exclude: [ 'rgb(255,255,255)' ],  // 不包括白色
//		  success: function(payload){
//			  $("#content").css("background-color", payload.secondary);
//			 
//		  }
//	});
//	
	
	function showButton(){
		for(var i=0;i<focusLi.length;i++){
			if(focusLi[i].className == "focusLi on"){
				focusLi[i].className = "focusLi";
				break;
			}
		}
		focusLi[index-1].className = "focusLi on";
		var img = images[index-1];
//		RGBaster.colors(img, {
//			  paletteSize: 30, // 调色板大小
//			  exclude: [ 'rgb(255,255,255)' ],  // 不包括白色
//			  success: function(payload){
//				  $("#content").css("background-color", payload.secondary);
//				 
//			  }
//		});
		
	}
	
	for(var i=0;i<focusLi.length;i++){
	
		focusLi[i].onclick = function(){
			if(this.className=="focusLi on"){
				return;
			}
			stop();
			var myIndex = parseInt(this.getAttribute("index"));
			var offset = -100*(myIndex-index);
			
			animate(offset);
			index = myIndex;
			showButton();
			
			play();
		
		};
	}
	

	
	function play(){
		
		time = setInterval(function(){
			
			next.onclick();
			
		},3000);
		
	}
	
	function stop(){
		clearInterval(time);
	}
	
	slider.onmouseout = play;
	slider.onmouseover = stop;
	play();
};

  
function getClassNames(classStr,tagName){  
      if (document.getElementsByClassName) {  
            return document.getElementsByClassName(classStr);  
      }else {  
            var nodes = document.getElementsByTagName(tagName),ret = [];           
            for(i = 0; i < nodes.length; i++) {  
         if(hasClass(nodes[i],classStr)){  
                ret.push(nodes[i]); 
         }  
      }  
      return ret;  
       }  
}  
function hasClass(tagStr,classStr){  
     var arr=tagStr.className.split(/\s+/ );  //这个正则表达式是因为class可以有多个,判断是否包含  
     for (var i=0;i<arr.length;i++){  
            if (arr[i]==classStr){  
                  return true ;  
            }  
     }  
     return false ;  
}  