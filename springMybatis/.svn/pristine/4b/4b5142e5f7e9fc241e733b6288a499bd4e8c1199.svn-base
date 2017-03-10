package com.ggg.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggg.exception.SysException;
import com.ggg.pojo.Goods;
import com.ggg.pojo.GridCondition;
import com.ggg.pojo.GridJSON;
import com.ggg.pojo.ResJSON;
import com.ggg.pojo.User;
import com.ggg.service.GoodsService;
import com.ggg.service.UserService;
import com.ggg.util.MakeCertPic;
import com.ggg.util.MySessionListener;

@Controller
public class UserController {
	@Autowired
	private UserService userService;
	
	@Autowired
	private GoodsService goodsService;
	
	@RequestMapping("/getAllUserByPage")
	@ResponseBody
	public GridJSON queryAllUser(HttpServletRequest request,HttpServletResponse reponse) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new GridJSON();
		}
		
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		GridJSON json = new GridJSON();
		List<User> rows = new ArrayList<User>();
		int total = 0;
		if(user.getLoginname().equals("admin")){
			rows = userService.queryAll(conditions);
			total = userService.queryAllCount(conditions);
			json.setTotal(total);
			json.setRows(rows);
		}else{
			User activeUser = userService.queryUserById(user.getId());
			rows.add(activeUser);
			json.setTotal(1);
			json.setRows(rows);
		}
		
		System.out.println(user.getCreatetime());
		
		return json;
	}
	
	@RequestMapping("/getAllUser")
	@ResponseBody
	public GridJSON queryAll(HttpServletRequest request,HttpServletResponse reponse) throws Exception{
		String condition = request.getParameter("condition");
		String pageNumStr = request.getParameter("pageNum");
		String pageSizeStr = request.getParameter("pageSize");
		
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new GridJSON();
		}
		
		
		GridCondition conditions = new GridCondition();
		conditions.setCondition(condition);
		conditions.setPageNum(pageNumStr);
		conditions.setPageSize(pageSizeStr);
		GridJSON json = new GridJSON();
		List<User> rows = new ArrayList<User>();
		int total = 0;
		
			rows = userService.queryAll(conditions);
			total = userService.queryAllCount(conditions);
			json.setTotal(total);
			json.setRows(rows);
		
		
		System.out.println(user.getCreatetime());
		
		return json;
	}
	
	@RequestMapping("/regist")
	@ResponseBody
	public ResJSON addUser(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String loginname = request.getParameter("loginName");
		String username = request.getParameter("userName");
		String password = request.getParameter("passWord");
		String sexNum = request.getParameter("sexNum");
		int sexnum = Integer.parseInt(sexNum);
		String sex = request.getParameter("sex");
		String userImg = request.getParameter("txImg");
		String userImgStr = null;
		if(userImg != null){
			userImgStr = userImg.replace("[", "").replace("]", "").replaceAll(" ", "");
		}
		
		ResJSON json = new ResJSON();
		try {
			if(!loginname.matches("^[A-Za-z0-9\\-\\_]{3,20}$")){
				throw new SysException("用户名只能包含3-20个英文、数字、减号、下划线");
			}
			if(!username.matches("^[A-Za-z0-9\u4E00-\u9Fa5\\-\\_]{2,20}$")){
				throw new SysException("用户名只能包含3-20个中文、英文、数字、减号、下划线");
			}
			
			if(!password.matches("^[A-Za-z0-9\\-\\_]{6,20}$")){
				throw new SysException("密码只能包含6~20个英文、数字、减号、下划线");
			}
			
			userService.addUser(new User(loginname,username,password,sexnum,sex,userImgStr));
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/loginUser")
	@ResponseBody
	public ResJSON loginUser(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String loginname = request.getParameter("loginName");
		String password = request.getParameter("passWord");
		String code = request.getParameter("code");
		ResJSON json = new ResJSON();
		
		try {
			HttpSession session = request.getSession();
			String serverCode = (String) session.getAttribute("code");
			if(!code.equalsIgnoreCase(serverCode)){
				throw new SysException("验证码错误");
			}
			
			User user = userService.queryUserByLoginNameAndPwd(new User(loginname,password));
			session.setAttribute("user", user);
//			ServletContext application = session.getServletContext();
//			
//			Set<User> users = (Set<User>) application.getAttribute("users");
//			if(users != null && !users.isEmpty()){
//				users.add(user);
//			}else{
//				users = new HashSet<User>();
//				users.add(user);
//			}
//			application.setAttribute("users", users);
			Date date = new Date();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			user.setLogintime(sdf.format(date));
			MySessionListener.getActiveUsers().put(user.getId(), user);
			if(user.getLoginname().equals("admin")){
				json.setInfo("admin");
			}
			
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	
	@RequestMapping("/getCert")
	public void getCert(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		OutputStream os = response.getOutputStream();
		String code = MakeCertPic.getCertPic(100, 32, os);
		HttpSession session = request.getSession();
		session.setAttribute("code", code);
		os.flush();
		os.close();
		
		
	}
	
	@RequestMapping("/exit")
	@ResponseBody
	public ResJSON exit(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		session.invalidate();
		ResJSON json = new ResJSON();
		json.setIsSuccess("true");
		return json;
	}
	
	
	@RequestMapping("/updateUser")
	@ResponseBody
	public ResJSON updateUser(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		
		String id = request.getParameter("userId");
		String loginname = request.getParameter("loginName");
		String username = request.getParameter("userName");
		String password = request.getParameter("passWord");
		String sexNum = request.getParameter("sexNum");
		int sexnum = Integer.parseInt(sexNum);
		String sex = request.getParameter("sex");
		String userImg = request.getParameter("txImg");
		String userImgStr = userImg.replace("[", "").replace("]", "").replaceAll(" ", "");
		String autoGraph = request.getParameter("autoGraph");
		ResJSON json = new ResJSON();
		
		try {
			if(!id.matches("^[A-Za-z0-9]{32}$")){
				throw new SysException("用户名只能有32位");
			}
			if(!loginname.matches("^[A-Za-z0-9\\-\\_]{3,20}$")){
				throw new SysException("用户名只能包含3-20个英文、数字、减号、下划线");
			}
			if(!username.matches("^[A-Za-z0-9\u4E00-\u9Fa5\\-\\_]{2,20}$")){
				throw new SysException("用户名只能包含3-20个中文、英文、数字、减号、下划线");
			}
			
			if(!password.matches("^[A-Za-z0-9\\-\\_]{6,20}$")){
				throw new SysException("密码只能包含6~20个英文、数字、减号、下划线");
			}
			String oldPwd = userService.queryUserById(id).getPwd();
			userService.updateUser(new User(id,loginname,username,password,sexnum,sex,userImgStr,autoGraph));
			
			if(!oldPwd.equals(password) && !user.getLoginname().equals("admin")){
				json.setInfo("pwdHasChange");
				session.setAttribute("user", null);
			}
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	@RequestMapping("/delUser")
	@ResponseBody
	public ResJSON delUser(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		
		String id = request.getParameter("userId");
		ResJSON json = new ResJSON();
		try {
			if(!id.matches("^[A-Za-z0-9]{32}$")){
				throw new SysException("id32位");
			}
			int count = userService.delete(id);
			
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	

	@RequestMapping("/updateMoney")
	@ResponseBody
	public ResJSON updateMoney(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		ResJSON json = new ResJSON();
		String userid = user.getId();
		String payMoney = request.getParameter("payMoney");
		String postInfo = request.getParameter("postInfo");
		String[] postInfoArr = postInfo.split(",");
		try {
			
			User user1 = userService.queryUserById(userid);
			float oldMoney = user1.getMoney();
			float money = oldMoney-Float.parseFloat(payMoney);
			if(money<0){
				json.setInfo("余额不足，请及时充值");
				return json;
			}else{
				userService.updateMoney(new User(userid,money));
				for(int i=0;i<postInfoArr.length;i++){
					String[] infoArr = postInfoArr[i].split("\\|");
					String goodsId = infoArr[0];
					String sellerId = infoArr[1];
					String num = infoArr[2];
					Goods goods = goodsService.queryById(goodsId);
					String price = goods.getGoodsPrice();
					float getMoney= Float.parseFloat(price) * Float.parseFloat(num);
					User seller = userService.queryUserById(sellerId);
					float finalGetMoney = seller.getMoney()+getMoney;
					userService.updateMoney(new User(sellerId,finalGetMoney));
			}
			
			}
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	
	@RequestMapping("topUpMoney")
	@ResponseBody
	private ResJSON topUpMoney(HttpServletRequest request,HttpServletResponse response){
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return new ResJSON();
		}
		ResJSON json = new ResJSON();
		String userid = user.getId();
		
		String topUpMoney = request.getParameter("topUpMoney");
		try {
			User user1 = userService.queryUserById(userid);
			float oldMoney = user1.getMoney();
			float money = oldMoney + Float.parseFloat(topUpMoney);
			userService.updateMoney(new User(userid,money));
			json.setIsSuccess("true");
		} catch (Exception e) {
			json.setIsSuccess("false");
			json.setErrMsg(e.getMessage());
		}
		return json;
	}
	
	
	@RequestMapping("/getActiveUsers")
	@ResponseBody
	public List<User> getActiveUsers(HttpServletRequest request,HttpServletResponse response){
		List<User> list = new ArrayList<User>();
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user == null){
			return list;
		}
		HashMap<String,User> map = MySessionListener.getActiveUsers();
		for(String key : map.keySet()){
			list.add(map.get(key));
		}
		return list;
	}
	
	
	@RequestMapping("/queryUserById")
	@ResponseBody
	public User queryUserById(HttpServletRequest request,HttpServletResponse response) throws Exception{
		HttpSession session = request.getSession();
		User user = (User)session.getAttribute("user");
		if(user ==null){
			return new User();
		}
		String userId = user.getId();
		User queryUser = userService.queryUserById(userId);
		return queryUser;
	}
}
