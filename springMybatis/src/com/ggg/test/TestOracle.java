package com.ggg.test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TestOracle {
	public static void main(String[] args) {
		// 1.加载驱动
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			System.out.println("驱动程序加载成功");
		} catch (ClassNotFoundException e) {
			System.out.println("驱动程序加载失败");
			e.printStackTrace();
		}

		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;

		// 2.获取数据库连接，存放到conn变量中
		try {
			conn = DriverManager.getConnection("jdbc:oracle:thin:@10.0.10.143:1521:NJWANGBO", "AMDIN", "123456");
			System.out.println("获取数据库连接成功");
		} catch (SQLException e) {
			System.out.println("数据库连接失败");
			e.printStackTrace();
		}

		// 3.查询数据库并获取结果
		try {
			String sql = "SELECT * FROM T_USER";
			stmt = conn.prepareStatement(sql);
			rs = stmt.executeQuery();
			while (rs.next()) {
				System.out.println(rs.getString("ID") + "," + rs.getString("NAME") + "," + rs.getString("PWD"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
