package com.ggg.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggg.pojo.Comment;
import com.ggg.pojo.Goods;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.pojo.ResJSON;
import com.ggg.pojo.User;
import com.ggg.service.impl.CommentServiceImpl;

@Controller
public class CommentController {

	@Autowired
	private CommentServiceImpl commentService;
	
	@RequestMapping("/queryAllComment")
	@ResponseBody
	public GridJSON queryAllComment(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		
		List<Comment> rows = commentService.queryAllComment(conditions);
		int total = commentService.queryAllCount(conditions);
		GridJSON json = new GridJSON();
		json.setRows(rows);
		json.setTotal(total);
		return json;
	}
	
	
	@RequestMapping("/addComment")
	@ResponseBody
	public ResJSON addComment(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		String infoStr = request.getParameter("infoStr");
		String[] infoStrArr = infoStr.split(",");
		ResJSON json = new ResJSON();
		try {
			for(int i=0;i<infoStrArr.length;i++){
				String[] infoArr = infoStrArr[i].split("\\|");
				String goodsid = infoArr[0];
				String content = infoArr[1];
				Goods goods = new Goods();
				goods.setGoodsId(goodsid);
				commentService.insertComment(new Comment(content,goods,user));
				json.setIsSuccess("true");
			}
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
}
