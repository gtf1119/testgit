package com.ggg.mapper;

import java.util.List;

import com.ggg.pojo.Goods;
import com.ggg.pojo.GridCondition;

public interface GoodsMapper {
	
	
	public List<Goods> queryGoods(GridCondition condition) throws Exception;
	
	public int queryCount(GridCondition condition) throws Exception;



	public int insert(Goods goods) throws Exception;

	public int delete(String id) throws Exception;
	
	public int update(Goods goods) throws Exception;

	public Goods queryByGoodsId(GridCondition condition) throws Exception;
	
	public void updateSaleAndNum(Goods goods) throws Exception;
	
	public Goods queryById(String id) throws Exception;
	
	public List<Goods> queryHotSale() throws Exception;
}
