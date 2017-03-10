package com.ggg.mapper;

import java.util.List;

import com.ggg.pojo.Classifi;
import com.ggg.pojo.GridCondition;

public interface ClassifiMapper {
	public List<Classifi> queryClassifi() throws Exception;
	
	public int queryCount() throws Exception;
	
	public List<Classifi> queryAllClassifi(GridCondition condition) throws Exception;
	
	public int queryAllCount(GridCondition condition) throws Exception;
}
