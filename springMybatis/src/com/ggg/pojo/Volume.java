package com.ggg.pojo;

public class Volume {
	private String name;
	private Integer value;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getValue() {
		return value;
	}
	public void setValue(Integer value) {
		this.value = value;
	}
	public Volume(String name, Integer value) {
		super();
		this.name = name;
		this.value = value;
	}
	public Volume() {
		super();
	}
	
}
