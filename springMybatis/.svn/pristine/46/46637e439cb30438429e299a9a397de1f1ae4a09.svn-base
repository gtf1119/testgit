<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="../common/private.jsp" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>聊天室</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
<link rel="stylesheet" href="css/chat.css" type="text/css"></link>
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="js/common/util.js"></script>
<script type="text/javascript" src="js/chat/buildChat.js"></script>
<script type="text/javascript" src="js/chat/chat.js"></script>
<script>
	
	$(function() {
	
		
		
		
	});
</script>
</head>

<body>
	<div id="header">
		<div id="welcome" uid="<%=userId %>">
			Welcome
		</div>
		<div id="tips">欢迎<%=userName %>登录</div>
		<div id="exit">退出</div>
	</div>
	<div id="container">
		<div id="leftnav">
			<h4 class="onlineUserTitle">在线用户<span></span></h4>
			<div class="allTalk selected">群聊</div>
			<div id="userItem"></div>
			<!--  
			<c:forEach items="${users}" var="u">
				
				<div class="onlineUser" uid="${u.id}">
					<img src="upload/${u.userimg}"alt="" />
					<div>${u.name}</div>
				</div>
				
				
			</c:forEach>
			
			-->
		</div>
		<div id="content">
			<div id="chatMsg"></div>
			<div id="chatAction">
				<textarea name="txtMsg" id="txtMsg"></textarea>
				<input type="button" value="发送" id="sendMsg"/>
			</div>
		</div>
		<div id="rightnav">
			<div class="rightline">
				<label id="lblAutoScroll">
						<input id="chkAutoScroll" type="checkbox" checked="checked" />
						<span>收到新消息自动下拉滚动条</span>
				</label>
			</div>
		</div>
	</div>

</body>
</html>
