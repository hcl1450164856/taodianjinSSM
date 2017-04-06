package cn.db.pojo;

import java.io.Serializable;
import java.util.Date;

public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String email;
	private String name;
	private String pwd;
	private String phone;
	private Date cdate;
	private String address;

	public User() {
	}

	public User(String email, String pwd, String phone, Date cdate) {
		this.email = email;
		this.pwd = pwd;
		this.phone = phone;
		this.cdate = cdate;
	}

	public User(Integer id, String email, String name, String pwd, String phone, Date cdate, String address) {
		super();
		this.id = id;
		this.email = email;
		this.name = name;
		this.pwd = pwd;
		this.phone = phone;
		this.cdate = cdate;
		this.address = address;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPwd() {
		return this.pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Date getCdate() {
		return this.cdate;
	}

	public void setCdate(Date cdate) {
		this.cdate = cdate;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
