package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.enumeration.CancelableStatus;
import com.example.youeatieat.enumeration.DeliveryStatus;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(CancelableStatus.class)
public class CancelableHandler implements TypeHandler<CancelableStatus> {

    @Override
    public void setParameter(PreparedStatement ps, int i, CancelableStatus parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public CancelableStatus getResult(ResultSet rs, String columnName) throws SQLException {
        switch (rs.getString(columnName)) {
            case "able":
                return CancelableStatus.ABLE;
            case "unable":
                return CancelableStatus.UNABLE;
        }
        return null;
    }

    @Override
    public CancelableStatus getResult(ResultSet rs, int columnIndex) throws SQLException {
        switch (rs.getString(columnIndex)) {
            case "able":
                return CancelableStatus.ABLE;
            case "unable":
                return CancelableStatus.UNABLE;
        }
        return null;
    }

    @Override
    public CancelableStatus getResult(CallableStatement cs, int columnIndex) throws SQLException {
        switch (cs.getString(columnIndex)) {
            case "able":
                return CancelableStatus.ABLE;
            case "unable":
                return CancelableStatus.UNABLE;
        }
        return null;
    }
}
