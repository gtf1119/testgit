<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ include file="common/private.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>聊天室</title>
<link rel="stylesheet" href="css/common/common.css" type="text/css"></link>
<link rel="stylesheet" href="css/chatroom.css" type="text/css"></link>
<link rel="stylesheet" href="css/qq.css" type="text/css"></link>
<link rel="stylesheet" href="css/font-awesome.css" type="text/css"></link>
<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css"></link>
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="js/chatroom.js"></script>
<script type="text/javascript" src="js/jquery.qqFace.js"></script>

</head>
<body>
	<div id="chatroom">
		<div id="logoContainer" userid="${user.id }">
			<img alt="" src="upload/${user.userimg }" width="30" height="30">
			<span id="logoUsername">${user.name }</span> <span id="exitBtn">×</span>
		</div>
		<div id="chatContainer">
			<div id="userList">
				<div class="userItem">群聊</div>
			</div>
			<div id="messageContainer">
				<div id="messageList"></div>
				<div id="middd" style="border-bottom: 1px solid #dddddd;height: 22px;background-color: #f1f1f1;">
					<span class="emotion"><i class="fa fa-meh-o fa-2x" aria-hidden="true"></i></span>
				</div>
				<div id="sendMessage">
					<textarea id="messageTxt"></textarea>
					<div id="sendBtnArea">
						<label> <input type="checkbox" id="autoScollBtn"
							checked="checked" />自动滚动开关 </label>
						<div id="sendBtnDiv">
							<span id="tips">按下Ctrl+Enter</span> <input type="button"
								value="发送" id="sendBtn" />
						</div>
					</div>
				</div>
			</div>
			<div id="rightSide">
				<img class="gg" src="image/flq.jpg"></img> <img class="gg"
					src="image/lb.jpg"></img>
			</div>
		</div>
	</div>
</body>
</html>
