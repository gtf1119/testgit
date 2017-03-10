package com.ggg.pojo;

public class GoodImg {
	private String id;
	private String filename;
	private String createtime;
	private String goodsid;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public String getGoodsid() {
		return goodsid;
	}
	public void setGoodsid(String goodsid) {
		this.goodsid = goodsid;
	}
	public GoodImg(String filename, String goodsid) {
		super();
		this.filename = filename;
		this.goodsid = goodsid;
	}
	public GoodImg() {
		super();
	}
	
	
}
