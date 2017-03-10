<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="common/private.jsp" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>用户管理</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" href="css/select.css" type="text/css"></link>
	<link rel="stylesheet" href="css/userManager1.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/dialog.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/grid.css" type="text/css"></link>
  
  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/common/util.js"></script>
  <script type="text/javascript" src="js/common/dialog.js"></script>
  <script type="text/javascript" src="js/common/grid.js"></script>
  <script type="text/javascript" src="js/select.js"></script>
  <script type="text/javascript" src="js/useManager.js"></script></head>
  
  <body>
  	<div id="manageTitle">用户管理</div>
  	<div id="manageSubTitle">显示系统中所有注册的用户，您可以根据条件对用户信息进行增删改查</div>
  	<div id="condition">
  		<div id="queryTitle">查询条件</div>
  		<div id="querySubTitle">您可以根据提示填写要查询的条件，点击操作按钮，会根据您的条件来显示信息</div>
  	</div>
  	
  
  	<div class="conditianTable">
  		<div class="conditionRow">
  			<div class="conditionCols conText">登录名</div>
  			<div class="conditionCols"><input type="text" class="txt" id="txtLogin" placeholder="请输入登录名" maxlength="20" validate="cenm_" minLen=""/></div>
  			<div class="conditionCols conText">姓名</div>
  			<div class="conditionCols"><input type="text" class="txt" id="txtName" placeholder="请输入姓名" maxlength="20" validate="cenm_" minLen=""/></div>
  			<div class="conditionCols conText">性别</div>
  			<div class="conditionCols">
  				<div id="conditionSlt">
  				
  				</div>
  			</div>
  		</div>
  	</div>
  	
  	
  	<div class="messageBar">
  		<div class="userMessageTitle">用户信息</div>
  		<div class="messageBtns">
  			<input type="button" class="btnGrid" value="查询" id="btnQuery"/>
  			<input type="button" class="btnGrid" value="添加" id="btnAdd"/>
  			<input type="button" class="btnGrid forbidBtn" value="修改" id="btnUpdate"/>
  			<input type="button" class="btnGrid forbidBtn" value="删除" id="btnDelete"/>
  		</div>
  	</div>
  	
  	<div id="myGrid"></div>
  	
 
  	
  	
  </body>
</html>
