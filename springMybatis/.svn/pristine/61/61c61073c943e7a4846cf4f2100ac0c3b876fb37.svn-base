package com.ggg.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggg.pojo.GoodList;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.service.GoodListService;

@Controller
public class GoodListController {
	
	@Autowired
	private GoodListService goodListService;
	
	
	@RequestMapping("/queryAllList")
	@ResponseBody
	public GridJSON queryAll(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String condition = request.getParameter("condition");
		String pageNum = request.getParameter("pageNum");
		String pageSize = request.getParameter("pageSize");
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNum);
		conditions.setPageSize(pageSize);
		List<GoodList> rows = goodListService.queryGoodList(conditions);
		int total = goodListService.queryAllCount(conditions);
		GridJSON json = new GridJSON();
		json.setTotal(total);
		json.setRows(rows);
		return json;
	}
}
