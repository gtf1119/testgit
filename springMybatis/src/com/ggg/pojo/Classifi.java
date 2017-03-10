package com.ggg.pojo;

import java.util.List;

public class Classifi {
	private String id;
	private String cid;
	private String name;
	private List<Title> titlelist;
	
	public List<Title> getTitlelist() {
		return titlelist;
	}
	public void setTitlelist(List<Title> titlelist) {
		this.titlelist = titlelist;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		this.cid = cid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Classifi(String id, String cid, String name) {
		super();
		this.id = id;
		this.cid = cid;
		this.name = name;
	}
	public Classifi() {
		super();
	}
	
	
}
