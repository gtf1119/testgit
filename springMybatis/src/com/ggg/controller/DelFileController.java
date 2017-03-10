package com.ggg.controller;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import com.ggg.pojo.DelFile;
import com.ggg.pojo.Files;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.pojo.ResJSON;
import com.ggg.service.DelFileService;
import com.ggg.service.impl.DelFileServiceImpl;


@Controller
public class DelFileController {
	@Autowired
	private DelFileService delfileService;
	
	@RequestMapping("/queryAllDelFile")
	@ResponseBody
	public GridJSON queryAllDelFile(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		
		
		  
		List<DelFile> rows = delfileService.queryDelFile(conditions);
		int total = delfileService.queryAllCount(conditions);
		GridJSON json = new GridJSON();
		json.setRows(rows);
		json.setTotal(total);
		return json;
	}
	

	@RequestMapping("/addDelFile")
	@ResponseBody
	public ResJSON insert(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 权限验证
		// 前台ajax发送过来的参数		
        
		String fileName = request.getParameter("fileName");
		String fileSize = request.getParameter("fileSize");
		String format = request.getParameter("format");		
		
		// 向前端返回的JSON对象
		ResJSON json = new ResJSON();
		try {

			// 把用户信息保存到数据库
			delfileService.insert(new DelFile(fileName,fileSize,format));
		// 设置json对象的isSuccess属性为true表示成功
			json.setIsSuccess("true");
		} catch (Exception e) {
			// 设置json对象的isSuccess属性为false表示失败
			json.setIsSuccess("false");
			// 将自定义的异常信息设置到errMsg属性，返回到页面上
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/queryDelFileAll")
	@ResponseBody
	public List<DelFile> queryDelFileAll(HttpServletRequest request, HttpServletResponse response) throws Exception {
	
		
		
	
		//查询所有商品分类
		List<DelFile> delFileList = delfileService.queryDelFileAll();
		return delFileList;
		
		
	}
	
}
