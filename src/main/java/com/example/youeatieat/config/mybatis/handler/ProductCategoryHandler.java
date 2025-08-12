package com.example.youeatieat.config.mybatis.handler;

import com.example.youeatieat.enumeration.ProductCategory;
import jdk.jfr.Category;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedTypes;
import org.apache.ibatis.type.TypeHandler;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedTypes(ProductCategory.class)
public class ProductCategoryHandler implements TypeHandler<ProductCategory> {

    @Override
    public void setParameter(PreparedStatement ps, int i, ProductCategory parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.getValue());
    }

    @Override
    public ProductCategory getResult(ResultSet rs, String columnName) throws SQLException {
        switch (rs.getString(columnName)) {
            case "vegetables":
                return ProductCategory.VEGETABLES;
            case "fruits":
                return ProductCategory.FRUITS;
            case "fisheries":
                return ProductCategory.FISHERIES;
            case "butchers":
                return ProductCategory.BUTCHERS;
            case "etc":
                return ProductCategory.ETC;
        }
        return null;
    }

    @Override
    public ProductCategory getResult(ResultSet rs, int columnIndex) throws SQLException {
        switch (rs.getString(columnIndex)) {
            case "vegetables":
                return ProductCategory.VEGETABLES;
            case "fruits":
                return ProductCategory.FRUITS;
            case "fisheries":
                return ProductCategory.FISHERIES;
            case "butchers":
                return ProductCategory.BUTCHERS;
            case "etc":
                return ProductCategory.ETC;
        }
        return null;
    }

    @Override
    public ProductCategory getResult(CallableStatement cs, int columnIndex) throws SQLException {
            switch (cs.getString(columnIndex)) {
                case "vegetables":
                    return ProductCategory.VEGETABLES;
                case "fruits":
                    return ProductCategory.FRUITS;
                case "fisheries":
                    return ProductCategory.FISHERIES;
                case "butchers":
                    return ProductCategory.BUTCHERS;
                case "etc":
                    return ProductCategory.ETC;
            }
            return null;
    }
}
