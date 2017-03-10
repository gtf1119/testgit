var tab = {
	init : function(args){
		tab.build(args);
	},	
	build : function(args){
		var render = document.getElementById(args.renderTo);
		render.className = "tabCon";
		
		//循环创建选项，赋值
		for(var i = 0;i < args.dataSource.length;i++){
			var t = args.dataSource[i];
			var tabCon = document.createElement("div");
			tabCon.style.width=100/args.dataSource.length +"%";
			tabCon.className = "tab";
			tabCon.setAttribute("key",t.key);
			tabCon.setAttribute("unselectable","on");
			tabCon.setAttribute("url",t.url);
			tabCon.innerHTML=t.value;
			render.appendChild(tabCon);
		}
		
		//创建iframe
		var iframe = document.createElement("iframe");
		iframe.setAttribute("frameborder","0");
		iframe.setAttribute("id","ifra");
		document.body.appendChild(iframe);
		
		//默认选中项
		//没有默认值
		if(args.defaultSelected != null){
			var t = document.getElementsByClassName("tab");
			for(var i=0;i<t.length;i++){
				if(t[i].getAttribute("key")==args.defaultSelected){
					t[i].className +=" tabSelected";
					var iframe = document.getElementById("ifra");
					iframe.setAttribute("src",t[i].getAttribute("url"));
				}
				
			}
		}else{
			var t = document.getElementsByClassName("tab");
			t[0].className +=" tabSelected";
			var iframe = document.getElementById("ifra");
			iframe.setAttribute("src",t[0].getAttribute("url"));
		
		}
		
		
		tab.eventBind(args);
	},
	eventBind :function(args){
		var render = document.getElementById(args.renderTo);
		render.onclick = function(event){
			if(event.target.className == "tab tabSelected"){
				
			}else{
				var children = event.target.parentNode.childNodes;
				for(var i =0;i<children.length;i++){
					children[i].className = "tab";
				}
		
			}
			event.target.className ="tab tabSelected";
			var iframe = document.getElementById("ifra");
			iframe.setAttribute("src",event.target.getAttribute("url"));
		};
	}
		
};