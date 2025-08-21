package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.enumeration.AnswerStatus;
import com.example.youeatieat.enumeration.Status;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(AnswerStatus.class)
public class AnswerStatusHandler implements TypeHandler<AnswerStatus> {

    @Override
    public void setParameter(PreparedStatement ps, int i, AnswerStatus parameter, JdbcType jdbcType) throws SQLException {
            ps.setString(i, parameter.getValue());
    }

    @Override
    public AnswerStatus getResult(ResultSet rs, String columnName) throws SQLException {
        return switch (rs.getString(columnName)) {
            case "waiting" -> AnswerStatus.WAITING;
            case "answered" -> AnswerStatus.ANSWERED;
            default -> null;
        };
    }

    @Override
    public AnswerStatus getResult(ResultSet rs, int columnIndex) throws SQLException {
        return switch (rs.getString(columnIndex)) {
            case "waiting" -> AnswerStatus.WAITING;
            case "answered" -> AnswerStatus.ANSWERED;
            default -> null;
        };
    }

    @Override
    public AnswerStatus getResult(CallableStatement cs, int columnIndex) throws SQLException {
        return switch (cs.getString(columnIndex)) {
            case "waiting" -> AnswerStatus.WAITING;
            case "answered" -> AnswerStatus.ANSWERED;
            default -> null;
        };
    }
}
