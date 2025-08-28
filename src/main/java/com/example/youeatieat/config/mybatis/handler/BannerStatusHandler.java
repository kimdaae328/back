package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.enumeration.BannerStatus;
import com.example.youeatieat.enumeration.FaqCategory;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(BannerStatus.class)
public class BannerStatusHandler implements TypeHandler<BannerStatus> {

    @Override
    public void setParameter(PreparedStatement ps, int i, BannerStatus parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public BannerStatus getResult(ResultSet rs, String columnName) throws SQLException {
        switch (rs.getString(columnName)) {
            case "main":
                return BannerStatus.MAIN;
            case "sub":
                return BannerStatus.SUB;
        }
        return null;
    }

    @Override
    public BannerStatus getResult(ResultSet rs, int columnIndex) throws SQLException {
        switch (rs.getString(columnIndex)) {
            case "main":
                return BannerStatus.MAIN;
            case "sub":
                return BannerStatus.SUB;
        }
        return null;
    }

    @Override
    public BannerStatus getResult(CallableStatement cs, int columnIndex) throws SQLException {
        switch (cs.getString(columnIndex)) {
            case "main":
                return BannerStatus.MAIN;
            case "sub":
                return BannerStatus.SUB;
        }
        return null;
    }
}
