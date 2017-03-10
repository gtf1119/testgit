$(function(){
	

	
	//生成下拉框
	select.init({
		rendTo : "#select",
		mapping:{
			key : "key",
			value : "value"
		},
		dataSource : "data/dataSource.txt",
		defaultSelected:"-1",
		defaultItem : [{
			key : "-1",
			value:"全部"
		}]
	});
	

	

		//生成表格前将原先的表格删除
		if($("#user")){
			$("#user").remove();
		}
		
		userGrid.init({
			rendTo : "#container",
			column : [{
				name : "用户",
				alias : "name"
			},
			{
				name : "年龄",
				alias : "age"
			},
			{
				name : "密码",
				alias : "password"
			},
			{
				name : "性别",
				alias : "sex"
			}],
			
			dataSource : [{
				name : "小明",
				age : 18,
				password : "123",
				sex : "男",
			},
			{
				name : "小红",
				age : 17,
				password : "345",
				sex : "女",
			},
			{
				name : "小王",
				age : 20,
				password : "789",
				sex : "男",
			}],
			liNum : 6,
			optionNum : [{
				value : -1,
				num : 1
			},
			{
				value : 2,
				num : 5
			},
			{
				value : 3,
				num : 10
			},
			{
				value : 4,
				num : 15
			}]
		});
	
	
});