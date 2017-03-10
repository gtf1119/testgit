package com.ggg.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.mapper.FileTypeMapper;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.FileType;
import com.ggg.service.FileTypeService;
@Service("fileTypeService")
public class FileTypeServiceImpl implements FileTypeService{
	@Autowired
	private FileTypeMapper fileTypeMapper;
	public List<FileType> queryFileType(GridCondition condition)
			throws Exception {
		List<FileType> fileTypeList = fileTypeMapper.queryAll(condition);
		return fileTypeList;
	}

	public int queryAllCount(GridCondition condition) throws Exception {
		int total = fileTypeMapper.queryAllCount(condition);
		return total;
	}

	
}
