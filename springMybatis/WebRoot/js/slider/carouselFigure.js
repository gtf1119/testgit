var carouselFigure = {
	init : function(args) {
		carouselFigure.getDataByDataSource(args);
	},
	getDataByDataSource : function(args) {
		if (typeof args.dataSource == "string") {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", args.dataSource, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(null);
			xhr.onreadystatechange = function() {
				if (xhr.status == 200 && xhr.readyState == 4) {
					var json = xhr.responseText;
					var obj = eval("(" + json + ")");
					args.data = obj;
					carouselFigure.build(args);
				}
			};
		} else {
			args.data = args.dataSource;
			carouselFigure.build(args);
		}
	},
	build : function(args) {
		var renderTo = args.renderTo;
		var renderToDiv = document.getElementById(renderTo);
		renderToDiv.classList.add("carouselFigure");
		var table = document.createElement("table");
		renderToDiv.appendChild(table);
		var tr = document.createElement("tr");
		table.appendChild(tr);
		table.classList.add("cfBody");
		table.setAttribute("cellspaing", 0);
		table.setAttribute("cellpadding", 0);
		var html = "";
		for ( var i = 0; i < args.data.length; i++) {
			html += "<td class='cfItem'><img src='" + args.data[i].imgSrc + "' alt=''></td>";
		}
		tr.innerHTML = html;
		var selectBar = document.createElement("div");
		renderToDiv.appendChild(selectBar);
		selectBar.classList.add("selectBar");
		var html2 = "";
		for ( var i = 0; i < args.data.length; i++) {
			html2 += "<span class='selectButton'></span>";
		}
		selectBar.innerHTML = html2;
		var firstBtn = document.getElementsByClassName("selectButton")[0];
		firstBtn.classList.add("selectBtnClick");
		carouselFigure.eventBind(args);
	},
	eventBind : function(args) {
		// 获取选项卡的按钮
		var selectBtns = document.getElementsByClassName("selectButton");
		// 获取选项卡
		var selectBar = document.getElementsByClassName("selectBar")[0];
		// 获取轮播图
		var cfBody = document.getElementsByClassName("cfBody")[0];
		var index = 0;
		// 为选项卡绑定点击事件
		selectBar.onclick = function(event) {
			// 如果点击到的为选项卡按钮
			if (event.target.className == "selectButton") {
				// 遍历选项卡按钮
				for ( var i = 0; i < selectBtns.length; i++) {
					// 为所有的选项卡按钮移除选中效果
					selectBtns[i].classList.remove("selectBtnClick");
					// 获取点击的是为第几个选项卡按钮
					if (event.target == selectBtns[i]) {
						index = i;
					}
				}
				// 为触发事件的选项卡按钮添加选中样式
				event.target.classList.add("selectBtnClick");
				// 移动轮播图
				cfBody.style.left = -510 * index;
			}
		};
		// 图片自动轮播
		window.setInterval(function() {
			cfBody.style.left = -510 * index;
			for ( var i = 0; i < selectBtns.length; i++) {
				// 为所有的选项卡按钮移除选中效果
				selectBtns[i].classList.remove("selectBtnClick");
			}
			selectBtns[index].classList.add("selectBtnClick");
			index++;
			if (index == args.data.length) {
				index = 0;
			}
		}, 2000);
	}
};
