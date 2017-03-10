package com.ggg.pojo;

public class File {
    private String id;
    private String fileName;
    private String fileSize;
    private String favicon;
    private String createTime;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileSize() {
		return fileSize;
	}
	public void setFileSize(String fileSize) {
		this.fileSize = fileSize;
	}
	public String getFavicon() {
		return favicon;
	}
	public void setFavicon(String favicon) {
		this.favicon = favicon;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public File(String id, String fileName, String fileSize, String favicon,
			String createTime) {
		super();
		this.id = id;
		this.fileName = fileName;
		this.fileSize = fileSize;
		this.favicon = favicon;
		this.createTime = createTime;
	}
	public File() {
		super();
	}
    
    
}
