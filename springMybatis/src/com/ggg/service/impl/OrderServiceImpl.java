package com.ggg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.mapper.OrderMapper;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.Order;
import com.ggg.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderMapper orderMapper;
	
	public String addOrder(Order order) throws Exception {
		orderMapper.addOrder(order);
		return order.getId();
	}

	public List<Order> queryOrder(GridCondition condition) throws Exception {
		List<Order> orderList = orderMapper.queryOrder(condition);
		return orderList;
	}

	public int queryOrderCount(GridCondition condition) throws Exception {
		int total = orderMapper.queryOrderCount(condition);
		return total;
	}

	public void updateStatus(Order order) throws Exception {
		orderMapper.updateStatus(order);
		
	}

	public int deleteByOrderId(String id) throws Exception {
		int count = orderMapper.deleteByOrderId(id);
		return count;
	}

	public void updateStatusNoTime(Order order) throws Exception {
		orderMapper.updateStatusNoTime(order);
	}

	public int queryVolume(GridCondition condition) throws Exception {
		int count = orderMapper.queryVolume(condition);
		return count;
	}

}
