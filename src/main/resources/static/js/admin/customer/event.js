const homeButton = document.getElementById("menu-home");
const payoutButton = document.getElementById("menu-payout");
const sideMenuButtons = document.querySelectorAll(".menu-btn");
const sideSubLists = document.querySelectorAll(".menu-sub-list");
const sideSubLinks = document.querySelectorAll(".rebound-link");
const tabNames = document.querySelectorAll(".tab-name");
const icons = document.querySelectorAll(".icon-wrapper i");
const contentArea = document.querySelector("#content-area");
const answerButton = document.querySelector("#btn-answer");

// 홈 클릭 이벤트
homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    sideMenuButtons.forEach((homeByButton) => {
        homeByButton.classList.remove("current");
    });

    payoutButton.classList.remove("current1");
    homeButton.classList.add("current1");

    sideSubLists.forEach((homeByList) => {
        homeByList.classList.remove("show");
    });

    sideSubLinks.forEach((homeByLink) => {
        homeByLink.classList.remove("active");
    });

    icons.forEach((homeByIcon) => {
        homeByIcon.classList.remove("mdi-chevron-down");
        homeByIcon.classList.add("mdi-chevron-right");
    });
});

payoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    sideMenuButtons.forEach((payoutButton) => {
        payoutButton.classList.remove("current");
    });
    homeButton.classList.remove("current1");
    payoutButton.classList.add("current1");

    sideSubLists.forEach((homeByList) => {
        homeByList.classList.remove("show");
    });

    sideSubLinks.forEach((homeByLink) => {
        homeByLink.classList.remove("active");
    });

    icons.forEach((homeByIcon) => {
        homeByIcon.classList.remove("mdi-chevron-down");
        homeByIcon.classList.add("mdi-chevron-right");
    });
});
// 사이드 바 메인 메뉴 클릭 시 리스트 열고 닫기 + 아이콘
// 사이드 바 서브 링크 클릭 시 이벤트 + 다른 리스트 닫기
// 상단 tab바 이벤트
sideMenuButtons.forEach((sideMenuButton) => {
    sideMenuButton.addEventListener("click", (e) => {
        e.preventDefault();
        //기존(a 태그)의 이벤트를 멈추고 js로 직접 처리하기 위해 사용

        const targetId = sideMenuButton.getAttribute("aria-controls");
        // aria-controls와 같은 속성 가져올 땐 getAttribute();
        const targetSubList = document.getElementById(targetId);
        const targetIcon = sideMenuButton.querySelector(".icon-wrapper i");

        if (targetSubList.classList.contains("show")) {
            targetSubList.classList.remove("show");
            targetIcon.classList.remove("mdi-chevron-down");
            targetIcon.classList.add("mdi-chevron-right");
        } else {
            targetSubList.classList.add("show");

            targetIcon.classList.remove("mdi-chevron-right");
            targetIcon.classList.add("mdi-chevron-down");
        }
        payoutButton.classList.remove("current1");
        homeButton.classList.remove("current1");

        const menuText = sideMenuButton.textContent.trim();

        // if (menuText === '회원 관리') {
        //     console.log("회원 관리 클릭함");
        // } else if (menuText === '회원 문의 목록') {
        //     console.log("회원 문의 목록");
        // } else {
        //     console.log("?????");
        // }
    });
});

