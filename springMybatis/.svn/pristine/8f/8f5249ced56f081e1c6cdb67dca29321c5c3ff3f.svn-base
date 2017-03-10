package com.ggg.controller;

import java.io.File;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import com.ggg.pojo.FileType;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.service.FileTypeService;

@Controller
public class FileTypeController {
	@Autowired
	private FileTypeService fileTypeService;
	
	@RequestMapping("/queryAllFileType")
	@ResponseBody
	public GridJSON queryAllFileType(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		
		
		  
		List<FileType> rows = fileTypeService.queryFileType(conditions);
		int total = fileTypeService.queryAllCount(conditions);
		GridJSON json = new GridJSON();
		json.setRows(rows);
		json.setTotal(total);
		return json;
	}
	
}
