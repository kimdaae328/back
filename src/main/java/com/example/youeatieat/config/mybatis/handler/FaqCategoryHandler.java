package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.common.enumeration.FaqCategory;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(FaqCategory.class)
public class FaqCategoryHandler implements TypeHandler<FaqCategory> {

    @Override
    public void setParameter(PreparedStatement ps, int i, FaqCategory parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public FaqCategory getResult(ResultSet rs, String columnName) throws SQLException {
        switch (rs.getString(columnName)) {
            case "goods":
                return FaqCategory.GOODS;
            case "shipping":
                return FaqCategory.SHIPPING;
            case "ect":
                return FaqCategory.ECT;
        }
        return null;
    }

    @Override
    public FaqCategory getResult(ResultSet rs, int columnIndex) throws SQLException {
        switch (rs.getString(columnIndex)) {
            case "goods":
                return FaqCategory.GOODS;
            case "shipping":
                return FaqCategory.SHIPPING;
            case "ect":
                return FaqCategory.ECT;
        }
        return null;
    }

    @Override
    public FaqCategory getResult(CallableStatement cs, int columnIndex) throws SQLException {
        switch (cs.getString(columnIndex)) {
            case "goods":
                return FaqCategory.GOODS;
            case "shipping":
                return FaqCategory.SHIPPING;
            case "ect":
                return FaqCategory.ECT;
        }
        return null;
    }
}
