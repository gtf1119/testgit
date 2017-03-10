package com.ggg.service;

import java.util.List;

import com.ggg.pojo.Comment;
import com.ggg.pojo.GridCondition;

public interface CommentService {
	public List<Comment> queryAllComment(GridCondition condition) throws Exception;
	public int queryAllCount(GridCondition condition) throws Exception;
	
	public int insertComment(Comment comment) throws Exception;
}
