package com.ggg.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggg.mapper.DelFileMapper;
import com.ggg.pojo.Files;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.DelFile;
import com.ggg.service.DelFileService;

@Service("delfileService")
public class DelFileServiceImpl implements DelFileService{
	@Autowired
	private DelFileMapper delfileMapper;
	public List<DelFile> queryDelFile(GridCondition condition)
			throws Exception {
		List<DelFile> delfileList = delfileMapper.queryAll(condition);
		return delfileList;
	}

	public int queryAllCount(GridCondition condition) throws Exception {
		int total = delfileMapper.queryAllCount(condition);
		return total;
	}

	public  int insert(DelFile delfile) throws Exception {
	     int count =   delfileMapper.insert(delfile);	
		return count;
		
	
	}
	
	public List<DelFile> queryDelFileAll() throws Exception {
		List<DelFile> delFileList = null;
		try {
			delFileList = delfileMapper.queryDelFileAll();
		} catch (Exception e) {
			throw new Exception("商品查询失败");
		}
		return delFileList;
	}


}
