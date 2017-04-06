package cn.db.pojo;

import java.io.Serializable;

public class Item implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer itemid;
	private Kind kind;
	private String itemname;
	private int neednum;
	private float price;
	private String pic;
	private String pic2;
	private String pic3;
	private String pic4;
	private String detail;
	private float oneprice;

	public Item() {
	}

	public Item(Kind kind, String itemname, int neednum, float price, String pic, float oneprice) {
		this.kind = kind;
		this.itemname = itemname;
		this.neednum = neednum;
		this.price = price;
		this.pic = pic;
		this.oneprice = oneprice;
	}

	public Item(Kind kind, String itemname, int neednum, float price, String pic, String pic2, String pic3, String pic4,
			String detail, float oneprice) {
		this.kind = kind;
		this.itemname = itemname;
		this.neednum = neednum;
		this.price = price;
		this.pic = pic;
		this.pic2 = pic2;
		this.pic3 = pic3;
		this.pic4 = pic4;
		this.detail = detail;
		this.oneprice = oneprice;
	}

	public Integer getItemid() {
		return this.itemid;
	}

	public void setItemid(Integer itemid) {
		this.itemid = itemid;
	}

	public Kind getKind() {
		return this.kind;
	}

	public void setKind(Kind kind) {
		this.kind = kind;
	}

	public String getItemname() {
		return this.itemname;
	}

	public void setItemname(String itemname) {
		this.itemname = itemname;
	}

	public int getNeednum() {
		return this.neednum;
	}

	public void setNeednum(int neednum) {
		this.neednum = neednum;
	}

	public float getPrice() {
		return this.price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getPic() {
		return this.pic;
	}

	public void setPic(String pic) {
		this.pic = pic;
	}

	public String getPic2() {
		return this.pic2;
	}

	public void setPic2(String pic2) {
		this.pic2 = pic2;
	}

	public String getPic3() {
		return this.pic3;
	}

	public void setPic3(String pic3) {
		this.pic3 = pic3;
	}

	public String getPic4() {
		return this.pic4;
	}

	public void setPic4(String pic4) {
		this.pic4 = pic4;
	}

	public String getDetail() {
		return this.detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public float getOneprice() {
		return this.oneprice;
	}

	public void setOneprice(float oneprice) {
		this.oneprice = oneprice;
	}

}
