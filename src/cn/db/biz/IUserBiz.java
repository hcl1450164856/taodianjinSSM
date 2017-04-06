package cn.db.biz;

import cn.db.pojo.User;

public interface IUserBiz {
	public User checklogin(User user);
	public void saveUser(User user);
}
