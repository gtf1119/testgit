<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'deleteUser.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  <link rel="stylesheet" href="css/dialog/deleteUser.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="js/dialog/deleteUser.js"></script>
</head>
  
  <body>
  	<div id="delete">
  		<div id="title">是否删除该用户?</div>
  		<input type="button" value="确定" id="btnConfirm" class="btn"/>
  		<input type="button" value="取消" id="btnCancel" class="btn"/>
  	</div>
  
  </body>
</html>
