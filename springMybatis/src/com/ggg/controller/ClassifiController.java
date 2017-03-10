package com.ggg.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggg.pojo.Classifi;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.service.ClassifiService;

@Controller
public class ClassifiController {

	@Autowired
	private ClassifiService classifiService;
	
	/**
	 * 分类列表
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/queryClassifiList")
	@ResponseBody
	public GridJSON queryClassifi(HttpServletRequest request,HttpServletResponse response) throws Exception{
		List<Classifi> rows = classifiService.queryClassifi();
		int total = classifiService.queryCount();
		GridJSON json = new GridJSON();
		json.setRows(rows);
		json.setTotal(total);
		return json;
	} 
	
	
	@RequestMapping("/queryAllClassifi")
	@ResponseBody
	public GridJSON queryAllClassifi(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		List<Classifi> rows = classifiService.queryAllClassifi(conditions);
		int total = classifiService.queryAllCount(conditions);
		GridJSON json = new GridJSON();
		json.setRows(rows);
		json.setTotal(total);
		return json;
	}
}
