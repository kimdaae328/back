package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.common.enumeration.MemberGender;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(MemberGender.class)
public class MemberGenderHandler implements TypeHandler<MemberGender> {
    @Override
    public void setParameter(PreparedStatement ps, int i, MemberGender parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public MemberGender getResult(ResultSet rs, String columnName) throws SQLException {
        return switch (rs.getString(columnName)){
            case "male" -> MemberGender.MALE;
            case "female" -> MemberGender.FEMALE;
            case "not" -> MemberGender.NOT;
            default -> null;
        };
    }

    @Override
    public MemberGender getResult(ResultSet rs, int columnIndex) throws SQLException {
        return switch (rs.getString(columnIndex)){
            case "male" -> MemberGender.MALE;
            case "female" -> MemberGender.FEMALE;
            case "not" -> MemberGender.NOT;
            default -> null;
        };
    }

    @Override
    public MemberGender getResult(CallableStatement cs, int columnIndex) throws SQLException {
        return switch (cs.getString(columnIndex)){
            case "male" -> MemberGender.MALE;
            case "female" -> MemberGender.FEMALE;
            case "not" -> MemberGender.NOT;
            default -> null;
        };
    }
}
