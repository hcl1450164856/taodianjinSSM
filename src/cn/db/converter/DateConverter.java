package cn.db.converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

/**
 * ����ת����
 * @author hanchunlong
 *
 */
public class DateConverter implements Converter<String, Date>{

	@Override
	public Date convert(String source) {
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy��MM��dd�� HH:mm:ss");
		try {
			date = format.parse(source);
			return date;
		} catch (ParseException e) {
			format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			try {
				date = format.parse(source);
				return date;
			} catch (ParseException e1) {
				format = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
				try {
					date = format.parse(source);
					return date;
				} catch (ParseException e3) {
					System.out.println("���ڸ�ʽ���Ϸ���");
				}
			}
		}
		return null;
	}
}
