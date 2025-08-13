package com.example.youeatieat.controller;

import com.example.youeatieat.dto.MemberCriteriaDTO;
import com.example.youeatieat.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/admin/customers/list")
public class MembersController {
    private final MemberService memberService;

//    회원목록
    @GetMapping("/{page}")
    public ResponseEntity<?> list(@PathVariable("page") int page) {
        MemberCriteriaDTO memberCriteriaDTO = memberService.getList(page);
        if(memberCriteriaDTO == null || memberCriteriaDTO.getPosts().size() == 0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(memberCriteriaDTO);
        }
        return ResponseEntity.ok(memberCriteriaDTO);
    }
}
