<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'tab.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <link rel="stylesheet" href="css/tab.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <script type="text/javascript" src="js/tab_js.js"></script></head>
  <script>
  
  $(function(){
  	tab.init({
  		renderTo : "tabID",
  
  		dataSource : [{
  			key:"001",
  			value:"首页",
  			url:"html/login.jsp"
  		},{
  			key:"002",
  			value:"查看",
  			url:"html/regist.jsp"
  		},{
  			key:"003",
  			value:"用户",
  			url:"html/note.jsp"
  		},{
  			key:"004",
  			value:"设置",
  			url:"html/grid.jsp"
  		}],
  		defaultSelected:"001",
  		onclick : function(obj){
  			alert(obj+"1111");
  		}
  	});
  	
  });
  	
  </script>
  
 
  <body>
  		<div id="tabID">
  			
  		</div>
  		
  		
  </body>
</html>
