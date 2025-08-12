package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.common.enumeration.Subscription;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(Subscription.class)
public class SubscriptionHandler implements TypeHandler<Subscription> {
    @Override
    public void setParameter(PreparedStatement ps, int i, Subscription parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public Subscription getResult(ResultSet rs, String columnName) throws SQLException {
        return switch (rs.getString(columnName)){
            case "active" -> Subscription.ACTIVE;
            case "cancelled" -> Subscription.CANCELLED;
            default -> null;
        };
    }

    @Override
    public Subscription getResult(ResultSet rs, int columnIndex) throws SQLException {
        return switch (rs.getString(columnIndex)){
            case "active" -> Subscription.ACTIVE;
            case "cancelled" -> Subscription.CANCELLED;
            default -> null;
        };
    }

    @Override
    public Subscription getResult(CallableStatement cs, int columnIndex) throws SQLException {
        return switch (cs.getString(columnIndex)){
            case "active" -> Subscription.ACTIVE;
            case "cancelled" -> Subscription.CANCELLED;
            default -> null;
        };
    }
}
