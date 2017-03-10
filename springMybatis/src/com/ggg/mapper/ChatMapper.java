package com.ggg.mapper;

import java.util.List;

import com.ggg.pojo.Chat;



public interface ChatMapper {
	void add(Chat chat) throws Exception;

	List<Chat> queryAll(String contition) throws Exception;
}
