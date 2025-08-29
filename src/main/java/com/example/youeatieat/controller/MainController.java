package com.example.youeatieat.controller;

import com.example.youeatieat.dto.BannerWithFileDTO;
import com.example.youeatieat.dto.MainPackDealDTO;
import com.example.youeatieat.dto.MemberDTO;
import com.example.youeatieat.service.AdminBannerService;
import com.example.youeatieat.service.MainService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class MainController {
    private final MainService mainService;
    private final AdminBannerService adminBannerService;
    private final HttpSession session;

    @GetMapping("/")
    public String index(Model model){
        List<BannerWithFileDTO> banners = adminBannerService.getBannerFiles();
        List<MainPackDealDTO> packDeals = mainService.getPackDealsList();
        List<MainPackDealDTO> bests = mainService.getBestList();

        MemberDTO memberDTO = (MemberDTO) session.getAttribute("member");
        model.addAttribute("member", memberDTO);

        model.addAttribute("banners", banners);
        model.addAttribute("packDeals", packDeals);
        model.addAttribute("bests", bests);

        return "main/body";
    }


}
