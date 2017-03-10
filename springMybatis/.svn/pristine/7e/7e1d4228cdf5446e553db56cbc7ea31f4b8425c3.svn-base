package com.ggg.mapper;

import java.util.List;

import com.ggg.pojo.GridCondition;
import com.ggg.pojo.User;

public interface UserMapper {
	public User queryUserById(String id) throws Exception;
	
	public User queryUserByLoginNameAndPwd(User user) throws Exception;
	
	public List<User> queryUserByName(String name) throws Exception;
	
	public List<User> queryAll(GridCondition condition) throws Exception;
	
	public int queryAllCount(GridCondition condition) throws Exception;
	
	public void insert(User user) throws Exception;
	
	public User queryUserByLoginName(String name) throws Exception;
	
	public int delete(String id) throws Exception;
	
	public int updateUser(User user) throws Exception;
	
	public void updateMoney(User user) throws Exception;
 }
