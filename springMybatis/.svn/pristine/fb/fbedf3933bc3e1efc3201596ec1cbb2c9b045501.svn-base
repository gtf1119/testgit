package com.ggg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.mapper.CommentMapper;
import com.ggg.pojo.Comment;
import com.ggg.pojo.GridCondition;
import com.ggg.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentMapper commentMapper;
	
	public List<Comment> queryAllComment(GridCondition condition)
			throws Exception {
		List<Comment> commentList = commentMapper.queryAllComment(condition);
		return commentList;
	}

	public int queryAllCount(GridCondition condition) throws Exception {
		int total = commentMapper.queryAllCount(condition);
		return total;
	}

	public int insertComment(Comment comment) throws Exception {
		int count = commentMapper.insertComment(comment);
		return count;
	}

}
