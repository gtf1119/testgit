<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'addGoods.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <link rel="stylesheet" href="css/select.css" type="text/css"></link>
  <link rel="stylesheet" href="css/dialog/addGoods.css" type="text/css"></link>
  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/common/util.js"></script>
  <script type="text/javascript" src="js/select.js"></script>
  <script type="text/javascript" src="js/dialog/addGoods.js"></script>
 </head>
  
  <body>
    <div id="txtPanel">
		<div class="line">
			<label for="txtGoodsName">商品名称</label>
			<input id="txtGoodsName" type="text" placeholder="由3~200个中文、英文、数字、减号、下划线组成" minlength="3" maxlength="200" validate="cenm_k" />
			<div class="placeholder">由3~200个中文、英文、数字、减号、下划线组成</div>
			<div class="errTips"></div>
		</div>
		<div class="line">
			<label for="txtGoodsPrice">商品价格</label>
			<input id="txtGoodsPrice" type="text" placeholder="由1~12个数字、小数点组成" minlength="1" maxlength="12" validate="np" />
			<div class="placeholder">由1~12个数字、小数点组成</div>
			<div class="errTips"></div>
		</div>
		<div class="line">
			<label for="txtGoodsNum">商品库存</label>
			<input id="txtGoodsNum" type="text" placeholder="由1~12个数字组成" minlength="1" maxlength="12" validate="n" />
			<div class="placeholder">由1~12个数字组成</div>
			<div class="errTips"></div>
		</div>
		<div class="line">
			<label for="txtGoodsSales">商品销量</label>
			<input id="txtGoodsSales" type="text" placeholder="由1~12个数字组成" minlength="1" maxlength="12" validate="n" />
			<div class="placeholder">由1~12个数字组成</div>
			<div class="errTips"></div>
		</div>
		<div class="line">
			<label id="lblGoodsDes" for="txtGoodsDes">商品描述</label>
			<textarea id="txtGoodsDes" placeholder="由3~200个中文、英文、数字、减号、下划线组成" minlength="3" maxlength="200" validate="cenm_bk"></textarea>
			<div class="placeholder">由3~200个中文、英文、数字、减号、下划线组成</div>
			<div class="errTips"></div>
		</div>
		<div class="line">
			<label style="float:left;">商品分类</label>
			<div id="sltGoodsType" class="conditionSlt"></div>
		</div>
	</div>
	<div id="imgPanel">
		<div id="picTitle">上传图片</div>
		<div id="imgList"></div>
		<input type="button" value="添加图片" id="btnAdd"/>
		<form action="upload.action" target="hidden_iframe" enctype="multipart/form-data" method="post">
			<!-- 文件上传标签 -->
			
		</form>
		<!-- 用于提交上方表单的数据 -->
		<iframe class="hidden" id="hidden_iframe" name="hidden_iframe"></iframe>
	</div>
	<input id="btnSave" type="button" value="保存" />
	
  </body>
</html>
