package com.example.youeatieat.controller;

import com.example.youeatieat.dto.BannerWithFileDTO;
import com.example.youeatieat.service.AdminBannerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class MainController {
    private final AdminBannerService adminBannerService;

    @GetMapping("/")
    public String index(Model model){
        List<BannerWithFileDTO> banners = adminBannerService.getBannerFiles();
//        banners.forEach(b -> System.out.println("배너ID=" + b.getBannerId() + ", files=" + b.getFiles()));
        model.addAttribute("banners", banners);
        return "main/body";
    }



}
