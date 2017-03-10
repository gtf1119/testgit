package com.ggg.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;




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
import org.apache.ibatis.reflection.ExceptionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;




import com.ggg.pojo.Files;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.pojo.ResJSON;
import com.ggg.service.FileService;






@Controller
public class FileController {
	@Autowired
	private FileService fileService;
	
	@RequestMapping("/queryAllFile")
	@ResponseBody
	public GridJSON queryAllFile(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		 
		List<Files> rows = fileService.queryFile(conditions);
		int total = fileService.queryAllCount(conditions);
		
		GridJSON json = new GridJSON();
		json.setRows(rows);
		json.setTotal(total);
		return json;
	}
	

	@RequestMapping("/addFile")
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
	            fileService.insert(new Files(fileName,fileSize,format));
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

	/**
	 * 删除商品
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/delfiles")
	@ResponseBody
	public ResJSON delete(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 权限验证
	
		// 前台ajax发送过来的参数
		String id = request.getParameter("id");
		ResJSON json = new ResJSON();
		try {
			
			int count = fileService.delete(id);
			if (count<1)
				throw new Exception("商品删除失败，影响行数为0");
			// 设置json对象的isSuccess属性为true表示成功
			json.setIsSuccess("true");
		} catch (Exception e) {
			e.printStackTrace();
			// 设置json对象的isSuccess属性为false表示失败
			json.setIsSuccess("false");
			// 将自定义的异常信息设置到errMsg属性，返回到页面上
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	/**
	 * 编辑商品
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/updatefiles")
	@ResponseBody
	public ResJSON update(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 权限验证
		// 前台ajax发送过来的参数
		String id = request.getParameter("id");
		String fileName = request.getParameter("fileName");
		String format = request.getParameter("format");
		// 向前端返回的JSON对象
		ResJSON json = new ResJSON();
		try {
			// 把用户信息保存到数据库
			// 插入商品并返回商品ID
			fileService.update(new Files(id,fileName,format));
	
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
	
	
	@RequestMapping("/queryByformat")
	@ResponseBody
	public List<Files> queryByformat(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 权限验证
		// 前台ajax发送过来的参数
		String format = request.getParameter("format");
		
		// 向前端返回的JSON对象
		List<Files> filesList= null;
		try {
			// 把用户信息保存到数据库
			// 插入商品并返回商品ID
			filesList = fileService.queryByformat(format);
	
		} catch (Exception e) {
			
		}
		return filesList;
	}
	
	/**
	 * 上传商品图片
	 * 
	 * @param request
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping("/uploadfiles")

	public void uploadfiles(HttpServletRequest request, HttpServletResponse response) throws Exception {
		 response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		
		
		// 如果前端提交的数据是multipart
		if (ServletFileUpload.isMultipartContent(request)) {
			// 文件工厂
			FileItemFactory factory = new DiskFileItemFactory();
			// 根据文件工厂，实例化文件上传类，该类是官方提供的专门在servlet中接收文件上传的类
			ServletFileUpload fileUpload = new ServletFileUpload(factory);
			// 把前端请求中的文件存放到集合中
			List<FileItem> items = fileUpload.parseRequest(request);
			// 获取迭代器
			FileItem item = items.get(0);
			// 遍历上传的文件
			
			
				String fileName = item.getName();
				String fileNames=fileName.substring(0,fileName.lastIndexOf("."));
				
				long fileSize = item.getSize();
				// 获取文件后缀名
				String format = fileName.substring(fileName.lastIndexOf(".")+1);
				
				// 把文件写入到项目中webroot下的upload文件夹
				item.write(new File("../webapps" + request.getContextPath() + "/data/" + fileName));
				// 将文件名添加到文件名集合
				
			
			String allImgFileNameStr = fileNames + "," + fileSize + "," + format;
			out.print("<script>parent.postFilesInfo('" + allImgFileNameStr + "')</script>");
		}
	}
	@RequestMapping("/downFile")
	 public HttpServletResponse download(String path, HttpServletResponse response) {
        try {
            // path是指欲下载的文件的路径。
            File file = new File(path);
            // 取得文件名。
            String filename = file.getName();
            // 取得文件的后缀名。
            String ext = filename.substring(filename.lastIndexOf(".") + 1).toUpperCase();

            // 以流的形式下载文件。
            InputStream fis = new BufferedInputStream(new FileInputStream(path));
            byte[] buffer = new byte[fis.available()];
            fis.read(buffer);
            fis.close();
            // 清空response
            response.reset();
            // 设置response的Header
            response.addHeader("Content-Disposition", "attachment;filename=" + new String(filename.getBytes()));
            response.addHeader("Content-Length", "" + file.length());
            OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
            response.setContentType("application/octet-stream");
            toClient.write(buffer);
            toClient.flush();
            toClient.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return response;
    }
}
