package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.enumeration.DeliveryStatus;
import com.example.youeatieat.enumeration.ProductCategory;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(DeliveryStatus.class)
public class DeliveryStatusHandler implements TypeHandler<DeliveryStatus> {

    @Override
    public void setParameter(PreparedStatement ps, int i, DeliveryStatus parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public DeliveryStatus getResult(ResultSet rs, String columnName) throws SQLException {
        switch (rs.getString(columnName)) {
            case "completed":
                return DeliveryStatus.COMPLETED;
            case "wait":
                return DeliveryStatus.WAIT;
        }
        return null;
    }

    @Override
    public DeliveryStatus getResult(ResultSet rs, int columnIndex) throws SQLException {
        switch (rs.getString(columnIndex)) {
            case "completed":
                return DeliveryStatus.COMPLETED;
            case "wait":
                return DeliveryStatus.WAIT;
        }
        return null;
    }

    @Override
    public DeliveryStatus getResult(CallableStatement cs, int columnIndex) throws SQLException {
        switch (cs.getString(columnIndex)) {
            case "completed":
                return DeliveryStatus.COMPLETED;
            case "wait":
                return DeliveryStatus.WAIT;
        }
        return null;
    }
}
