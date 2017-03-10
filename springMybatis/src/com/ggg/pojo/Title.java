package com.ggg.pojo;

import java.util.List;

public class Title {
	private String id;
	private String titlecid;
	private String titleid;
	private String titlename;
	private List<GoodIntro> goodIntroList;
	
	public List<GoodIntro> getGoodIntroList() {
		return goodIntroList;
	}
	public void setGoodIntroList(List<GoodIntro> goodIntroList) {
		this.goodIntroList = goodIntroList;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitlecid() {
		return titlecid;
	}
	public void setTitlecid(String titlecid) {
		this.titlecid = titlecid;
	}
	public String getTitleid() {
		return titleid;
	}
	public void setTitleid(String titleid) {
		this.titleid = titleid;
	}
	public String getTitlename() {
		return titlename;
	}
	public void setTitlename(String titlename) {
		this.titlename = titlename;
	}
	public Title(String id, String titlecid, String titleid, String titlename) {
		super();
		this.id = id;
		this.titlecid = titlecid;
		this.titleid = titleid;
		this.titlename = titlename;
	}
	public Title() {
		super();
	}
	
	
}
