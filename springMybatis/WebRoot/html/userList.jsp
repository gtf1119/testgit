<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'userList.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <link rel="stylesheet" href="css/userList.css" type="text/css"></link>
  <script type="text/javascript" src="js/userList.js"></script>
  </head>
  <script>
  	$(function(){
  		userList.init({
  			renderTo : "#userContainer",
  			column : [{
  				name : "姓名",
  				alias : "name"
  			},
  			{
  				name : "年龄",
  				alias : "age"
  			},
  			{
  				name : "性别",
  				alias : "sex"
  			},
  			{
  				name : "邮箱",
  				alias : "email"
  			},
  			{
  				name : "地址",
  				alias : "address"
  			},
  			{
  				name : "手机",
  				alias : "tel"
  			},{
  				name : "工作",
  				alias : "job"
  			}],
  			dataSource : [{
  				name : "路飞",
  				age : 18,
  				sex : "男",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/lf.jpg"
  			},{
  				name : "索隆",
  				age : 18,
  				sex : "男",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/sl.jpg"
  			},{
  				name : "山治",
  				age : 18,
  				sex : "男",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/sz.jpg"
  			},{
  				name : "娜美",
  				age : 18,
  				sex : "女",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/nm.jpg"
  			},{
  				name : "罗宾",
  				age : 18,
  				sex : "女",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/lb.jpg"
  			},{
  				name : "乌索普",
  				age : 18,
  				sex : "男",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/wsp.jpg"
  			},{
  				name : "弗兰奇",
  				age : 18,
  				sex : "男",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/flq.jpg"
  			},{
  				name : "乔巴",
  				age : 18,
  				sex : "男",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/qb.jpeg"
  			},{
  				name : "布鲁克",
  				age : 18,
  				sex : "男",
  				email : "没有",
  				address : "大海是我家",
  				tel : "只有电话虫",
  				job : "海贼",
  				imgSrc : "image/blk.jpg"
  			}]
  		});
  	});
  
  </script>
  <style>
  	
  </style>
  <body>
  	<div id="userContainer">

  	</div>
  
  </body>
</html>
