<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'addGoods.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <link rel="stylesheet" href="css/select.css" type="text/css"></link>
  <link rel="stylesheet" href="css/dialog/userAdd.css" type="text/css"></link>
  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/common/util.js"></script>
  <script type="text/javascript" src="js/select.js"></script>
  <script type="text/javascript" src="js/dialog/userAdd.js"></script></head>
  
  <body>
    <div id="txtPanel">
		<div class="line">
			<label for="txtLoginName">登录名</label>
			<input id="txtLoginName" type="text" placeholder="由3~20个英文、数字、减号、下划线组成" minlength="3" maxlength="20" validate="enm_" />
			<div class="placeholder">由3~20个英文、数字、减号、下划线组成</div>
			<div class="errTips"></div>
		</div>
		<div class="line">
			<label for="txtName">用户名</label>
			<input id="txtName" type="text" placeholder="由2~20个中文、英文、数字、减号、下划线组成" minlength="2" maxlength="20" validate="cenm_" />
			<div class="placeholder">由2~20个中文、英文、数字、减号、下划线组成</div>
			<div class="errTips"></div>
		</div>
		<div class="line">
			<label for="txtPassWord">密码</label>
			<input id="txtPassWord" type="text" placeholder="由6~20个英文、数字、减号、下划线组成" minlength="2" maxlength="20" validate="enm_" />
			<div class="placeholder">由6~20个英文、数字、减号、下划线组成</div>
			<div class="errTips"></div>
		</div>
		
		<div class="line">
			<input type="radio" name="sex" checked  id="sex1"/>
			<label for="sex1">男</label>
			<input type="radio" name="sex" id="sex2"/>
			<label for="sex2">女</label>
		</div>

		<div id="imgPanel">
			<div id="picTitle">上传图片</div>
			<div id="imgList"></div>
			<input type="button" value="添加图片" id="btnAdd" />
			<form action="upload.action" target="hidden_iframe"
				enctype="multipart/form-data" method="post">
				<!-- 文件上传标签 -->

			</form>
			<!-- 用于提交上方表单的数据 -->
			<iframe class="hidden" id="hidden_iframe" name="hidden_iframe"></iframe>
		</div>
		<div class="line">
			<input id="btnSave" type="button" value="保存" />
			
		</div>
		
	
	
  </body>
</html>
