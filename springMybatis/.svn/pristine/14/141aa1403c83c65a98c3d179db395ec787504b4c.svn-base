package com.ggg.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.mapper.OrderGoodsMapper;
import com.ggg.pojo.OrderGoods;
import com.ggg.service.OrderGoodsService;

@Service
public class OrderGoodsServiceImpl implements OrderGoodsService {

	@Autowired
	private OrderGoodsMapper orderGoodsMapper;
	
	public void addOrderGoods(OrderGoods orderGoods) throws Exception {
		orderGoodsMapper.addOrderGoods(orderGoods);

	}

	public int deleteByOrderId(String id) throws Exception {
		int count = orderGoodsMapper.deleteByOrderId(id);
		return count;
	}

}
