package com.ggg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.mapper.ClassifiMapper;
import com.ggg.pojo.Classifi;
import com.ggg.pojo.GridCondition;
import com.ggg.service.ClassifiService;

@Service()
public class ClassifiServiceImpl implements ClassifiService {

	@Autowired
	private ClassifiMapper classifiMapper;
	
	public List<Classifi> queryClassifi() throws Exception {
		List<Classifi> classifiList = classifiMapper.queryClassifi();
		return classifiList;
	}

	public int queryCount() throws Exception {
		int total = classifiMapper.queryCount();
		return total;
	}

	public List<Classifi> queryAllClassifi(GridCondition condition)
			throws Exception {
		List<Classifi> classifiList = classifiMapper.queryAllClassifi(condition);
		return classifiList;
	}

	public int queryAllCount(GridCondition condition) throws Exception {
		int total = classifiMapper.queryAllCount(condition);
		return total;
	}

}
