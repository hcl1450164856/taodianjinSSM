package cn.db.pojo;

import java.io.Serializable;

public class Jiexiao implements Serializable {
	private static final long serialVersionUID = 1L;
	private int itemid;
	private int uid;
	private String uidmessage;
	private String uidpic;

	public Jiexiao() {
	}

	public Jiexiao(int itemid, int uid) {
		this.itemid = itemid;
		this.uid = uid;
	}

	public Jiexiao(int itemid, int uid, String uidmessage, String uidpic) {
		this.itemid = itemid;
		this.uid = uid;
		this.uidmessage = uidmessage;
		this.uidpic = uidpic;
	}

	public int getItemid() {
		return this.itemid;
	}

	public void setItemid(int itemid) {
		this.itemid = itemid;
	}

	public int getUid() {
		return this.uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getUidmessage() {
		return this.uidmessage;
	}

	public void setUidmessage(String uidmessage) {
		this.uidmessage = uidmessage;
	}

	public String getUidpic() {
		return this.uidpic;
	}

	public void setUidpic(String uidpic) {
		this.uidpic = uidpic;
	}

}
