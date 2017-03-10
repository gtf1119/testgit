<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ include file="common/private.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
<title>我的聊天</title>
<link rel="stylesheet" href="css/qq.css" type="text/css"></link>
<link rel="stylesheet" href="css/font-awesome.css" type="text/css"></link>
<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css"></link>
<link rel="stylesheet" href="css/common/common.css" type="text/css"></link>
<link rel="stylesheet" href="css/addfriend.css" type="text/css"></link>
<link rel="stylesheet" href="css/chatting.css" type="text/css"></link>
<link rel="stylesheet" href="css/select.css" type="text/css"></link>

<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<script type="text/javascript" src="js/chatroom.js"></script>
<script type="text/javascript" src="js/jquery.qqFace.js"></script>
<script type="text/javascript" src="js/common/util.js"></script>
<script type="text/javascript" src="js/addfriend.js"></script>
<script type="text/javascript" src="js/friend.js"></script>
<script type="text/javascript" src="js/chat/details.js"></script>
<script type="text/javascript" src="js/chat/frienddetails.js"></script>
<script type="text/javascript" src="js/chat/friendManger.js"></script>
<script type="text/javascript" src="js/select.js"></script>
<script type="text/javascript" src="js/jscolor.js"></script>
</head>
<body>
	<div id="tab"></div>
	<div id="buuscard" userid="${user.id}">
	<!-- 
		<div style="font-size: 33px; margin-left: 70px;margin-top: 12px;">查询条件</div>
		<div>
			<div
				style="width: 70px;font-size: 20px;font-weight: bold; margin-left: 620px;">用户名</div>
			<input id="nametxt" type="text"
				style=" margin-left: 691px;margin-top: -22px;" />
		</div>
		<div>
			<div
				style="margin-left: 1000px;margin-top: -23px;font-size: 20px;font-weight: bold;">性别</div>
			<div id="sexman"
				style="width: 90px;margin-left: 1049px;margin-top: -20px;">
				<label style="cursor: pointer;"><input type="radio"
					name="man" class="sexx" value="男">男</label> <label
					style="cursor: pointer;"><input type="radio" name="man"
					class="sexx" value="女">女</label>
			</div>
			<div id="searcd">查询</div>
		</div> 
	-->
	</div>
	<div id="buusscard" userid="${user.id}"></div>
	<div id="tjhy" class="hidden">
		<div id="close">好的</div>
		<img src="image/tjhy.png"></img>
	</div>
	<div id="schy" class="hidden">
		<div id="closed">我知道了</div>
		<img src="image/schy.png"></img>
	</div>


<!-- 单对单聊天 -->





	<div id="chatroom" class="hidden">
		<div id="logoContainer" userid="${user.id }">
			<img alt="" src="upload/${user.userimg }" width="30" height="30">
			<span id="logoUsername">${user.name }</span>
		</div>
		<div id="chatContainer">
		<div id="userList">
		<div class="userItem">群聊</div>
		</div>
			<div id="messageContainer">
				<div id="messageList"></div>
				<div id="middd"
					style="border-bottom: 1px solid #dddddd;height: 22px;background-color: #f1f1f1;width: 1070px;">
					<span class="emotion"><i id="xl" class="fa fa-meh-o fa-2x" aria-hidden="true"></i> </span>
					<span class="emotion"><i id="jc" class="fa fa-bold fa-2x" aria-hidden="true"></i></span>
					<span class="emotion"><input id="foo" class="jscolor {onFineChange:'update(this)'}"  value="cc4499" autocomplete="off" on style="background-image: none; background-color: rgb(196, 108, 20); color: rgb(255, 255, 255); width: 60px;"></span>
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
		</div>
	</div>
</body>
</html>
