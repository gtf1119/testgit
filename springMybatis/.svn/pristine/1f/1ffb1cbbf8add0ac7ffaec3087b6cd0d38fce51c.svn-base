package com.ggg.service;

import java.util.List;

import com.ggg.pojo.GridCondition;
import com.ggg.pojo.Order;

public interface OrderService {
	public String addOrder(Order order) throws Exception;
	
	public List<Order> queryOrder(GridCondition condition) throws Exception;
	
	public int queryOrderCount(GridCondition condition) throws Exception;
	
	public void updateStatus(Order order) throws Exception;
	
	public int deleteByOrderId(String id) throws Exception;
	
	public void updateStatusNoTime(Order order) throws Exception;
	
	public int queryVolume(GridCondition condition) throws Exception;
}
