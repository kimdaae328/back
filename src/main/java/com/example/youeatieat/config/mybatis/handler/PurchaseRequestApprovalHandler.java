package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.enumeration.PurchaseRequestApproval;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(PurchaseRequestApproval.class)
public class PurchaseRequestApprovalHandler implements TypeHandler<PurchaseRequestApproval> {
    @Override
    public void setParameter(PreparedStatement ps, int i, PurchaseRequestApproval parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public PurchaseRequestApproval getResult(ResultSet rs, String columnName) throws SQLException {
        return switch (rs.getString(columnName)){
            case "pending" -> PurchaseRequestApproval.PENDING;
            case "approved" -> PurchaseRequestApproval.APPROVED;
            case "rejected" -> PurchaseRequestApproval.REJECTED;
            default -> null;
        };
    }

    @Override
    public PurchaseRequestApproval getResult(ResultSet rs, int columnIndex) throws SQLException {
        return switch (rs.getString(columnIndex)){
            case "pending" -> PurchaseRequestApproval.PENDING;
            case "approved" -> PurchaseRequestApproval.APPROVED;
            case "rejected" -> PurchaseRequestApproval.REJECTED;
            default -> null;
        };
    }

    @Override
    public PurchaseRequestApproval getResult(CallableStatement cs, int columnIndex) throws SQLException {
        return switch (cs.getString(columnIndex)){
            case "pending" -> PurchaseRequestApproval.PENDING;
            case "approved" -> PurchaseRequestApproval.APPROVED;
            case "rejected" -> PurchaseRequestApproval.REJECTED;
            default -> null;
        };
    }
}
