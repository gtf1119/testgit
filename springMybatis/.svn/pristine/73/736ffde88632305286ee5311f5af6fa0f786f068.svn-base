package com.ggg.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggg.pojo.CartCondition;
import com.ggg.pojo.Goods;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.ResJSON;
import com.ggg.pojo.ShopCart;
import com.ggg.pojo.User;
import com.ggg.service.ShopCartService;

@Controller
public class ShopCartController {

	@Autowired
	private ShopCartService shopCartService;
	
	@RequestMapping("/queryShopCart")
	@ResponseBody
	public List<ShopCart> queryShopCart(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		
		if(user == null){
			return new ArrayList<ShopCart>();
		}
		String condition = request.getParameter("condition");
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		
		List<ShopCart> sclist = shopCartService.queryShopCartByUserId(conditions);
		return sclist;
	}
	

	@RequestMapping("/insertShopCart")
	@ResponseBody
	public ResJSON insertShopCart(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		
		if(user == null){
			return new ResJSON();
		}
		String userId = user.getId();
		String goodsId = request.getParameter("goodsId");
		String goodsNum = request.getParameter("goodsNum");
		ResJSON json = new ResJSON();
		Goods goods = new Goods();
		goods.setGoodsId(goodsId);
		
		GridCondition condition = new GridCondition();
		String conditions = " WHERE USER_ID='"+userId+"' AND GOODS_ID='"+goodsId+"' AND 1=1";
		condition.setCondition(conditions);
		
		CartCondition condition2 = new CartCondition();
		
	
		try {
			ShopCart sc = shopCartService.queryByUIdAndGId(condition);
			if(sc == null){
				shopCartService.insertShopCart(new ShopCart(user,goods,goodsNum));
			}else{
				String oldNum = sc.getGoodsnum();
				int num = Integer.parseInt(oldNum)+Integer.parseInt(goodsNum);
				goodsNum = String.valueOf(num);
				condition2.setGoodsId(goodsId);
				condition2.setGoodsNum(goodsNum);
				condition2.setUserId(userId);
				shopCartService.updateShopCart(condition2);
			}
			
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/deleteShopCart")
	@ResponseBody
	public ResJSON deleteShopCart(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		
		if(user == null){
			return new ResJSON();
		}
		String goodsId = request.getParameter("goodsId");
		ResJSON json = new ResJSON();
		Goods goods = new Goods();
		goods.setGoodsId(goodsId);
		
		try {
			shopCartService.deleteShopCart(new ShopCart(user,goods));
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/updateShopCart")
	@ResponseBody
	public ResJSON updateShopCart(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		
		if(user == null){
			return new ResJSON();
		}
		ResJSON json = new ResJSON();
		
		String condition = request.getParameter("condition");
		String goodsId = request.getParameter("goodsId");
		String goodsNum = request.getParameter("goodsNum");
		String userId = user.getId();
		CartCondition conditions = new CartCondition();
		conditions.setCondition(condition);
		conditions.setGoodsId(goodsId);
		conditions.setGoodsNum(goodsNum);
		conditions.setUserId(userId);
		
		try {
			shopCartService.updateShopCart(conditions);
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/deleteMuchShopCart")
	@ResponseBody
	public ResJSON deleteMuchShopCart(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		
		if(user == null){
			return new ResJSON();
		}
		String allGoodsIdStr = request.getParameter("allGoodsIdStr");
		String[] goodsIdArr = allGoodsIdStr.split(",");
		
		ResJSON json = new ResJSON();
	
		try {
			for(int i=0;i<goodsIdArr.length;i++){
				Goods goods = new Goods();
				goods.setGoodsId(goodsIdArr[i]);
				shopCartService.deleteShopCart(new ShopCart(user,goods));
			}
			
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
		
	}
	
	@RequestMapping("/queryPayList")
	@ResponseBody
	public List<ShopCart> queryPayList(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		
		if(user == null){
			return new ArrayList<ShopCart>();
		}
		String allGoodsIdStr = request.getParameter("allGoodsIdStr");
		String[] goodsIdArr = allGoodsIdStr.split(",");
		CartCondition condition = new CartCondition();
		String userId = user.getId();
		List<ShopCart> sclist = new ArrayList<ShopCart>();
		for(int i=0;i<goodsIdArr.length;i++){
			String goodsId = goodsIdArr[i];
			condition.setGoodsId(goodsId);
			condition.setUserId(userId);
			ShopCart sc = shopCartService.queryPayList(condition);
			sclist.add(sc);
		}
		
		return sclist;
	}
	
	
	@RequestMapping("queryAllCartCount")
	@ResponseBody
	public int queryAllCartCount(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		
		if(user == null){
			return 0;
		}
		
		ShopCart sp = new ShopCart();
		sp.setUser(user);
		int total = shopCartService.queryAllCartCount(sp);
		
		return total;
	}
}
