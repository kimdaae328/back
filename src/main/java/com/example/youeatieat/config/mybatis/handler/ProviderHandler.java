package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.enumeration.Provider;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(Provider.class)
public class ProviderHandler implements TypeHandler<Provider> {

    @Override
    public void setParameter(PreparedStatement ps, int i, Provider parameter, JdbcType jdbcType) throws SQLException {
        if (parameter == null) {
            ps.setNull(i, jdbcType == null ? java.sql.Types.VARCHAR : jdbcType.TYPE_CODE);
        } else {
            ps.setString(i, parameter.getValue());
        }
    }

    @Override
    public Provider getResult(ResultSet rs, String columnName) throws SQLException {
        String value = rs.getString(columnName);
        if (value == null) return null;
        return switch (value) {
            case "you_i" -> Provider.YOU_I;
            case "kakao" -> Provider.KAKAO;
            default -> null;
        };
    }

    @Override
    public Provider getResult(ResultSet rs, int columnIndex) throws SQLException {
        String value = rs.getString(columnIndex);
        if (value == null) return null;
        return switch (value) {
            case "you_i" -> Provider.YOU_I;
            case "kakao" -> Provider.KAKAO;
            default -> null;
        };
    }

    @Override
    public Provider getResult(CallableStatement cs, int columnIndex) throws SQLException {
        String value = cs.getString(columnIndex);
        if (value == null) return null;
        return switch (value) {
            case "you_i" -> Provider.YOU_I;
            case "kakao" -> Provider.KAKAO;
            default -> null;
        };
    }
}
