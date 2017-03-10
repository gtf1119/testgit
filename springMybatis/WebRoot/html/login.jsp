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

<title>用户登录</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script type="text/javascript" src="js/jquery-1.8.3.js"></script>
<link rel="stylesheet" href="css/login1.css" type="text/css"></link>
<link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>


<script type="text/javascript" src="js/login.js"></script>
<script type="text/javascript" src="js/common/util.js"></script>

<script type="text/javascript" src="js/common/particles.js"></script>
<script type="text/javascript" src="js/regist.js"></script></head>
<body>
	<canvas id="canvas-keleyi-com"></canvas>
	<div id="loginPanel">

		<div id="loginTitle">
			<div class="sliderBar">
				<a id="login" class="tab selected">登录</a>
				<a id="regist" class="tab">注册</a>
				<span class="moveBar"></span>
				<div style="clear:both"></div>
			</div>
			
		</div>
		<div id="subTitle">一个让男人心碎，女人流泪的网站</div>
		<div id="loginContent" >
			<div class="line">
				<input id="txtLoginName" type="text" placeholder="登录名"
					maxlength="20" name="loginName" />
				<div class="placeholder">登录名</div>
				<div class="errTips"></div>
			</div>



			<div class="line">
				<input id="txtPassword" type="password" placeholder="密码"
					maxlength="20" name="passWord" />
				<div class="placeholder">密码</div>
				<div class="errTips"></div>
			</div>



			<div id="textCodeLine">
				<input id="txtCode" type="text" placeholder="验证码" maxlength="4"
					name="code" />
				<div class="placeholder">验证码</div>
				<div class="errTips"></div>
			</div>
			<img src="" basePath="<%=basePath%>getCert.action" alt="验证码" id="pic"
				title="点击刷新" /> <label id="lblRm"> <input id="chkRm"
				type="checkbox" /> <span>记住我</span> </label> 
			<input id="btnLogin" type="button" value="登录" />

		</div>

		<div id="registContent" class="hidden">
			<div class="line">
					<label for="txtResLoginName">登录名</label> <input type="text" id="txtResLoginName" name="loginName"
						placeholder="由3-20个英文、下划线组成" minlength="3" maxlength="20"
						validate="enm_" />
					<div class="placeholder">登录名</div>
					<div class="errTips"></div>
				
				</div>
				
				<div class="line">
					<label for="txtName">用户名</label> <input type="text" id="txtName" name="userName"
						placeholder="由2-20个中文、英文、下划线组成" minlength="2" maxlength="20"
						validate="cenm_" />
					<div class="placeholder">用户名</div>
					<div class="errTips"></div>
				
				</div>
				
				<div class="line">
					<label for="txtPwd">密码</label> <input type="password" id="txtPwd" name="passWord"
						placeholder="由6-20个英文、下划线组成" minlength="6" maxlength="20"
						validate="enm_" />
					<div class="placeholder">密码</div>
					<div class="errTips"></div>
				</div>
				
				
				<div class="line">
					<label for="txtRePwd">重复密码</label> <input type="password" name="rePwd"
						id="txtRePwd" placeholder="由6-20个英文、下划线组成" minlength="6"
						maxlength="20" validate="enm_" />
					<div class="placeholder">重复密码</div>
					<div class="errTips"></div>
				</div>
				
			
				
				<div class="line">
					<div class="sexItem">
						<input type="radio" name="sex" id="sex1" checked/>男
					</div>
					<div class="sexItem">
						<input type="radio" name="sex" id="sex2"/>女
					</div>
					
				</div>
				
				
				<input type="submit" value="注册"id="btnReg" />
	
			
		</div>


	</div>
</body>
</html>
