package com.ggg.service;

import java.util.List;

import com.ggg.pojo.GridCondition;
import com.ggg.pojo.FileType;


public interface FileTypeService {

	public List<FileType> queryFileType(GridCondition condition) throws Exception;
	
	public int queryAllCount(GridCondition condition) throws Exception;
}
