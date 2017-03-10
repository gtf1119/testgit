package com.ggg.test;



import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ggg.pojo.Classifi;
import com.ggg.pojo.Goods;
import com.ggg.service.ClassifiService;
import com.ggg.service.GoodListService;
import com.ggg.service.GoodsService;

public class Test {

	public static void main(String[] args) throws Exception {
		ApplicationContext act = new ClassPathXmlApplicationContext("applicationContext.xml");
//		SqlSessionFactory fatory = (SqlSessionFactory) act.getBean("sqlSessionFactory");
//		System.out.println(fatory);
//		GoodsService goodsService = (GoodsService) act.getBean("goodsService");
//		System.out.println(goodsService.queryGoodsById("0EED503B47B6460A9540ADF179E1A68C").getName());
//		
//		
//		List<Goods> goodsList = goodsService.queryGoods();
//		for (Goods goods : goodsList) {
//			System.out.println(goods.getName()+" "+goods.getDescrip());
//		}
		
//		UserService userService = (UserService) act.getBean("userService");
//		User user = new User();
//		user.setname("xiaowang");
//		user.setPwd("111111");
//		userService.addUser(user);
		
	
//		List<User> user = userService.queryUserByName("x");
//		System.out.println(user.size());
		
//		User user = userService.queryUserById(2);
//		System.out.println(user.getname());
		
//		List<User> userList = userService.queryAll();
//		for (User user : userList) {
//			System.out.println(user.getname());
//		}
		
		GoodsService goodService = (GoodsService) act.getBean("goods");
		List<Goods> goods = goodService.queryGoods(null);
		for (Goods goods2 : goods) {
			System.out.println(goods2.getCreatetime());
		}
		
//		List<GoodList> goodList =  goodListService.queryGoodList();
//		for (GoodList goodList2 : goodList) {
//			System.out.println(goodList2.getAddress());
//		}
//		int num = goodListService.queryAllCount();
//		System.out.println(num);
		
//		ClassifiService classi = (ClassifiService) act.getBean("classifiService");
//		List<Classifi> list = classi.queryClassifi();
//		System.out.println(list.size());
	}

}
