package com.ggg.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggg.exception.SysException;
import com.ggg.pojo.Chat;
import com.ggg.pojo.Friend;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.pojo.ResJSON;
import com.ggg.pojo.User;
import com.ggg.service.FriendService;

@Controller
public class FriendController {
	@Autowired
	public FriendService friendService;

	@RequestMapping("/addFriend")
	@ResponseBody
	public ResJSON addFriend(HttpServletRequest request,
			HttpServletResponse resp) {
		// 权限验证
		User user = (User) request.getSession().getAttribute("user");
		if (user == null) {
			return new ResJSON();
		}
		String myId = request.getParameter("myId");
		String friendId = request.getParameter("friendId");
		Friend friend = new Friend(myId, friendId);
		Friend friend1 = new Friend(friendId, myId);
		ResJSON json = new ResJSON();
		try {
			friendService.add(friend);
			friendService.add(friend1);
			json.setIsSuccess("true");
		} catch (SysException e) {
			e.printStackTrace();
			json.setErrMsg(e.getMessage());
		}
		return json;
	}

	@RequestMapping("/queryAllFriend")
	@ResponseBody
	public List<Friend> queryAllFriend(HttpServletRequest request,
			HttpServletResponse resp) throws Exception {

		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");

		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);

		List<Friend> friendList = friendService.queryFriendById(conditions);

		return friendList;

	}

	@RequestMapping("/deleteFriend")
	@ResponseBody
	public ResJSON deleteFriend(HttpServletRequest request,
			HttpServletResponse resp) {
		// 权限验证
		User user = (User) request.getSession().getAttribute("user");
		if (user == null) {
			return new ResJSON();
		}
		String myId = request.getParameter("myId");
		String friendId = request.getParameter("friendId");
		Friend friend = new Friend(myId, friendId);
		Friend friend1 = new Friend(friendId,myId);
		ResJSON json = new ResJSON();

		try {
			friendService.deleteFriend(friend);
			friendService.deleteFriend(friend1);
			json.setIsSuccess("true");
		} catch (Exception e) {
			e.printStackTrace();
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
}
