<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'xdialog.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
	
	<link rel="stylesheet" href="css/common/dialog.css" type="text/css"></link>
  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/common/util.js"></script>
  <script type="text/javascript" src="js/common/xidalog.js"></script>
  <script type="text/javascript">
  	function btnClick(){
  		var x = new xdialog({
  			rendTo : "#xdialog"
  		});
  		x.show({
  			url : "html/transition.jsp",
  			title : "弹出层",
  			height : 300,
  			width : 800
  		});
  		top.x = x;
  	}
  </script>
  </head>
  
  <body>
    <input type="button" value="显示弹出层" onclick="btnClick()"/>
    <div id="xdialog"></div>
  </body>
</html>
