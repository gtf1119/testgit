package com.ggg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.mapper.GoodListMapper;
import com.ggg.pojo.GoodList;
import com.ggg.pojo.GridCondition;
import com.ggg.service.GoodListService;

@Service("goodListService")
public class GoodListServiceImpl implements GoodListService {
	
	@Autowired
	private GoodListMapper goodListMapper;
	
	public List<GoodList> queryGoodList(GridCondition condition) throws Exception {
		List<GoodList> goodList = goodListMapper.queryGoodList(condition);
		return goodList;
	}

	public int queryAllCount(GridCondition condition) throws Exception {
		int total = goodListMapper.queryAllCount(condition);
		return total;
	}

}
