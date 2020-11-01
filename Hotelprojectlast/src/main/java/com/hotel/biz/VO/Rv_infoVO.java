package com.hotel.biz.VO;

import java.util.Date;

public class Rv_infoVO {

	private int rv_num; // 예약 번호                
	private int rv_pcount; //인원수             
	private int r_num; // 객실 번호                
	private int  m_num; // 회원 번호 
	
	private String rv_indate; //입실일        12일 수정 ) 일단 스트링
	private String rv_outdate; //퇴실일      
	
	private Date rv_date; //예약일     

	public int getRv_num() {
		return rv_num;
	}

	public void setRv_num(int rv_num) {
		this.rv_num = rv_num;
	}

	public int getRv_pcount() {
		return rv_pcount;
	}

	public void setRv_pcount(int rv_pcount) {
		this.rv_pcount = rv_pcount;
	}

	public int getR_num() {
		return r_num;
	}

	public void setR_num(int r_num) {
		this.r_num = r_num;
	}

	public int getM_num() {
		return m_num;
	}

	public void setM_num(int m_num) {
		this.m_num = m_num;
	}

	public String getRv_indate() {
		return rv_indate;
	}

	public void setRv_indate(String rv_indate) {
		this.rv_indate = rv_indate;
	}

	public String getRv_outdate() {
		return rv_outdate;
	}

	public void setRv_outdate(String rv_outdate) {
		this.rv_outdate = rv_outdate;
	}

	public Date getRv_date() {
		return rv_date;
	}

	public void setRv_date(Date rv_date) {
		this.rv_date = rv_date;
	}

	@Override
	public String toString() {
		return "rv_info [rv_num=" + rv_num + ", rv_pcount=" + rv_pcount + ", r_num=" + r_num + ", m_num=" + m_num
				+ ", rv_indate=" + rv_indate + ", rv_outdate=" + rv_outdate + ", rv_date=" + rv_date + "]";
	}
	
		
	
	
}
