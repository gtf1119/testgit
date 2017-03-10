//下拉菜单
var ddl = {
	// 下拉菜单初始化
	init : function(args) {
		// 如果没有传入映射关系
		if (args.mapping == null) {
			// 设置默认映射关系
			args.mapping = {
				key : "key",
				value : "value"
			};
		}
		// 初始化ajaxData属性
		if (args.ajaxData == null) {
			// 设置默认值后防止报错
			args.ajaxData = {};
		}
		// 弹出位置偏移量
		if (args.offset == null) {
			args.offset = 0;
		}
		// 下拉菜单弹出方向
		if (args.direction == null) {
			args.direction = "down";
		}
		// 把弹出方向转为css属性名称
		args.direction = args.direction == "down" ? "top" : "bottom";
		// 把参数保存到div上
		$(args.renderTo).data("args", args);
		// 根据传入的数据源类型，判断是否发起ajax请求
		ddl.getDataByDataSource(args);
	},
	// 根据传入的数据源类型，判断是否发起ajax请求
	getDataByDataSource : function(args) {
		// 如果数据源是一个字符串，表示是一个url地址
		if (typeof args.dataSource == "string") {
			// 使用ajax发起请求
			$.ajax({
				url : args.dataSource,
				type : "POST",
				dataType : "text",
				// 发送请求是传递到后台的参数
				data : args.ajaxData,
				success : function(json) {
					// 把json转成js对象
					var obj = eval("(" + json + ")");
					// 把请求到的JSON转成数组后赋值给dataSource属性
					args.dataSource = obj;
					// 生成下拉菜单HTML
					ddl.build(args);
				}
			});
		} else if ($.isArray(args.dataSource)) {// 如果数据源是一个数组
			// 生成下拉菜单HTML
			ddl.build(args);
		}
	},
	// 生成下拉菜单HTML
	build : function(args) {
		var renderTo = $(args.renderTo);
		$(renderTo).addClass("ddl");
		var ddlTxt = $("<div class='ddlTxt' unselectable='on'></div>").appendTo(renderTo);
		var ddlArrow = $("<div class='ddlArrow'></div>").appendTo(renderTo);
		var ddlList = $("<ul class='ddlList hidden'>").appendTo(renderTo);
		// 遍历默认加载项生成菜单项
		$(args.defaultItems).each(function(i, t) {
			$("<li class='ddlItem' key='" + t[args.mapping.key] + "' unselectable='on'>" + t[args.mapping.value] + "</li>").appendTo(ddlList);
		});
		// 遍历数据源生成菜单项
		$(args.dataSource).each(function(i, t) {
			$("<li class='ddlItem' key='" + t[args.mapping.key] + "' unselectable='on'>" + t[args.mapping.value] + "</li>").appendTo(ddlList);
		});
		// 如果存在默认选中项
		if (args.defaultSelected != null) {
			$(ddlTxt).text($(".ddlItem[key='" + args.defaultSelected + "']", ddlList).addClass("ddlItemSelected").text());
		} else {
			$(ddlTxt).text($(".ddlItem:eq(0)", ddlList).addClass("ddlItemSelected").text());
		}
		// 下拉菜单事件绑定
		ddl.eventBind(args);
	},
	// 下拉菜单事件绑定
	eventBind : function(args) {
		var renderTo = $(args.renderTo);
		// 下拉菜单点击展开
		$(renderTo).click(function(event) {
			// 通过selector重新查找该元素后再获取
			var render = $($(renderTo).selector);
			// 如果下拉菜单隐藏?显示下拉菜单:隐藏下拉菜单
			$(".ddlList", render).hasClass("hidden") ? ddl.show(render) : ddl.hide(render);
			// 展开当前下拉菜单时，应该收起页面上所有的其他下拉菜单
			$(render).attr("flag", "true");
			// 隐藏其他下拉菜单
			var nd = $(".ddl:not([flag='true'])");
			if (nd.length > 0)
				ddl.hide(nd);
			$(render).removeAttr("flag");
			// 阻止事件冒泡
			event.stopPropagation();
		});
		// 菜单项点击
		$(".ddlItem", renderTo).click(function(event) {
			// 通过selector重新查找该元素后再获取
			var render = $($(renderTo).selector);
			// 选中指定的菜单项
			ddl.selectItem(render, this);
			$(this).addClass("ddlItemSelected");
			// 隐藏下拉菜单
			ddl.hide(render);
			// 如果用户传入onClick属性同时该属性的值是一个方法
			if (args.onClick != null && $.isFunction(args.onClick))
				args.onClick();
			// 阻止事件冒泡
			event.stopPropagation();
		});
		// 点击其他位置，由body触发收起
		$("body").click(function() {
			$(".ddl").each(function() {
				ddl.hide(this);
			});
		});
		// 如果用户传入onLoad属性同时该属性的值是一个方法
		if (args.onLoad != null && $.isFunction(args.onLoad))
			args.onLoad();
	},
	// 显示下拉菜单
	show : function(renderTo) {
		// 从div中取出初始化下拉菜单时接收的参数
		var args = $(renderTo).data("args");
		// 设置下拉菜单弹出部分滑动开始时的起点位置，在字符串左侧使用+可以强制把字符串转成数值类型
		$(".ddlList", renderTo).css(args.direction, 29 + +args.offset - 10);
		// 先显示元素
		$(".ddlList", renderTo).removeClass("hidden");
		// 判断当前浏览器是否小于IE10
		if (util.isLTIE10()) {
			// 设置初始透明样式filter，否则animate无法实现动画效果
			$(".ddlList", renderTo).css("opacity", 0);
			// 如果是IE10之前的版本，使用jq的animate实现动画
			var style = {
				opacity : 1
			};
			// 先声明style对象，通过[]给对象添加属性，获取的是args.direction的值
			style[args.direction] = 28 + +args.offset;
			$(".ddlList", renderTo).animate(style, "fast");
		} else {
			setTimeout(function() {
				// 使用CSS3实现动画
				$(".ddlList", renderTo).css(args.direction, 29 + +args.offset).css("opacity", 1);
			}, 1);
		}
	},
	// 隐藏下拉菜单
	hide : function(renderTo) {
		// 如果无法直接获取，通过selector重新查找该元素后再获取
		var args = $(renderTo).data("args") ? $(renderTo).data("args") : $($(renderTo).selector).data("args");
		// 判断当前浏览器是否小于IE10
		if (util.isLTIE10()) {
			// 如果是IE10之前的版本，使用jq的animate实现动画
			var style = {
				opacity : 0
			};
			// 先声明style对象，通过[]给对象添加属性，获取的是args.direction的值
			style[args.direction] = 20 + +args.offset;
			$(".ddlList", renderTo).animate(style, "fast");
		} else {
			setTimeout(function() {
				// 使用CSS3实现动画:向上收起
				$(".ddlList", renderTo).css(args.direction, 20 + +args.offset).css("opacity", 0);
			}, 1);
		}
		// 250ms动画结束后隐藏元素
		setTimeout(function() {
			$(".ddlList", renderTo).addClass("hidden");
		}, 250);
	},
	// 选中指定的菜单项
	selectItem : function(renderTo, ddlItem) {
		// 移除所有菜单项的选中效果
		$(".ddlItemSelected", renderTo).removeClass("ddlItemSelected");
		// 给当前点击的菜单增加选中效果
		$(ddlItem).addClass("ddlItemSelected");
		// 设置文本框中显示的文字
		$(".ddlTxt", renderTo).text($(ddlItem).text());
	}
};