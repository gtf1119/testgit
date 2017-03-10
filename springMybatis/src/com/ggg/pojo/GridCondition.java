package com.ggg.pojo;

public class GridCondition {
	private String condition;
	private String pageNum;
	private String pageSize;
	private String userid;
	private String typeid;
	public String getTypeid() {
		return typeid;
	}
	public void setTypeid(String typeid) {
		this.typeid = typeid;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getCondition() {
		return condition;
	}
	public void setCondition(String condition) {
		this.condition = condition;
	}
	public String getPageNum() {
		return pageNum;
	}
	public void setPageNum(String pageNum) {
		this.pageNum = pageNum;
	}
	public String getPageSize() {
		return pageSize;
	}
	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}
	public GridCondition(String condition, String pageNum, String pageSize) {
		super();
		this.condition = condition;
		this.pageNum = pageNum;
		this.pageSize = pageSize;
	}
	public GridCondition() {
		super();
	}
	
	
}
