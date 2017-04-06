package cn.db.pojo;

import java.io.Serializable;
public class Kind implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer kid;
	private String kname;
	private Integer fid;
	private int level;

	public Kind() {
	}

	public Kind(String kname, int level) {
		this.kname = kname;
		this.level = level;
	}

	public Kind(String kname, Integer fid, int level) {
		this.kname = kname;
		this.fid = fid;
		this.level = level;
	}

	public Integer getKid() {
		return this.kid;
	}

	public void setKid(Integer kid) {
		this.kid = kid;
	}

	public String getKname() {
		return this.kname;
	}

	public void setKname(String kname) {
		this.kname = kname;
	}

	public Integer getFid() {
		return this.fid;
	}

	public void setFid(Integer fid) {
		this.fid = fid;
	}

	public int getLevel() {
		return this.level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

}
