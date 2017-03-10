package com.ggg.controller;

import java.io.File;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggg.exception.SysException;
import com.ggg.pojo.GoodImg;
import com.ggg.pojo.Goods;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.pojo.ResJSON;
import com.ggg.pojo.User;
import com.ggg.service.GoodsImgService;
import com.ggg.service.GoodsService;

@Controller
public class GoodsController {
	
	@Autowired
	private GoodsService goodsService;
	
	@Autowired
	private GoodsImgService goodsImgService;
	
	
	@RequestMapping("/queryAllGoods")
	@ResponseBody
	public GridJSON queryAllGoods(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		
		
		List<Goods> rows = goodsService.queryGoods(conditions);
		int total = goodsService.queryCount(conditions);
		GridJSON json = new GridJSON();
		json.setRows(rows);
		json.setTotal(total);
		return json;
	}
	
	@RequestMapping("/addGoods")
	@ResponseBody
	public ResJSON addGoods(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		
		String goodsName = request.getParameter("goodsName");
		String goodsPrice = request.getParameter("goodsPrice");
		String goodsNum = request.getParameter("goodsNum");
		String goodsSales = request.getParameter("goodsSales");
		String goodsDes = request.getParameter("goodsDes");
		String goodsTypeID = request.getParameter("goodsTypeID");
		String goodsImg = request.getParameter("goodsImg");
		String[] goodsImgArr = goodsImg.replace("[", "").replace("]", "").replaceAll(" ", "").split(",");
		String goodsUserId = user.getId();
		ResJSON json = new ResJSON();
		
		try {
			if (!goodsName.matches("^[A-Za-z0-9\u4E00-\u9Fa5\\-\\_]{3,200}$"))
				throw new SysException("商品名称只能包含3~200个中文、英文、数字、减号、下划线");
			if (!goodsPrice.matches("^[0-9\\.]{1,12}$"))
				throw new SysException("商品价格只能包含1~12个数字、小数点");
			if (!goodsNum.matches("^[0-9]{1,12}$"))
				throw new SysException("商品库存只能包含1~12个数字");
			if (!goodsSales.matches("^[0-9]{1,12}$"))
				throw new SysException("商品销量只能包含1~12个数字");
			if (!goodsDes.matches("^[A-Za-z0-9\u4E00-\u9Fa5\\-\\_，。！？；（）“‘]{3,200}$"))
				throw new SysException("商品描述只能包含3~200个中文、英文、数字、减号、下划线");
			List<GoodImg> goodImgList = new ArrayList<GoodImg>();
			String goodsId = goodsService.addGoods(new Goods(goodsName,goodsPrice,goodsNum,goodsSales,goodsDes,goodsUserId,goodsTypeID,goodImgList));
			for(String s : goodsImgArr){
				goodsImgService.insert(new GoodImg(s,goodsId));
			}
			
			json.setIsSuccess("true");
		} catch (SysException e) {
			
			json.setIsSuccess("false");
			
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/upload")
	@ResponseBody
	public void upload(HttpServletRequest request,HttpServletResponse response) throws Exception{
		PrintWriter out = response.getWriter();
		
		List<String> fileNameList = new ArrayList<String>();
		
		if(ServletFileUpload.isMultipartContent(request)){
			FileItemFactory factory = new DiskFileItemFactory();
			ServletFileUpload fileUpload = new ServletFileUpload(factory);
			
			List<FileItem> items = fileUpload.parseRequest(request);
			
			Iterator<FileItem> it= items.iterator();
			int count = 0;
			while(it.hasNext()){
				FileItem item = it.next();
				String fileName = item.getName();
				fileName = fileName.substring(fileName.lastIndexOf("."));
				fileName = System.currentTimeMillis()+count+fileName;
				item.write(new File("../webapps"+request.getContextPath()+"/upload/"+fileName));
				fileNameList.add(fileName);
				count++;
			}
		}
		
		String allImgFileNameStr = Arrays.toString(fileNameList.toArray());
		out.print("<script>parent.postGoodsInfo('"+allImgFileNameStr+"')</script>");
		
	}
	
	
	@RequestMapping("/updateGoods")
	@ResponseBody
	public ResJSON updateGoods(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		
		String goodsId = request.getParameter("goodsId");
		String goodsName = request.getParameter("goodsName");
		String goodsPrice = request.getParameter("goodsPrice");
		String goodsNum = request.getParameter("goodsNum");
		String goodsSales = request.getParameter("goodsSales");
		String goodsDes = request.getParameter("goodsDes");
		String goodsTypeID = request.getParameter("goodsTypeID");
		String goodsImg = request.getParameter("goodsImg");
		String[] goodsImgArr = goodsImg.replace("[", "").replace("]", "").replaceAll(" ", "").split(",");
		String goodsUserId = user.getId();
		ResJSON json = new ResJSON();
		
		try {
			if (!goodsName.matches("^[A-Za-z0-9\u4E00-\u9Fa5\\-\\_ ]{3,200}$"))
				throw new SysException("商品名称只能包含3~200个中文、英文、数字、减号、下划线");
			if (!goodsPrice.matches("^[0-9\\.]{1,12}$"))
				throw new SysException("商品价格只能包含1~12个数字、小数点");
			if (!goodsNum.matches("^[0-9]{1,12}$"))
				throw new SysException("商品库存只能包含1~12个数字");
			if (!goodsSales.matches("^[0-9]{1,12}$"))
				throw new SysException("商品销量只能包含1~12个数字");
			if (!goodsDes.matches("^[A-Za-z0-9\u4E00-\u9Fa5\\-\\_，。！？； （）“‘]{3,200}$"))
				throw new SysException("商品描述只能包含3~200个中文、英文、数字、减号、下划线");
			List<GoodImg> goodImgList = new ArrayList<GoodImg>();
			goodsService.update(new Goods(goodsId,goodsName,goodsPrice,goodsNum,goodsSales,goodsDes,goodsUserId,goodsTypeID,goodImgList));
			
			goodsImgService.deleteByGoodsId(goodsId);
			for(String s : goodsImgArr){
				goodsImgService.insert(new GoodImg(s,goodsId));
			}
			
			json.setIsSuccess("true");
		} catch (SysException e) {
			
			json.setIsSuccess("false");
			
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/delGoods")
	@ResponseBody
	public ResJSON delete(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		String id = request.getParameter("goodsId");
		ResJSON json = new ResJSON();
		try {
			if(!id.matches("^[A-Za-z0-9]{32}$")){
				throw new SysException("id32位");
			}
			goodsImgService.deleteByGoodsId(id);
			int count = goodsService.delete(id);
			if(count<1){
				throw new SysException("删除商品失败，影响行数为0");
			}
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		
		return json;
	}
	
	
	@RequestMapping("/queryByGoodsId")
	@ResponseBody
	public Goods queryByGoodsId(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		
		Goods good = goodsService.queryByGoodsId(conditions);
		
		return good;
	}
	
	
	@RequestMapping("/updateSaleAndNum")
	@ResponseBody
	public ResJSON updateSaleAndNum(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		ResJSON json = new ResJSON();
		String goodsIdStr = request.getParameter("goodsIdStr");
		String[] goodsIdArr = goodsIdStr.split(",");
		try {
			for(int i=0;i<goodsIdArr.length;i++){
				String[] goodsIdArr2 = goodsIdArr[i].split("\\|");
				String goodsId = goodsIdArr2[0];
				String goodsNum = goodsIdArr2[1];
				Goods goods = goodsService.queryById(goodsId);
				String oldNum = goods.getGoodsNum();
				String oldSales = goods.getGoodsSales();
				int num = Integer.parseInt(oldNum)-Integer.parseInt(goodsNum);
				int sales = Integer.parseInt(oldSales)+Integer.parseInt(goodsNum);
				String numStr = String.valueOf(num);
				String salesStr = String.valueOf(sales);
				goodsService.updateSaleAndNum(new Goods(goodsId,numStr,salesStr));
				json.setIsSuccess("true");
			}
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	
	@RequestMapping("/queryHotSale")
	@ResponseBody
	public List<Goods> queryHotSale(HttpServletRequest request,HttpServletResponse response){
		List<Goods> goodsList = null;
		try {
			goodsList = goodsService.queryHotSale();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return goodsList;
	}
	
	
	
}
