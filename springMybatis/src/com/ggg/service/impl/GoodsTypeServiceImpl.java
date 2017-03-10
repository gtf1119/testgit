package com.ggg.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.exception.SysException;
import com.ggg.mapper.GoodsTypeMapper;
import com.ggg.pojo.GoodType;
import com.ggg.pojo.GridCondition;
import com.ggg.service.GoodsTypeService;

@Service
public class GoodsTypeServiceImpl implements GoodsTypeService {

	@Autowired
	private GoodsTypeMapper goodsTypeMapper;
	
	public List<GoodType> queryGoodTye() throws Exception {
		List<GoodType> typeList = null;
		try {
			typeList = goodsTypeMapper.queryGoodTye();
		} catch (Exception e) {
			throw new SysException("商品分类查询失败");
		}
		
		return typeList;
	}

	public List<GoodType> queryGoodTypeByPage(GridCondition condition)
			throws Exception {
		List<GoodType> typeList = null;
		try {
			typeList = goodsTypeMapper.queryGoodTypeByPage(condition);
		} catch (Exception e) {
			throw new SysException("商品分类查询失败");
		}
		
		return typeList;
	}

	public int queryTypeCount(GridCondition condition) throws Exception {
		int count = 0;
		try {
			count = goodsTypeMapper.queryTypeCount(condition);
		} catch (Exception e) {
			throw new SysException("查询商品分类数量失败");
		}
		return count;
	}

	public int insertType(GoodType goodType) throws Exception {
		int count = 0;
		try {
			count = goodsTypeMapper.insertType(goodType);
		} catch (Exception e) {
			throw new SysException("插入商品分类失败");
		}
		return count;
	}

	public int updateType(GoodType goodType) throws Exception {
		int count = 0;
		try {
			count = goodsTypeMapper.updateType(goodType);
		} catch (Exception e) {
			throw new SysException("修改商品分类信息失败");
		}
		return count;
	}

	public void delete(String id) throws Exception {
		try {
			goodsTypeMapper.delete(id);
		} catch (Exception e) {
			throw new SysException("删除商品分类信息失败");
		}
	}

	public List<GoodType> queryTypeInMenu() throws Exception {
		List<GoodType> goodTypeList = goodsTypeMapper.queryTypeInMenu();
		return goodTypeList;
	}

}
