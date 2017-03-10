package com.ggg.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggg.pojo.GoodType;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.pojo.ResJSON;
import com.ggg.pojo.User;
import com.ggg.service.GoodsTypeService;

@Controller
public class GoodsTypeController {

	
	@Autowired
	private GoodsTypeService goodsTypeService;
	
	@RequestMapping("/queryGoodType")
	@ResponseBody
	public List<GoodType> queryGoodType(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ArrayList<GoodType>();
		}
		
		List<GoodType> typeList = goodsTypeService.queryGoodTye();
		return typeList;
	}
	
	
	@RequestMapping("/queryTypeByPage")
	@ResponseBody
	public GridJSON queryTypeByPage(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new GridJSON();
		}
		
		String pageNum = request.getParameter("pageNum");
		String pageSize = request.getParameter("pageSize");
		String condition = request.getParameter("condition");
		GridCondition conditions = new GridCondition();
		conditions.setPageNum(pageNum);
		conditions.setCondition(condition);
		conditions.setPageSize(pageSize);
		
		
		List<GoodType> rows = goodsTypeService.queryGoodTypeByPage(conditions);
		int total = goodsTypeService.queryTypeCount(conditions);
		
		GridJSON json = new GridJSON();
		json.setRows(rows);
		json.setTotal(total);
		return json;
	}
	
	@RequestMapping("/addType")
	@ResponseBody
	public ResJSON addType(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		String typeName = request.getParameter("typeName");
		ResJSON json = new ResJSON();
		try {
			goodsTypeService.insertType(new GoodType(typeName));
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/updateType")
	@ResponseBody
	public ResJSON updateType(HttpServletRequest request, HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		String typeId = request.getParameter("typeId");
		String typeName = request.getParameter("typeName");
		ResJSON json = new ResJSON();
		try {
			goodsTypeService.updateType(new GoodType(typeId,typeName));
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/delType")
	@ResponseBody
	public ResJSON delType(HttpServletRequest request, HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		String typeId = request.getParameter("typeId");

		ResJSON json = new ResJSON();
		try {
			goodsTypeService.delete(typeId);
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/queryGoodTypeInMenu")
	@ResponseBody
	public List<GoodType> queryGoodTypeInMenu(HttpServletRequest request,HttpServletResponse response) throws Exception{
		
		List<GoodType> typeList = goodsTypeService.queryTypeInMenu();
		return typeList;
	}
	
	
	
}
