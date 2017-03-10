package com.ggg.util;

import java.util.HashMap;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import com.ggg.pojo.User;

public class MySessionListener implements HttpSessionListener{
	private static HashMap<String,User> activeUser = new HashMap<String,User>();

	public void sessionCreated(HttpSessionEvent se) {
		// TODO Auto-generated method stub
		
	}

	public void sessionDestroyed(HttpSessionEvent se) {
		User user = (User)se.getSession().getAttribute("user");
		if(user != null)
			activeUser.remove(user.getId());
	}
	
	public static HashMap<String,User> getActiveUsers(){
		return activeUser;
	}

}
