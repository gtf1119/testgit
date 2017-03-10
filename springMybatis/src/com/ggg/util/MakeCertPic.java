package com.ggg.util;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Random;

import javax.imageio.ImageIO;
/**
 * 验证码
 * @author njwb
 *
 */
public class MakeCertPic {

	public static char[] charArray={ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J',
		'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

	/**
	 * 
	 * @param width
	 * @param height
	 * @param os
	 * @return
	 */
	public static String getCertPic(int width,int height,OutputStream os){
		BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
		Graphics g = image.getGraphics();
		
		g.setColor(new Color(0xEAEAEA));
		g.fillRect(0, 0, width, height);
		g.setColor(Color.black);
		
		StringBuffer sb = new StringBuffer();
		for(int i=0;i<4;i++){
			int r = (int)(Math.random()*charArray.length);
			sb.append(charArray[r]);
		}
		
		String certPic = sb.toString();
		
		g.setFont(new Font("Arial",Font.PLAIN,22));
		g.drawString(certPic.substring(0, 1), 8, 25);
		g.drawString(certPic.substring(1, 2), 30, 23);
		g.drawString(certPic.substring(2, 3), 50, 29);
		g.drawString(certPic.substring(3, 4), 80, 31);
		
		Random random = new Random();
		for(int i=0;i<100;i++){
			int x = random.nextInt(width);
			int y = random.nextInt(height);
			g.drawOval(x, y, 1, 1);
		}
		
		g.dispose();
		
		try {
			ImageIO.write(image, "JPEG", os);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return sb.toString();
	}
	
	public static void main(String[] args) throws FileNotFoundException {
		MakeCertPic.getCertPic(100, 40, new FileOutputStream(new File("D://test1.jpeg")));
	}

}
