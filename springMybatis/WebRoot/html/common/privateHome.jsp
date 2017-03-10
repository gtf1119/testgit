<%@page import="com.sun.xml.internal.bind.v2.schemagen.xmlschema.Import"%>
<%@ page language="java" import="com.ggg.pojo.User" pageEncoding="utf-8" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String userName = "";
String userImg="";
String userId="";
User user = (User)session.getAttribute("user");
if(user == null){
	
}else{
	userName = user.getName();
	userId = user.getId();
}

%>