<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'delCart.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->


  <link rel="stylesheet" href="css/taobao/dialog/delCart.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
    <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/taobao/dialog/delCart.js"></script>
</head>
  
  <body>
    <div class="imgCon">
    	<img src="image/taobao/del.gif" alt="" />
    </div>
    <div class="content">
    	<p class="p1">你真的要狠心删除吗</p>
    	<p class="p2">可以点击确定或取消操作</p>
    </div>
    <div class="action">
    	<input type="button" value="确定" class="btnConfirm"/>
    	<input type="button" value="取消" class="btnCancel"/>
    </div>
  </body>
</html>
