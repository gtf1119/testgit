<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'addType.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" href="css/dialog/addType.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/common/util.js"></script>
   <script type="text/javascript" src="js/dialog/addType.js"></script>
  </head>
  
  <body>
     <div id="txtPanel">
		<div class="line">
			<label for="txtGoodsTypeName">商品名称</label>
			<input id="txtGoodsTypeName" type="text"  minlength="2" maxlength="20" validate="c" />
			<div class="placeholder">由3~200个中文、英文、数字、减号、下划线组成</div>
			<div class="errTips"></div>
		</div>
	</div>
	<input id="btnSave" type="button" value="保存" />
  </body>
</html>
