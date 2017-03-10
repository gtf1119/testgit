<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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

<title>My JSP 'note.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" href="css/common/dialogTxt.css" type="text/css"></link>
<link rel="stylesheet" href="css/note.css" type="text/css"></link>
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="js/note.js"></script>
</head>

<body>

	<!-- container -->
	<div id="container">

		<!-- 标题 -->
		<div id="title">
			<img id="titleImg" src="image/tit.png" alt="" /> <span>记事本</span>
			<div id="smallImg">
				<div class="image">–</div>
				<div class="image">□</div>
				<div class="image">╳</div>
			</div>
		</div>

		<!-- 菜单 -->
		<div id="nav">
			<div class="menu" name="file">文件</div>
			<div class="menu" name="edit">编辑</div>
			<div class="menu" name="format">格式</div>
			<div class="menu" name="view">查看</div>
			<div class="menu" name="help">帮助</div>
			<div id="navBg" class="hide"></div>
		</div>

		<!-- 文本 -->
		<div id="content">
			<textarea id="txtArea" rows="10" cols=""></textarea>
		</div>


		<!--下拉 -->
		<div id="selector">
			<div id="file" class="hidden hide">
				<ul>
					<li>新建</li>
					<li>打开</li>
					<li>保存</li>
					<li>另存为</li>
					<hr />
					<li>页面设置</li>
					<li>打印</li>
					<hr />
					<li>退出</li>
				</ul>

			</div>

			<div id="edit" class="hidden hide">
				<ul>
					<li>撤销</li>
					<li>剪切</li>
					<li>复制</li>
					<li>删除</li>
					<hr />
					<li>查找</li>
					<li>查找下一个</li>
					<li id="rep">替换</li>
					<li>转到</li>
					<hr />
					<li>全选</li>
					<li>时间/日期</li>
				</ul>

			</div>

			<div id="format" class="hidden hide">
				<ul>
					<li>自动换行</li>
					<li>字体</li>

				</ul>
			</div>

			<div id="view" class="hidden hide">
				<ul>
					<li>状态栏</li>

				</ul>
			</div>

			<div id="help" class="hidden hide">
				<ul>
					<li>查看帮助</li>
					<li>关于记事本</li>
				</ul>
			</div>

		</div>


		<!-- end -->

	</div>
	<!-- container end -->
	
	
<!--弹出层  -->
	<div id="dialog" class="hide">
		<div id="titleBar">
			<div id="titleTxt">替换</div>
			<div id="btnClose">╳</div>
		</div>
		<div id="replaceDiv">
			<table cellspacing="0" cellpadding="0">
				<tr>
					<td align="right"><div class="line">被替换文字</div></td>
					<td><div class="line"><input type="text" id="txtReplace" class="txtWord" /></div></td>
				</tr>
				<tr>
					<td align="right"><div class="line">替换</td>
					<td><div class="line"><input type="text" id="txtHasReplaced" class="txtWord" /></div></td>
				</tr>
				<tr>
					<td colspan="2">
					<div class="line">
					<input type="button" id="btnReplace" value="替换" class="btn" />
					<input type="button" id="btnBack" value="返回" class="btn" /></div>
					</td>
					
				</tr>
			</table>
		</div>
	</div>
	
<!-- 护眼罩 -->
	<div id="mask" class="hide">
	
	</div>	

</body>
</html>
