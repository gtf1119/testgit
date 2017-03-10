<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'addCart.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

<link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
</head>
<style>
body {
	overflow-y: hidden;
}

h1 {
	text-align: center;
	color: #c40000;
	font-size: 25px;
	padding-top: 10px;
	box-sizing: border-box;
	padding-top: 0px\0;
}

@media screen and (-ms-high-contrast: active) , ( -ms-high-contrast :
	none) {
	h1 {
		padding-top: 10px; /*仅仅对>=IE10有效*/
	}
}

.btnShop {
	width: 100px !important;
	height: 34px !important;
	font-size: 16px !important;
	background: #c40000 !important;
	border: 1px solid #9c0101 !important;
	color: white !important;
	position: absolute;
	left: 10px;
}

.toShopCart {
	width: 100px !important;
    height: 34px !important;
    font-size: 16px !important;
    background: #ffffff !important;
    border: 1px solid #272929 !important;
    color: #313131 !important;
    position: absolute;
    right: 10px;
}

.btnBar {
	padding-left: 11px;
	position: relative;
}
</style>
<script type="text/javascript">
	$(function() {
		$(".btnShop").click(function() {
			top.dialog.hide();
		});

		$(".toShopCart").click(function() {
			var linkBase = $("base").attr("href");
			top.location.href = linkBase + "/html/taobao/shopCart.jsp";
		});
	});
</script>
<body>
	<h1>成功添加到购物车</h1>
	<div class="btnBar">
		<input type="button" value="继续购物" class="btnShop" /> <input
			type="button" value="去购物车" class="toShopCart" />
	</div>

</body>
</html>
