//选项卡面向对象封装
function Tab(args) {
	// 构造方法，把传经来的参数设置到属性
	this.renderTo = args.renderTo;
	this.dataSource = args.dataSource;
	// 参数初始化
	this.init();
	$("#chatroom").removeClass("hidden");
	$("#buuscard").addClass("hidden");
	$("#buusscard").addClass("hidden");
}

// 选项卡初始化
Tab.prototype.init = function() {
	// 初始化参数
	if (!this.renderTo || !this.dataSource)
		return;
	// 根据传入的数据源类型，判断是否发起ajax请求
	this.getDataByDataSource();
};

// 根据传入的数据源类型，判断是否发起ajax请求
Tab.prototype.getDataByDataSource = function() {
	// 如果数据源是一个字符串，表示是一个url地址
	if (typeof this.dataSource == "string") {
		var t = this;
		$.post(this.dataSource, function(obj) {
			t.dataSource = obj;
			t.build(args);
		});
	} else if ($.isArray(this.dataSource)) {// 如果数据源是一个数组
		this.build();
	}
};

// 生成页面元素
Tab.prototype.build = function() {
	var render = $(this.renderTo);
	var thiz = this;
	$(render).addClass("tab");
	// 遍历数据源生成菜单项
	$(this.dataSource).each(function(i, t) {
		$("<div class='tabCard' unselectable='on' key='" + t.key + "'>" + t.value + "</div>").width(100 / thiz.dataSource.length + "%").appendTo(render);
	});
	// 给当前tab中第一个选项卡添加选中效果
	$(".tabCard:eq(0)", render).addClass("tabCardSelected");
	// 绑定事件
	this.eventBind();
};

// 绑定事件
Tab.prototype.eventBind = function() {
	var render = $(this.renderTo);
	var t = this;
	$(".tabCard", render).click(function() {
		$(".tabCard", render).removeClass("tabCardSelected");
		$(this).addClass("tabCardSelected");
		// 如果用户传入onClick属性同时该属性的值是一个方法
		if (t.onClick != null && $.isFunction(t.onClick))
			t.onClick(this);
	});
	// 如果用户传入onLoad属性同时该属性的值是一个方法
	if (this.onLoad != null && $.isFunction(this.onLoad))
		this.onLoad(this);
	$(".tabCard").each(function() {
		$(this).click(function() {
			if ($(this).attr("key") == "01") {
				$("#buuscard").addClass("hidden");
				$("#buusscard").addClass("hidden");
				$("#chatroom").removeClass("hidden");
			}
			if ($(this).attr("key") == "02") {
				$("#chatroom").addClass("hidden");
				$("#buusscard").addClass("hidden");
				$("#buuscard").removeClass("hidden");

			}
			if ($(this).attr("key") == "03") {
				$("#chatroom").addClass("hidden");
				$("#buuscard").addClass("hidden");
				$("#buusscard").removeClass("hidden");
			}
		});
	});
};
