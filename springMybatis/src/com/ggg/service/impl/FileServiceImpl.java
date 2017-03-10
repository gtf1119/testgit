package com.ggg.service.impl;

import java.io.File;
import java.util.List;

import org.apache.commons.fileupload.FileItemFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.mapper.FileMapper;

import com.ggg.pojo.Files;
import com.ggg.pojo.Goods;
import com.ggg.pojo.GridCondition;

import com.ggg.service.FileService;
import com.ggg.exception.SysException;

@Service
public class FileServiceImpl  implements FileService{

	@Autowired
	private FileMapper fileMapper;

	public int queryAllCount(GridCondition condition) throws Exception {
		int count = 0;
		try {
		count = fileMapper.queryAllCount(condition);
		} catch (Exception e) {
			throw new SysException("total查询失败");
		}
		return count;
	}

	public List<Files> queryFile(GridCondition condition) throws Exception {
		List<Files> fileList = null;
		try {
		fileList = fileMapper.queryAll(condition);
		} catch (Exception e) {
			e.printStackTrace();
			throw new SysException("文件查询失败");
		}
		return fileList;
	}


	public int update(Files files) throws SysException {
		int count = 0;
		try {
			count = fileMapper.update(files);
		} catch (Exception e) {
			throw new SysException("修改文件信息失败");
		}
		
		return count;
	}

	public int delete(String id) throws SysException {
		int count = 0;
		try {
			count = fileMapper.delete(id);
		} catch (Exception e) {
			throw new SysException("删除文件失败");
		}
		return count;
	}

public  int insert(Files files) throws Exception {
	     int count =   fileMapper.insert(files);	
		return count;
		
	
	}

public List<Files> queryByformat(String format) throws Exception {
	List<Files> filesList = fileMapper.queryByformat(format);
	return filesList;
}


}
