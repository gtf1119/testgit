package com.ggg.service;

import java.util.List;

import com.ggg.pojo.Files;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.DelFile;


public interface DelFileService {

	public List<DelFile> queryDelFile(GridCondition condition) throws Exception;
	public abstract int insert(DelFile delfile)throws  Exception;
	public int queryAllCount(GridCondition condition) throws Exception;
	public List<DelFile> queryDelFileAll() throws Exception;
}
