<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ include file="../common/privateHome.jsp"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>订单详情</title>
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0"/>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" href="css/common/dialog.css" type="text/css"></link>
<link rel="stylesheet" href="css/common/grid.css" type="text/css"></link>
<link rel="stylesheet" href="css/taobao/order.css" type="text/css"></link>
<link rel="stylesheet" href="css/select.css" type="text/css"></link>
<link rel="stylesheet" href="css/taobao/home.css" type="text/css"></link>
<link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>

<script type="text/javascript" src="js/common/util.js"></script>
<script type="text/javascript" src="js/taobao/shopCartNum.js"></script>
<script type="text/javascript" src="js/taobao/buildOrder.js"></script>
<script type="text/javascript" src="js/taobao/order.js"></script>
<script type="text/javascript" src="js/select.js"></script>
<script type="text/javascript" src="js/taobao/common/exit.js"></script>
<script type="text/javascript" src="js/common/dialog.js"></script>
</head>

<body>
	<div id="container">
		<div id="top_nav">
			<div id="navbg">
				<p id="loginInfo">
					<a href="<%=basePath%>/html/taobao/home.jsp">嗨，欢迎光临 </a>
					<c:choose>
						<c:when test="${user!=null}">
							<a id="login" class="a_link" href="javascript:void(0);"><%=userName%></a>
							<div class="userid hidden"><%=userId%></div>
						</c:when>
						<c:when test="${user == null}">
							<a id="login" class="a_link" href="<%=basePath%>/html/login.jsp">请登录</a>
						</c:when>
					</c:choose>
					<a id="regist" class="a_link" href="<%=basePath%>/html/login.jsp">免费注册</a>
					<a href="javascript:void(0);" id="exit">退出</a> <a
						href="javascript:void(0);" id="top-up">充值</a>
				</p>
				<ul id="navListInfo">
					<li><a href="<%=basePath%>/html/taobao/ownCenter.jsp">我的信息</a></li>

					<li><a href="<%=basePath%>/html/taobao/shopCart.jsp">购物车 <span
							class="cartNum"></span> </a></li>
					<li><a href="<%=basePath%>/html/taobao/order.jsp">我的订单</a>
				</ul>
			</div>
		</div>

		<div id="searchNav">

			<div id="searchCon">


				<div id="searchDiv">
					<input id="txtSearch" type="text" /><input type="button"
						value="搜索" id="btnSearch">
				</div>
			</div>

			<div id="scrollSearch" class="hidden">

				<div id="searchDivHidden">
					<input id="txtSearchHidden" type="text" /><input type="button"
						value="搜索" id="btnSearchHidden">
				</div>
			</div>

		</div>

		<div id="content">

			

			<div id="orderCon">
				<div id="order">
					<div class="orderNav">我的订单</div>

					<div class="orderType">
						<span class="chooseOrder orderClick">全部订单</span> <span status="0"
							class="chooseOrder">待付款</span> <span status="1"
							class="chooseOrder">待收货</span> <span status="2"
							class="chooseOrder">待评论</span> <span status="3"
							class="chooseOrder">已评论</span>
						<div class="searchId">
							<input class="txtSearchId" type="text" placeholder="输入订单编号" /> <input
								class="btnSearchId" type="button" value="搜索" />
						</div>

					</div>
					<div id="orderContent"></div>

				</div>

			</div>


		</div>



	</div>
</body>
</html>
