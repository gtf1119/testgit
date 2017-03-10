<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'change.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
 <link rel="stylesheet" href="css/common/dialog.css" type="text/css"></link>
  <link rel="stylesheet" href="css/common/common1.css" type="text/css"></link>
  <link rel="stylesheet" href="css/change.css" type="text/css"></link>
  <script type="text/javascript" src="js/jquery-1.8.3.js"></script>
  <script type="text/javascript" src="js/change.js"></script>
  <script type="text/javascript" src="js/common/dialogz.js"></script>
  </head>
  
  <body>
    <div id="pic">
   <div id="main">
    <div  class="piclist" id="piclista"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclistb"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclistc"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclistd"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="picliste"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclistf"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclistg"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclisth"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclisti"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclistj"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclistk"><img src="upload/gou.png" class="gou"></img></div>
    <div class="piclist" id="piclistl"><img src="upload/gou.png" class="gou"></img></div>

    </div>
   
      <input type="button" value="确定" id="btnq"/>
    <input type="button" value="取消" id="btnx"/>
 
  
    </div> 
  </body>
</html>
