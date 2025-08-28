package com.example.youeatieat.mapper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@Slf4j
public class AdminBannerTests {

//    @Autowired
//    private AdminBannerFileMapper bannerFileMapper;
//
//    @Test
//    void testFindFilesByBannerId() {
//        Long testBannerId = 11L;
//
//        List<BannerWithFileDTO> files = bannerFileMapper.findFilesByBannerId(testBannerId);
//
//
//        files.forEach(file -> {
//            System.out.println("bannerId = " + file.getBannerId());
//            System.out.println("fileId = " + file.getFileId());
//            System.out.println("fileName = " + file.getFileName());
//            assertNotNull(file.getBannerId(), "bannerId가 null이다잉잉잉------------");
//        });
//    }

//    @Autowired
//    private AdminBannerService bannerService;
//
//    @Test
//    void testFindFilesFromService() {
//        List<BannerWithFileDTO> files = bannerService.getBannerFiles(11L);
//
//        files.forEach(file ->
//                System.out.println("서비스 결과-----------------: bannerId=" + file.getBannerId() + ", fileId=" + file.getFileId())
//        );
//    }
}
