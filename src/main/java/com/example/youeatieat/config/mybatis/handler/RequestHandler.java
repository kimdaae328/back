package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.enumeration.Request;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(Request.class)
public class RequestHandler implements TypeHandler<Request> {
    @Override
    public void setParameter(PreparedStatement ps, int i, Request parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public Request getResult(ResultSet rs, String columnName) throws SQLException {
        return switch (rs.getString(columnName)){
            case "done" -> Request.DONE;
            case "cancel" -> Request.CANCEL;
            default -> null;
        };
    }

    @Override
    public Request getResult(ResultSet rs, int columnIndex) throws SQLException {
        return switch (rs.getString(columnIndex)){
            case "done" -> Request.DONE;
            case "cancel" -> Request.CANCEL;
            default -> null;
        };
    }

    @Override
    public Request getResult(CallableStatement cs, int columnIndex) throws SQLException {
        return switch (cs.getString(columnIndex)){
            case "done" -> Request.DONE;
            case "cancel" -> Request.CANCEL;
            default -> null;
        };
    }
}
