package com.example.youeatieat.repository;

import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.mapper.AdminFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AdminFileDAO {
    private final AdminFileMapper adminFileMapper;

//    추가
    public void save(FileDTO fileDTO) {
        adminFileMapper.insertFile(fileDTO);
    }
}
