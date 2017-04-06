package cn.db.test;

import java.util.Date;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.db.biz.IUserBiz;
import cn.db.pojo.User;

public class TestUserService {
	private static IUserBiz userBiz;
	static{
		ApplicationContext context = new ClassPathXmlApplicationContext("classpath:spring/applicationContext.xml");
		userBiz = (IUserBiz) context.getBean("userBiz");
	}
	
	@Test
	public void testChecklogin(){
		System.out.println(userBiz);
		
		User user = new User();
		//user.setId(1001);
		//user.setEmail("zhangsan@qq.com");
		user.setPhone("123456");
		user.setPwd("123");
		User u = userBiz.checklogin(user);
		System.out.println(u);
	}
	@Test
	public void testSaveUser(){
		System.out.println(userBiz);
		User user = new User();
		user.setEmail("wangwu@1262.com");
		//user.setName("ÍõÎå");
		user.setCdate(new Date());
		user.setPhone("1234233");
		user.setPwd("123");
		userBiz.saveUser(user);
	}
}
