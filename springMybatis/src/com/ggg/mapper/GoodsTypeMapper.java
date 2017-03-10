package com.ggg.mapper;

import java.util.List;

import com.ggg.pojo.GoodType;
import com.ggg.pojo.GridCondition;

public interface GoodsTypeMapper {
	public List<GoodType> queryGoodTye() throws Exception;
	
	public List<GoodType> queryGoodTypeByPage(GridCondition condition) throws Exception;

	public int queryTypeCount(GridCondition condition) throws Exception;
	
	public int insertType(GoodType goodType) throws Exception;
	
	public int updateType(GoodType goodType) throws Exception;
	
	public void delete(String id) throws Exception;
	
	public List<GoodType> queryTypeInMenu() throws Exception;
}
