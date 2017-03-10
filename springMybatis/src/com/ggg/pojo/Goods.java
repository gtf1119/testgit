package com.ggg.pojo;

import java.util.List;



public class Goods {
	
	private int evaluatenum;
// 商品编号
	private String goodsId;
	// 商品名称
	private String goodsName;
	// 商品价格
	private String goodsPrice;
	// 商品库存
	private String goodsNum;
	// 商品销量
	private String goodsSales;
	
	// 商品描述信息
	private String goodsDes;
	// 商品创建时间
	private String createTime;
	// 商品所属用户ID
	private String userId;
	// 商品所属用户姓名
	private String userName;
	// 商品所属分类ID
	private String typeId;
	// 商品所属分类名称
	private String typeName;
	// 商品图片名称
	private List<GoodImg> goodsImgList;

	public int getEvaluatenum() {
		return evaluatenum;
	}
	public void setEvaluatenum(int evaluatenum) {
		this.evaluatenum = evaluatenum;
	}
	public String getGoodsId() {
		return goodsId;
	}
	public void setGoodsId(String goodsId) {
		this.goodsId = goodsId;
	}
	public String getGoodsName() {
		return goodsName;
	}
	public void setGoodsName(String goodsName) {
		this.goodsName = goodsName;
	}
	public String getGoodsPrice() {
		return goodsPrice;
	}
	public void setGoodsPrice(String goodsPrice) {
		this.goodsPrice = goodsPrice;
	}
	public String getGoodsNum() {
		return goodsNum;
	}
	public void setGoodsNum(String goodsNum) {
		this.goodsNum = goodsNum;
	}
	public String getGoodsSales() {
		return goodsSales;
	}
	public void setGoodsSales(String goodsSales) {
		this.goodsSales = goodsSales;
	}
	public String getGoodsDes() {
		return goodsDes;
	}
	public void setGoodsDes(String goodsDes) {
		this.goodsDes = goodsDes;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getTypeId() {
		return typeId;
	}
	public void setTypeId(String typeId) {
		this.typeId = typeId;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public List<GoodImg> getGoodsImgList() {
		return goodsImgList;
	}
	public void setGoodsImgList(List<GoodImg> goodsImgList) {
		this.goodsImgList = goodsImgList;
	}
	public Goods(String goodsName, String goodsPrice,
			String goodsNum, String goodsSales, String goodsDes, String userId,
			String typeId, List<GoodImg> goodsImgList) {
		super();
		
		this.goodsName = goodsName;
		this.goodsPrice = goodsPrice;
		this.goodsNum = goodsNum;
		this.goodsSales = goodsSales;
		this.goodsDes = goodsDes;
		this.userId = userId;
		this.typeId = typeId;
		this.goodsImgList = goodsImgList;
	}
	public Goods() {
		super();
	}

	public Goods(String goodsId,String goodsName, String goodsPrice,
			String goodsNum, String goodsSales, String goodsDes, String userId,
			String typeId, List<GoodImg> goodsImgList) {
		super();
		this.goodsId = goodsId;
		this.goodsName = goodsName;
		this.goodsPrice = goodsPrice;
		this.goodsNum = goodsNum;
		this.goodsSales = goodsSales;
		this.goodsDes = goodsDes;
		this.userId = userId;
		this.typeId = typeId;
		this.goodsImgList = goodsImgList;
	}
	public Goods(String goodsId) {
		super();
		this.goodsId = goodsId;
	}
	public Goods(String goodsId, String goodsNum) {
		super();
		this.goodsId = goodsId;
		this.goodsNum = goodsNum;
	}
	
	
	public Goods(String goodsId, String goodsNum, String goodsSales) {
		super();
		this.goodsId = goodsId;
		this.goodsNum = goodsNum;
		this.goodsSales = goodsSales;
	}
}
