package com.ggg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.exception.SysException;
import com.ggg.mapper.FriendMapper;
import com.ggg.pojo.Friend;
import com.ggg.pojo.GridCondition;
import com.ggg.service.FriendService;

@Service
public class FriendServiceImpl implements FriendService {
	@Autowired
	private FriendMapper friendMapper;

	public void add(Friend friend) throws SysException {
		try {
			friendMapper.add(friend);
		} catch (Exception e) {
			throw new SysException("好友添加失败");
		}

	}

	public List<Friend> queryFriendById(GridCondition condition)
			throws SysException {

		List<Friend> friendList = null;
		try {
			friendList = friendMapper.queryFriendById(condition);
		} catch (Exception e) {
			throw new SysException("还有查询失败");
		}
		return friendList;
	}

	public void deleteFriend(Friend friend) throws Exception {
		try {
			friendMapper.deleteFriend(friend);
		} catch (Exception e) {
			throw new SysException("好友添加失败");
		}
	}
}