package com.ggg.service;

import java.util.List;

import com.ggg.exception.SysException;
import com.ggg.pojo.Chat;


public interface ChatService {
	void add(Chat chat) throws SysException;
	
	List<Chat> queryAll(String condition) throws SysException;
}
