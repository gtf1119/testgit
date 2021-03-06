package com.ggg.service;

import java.util.List;

import com.ggg.pojo.Goods;
import com.ggg.pojo.GridCondition;

public interface GoodsService {
	
	
	public List<Goods> queryGoods(GridCondition condition) throws Exception;
	
	public int queryCount(GridCondition condition) throws Exception;
	
	public String addGoods(Goods goods) throws Exception;
	
	public int update(Goods goods) throws Exception;
	
	public int delete(String id) throws Exception;
	public Goods queryByGoodsId(GridCondition condition) throws Exception;
	
	public void updateSaleAndNum(Goods goods) throws Exception;
	public Goods queryById(String id) throws Exception;
	
	public List<Goods> queryHotSale() throws Exception;
}
