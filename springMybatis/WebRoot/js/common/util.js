var util = {
	cookie : {
		/**
		 * 创建cookie
		 * 
		 * @param {String}
		 *            name 名称
		 * @param {String}
		 *            value 值
		 * @return {Null}
		 */
		set : function(name, value) {
			var Days = 7;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
		},
		/**
		 * 获取cookie
		 * 
		 * @param {String}
		 *            name 名称
		 * @returns {String} 返回该名称对应的值
		 */
		get : function(name) {
			var arr = document.cookie.match(new RegExp("(^|)" + name + "=([^;]*)(;|$)"));
			if (arr != null)
				return unescape(arr[2]);
			return null;
		},
		setTemporary : function(name,value){
			document.cookie = name + "=" + escape(value);
		}
	},
	string : {
		replaceAll : function(s1,s2,s3){
			return (s1+"").replace(new RegExp(s2,"gm"),s3);
		},
		
		validate : function(str,type){
			var reg = "";
			var rules = {
				c : "\\u4E00-\\u9Fa5",
				e : "A-Za-z",
				n : "0-9",
				m : "\\-",
				_ : "\\_",
				p : "\\.",
				k : " "
			};
			
			//检查参数
			if(str == ""||type==""||str==null||type==null){
				return false;
			}
			
			for(var rule in rules){
				if(type.indexOf(rule) > -1){
				
					reg += rules[rule];
				}
			}
			var regExp = new RegExp(eval("/^["+reg+"]*$/"));
			return regExp.test(str);
		}
	},
	isLTIE10 : function(){
		return $.browser.msie && $.browser.version !="10.0";
	},
	isIE : function(){
		if(navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("rv:11")>-1){
			return true;
		}
	}
};