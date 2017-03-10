package com.ggg.pojo;

public class Comment {
	private String id;
	private String content;
	private String comtime;
	private User user;
	private Goods goods;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getComtime() {
		return comtime;
	}
	public void setComtime(String comtime) {
		this.comtime = comtime;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Goods getGoods() {
		return goods;
	}
	public void setGoods(Goods goods) {
		this.goods = goods;
	}
	public Comment(String content, Goods goods, User user) {
		super();
		this.content = content;
		this.user = user;
		this.goods = goods;
	}
	public Comment() {
		super();
	}
	
	
	
}
