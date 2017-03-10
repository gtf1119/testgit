package com.ggg.pojo;

public class DelFile {
	 private String id;
	    private String fileName;
	    private String fileSize;
	    private String format;
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
		public String getFormat() {
			return format;
		}
		public void setFormat(String format) {
			this.format = format;
		}
		public String getCreateTime() {
			return createTime;
		}
		public void setCreateTime(String createTime) {
			this.createTime = createTime;
		}
		public DelFile(String id, String fileName, String fileSize,
				String format, String createTime) {
			super();
			this.id = id;
			this.fileName = fileName;
			this.fileSize = fileSize;
			this.format = format;
			this.createTime = createTime;
		}
		public DelFile() {
			super();
		}
		public DelFile(String fileName, String fileSize, String format) {
			super();
			this.fileName = fileName;
			this.fileSize = fileSize;
			this.format = format;
		}
         
   
}
