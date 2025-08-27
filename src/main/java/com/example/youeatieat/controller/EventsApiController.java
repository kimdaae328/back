package com.example.youeatieat.controller;

import com.example.youeatieat.dto.BannerDTO;
import com.example.youeatieat.dto.LikeDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.BannerServiceImpl;
import com.example.youeatieat.service.LikeServiceImpl;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/banner/**")
@RequiredArgsConstructor
public class EventsApiController {
    private final BannerServiceImpl bannerService;

//   get banner
    @GetMapping("all")
    public ResponseEntity<?> list() {

        List<BannerDTO> banners = bannerService.findAll();
        return ResponseEntity.ok(banners);
    }

}
