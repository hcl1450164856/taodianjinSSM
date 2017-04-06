package cn.db.pojo;

import java.io.Serializable;
import java.util.Date;
public class Orders implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer oid;
	private Itemdetail itemdetail;
	private User user;
	private Date ctime;
	private int buytimes;

	public Orders() {
	}

	public Orders(Itemdetail itemdetail, User user, Date ctime, int buytimes) {
		this.itemdetail = itemdetail;
		this.user = user;
		this.ctime = ctime;
		this.buytimes = buytimes;
	}

	public Integer getOid() {
		return this.oid;
	}

	public void setOid(Integer oid) {
		this.oid = oid;
	}

	public Itemdetail getItemdetail() {
		return this.itemdetail;
	}

	public void setItemdetail(Itemdetail itemdetail) {
		this.itemdetail = itemdetail;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getCtime() {
		return this.ctime;
	}

	public void setCtime(Date ctime) {
		this.ctime = ctime;
	}

	public int getBuytimes() {
		return this.buytimes;
	}

	public void setBuytimes(int buytimes) {
		this.buytimes = buytimes;
	}

}
