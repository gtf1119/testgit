package com.ggg.service;

import java.util.List;

import com.ggg.pojo.Classifi;
import com.ggg.pojo.GridCondition;

public interface ClassifiService {
	public List<Classifi> queryClassifi() throws Exception;
	
	public int queryCount() throws Exception;
	
	public List<Classifi> queryAllClassifi(GridCondition condition) throws Exception;
	
	public int queryAllCount(GridCondition condition) throws Exception;
}