let currentPageType = "";
sideSubLinks.forEach((sideSubLink) => {
    sideSubLink.addEventListener("click", async (e) => {
        e.preventDefault();

        // 모든 서브 링크 active 초기화
        sideSubLinks.forEach((resetSubLink) => {
            resetSubLink.classList.remove("active");
        });
        sideSubLink.classList.add("active");

        // 상위 메뉴 버튼 current 초기화 + 설정
        sideMenuButtons.forEach((resetMenuButton) => {
            resetMenuButton.classList.remove("current");
        });

        const parentSubList = sideSubLink.parentElement.parentElement;
        const parentButton = document.querySelector(
            `.menu-btn[aria-controls = "${parentSubList.id}"]`
        );
        parentButton.classList.add("current");

        // 다른 리스트 닫기
        sideSubLists.forEach((sideSubList) => {
            if (sideSubList !== parentSubList) {
                sideSubList.classList.remove("show");

                const nonTargetButton = document.querySelector(
                    `.menu-btn[aria-controls="${sideSubList.id}"]`
                );
                if (nonTargetButton) {
                    const nonTargetIcon =
                        nonTargetButton.querySelector(".icon-wrapper i");
                    nonTargetIcon.classList.remove("mdi-chevron-down");
                    nonTargetIcon.classList.add("mdi-chevron-right");
                }
            }
        });

        // 상단 tab-name 활성화
        const linkText = sideSubLink.textContent.trim().replace("-", "").trim();
        // 링크 이름에서 기호(-)랑 공백 제거한 텍스트
        tabNames.forEach((tabName) => tabName.classList.remove("active"));
        tabNames.forEach((tabNameCheck) => {
            if (tabNameCheck.textContent.trim() === linkText) {
                tabNameCheck.classList.add("active");
            }
        });

        // const subMenuText = sideSubLink.querySelector("span").textContent.trim();
        const subMenuText = sideSubLink.textContent.replace("-", "").trim();

        if (subMenuText === '회원 목록') {
            console.log("회원 목록 클릭함");
            customerLayout.contentLayout();
            await setList(showList);
        } else if (subMenuText === '회원 문의 목록') {
            currentPageType = "buyer";

            inquiryLayout.contentLayout();

            // 미답변 총 합계
            const unanswerCount = await inquiryService.getUnansweredList(1);
            inquiryLayout.anUnansweredCount(unanswerCount.criteria);

            // 답변완료 총 합계
            const answerCount = await inquiryService.getAnsweredList(1);
            inquiryLayout.answeredCount(answerCount.criteria);

            await setList(showInquiryList);
        } else if (subMenuText === '판매자 문의목록') {
            currentPageType = "seller";

            sellerInquiryLayout.contentLayout();

            // 미답변 총 합계
            const unanswerCount = await sellerInquiryService.getUnansweredList(1);
            sellerInquiryLayout.anUnansweredCount(unanswerCount.criteria);

            // 답변완료 총 합계
            const answerCount = await sellerInquiryService.getAnsweredList(1);
            sellerInquiryLayout.answeredCount(answerCount.criteria);

            await setList(showSellerInquiryList);
        } else {
            console.log("?????");
        }
    });
});

// 상단 오른쪽 관리자 이메일 클릭 시 리스트 출력
// 출력된 리스트 다시 닫기
const userMenuWrapper = document.querySelector(".user-menu-wrapper");
const userMenuContent = document.querySelector(".user-menu-content");

userMenuWrapper.addEventListener("click", (e) => {
    e.preventDefault();
    if (userMenuContent.classList.contains("show")) {
        userMenuContent.classList.remove("show");
    } else {
        userMenuContent.classList.add("show");
    }
});

document.addEventListener("click", (e) => {
    // e.preventDefault();
    if (
        // userMenuContent 안넣어주면 안에 걸 눌러도 리스트가 닫힌다.
        !userMenuWrapper.contains(e.target) &&
        !userMenuContent.contains(e.target)
    ) {
        userMenuContent.classList.remove("show");
    }
});

// 페이지 번호 클릭 이벤트
const pageNums = document.querySelectorAll(".page-num");
const pageItemNums = document.querySelectorAll(".page-item-num");

pageItemNums.forEach((pageItemNum) => {
    pageItemNum.addEventListener("click", (e) => {
        // e.preventDefault();

        pageNums.forEach((pageNum) => {
            pageNum.classList.remove("active");
        });

        pageItemNum.parentElement.classList.add("active");
    });
});

// ########################### 회원목록 ###########################
// 전체 회원
const showList = async (page = 1, keyword) => {
    const customersCriteria = await customerService.getCustomerList(page, keyword, customerLayout.showList);
    customerLayout.renderPagination(customersCriteria.criteria);
    customerLayout.totalCount(customersCriteria.criteria);

    // console.log("여기----------", customersCriteria)
    return customersCriteria;
}

let currentLoader = "";
const setList = (loader) => {
    currentLoader = loader;
    currentLoader(1);
    customerLayout.connectToPagination((page) => currentLoader(page));
};


// 일반 회원
const showNonSubscribedList = async (page = 1, keyword) => {
    const customersCriteria = await customerService.getNonSubscribedCustomerList(page, keyword, customerLayout.showNonSubscribedList);
    // console.log(customersCriteria)
    customerLayout.renderPagination(customersCriteria.criteria);
    customerLayout.totalCount(customersCriteria.criteria);
    return customersCriteria;
};

// 구독 회원
const showSubscribedList = async (page = 1, keyword) => {
    const customersCriteria = await customerService.getSubscribedCustomerList(page, keyword, customerLayout.showSubscribedList);
    customerLayout.renderPagination(customersCriteria.criteria);
    customerLayout.totalCount(customersCriteria.criteria);
    return customersCriteria;
};



