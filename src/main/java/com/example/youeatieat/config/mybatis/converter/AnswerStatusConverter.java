package com.example.youeatieat.config.mybatis.converter;

import com.example.youeatieat.enumeration.AnswerStatus;
import com.example.youeatieat.enumeration.Status;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class AnswerStatusConverter implements Converter<String, AnswerStatus> {
    @Override
    public AnswerStatus convert(String source) {
        return AnswerStatus.getAnsweredStatusFromValue(source);
    }
}
