package com.ggg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.exception.SysException;
import com.ggg.mapper.UserMapper;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.User;
import com.ggg.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	public User queryUserById(String id) throws Exception {
		User user = userMapper.queryUserById(id);
		return user;
	}

	public List<User> queryUserByName(String name) throws Exception {
		List<User> userList = userMapper.queryUserByName(name);
		return userList;
	}

	public List<User> queryAll(GridCondition condition) throws Exception {
		List<User> userList = userMapper.queryAll(condition);
		return userList;
	}

	public int queryAllCount(GridCondition condition) throws Exception {
		int total = userMapper.queryAllCount(condition);
		return total;
	}

	public void addUser(User user) throws Exception {
		User resUser = null;
		
		try {
			resUser = userMapper.queryUserByLoginName(user.getLoginname());
		} catch (Exception e) {
			throw new SysException("用户查询失败");
		}
		
		
		if(resUser == null){
			try {
				userMapper.insert(user);
			} catch (Exception e) {
				throw new SysException("用户注册失败");
			}
		}else{
			throw new SysException("登录名已经存在");
		}
		
		
	}

	public User queryUserByLoginNameAndPwd(User user) throws Exception {
		User resUser = null;
		if(user.getLoginname().equals("") || user.getPwd().equals("")){
			throw new SysException("用户名或密码为空");
		}else{
			try {
				resUser = userMapper.queryUserByLoginNameAndPwd(user);
			} catch (Exception e) {
				throw new SysException("用户名或密码查询失败");
			}	
		}
		if(resUser == null){
			throw new SysException("用户名或密码错误");
		}
		return resUser;
	}

	public User queryUserByLoginName(String name) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	public int delete(String id) throws Exception {
		int count = 0;
		try {
			userMapper.delete(id);
		} catch (Exception e) {
			throw new SysException("删除用户失败");
		}
		return count;
	}

	public int updateUser(User user) throws Exception {
		int count = 0;
		try {
			count = userMapper.updateUser(user);
		} catch (Exception e) {
			throw new SysException("用户信息修改失败");
		}
		return count;
	}

	public void updateMoney(User user) throws Exception {
		userMapper.updateMoney(user);
	}



}
