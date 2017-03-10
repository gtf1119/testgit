package com.ggg.mapper;

import java.util.List;

import com.ggg.pojo.Comment;
import com.ggg.pojo.GridCondition;

public interface CommentMapper {
	public List<Comment> queryAllComment(GridCondition condition) throws Exception;
	
	public int queryAllCount(GridCondition condition) throws Exception;
	
	public int insertComment(Comment comment) throws Exception;
}
