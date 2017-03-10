package com.ggg.service;

import java.util.List;

import com.ggg.pojo.CartCondition;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.ShopCart;

public interface ShopCartService {
	public List<ShopCart> queryShopCartByUserId(GridCondition condition) throws Exception;

	public int insertShopCart(ShopCart shopCart) throws Exception; 
	
	public int deleteShopCart(ShopCart shopCart) throws Exception;
	
	public int updateShopCart(CartCondition condition) throws Exception;

	public ShopCart queryByUIdAndGId(GridCondition condition) throws Exception;
	
	public ShopCart queryPayList(CartCondition condition) throws Exception;

	public int queryAllCartCount(ShopCart shopCart) throws Exception;
}