// ########################### 회원상세 ###########################
// 일반회원 상세 모달 창 열고 닫는 이벤트
// const customerTable = document.querySelector(".table-container tbody");
// const modal = document.querySelector(".member-modal");
// const closeButtons = document.querySelectorAll(".close");

// if(modal){
//     console.log("adasdad")
//     customerTable.addEventListener("click", async  (e, callback)=>{
//         console.log("sdasd")
//         modal.style.display = "block";
//
//         setTimeout(() => {
//             modal.classList.add("show");
//             modal.style.background = "rgba(0,0,0,0.5)";
//             document.body.classList.add("modal-open");
//         }, 100);
//
//         // 팝업 상세 내용
//         const currentCustomerId = e.target.closest("tr").querySelector(".member-id").innerText;
//         const customerDetail = await customerService.getCustomerDetail(currentCustomerId);
//
//         console.log("회원상세",customerDetail)
//         customerLayout.showDetail(customerDetail);
//     });
// }


// ########################### 문의 목록 ###########################
// 문의 목록(전체)
const showInquiryList = async (page = 1) => {
    const inquiryCriteria = await inquiryService.getInquiryList(page, inquiryLayout.showList);
    inquiryLayout.renderPagination(inquiryCriteria.criteria);
    inquiryLayout.totalCount(inquiryCriteria.criteria);

    // console.log("여기----------", customersCriteria)
    return inquiryCriteria;
}

// 문의 목록(미답변)
const showUnansweredList = async (page = 1) => {
    const inquiryCriteria = await inquiryService.getUnansweredList(page, inquiryLayout.showList);
    inquiryLayout.renderPagination(inquiryCriteria.criteria);
    inquiryLayout.totalCount(inquiryCriteria.criteria);

    return inquiryCriteria;
}

// 문의 목록(답변완료)
const showAnsweredList = async (page = 1) => {
    const inquiryCriteria = await inquiryService.getAnsweredList(page, inquiryLayout.showList);
    inquiryLayout.renderPagination(inquiryCriteria.criteria);
    inquiryLayout.totalCount(inquiryCriteria.criteria);

    return inquiryCriteria;
}

// 판매자 문의 목록(전체)
const showSellerInquiryList = async (page = 1) => {
    const inquiryCriteria = await sellerInquiryService.getInquiryList(page, sellerInquiryLayout.showList);
    sellerInquiryLayout.renderPagination(inquiryCriteria.criteria);
    sellerInquiryLayout.totalCount(inquiryCriteria.criteria);

    return inquiryCriteria;
}

// 판매자 문의 목록(미답변)
const showSellerUnansweredList = async (page = 1) => {
    const inquiryCriteria = await sellerInquiryService.getUnansweredList(page, sellerInquiryLayout.showList);
    sellerInquiryLayout.renderPagination(inquiryCriteria.criteria);
    sellerInquiryLayout.totalCount(inquiryCriteria.criteria);

    return inquiryCriteria;
}

// 판매자 문의 목록(답변완료)
const showSellerAnsweredList = async (page = 1) => {
    const inquiryCriteria = await sellerInquiryService.getAnsweredList(page, sellerInquiryLayout.showList);
    sellerInquiryLayout.renderPagination(inquiryCriteria.criteria);
    sellerInquiryLayout.totalCount(inquiryCriteria.criteria);

    // console.log("여기----------", customersCriteria)
    return inquiryCriteria;
}

// ########################### 이벤트 ###########################
// 모달 닫기
// document.addEventListener("click", (e) => {
//     if (e.target.closest(".close") || e.target.closest(".btn-close")) {
//         closeModal();
//     }
//
//     if (e.target === modal) {
//         closeModal();
//     }
// });
//
// // 공통 닫기 함수
// function closeModal() {
//     modal.classList.remove("show");
//     document.body.classList.remove("modal-open");
//     setTimeout(() => {
//         modal.style.display = "none";
//     }, 100);
// }

// 검색
let keyword ="";

contentArea.addEventListener("keyup", async (e) => {
    const input = e.target.closest('.input-search');
    if (!input) return;

    if (e.key === "Enter") {
        e.preventDefault();
        keyword = e.target.value.trim();

        const result = await currentLoader(1, keyword);
        customerLayout.renderPagination(result.criteria);
        customerLayout.totalCount(result.criteria);
    }
});

