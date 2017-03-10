<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>添加用户</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/common/util.js"></script>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <link rel="stylesheet" href="css/dialog/userAdd.css" type="text/css"></link>
  <script type="text/javascript" src="js/dialog/userAdd.js"></script></head>
  
  <body>
  		<div id="addUserPanel">
  				<div id="userMsg">
  				<div class="msgName">登录名</div>
  					
  					<input type="text" id="txtLoginName" class="txt" maxlength="20" placeholder="请输入登录名,不得小于3个字符" minlength="3" validate="cemn_"/>
  					<div class="errTips"></div>
  				</div>
  				
  				<div id="userMsg">
  					<div class="msgName">姓名</div>
  					<input type="text" id="txtName" class="txt" maxlength="20" placeholder="请输入姓名,不得小于2个字符" minlength="2" validate="c"/>
  						<div class="errTips"></div>
  				</div>
  				
  				<div id="userMsg">
  					<div class="msgName">班级</div>
  					<input type="text" id="txtClass" class="txt" maxlength="20" placeholder="请输入班级，由数字组成" validate="n"/>
  						<div class="errTips"></div>
  				</div>
  				
  				<div id="userMsg">
  					<div class="msgName">性别</div>
  					<input type="text" id="txtSex" class="txt" maxlength="20" placeholder="请输入性别，男或女" validate="c"/>
  						<div class="errTips"></div>
  				</div>	
  				
  			
  					
  					
  			
				<input type="button" id="btnConfirm" class="btn" value="确定" />
		
				<input type="button" id="btnCancel" class="btn" value="取消" />
  				
  			
  		</div>
  </body>
</html>
