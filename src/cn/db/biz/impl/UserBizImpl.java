package cn.db.biz.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.db.biz.IUserBiz;
import cn.db.mapper.UserMapper;
import cn.db.pojo.User;

@Service("userBiz")
public class UserBizImpl implements IUserBiz{
	@Autowired
	private UserMapper userMapper;
	@Override
	public User checklogin(User user) {
		if(user==null||user.getPwd()==null||user.getPwd().equals("")){
			return null;
		}
		return userMapper.checklogin(user);
	}
	@Override
	public void saveUser(User user) {
		userMapper.doSaveUser(user);
	}

}
