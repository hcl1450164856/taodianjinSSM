package cn.db.pojo;

import java.io.Serializable;
import java.util.Date;

public class Itemdetail implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private int times;
	private int currnum;
	private Date begintime;
	private Date endtime;

	public Itemdetail() {
	}

	public Itemdetail(int times, int currnum) {
		this.times = times;
		this.currnum = currnum;
	}

	public Itemdetail(int times, int currnum, Date begintime, Date endtime) {
		this.times = times;
		this.currnum = currnum;
		this.begintime = begintime;
		this.endtime = endtime;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getTimes() {
		return this.times;
	}

	public void setTimes(int times) {
		this.times = times;
	}

	public int getCurrnum() {
		return this.currnum;
	}

	public void setCurrnum(int currnum) {
		this.currnum = currnum;
	}

	public Date getBegintime() {
		return this.begintime;
	}

	public void setBegintime(Date begintime) {
		this.begintime = begintime;
	}

	public Date getEndtime() {
		return this.endtime;
	}

	public void setEndtime(Date endtime) {
		this.endtime = endtime;
	}

}
