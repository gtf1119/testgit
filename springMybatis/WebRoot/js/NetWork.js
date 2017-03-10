var checkid = "";
var fileName ="";
var	fileSize ="";
var	format="";
var id="";
var NetWork = {
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
		$(args.renderTo).data("args", args);
		NetWork.getDataByDataSource(args);
	},
	reload : function(renderTo, pageNum, pageSize) {
		var args = $(renderTo).data("args");
		args.ajaxData.pageNum = pageNum;
		args.ajaxData.pageSize = pageSize;
		NetWork.init(args);
	},
	getDataByDataSource : function(args) {
		if (typeof args.dataSource == "string") {
			$.ajax({
				url : args.dataSource,
				type : "POST",
				dataType : "text",
				data : args.ajaxData,
				success : function(json) {
					var obj = eval("(" + json + ")");
					args.data = obj;
					NetWork.build(args);
				}
			});
		} else {
			args.data = args.dataSource;
		}
	},
	build : function(args) {
		$(args.renderTo).html("");
		$(args.data.rows).each(function(i, t) {
			var listarraymain = $("<div class='listarraymain' id='" + t.id + "' fileName='"+t.fileName+"' format='"+t.format+"' fileSize='"+t.fileSize+"' ></div>").appendTo(args.renderTo);
			var checklist = $("<input type='checkbox' name='Checksfile' class='checklist' />").appendTo(listarraymain);

			var txtarray = $("<span id='txtarray'>" + t.fileName + "." + t.format + "</span>").appendTo(listarraymain);
			var divfileSize = $("<div id='divfileSize'></div>").appendTo(listarraymain);
			var txtmuch = $("<span id='txtmuch'>" + t.fileSize + "</span> ").appendTo(divfileSize);
			var divcreateTime = $("<div id='divcreateTime'></div>").appendTo(listarraymain);
			var txtcreatetime = $("<span id='txtcreatetime'>" + t.createTime + "</span>").appendTo(divcreateTime);
		    var updatefiles = $("<div class='updatefiles hidden'></div>").appendTo(listarraymain);
		    var upfilestxt = $("<input type='text' class='upfilestxt'/>").appendTo(updatefiles);
		    var filesbtna = $("<div class='filesbtna'><img src='upload/gougou.png' class='gougouimg'></img></div>").appendTo(updatefiles);
		    var filesbtnb = $("<div class='filesbtnb'><img src='upload/chacha.png' class='chachaimg'></img></div>").appendTo(updatefiles);
		});
		var pager = $("<div class='pager'></div>").appendTo(args.renderTo);
		var pagerTable = $("<table  class='pagerTable' cellpadding='0' cellspacing='0'></table>").appendTo(pager);
		var tr = $("<tr></tr>").appendTo(pagerTable);
		var html = "";
		html += "<td style='width: 140px;'>共<span class='total'>" + args.data.total + "</span>项，每页显示</td>";
		html += "<td style='width: 80px;'><div class='sltPageSize'></div></td>";
		html += "<td>项</td><td style='width: 80px;'><div class='btnPrev pagerBtn'>上一页</div></td>";
		html += "<td style='width: 70px;text-align: center;'><span class='lblCurrentPage'>" + args.ajaxData.pageNum;
		html += "</span>/<span class='lblTotalPage'>" + Math.ceil(args.data.total / args.ajaxData.pageSize) + "</span></td>";
		html += "<td style='width: 80px;'><div class='btnNext pagerBtn'>下一页</div></td>";
		$(tr).html(html);

		NetWork.event(args);
	},
	event : function(args) {
		var renderTo = $(args.renderTo);
		ddl.init({
			renderTo : args.renderTo + " .sltPageSize",
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
			}, {
				key : "50",
				value : "50"
			} ],
			defaultSelected : args.ajaxData.pageSize,
			offset : "-8",
			direction : "up",
			onClick : function() {
				// 重新加载表格
				NetWork.reload(args.renderTo, 1, $(".pager .ddlItemSelected", renderTo).attr("key"));
			}
		});

		$(".btnPrev", renderTo).click(function() {
			// 获取显示当前页码的span标签
			var cp = $(".lblCurrentPage", renderTo);
			// 获取该标签内的页码文字
			var page = +$(cp).text();
			// 如果当前页码-1小于1就给页码赋值为1，否则页码的值是当前页码-1
			page = (page - 1) < 1 ? 1 : page - 1;
			// 计算结果设置到页面上
			$(cp).text(page);
			// 重新加载表格
			NetWork.reload(args.renderTo, page, $(".pager .ddlItemSelected", renderTo).attr("key"));
		});
		// 下一页按钮
		$(".btnNext", renderTo).click(function() {
			// 获取显示当前页码的span标签
			var cp = $(".lblCurrentPage", renderTo);
			// 获取该标签内的页码文字
			var page = +$(cp).text();
			// 获取最大页码
			var maxPage = $(".lblTotalPage", renderTo).text();
			// 新页码是当前页码+1
			var newPage = page + 1;
			// 如果+1之后的新页码超过了最大页码，就使用最大页码，否则使用+1之后的新页码
			page = newPage > maxPage ? maxPage : newPage;
			// 计算结果设置到页面上
			$(cp).text(page);
			// 重新加载表格
			NetWork.reload(args.renderTo, page, $(".pager .ddlItemSelected", renderTo).attr("key"));
		});
         		
		$(function() {
			$(".topleftcla").addClass("hidden");
			$(".changetop").click(function() {
				$(".topleftcla").addClass("hidden");
				$(this).next().removeClass("hidden");
			});
			$("#changetopa").click();            
			$("#topleftb").click(function(){
				location.href="http://10.0.10.100/springMybatis/html/taobao/ownCenter.jsp";
			});			
			$("#listbtnsa").click(function() {
				$("#filehidden").click();
			});
			$("#filehidden").change(function() {
			
				$("form").submit();
			});
			$(".btnddl").addClass("hidden");
			$("#listbtnsa").mouseover(function() {
				$(".btnddl").removeClass("hidden");

			});
			$("#btnnameaddl").on("mouseleave", function() {
				$(this).addClass("hidden");
			});
			$("#ddlspana").click(function() {
				$("#filehidden").click();
			});
			// 全选和全不选
			$("#checktype").click(function() {
				if (this.checked) {
					$(".listarraymain :checkbox").attr("checked", true);
				} else {
					$(".listarraymain :checkbox").attr("checked", false);
				}
			});
			$(".checklist").click(function() {
				fileName = $(this).parent().attr("fileName");
				fileSize = $(this).parent().attr("fileSize");
				format=$(this).parent().attr("format");
				checkid = $(this).parent().attr("id");				
				n = $(this).index();
				if ($(this).prop("checked") == false) {
					$(".check").prop("checked", "");
				} else {
					var Num = 0;
					for ( var i = 0; i < $(".checklist").length; i++) {
						if ($(".checklist:eq(" + i + ")").prop("checked") == false) {
							return;
						} else {
							Num++;
						}
					}
					if (Num == $(".checklist").length) {

						$(".check").prop("checked", "checked");
					}
				}
			});
			$("#workleft").hover(function() {
				// 鼠标进入菜单区域时显示背景色块
				$("#menuBG").removeClass("hidden");
			}, function() {
				// 鼠标移出菜单区域时隐藏背景色块
				$("#menuBG").addClass("hidden");
			});
			$(".leftso").mouseenter(function() {
				var index = $(this).index();
				var i = 0 + (index * 50);
				// 修改背景色div的top样式
				$("#menuBG").css("top", i);			
			});
			$("#btnlistimg").focus(function() {
				$("#btnlistimg").val("");
			});
			$("#btnlistimg").blur(function() {
				$("#btnlistimg").val("搜索您的文件");
			});
			var d = new XDialog({
				renderTo : "#myDialog"
			});
			$("#clo").click(function() {
				d.show({
					title : "更换皮肤",
					url : "html/dialog/change.jsp",
					height : 400,
					width : 500
				});
			});
			top.d = d;
		});
		//删除文件
		$("#listbtnsdid").click(function() {
			$.post("delfiles.action", {
				id : checkid
			}, function(json) {
				if (json.isSuccess == "true") {
					$.post("addDelFile.action", {
						fileName:fileName,
						fileSize:fileSize,
						format:format
					}, function(json) {
						if (json.isSuccess == "true") {
							window.location.reload();
						} else {
							alert("加入失败");
						}
					});				
				} else {
					alert("保存失败");
				}
			});
		});      
		$(".leftsoone").click(function(){			
			window.location.reload();
		});
	//文件下载
		$("#listbtnsc").click(function(){
			
		})
		
	//重命名	
	   $("#listbtnsb").click(function(){	
			   $("#"+checkid+"").find(".updatefiles").removeClass("hidden");
			   var va= $("#"+checkid+"").find("#txtarray").text();
			   $("#"+checkid+"").find(".updatefiles").find("input").val(va);
			   $("#"+checkid+"").find(".updatefiles").find("input").focus();
			   var  goudiv = $("#"+checkid+"").find(".updatefiles").find("input").next().attr("class");
			   var chadiv = $("#"+checkid+"").find(".updatefiles").find("input").next().next().attr("class");         
			   $("."+goudiv+"").click(function(){					   
					   var vallist = $("#"+checkid+"").find(".updatefiles").find("input").val();
					   var fileName = vallist.substring(0,vallist.lastIndexOf("."));
					   var format=(/[.]/.exec(vallist)) ? /[^.]+$/.exec(vallist.toLowerCase()) : ''; 
					   $.post("updatefiles.action",{
						   id:checkid,
						   fileName:fileName,
						   format:format
					   }, function(json) {
							// 如果登录成功
							if (json.isSuccess == "true") {
								window.location.reload();								
							} else {
								alert("保存失败");
							}
						});					   
				  });
			   $("."+chadiv+"").click(function(){
				  $("#"+checkid+"").find(".updatefiles").addClass("hidden");  				  
			  }); 
	   });	
	}
};
function postFilesInfo(allImgFileNameStr){
	$.post("addFile.action",{
		id:id,
		fileName:allImgFileNameStr.split(",")[0],
		fileSize:allImgFileNameStr.split(",")[1],
		format:allImgFileNameStr.split(",")[2],	    	
	}, function(json) {
		// 如果登录成功
		if (json.isSuccess == "true") {			
			var fileInFo = $("<div id='fileInFo'></div>").appendTo("#network");
			var topInFo =$("<div id='topInFo'></div>").appendTo(fileInFo);
			var spanInFo=$("<span id='spanInFo'>上传完成</span>").appendTo(topInFo);
			var btnInFoa=$("<div class='btnInFo' id='btnInFoa'><img src='upload/suoxiao.png' ></img></div>").appendTo(topInFo);
			var btnInFob=$("<div class='btnInFo' id='btnInFob'><img src='upload/guanbi.png' ></img></div>").appendTo(topInFo);
			var mainInFo=$("<div id='mainInFo'></div>").appendTo(fileInFo);
			var listmainInFo=$("<div class='listmainInFo'></div>").appendTo(mainInFo);
			var spanInFoa=$("<span id='spanInFoa'>"+allImgFileNameStr.split(",")[0]+"."+allImgFileNameStr.split(",")[2]+"</span>").appendTo(listmainInFo);
			var spanInFob=$("<span id='spanInFob'>"+allImgFileNameStr.split(",")[1]+"kb</span>").appendTo(listmainInFo);
			var spanInFoc=$("<img src='upload/lvgou.png' id='spanInFoc'></img>").appendTo(listmainInFo);			
			setTimeout(function(){
				$("#fileInFo").css("top",880);
			},3000);
			$("#btnInFoa").click(function(){
				$("#fileInFo").css("top",650);
			});
			$("#btnInFob").click(function(){
				window.location.reload();
			});
			$("#fileInFo").hover(function() {
				setTimeout(function(){
					$("#fileInFo").css("top",650);
				},3000);
			}, function() {
				setTimeout(function(){
					$("#fileInFo").css("top",880);
				},3000);
			});			
		} else {
			alert("保存失败");
		}
	});
}

	
	



