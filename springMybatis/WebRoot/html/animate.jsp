<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'animate.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
    <script>
  	$(function(){
  		$("#btn").click(function(){
  			$("#demo").addClass("move");
  		});
  		
  		$("#btn1").click(function(){
  			$("#demo1").animate({
  				left : 300
  			},"slow");
  		});
  		
  	});
  </script>
  </head>
  <style>
  	#demo{
  		width: 100px;
  		height:100px;
  		background:red;
  		position:relative;
  		left:0;
  		
  		transition: all 1000ms;
  	}
  	
  	.move {
  		left:300px !important;
  	}
  	
	#demo1{
  		width: 100px;
  		height:100px;
  		background:black;
  		position:relative;
  		left:0;
  	}
  	
  </style>

  <body>
  	<div id="demo"></div>
  	<input type="button" id="btn" value="css" />
  	<div id="demo1"></div>
  	<input type="button" id="btn1" value="jq" />
  </body>
</html>
