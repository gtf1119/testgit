<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'goolist.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" href="css/common/grid.css" type="text/css"></link>
<link rel="stylesheet" href="css/select.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <link rel="stylesheet" href="css/taobao/goodsList.css" type="text/css"></link>
  <link rel="stylesheet" href="css/taobao/taobao.css" type="text/css"></link>
  
  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/taobao/goodsList.js"></script>
 
  <script type="text/javascript" src="js/select.js"></script>
  <script type="text/javascript" src="js/common/util.js"></script>
  </head>
  
  <script>
  	$(function(){
  		
		goodsList.init({
			rendTo: "#main",
			dataSource:"queryAllList.action"
		});
	
		
  		
  	});
  </script>
  
  <body>
  	
  	<div id="main">
  		
  	</div>
  	
  </body>
</html>
