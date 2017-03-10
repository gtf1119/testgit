package com.ggg.mapper;



import java.util.List;

import com.ggg.pojo.GridCondition;
import com.ggg.pojo.FileType;




public interface FileTypeMapper {
     
	public List<FileType> queryAll(GridCondition condition) throws Exception;
	
	public int queryAllCount(GridCondition condition) throws Exception;
	
	
}
