package cn.db.mapper;

import cn.db.pojo.User;

public interface UserMapper{
	public User checklogin(User user);
	public void doSaveUser(User user);
}
