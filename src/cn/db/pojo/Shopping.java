package cn.db.pojo;

import java.io.Serializable;

public class Shopping implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private Itemdetail itemdetail;
	private User user;

	public Shopping() {
	}

	public Shopping(Integer id, Itemdetail itemdetail, User user) {
		this.id = id;
		this.itemdetail = itemdetail;
		this.user = user;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
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

}