contentArea.addEventListener("click", async (e) => {
    const btn = e.target.closest(".btn-search");
    if (!btn) return;

    const inputBox = btn.closest(".input-group");
    const input = inputBox.querySelector(".input-search");
    keyword = input.value.trim();

    const result = await currentLoader(1, keyword);
    customerLayout.renderPagination(result.criteria);
    customerLayout.totalCount(result.criteria);
});

contentArea.addEventListener("click", async (e) => {
    const target = e.target;

    // 상단 tab-name 누르면 사이드 바 따라가는 이벤트
    if(target.classList.contains("tab-name")){
        const tabs = contentArea.querySelectorAll(".tab-name");
        const headerTabname = e.target.closest(".tab-name");

        e.preventDefault();

        tabs.forEach((tab) => {
            tab.classList.toggle("active", tab === headerTabname);
        });

        if (!headerTabname) return;
        const tabText = headerTabname.textContent.trim();

        if (tabText === "전체") {
            setList(showList);
        } else if (tabText === "일반 회원") {
            setList(showNonSubscribedList)
        } else if(tabText === "구독 회원"){
            setList(showSubscribedList);
        }

    // 모달
    } else if(target.classList.contains("action-btn")) {
        const modal = document.querySelector(".modal");
        if (!modal) return;

        modal.style.display = "block";

        setTimeout(() => {
            modal.classList.add("show");
            modal.style.background = "rgba(0,0,0,0.5)";
            document.body.classList.add("modal-open");
        }, 100);

        const row = target.closest("tr");
        if (!row) return;

        // 회원 상세 팝업
        if (target.closest(".member-action-btn")) {
            const currentCustomerId = e.target.closest("tr").querySelector(".member-id").innerText;
            if (!currentCustomerId) return;

            const customerDetail = await customerService.getCustomerDetail(currentCustomerId);

            console.log("회원상세",customerDetail)
            customerLayout.showDetail(customerDetail);

            return;

        } else if (target.closest(".inquiry-action-btn")) {
            const inquiryId = row.dataset.inquiryId;
            if (!inquiryId) return;

            console.log(inquiryId)

            const inquiryDetail = await inquiryService.getInquiryDetail(inquiryId);

            console.log("문의상세", inquiryDetail);
            inquiryLayout.showDetail(inquiryDetail);

            return;
        }
    }

    // 문의 답변하기
    if(target.classList.contains("btn-answer")) {
        const modal = target.closest(".modal-dialog")
        const form = modal.querySelector("#answerForm");
        const inquiryAnswerContent = modal.querySelector(".answer-textarea").value.trim();
        const inquiryId = form.dataset.inquiryId
        if (!inquiryAnswerContent) return;

        const result = await inquiryService.writeAnswer(inquiryId, inquiryAnswerContent);

        if (result) {
            console.log("문의 답변 등록 완료", result);
            alert("문의 답변이 등록되었습니다.");
            inquiryLayout.showDetail(result);

            const inquiriesCriteria = await inquiryService.getInquiryList(
                inquiryService.getCurrentPage()
            );
            inquiryLayout.showList(inquiriesCriteria);
        } else {
            alert("문의 답변 등록 실패");
        }
    }

    // 답변 상태 드롭박스
    if(target.classList.contains("boot-pop-checkbox-filter-btn")) {
        const btPopMenuContext = document.querySelector(".bt-pop-menu-context");
        btPopMenuContext.classList.toggle("show");
    }

    // 답변 상태 체크박스
    if(target.closest("#filter-apply")) {
        const answered   = document.querySelector("#check-box1")?.checked;
        const unanswered = document.querySelector("#check-box2")?.checked;

        if (currentPageType === "buyer") {
            if (answered && !unanswered) {
                await setList(showAnsweredList);
            } else if (!answered && unanswered) {
                await setList(showUnansweredList);
            } else {
                await setList(showInquiryList);
            }
        } else if (currentPageType === "seller") {
            if (answered && !unanswered) {
                await setList(showSellerAnsweredList);
            } else if (!answered && unanswered) {
                await setList(showSellerUnansweredList);
            } else {
                await setList(showSellerInquiryList);
            }
        }
        document.querySelector(".bt-pop-menu-context").classList.remove("show");
    }

});



// 모달 닫기
document.addEventListener("click", (e) => {
    const modal = document.querySelector(".modal.show");

    if (e.target.closest(".close") || e.target.closest(".btn-close")) {
        console.log("닫기버튼")
        closeModal(modal);
    }

    if (modal && e.target === modal) {
        closeModal(modal);
    }
});

// 공통 닫기 함수
function closeModal(modal) {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
    setTimeout(() => {
        modal.style.display = "none";
    }, 100);
}


