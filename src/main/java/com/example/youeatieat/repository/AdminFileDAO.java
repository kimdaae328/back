package com.example.youeatieat.repository;

import com.example.youeatieat.dto.FileDTO;
import com.example.youeatieat.mapper.AdminFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AdminFileDAO {
    private final AdminFileMapper fileMapper;

//    추가
    public void save(FileDTO fileDTO) {
        fileMapper.insertFile(fileDTO);
    }

//    삭제
    public void delete(Long id) {
        fileMapper.deleteFile(id);
    }
}
