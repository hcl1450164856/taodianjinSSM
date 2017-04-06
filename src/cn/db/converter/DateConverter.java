package cn.db.converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.core.convert.converter.Converter;

/**
 * 日期转换器
 * @author hanchunlong
 *
 */
public class DateConverter implements Converter<String, Date>{

	@Override
	public Date convert(String source) {
		Date date = new Date();
		SimpleDateFormat format = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
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
					System.out.println("日期格式不合法！");
				}
			}
		}
		return null;
	}
}
