var userGrid = {
	init : function(args){
		userGrid.build(args);
	},	
	build : function(args){
		var table = $("<table id='user' cellspacing='0' cellpadding='0'></table>").appendTo(args.rendTo);
		var thead = $("<thead></thead>").appendTo(table);
		$(args.column).each(function(i2,u2){
			$("<th class='gridTD'>"+u2.name+"</th>").appendTo(thead);
		});
		$(args.dataSource).each(function(i,u){
			var tr = $("<tr align='center'></tr>").appendTo(table);
			$(args.column).each(function(i2,u2){
				$("<td class='gridTD'>"+u[u2.alias]+"</td>").appendTo(tr);
			});
		});
		
		var footer = $("<div id='footer'></div>").appendTo(args.rendTo);
		var con = $("<div id='con'></div>").appendTo(footer);
		$("<span class='prev'>上一页</span>").appendTo(con);
		var ul = $("<ul id='column'></ul>").appendTo(con);
		$("<span class='next'>下一页</span>").appendTo(con);
		
		for(var i=0;i<args.liNum;i++){
			$("<li class='flipLi'>"+(i+1)+"</li>").appendTo(ul);
		}
		
		var selDiv = $("<div id='selDiv'></div>").appendTo(con);
		$("<span>第</span>").appendTo(selDiv);
		var coluSel = $("<select id='coluSel'></select>").appendTo(selDiv);
		$("<span>页</span>").appendTo(selDiv);
		
		
		$(args.optionNum).each(function(i,o){
			$("<option value='"+o.value+"'>"+o.num+"</option>").appendTo(coluSel);
		});
	}
};