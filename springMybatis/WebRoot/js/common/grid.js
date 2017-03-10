//生成表格

var grid = {
	// 初始化方法，根据传参调用生成方法来生成表格
	init : function(args) {
		if (args.ajaxData == null) {
			args.ajaxData = {
				pageNum : 1,
				pageSize : 10
			};
		} else {
			if (args.ajaxData.pageNum == null) {
				args.ajaxData.pageNum = 1;
			}
			if (args.ajaxData.pageSize == null) {
				args.ajaxData.pageSize = 10;
			}
		}

		// 绑定数据
		$(args.rendTo).data("args", args);
		grid.getDataSource(args);
	},
	reload : function(rendTo, pageNum, pageSize) {
		var args = $(rendTo).data("args");
		args.ajaxData.pageNum = pageNum;
		args.ajaxData.pageSize = pageSize;
		grid.init(args);
	},
	getDataSource : function(args) {
		if (typeof args.dataSource == "string") {
			$.ajax({
				url : args.dataSource,
				type : "POST",
				dataType : "text",
				data : args.ajaxData,
				success : function(json) {
					var obj = eval("(" + json + ")");
					args.data = obj;
					grid.build(args);
				}
			});
		} else{
			args.data = args.dataSource;
			grid.build(args);
		}
	},
	// 生成表格
	build : function(args) {
		$(args.rendTo).html("");
		var table = $("<table id='grid' class='grid' cellspacing='0' cellpadding='0'></table>")
				.appendTo(args.rendTo);
		// 生成表头
		var thead = $("<thead></thead>").appendTo(table);
		
		var count = 0;
		$(args.column).each(function(index,s){
			if(s.hide !="true" && s.hide != true){
				count++;
			}
		});
		
		$(args.column).each(function(index2, s2) {
			var th = $("<th class='grdiTD'>" + s2.name + "</th>").appendTo(thead);
			if (s2.hide) {
				th.addClass("hidden");
			}else{
				$(th).attr("style","width:"+100/count+"%");
			}
		});

		$(args.data.rows).each(function(index, s) {
			var tr = $("<tr class='gridTR'></tr>").appendTo(table);

			$(args.column).each(function(index2, s2) {

				var cellValue = s[s2.alias];
				var newValue = cellValue;
				// 数字向右靠齐

				// 格式化
				if (s2.formatter != null && $.isFunction(s2.formatter)) {
					newValue = s2.formatter(cellValue);
				}
				if(s2.originalValueFormatter != null && $.isFunction(s2.originalValueFormatter)){
					cellValue = s2.originalValueFormatter(cellValue);
				}
				
				var td = $("<td class='grdiTD' alias='"+s2.alias+"' originalValue='"+cellValue+"'>" + newValue + "</td>").appendTo(tr);

				if (s2.hide) {
					td.addClass("hidden");
				}

				if (s2.align)
					td.addClass("align" + s2.align);
			});
		});

		// 鼠标移动hover

		$("#grid").on("mouseenter", ".gridTR", function() {
			$(this).addClass("gridTRhover").siblings().removeClass("gridTRhover");
		});

		var page = $("<div class='page'></div>").appendTo(args.rendTo);
		var pageTable = $("<table class='pageTable' cellpadding='0' cellspacing='0'>").appendTo(
				page);
		var pageTr = $("<tr></tr>").appendTo(pageTable);
		var html = "";
		html += "<td style='width: 140px;'>共<span class='total'>"+args.data.total+"</span>项,每页显示</td>";
		html += "<td style='width: 80px;'><div class='sltSize'></div></td>";
		html += "<td style='padding:0 18px'>项</td>";
		html += "<td style='width: 80px;'><div class='btnPrev pageBtn'>上一页</div></td>";
		html += "<td style='width: 40px;'><span class='currentPage'>"+args.ajaxData.pageNum+"</span>/" +
				"<span class='totalPage'>"+Math.ceil(args.data.total/args.ajaxData.pageSize)+"</span></td>";
		html += "<td style='width: 80px;'><div class='btnNext pageBtn'>下一页</div></td>";

		$(pageTr).html(html);
		grid.eventBind(args);
	},
	eventBind : function(args) {
		var rendTo = $(args.rendTo);
		select.init({
			rendTo : args.rendTo + " .sltSize",
			dataSource : [ {
				key : "10",
				value : "10"
			}, {
				key : "20",
				value : "20"
			}, {
				key : "30",
				value : "30"
			}, {
				key : "40",
				value : "40"
			} ],
			defaultSelected : args.ajaxData.pageSize,
			offset : "-1",
			direction : "up",
			onclick : function() {
				grid.reload(rendTo, 1, $(".page .defaultSelected", rendTo).attr("key"));
			}
		});


		
		
		
		$(rendTo).children("table").find("tbody>tr").click(function(){
			if ($(this).hasClass("gridTrSelected")) {
				$(this).removeClass("gridTrSelected");
				
			} else {
				$(this).removeClass("gridTRhover");
				$(this).addClass("gridTrSelected").siblings().removeClass(
						"gridTrSelected");	
			}
			if(args.onRowClick()){
				args.onRowClick();
			}
		});
		
		
		

		$(".btnPrev", rendTo).click(function() {
			var currentPage = +$(".currentPage", rendTo).text();
			currentPage = (currentPage - 1) < 1 ? 1 : currentPage - 1;
			$(".currentPage", rendTo).text(currentPage);
			grid.reload(rendTo, currentPage, $(".page .defaultSelected",rendTo).attr("key"));
		});

		$(".btnNext", rendTo).click(function() {
			var currentPage = +$(".currentPage", rendTo).text();
			var maxPage = +$(".totalPage", rendTo).text();
			currentPage = (currentPage + 1) > maxPage ? maxPage : currentPage + 1;
			$(".currentPage", rendTo).text(currentPage);
			grid.reload(rendTo, currentPage, $(".page .defaultSelected",rendTo).attr("key"));
		});
		
		
		$(".grid").on("mouseenter",".grdiTD",function(){
			$(this).attr("title",$(this).text());
		});
		
		$(".grid").on("mouseleave",".grdiTD",function(){
			$(this).attr("title","");
		});

		if(args.onLoad != null && $.isFunction(args.onLoad))
			args.onLoad();
	}

};
