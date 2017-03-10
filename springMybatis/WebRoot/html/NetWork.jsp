<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'NetWork.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="css/common/grid2.css" type="text/css"></link>
<link rel="stylesheet" href="css/common/ddl.css" type="text/css"></link>
<link rel="stylesheet" href="css/common/dialog.css" type="text/css"></link>
<link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
<link rel="stylesheet" href="css/NetWork.css" type="text/css"></link>
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="js/common/util.js"></script>
<script type="text/javascript" src="js/NetWork.js"></script>
<script type="text/javascript" src="js/common/dialogz.js"></script>
<script type="text/javascript" src="js/common/ddl.js"></script>
<script type="text/javascript" src="js/common/grid.js"></script>
</head>
<script>
	$(function() {
	    
	
	
		NetWork.init({
			renderTo : "#listarray",
			dataSource : "queryAllFile.action"
		});
    
    $(".leftsotwo").click(function(){
		     $("#listbtnsdid").removeClass("hidden");
			var formats= $(this).attr("format");
			var con = "WHERE F.FORMAT = '"+formats+"'AND 1=1";
			NetWork.init({
			renderTo : "#listarray",
			dataSource : "queryAllFile.action",
			ajaxData :{
					condition:con
				}
					});
   
});
       
  //查询删除
		$("#leftsothere").click(function(){
			NetWork.init({
			renderTo : "#listarray",
			dataSource : "queryAllDelFile.action"
		});
		$("#listbtnsdid").addClass("hidden");
		
		});
});
</script>
<body>
	<div id="network">
		<div id="worktop">
			<div id="logo">
				<img src="upload/mylogo.png" id="logoimg"></img> <span id="logospan">拜拜网盘</span>
			</div>
			<div id="topleft">
				<div id="toplefta" class="topcla">
					<span class="changetop" id="changetopa">网盘</span>
					<div class="topleftcla "></div>
				</div>
				<div id="topleftb" class="topcla">
					<span class="changetop">分享</span>
					<div class="topleftcla  "></div>
				</div>
				<div id="topleftc" class="topcla">
					<span class="changetop">更多</span>
					<div class="topleftcla "></div>
				</div>
			</div>
			<div id="topright">
				<div id="fav">
					<img src="upload/fav.png" id="userimg"></img> <span id="username">上山打老虎</span>
					<img src="upload/userimg.png" id="userimgafter"></img>
				</div>
				<span id="topgan">|</span> <span id="userapp">客户端下载</span> <img
					src="upload/clo.png" id="clo"></img>

			</div>
		</div>
		<div id="workleft">
			<div class="leftso  leftsoone">
				<img src="upload/leftlogo.png" id="leftlogoimg"></img> <span
					id="leftbug">全部文件</span>
			</div>
			<div class="leftso leftsotwo" format="png">
				<span class="leftsospan">图片</span>
			</div>
			<div class="leftso leftsotwo" format="txt">
				<span class="leftsospan  leftsospanbug">文档</span>
			</div>
			<div class="leftso leftsotwo" format="rmvb">
				<span class="leftsospan leftsospanbug">视频</span>
			</div>
			<div class="leftso leftsotwo" format="torrent">
				<span class="leftsospan leftsospanbug">种子</span>
			</div>
			<div class="leftso leftsotwo" format="mp3">
				<span class="leftsospan leftsospanbug">音乐</span>
			</div>
		
			<div class="leftso leftsofo">
				<img src="upload/fengxiang.png" id="fengxiangimg"></img> <span
					class="twobug">我的分享</span>
			</div>
			<div class="leftso leftsoth" id="leftsothere">
				<img src="upload/laji.png" id="lajiimg"></img> <span class="twobug"
					id="laji">回收站</span>
			</div>
			<div id="menuBG" class="hidden"></div>
			<img src="upload/leftbottow.png" id="leftbottow"></img>
		</div>
		<div id="workmain">
			<div id="btndiv">
				<div id="listbtn">
					<div class="listbtns" id="listbtnsa">
						<img src="upload/btn1.png" id="btna"></img> <span class="btnname"
							id="btnnamea">上传</span>

					</div>
					
						<form action="uploadfiles.action" target="hidden_iframe" enctype="multipart/form-data" method="post">
							<input type="file" name="file" class="filetype hidden" id="filehidden" />
						</form>
						<iframe class="hidden" id="hidden_iframe" name="hidden_iframe"></iframe>
					
					<div class="listbtns" id="listbtnsb">
						<img src="upload/btn2.png" id="btnb"></img><span class="btnname">重命名</span>
					</div>
					<div class="listbtns" id="listbtnsc">
						<img src="upload/btn3.png" id="btnc"></img><span class="btnname">下载</span>
					</div>
					<div class="listbtns" id="listbtnsdid">
						<img src="upload/laji2.png" id="btnd"></img><span class="btnname">删除</span>
					</div>

				</div>
				<input type="text" id="btnlistimg" value="搜索您的文件" /> <img
					src="upload/sca.png" id="sca"></img>
			</div>
			<div id="file">
				<span id="fileleft">全部文件</span> <span id="fileright">已全部加载</span>
			</div>
			<div id="filemain">
				<div class="listfile" id="listfilea">
					<input type='checkbox' name='Checks' class='check' id="checktype" />
					<span id="listfilename">文件名</span><img src="upload/fileimg.png"
						id="fileimg"></img>
				</div>
				<div class="listfile" id="listfileb">
					<span id="listfiledata">大小</span>
				</div>
				<div class="listfile" id="listfilec">
					<span id="listcreatetime">日期</span>
				</div>
			</div>
			<div id="listarray">
			
			</div>
		</div>

	</div>
	<div id="myDialog"></div>
</body>
</html>
