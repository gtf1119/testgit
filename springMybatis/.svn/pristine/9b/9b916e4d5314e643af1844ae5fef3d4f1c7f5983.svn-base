<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'slider.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <link rel="stylesheet" href="css/slider/slider.css" type="text/css"></link>

  <script type="text/javascript" src="js/slider/slider.js"></script>
  <script>
  	function f1(){
  		var n=999;
  		add = function(){
  			n+=1;
  		};
  		function f2(){
  			alert(n);
  		}
  		
  		return f2;
  	}
  	var result = f1();
  
  	result();
	add();
	result();
  </script>
  </head>
  
  <body>
  	<div id="container">
	  	<div class="sliderCon">
	  		<div class="slider">
	  			<ul class="sliderUl">
	  				<li class="picLi"><img class="pic" src="image/slider/1.jpg" alt="" /></li>
	  				<li class="picLi"><img class="pic" src="image/slider/2.jpg" alt="" /></li>
	  				<li class="picLi"><img class="pic" src="image/slider/3.jpg" alt="" /></li>
	  				<li class="picLi"><img class="pic" src="image/slider/4.jpg" alt="" /></li>
	  				<li class="picLi"><img class="pic" src="image/slider/5.jpg" alt="" /></li>
	  			</ul>
	  		</div>
	  		
	  		<div class="sBottom">
	  			<ul class="focusUl">
	  				<li index = "1" class="focusLi on"></li>
	  				<li index = "2" class="focusLi"></li>
	  				<li index = "3" class="focusLi"></li>
	  				<li index = "4" class="focusLi"></li>
	  				<li index = "5" class="focusLi"></li>
	  			</ul>
	  		</div>
	  		
	  		
	  		<span class="prev">&lt;</span>
	  		<span class="next">&gt;</span>
	  	</div>
  	
  	</div>
  	
  </body>
</html>
