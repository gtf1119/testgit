package com.ggg.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.exception.SysException;
import com.ggg.mapper.GoodsImgMapper;
import com.ggg.pojo.GoodImg;
import com.ggg.service.GoodsImgService;

@Service
public class GoodsImgServiceImpl implements GoodsImgService {

	@Autowired
	private GoodsImgMapper goodsImgMapper;
	
	public void insert(GoodImg goodImg) throws Exception {
		
		try {
			goodsImgMapper.insert(goodImg);
		} catch (Exception e) {
			throw new SysException("插入图片失败");
		}
		

	}

	public int deleteByGoodsId(String goodsId) throws Exception {
		int count = 0;
		try {
			count = goodsImgMapper.deleteByGoodsId(goodsId);
		} catch (Exception e) {
			throw new SysException("删除商品图片失败");
		}
		return count;
	}

}
