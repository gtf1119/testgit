package com.ggg.service;

import java.util.List;

import com.ggg.pojo.GoodList;
import com.ggg.pojo.GridCondition;

public interface GoodListService {
	public List<GoodList> queryGoodList(GridCondition condition) throws Exception;
	
	public int queryAllCount(GridCondition condition) throws Exception;
}
