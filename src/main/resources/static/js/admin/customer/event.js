const homeButton = document.getElementById("menu-home");
const payoutButton = document.getElementById("menu-payout");
const sideMenuButtons = document.querySelectorAll(".menu-btn");
const sideSubLists = document.querySelectorAll(".menu-sub-list");
const sideSubLinks = document.querySelectorAll(".rebound-link");
const tabNames = document.querySelectorAll(".tab-name");
const icons = document.querySelectorAll(".icon-wrapper i");
const contentArea = document.querySelector("#content-area");
const answerButton = document.querySelector("#btn-answer");

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
        // homeButton.classList.remove("current1");
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

            currentPageType = "buyer-list";
            customerLayout.contentLayout();
            await setList(showList);

        } else if (subMenuText === '판매자 목록') {

            currentPageType = "seller-list";
            sellerLayout.contentLayout()
            await setList(showSellerList);
            await setList(showYoueatieatLoginList);
            await setList(showKakaoLoginList);

        } else if (subMenuText === '회원 문의 목록') {

            currentPageType = "buyer-inquiry";
            inquiryLayout.contentLayout();

            // 미답변 총 합계
            const unanswerCount = await inquiryService.getUnansweredList(1);
            inquiryLayout.anUnansweredCount(unanswerCount.criteria);

            // 답변완료 총 합계
            const answerCount = await inquiryService.getAnsweredList(1);
            inquiryLayout.answeredCount(answerCount.criteria);

            await setList(showInquiryList);

        } else if (subMenuText === '판매자 문의목록') {

            currentPageType = "seller-inquiry";
            sellerInquiryLayout.contentLayout();

            // 미답변 총 합계
            const unanswerCount = await sellerInquiryService.getUnansweredList(1);
            sellerInquiryLayout.anUnansweredCount(unanswerCount.criteria);

            // 답변완료 총 합계
            const answerCount = await sellerInquiryService.getAnsweredList(1);
            sellerInquiryLayout.answeredCount(answerCount.criteria);

            await setList(showSellerInquiryList);

        } else if (subMenuText === '매입 승인 목록') {

            currentPageType = "purchase-list";
            purchaseLayout.contentLayout();

            // 승인완료 총 합계
            const approvedCount = await purchaseService.getApprovedCountAll();
            document.querySelector("#purchase-amount").textContent = approvedCount;

            await setList(showSellerPurchaseList);

        } else if (subMenuText === '배너 등록') {

            currentPageType = "banner";
            bannerLayout.contentLayout();
            await setList(showBannerList);

        } else if (subMenuText === '상품 목록') {

            currentPageType = "product";
            productLayout.contentLayout();
            await setList(showProductList);

        } else if (subMenuText === '결제 목록') {

            currentPageType = "payment";
            requestLayout.contentLayout();
            await setList(showRequestList);

        }
    });
});

// 첫번째진입시 회원 목록 항상 active
document.addEventListener("DOMContentLoaded", async () => {
    if (sideSubLinks.length > 0) {
        sideSubLinks[0].click();
        sideSubLists[0].classList.add("show");
    }
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

// 전체 회원
const showList = async (page = 1, keyword) => {
    const customersCriteria = await customerService.getCustomerList(page, keyword, customerLayout.showList);
    customerLayout.renderPagination(customersCriteria.criteria);
    customerLayout.totalCount(customersCriteria.criteria);

    return customersCriteria;
}

let currentLoader = "";
const setList = (loader) => {
    currentLoader = loader;
    currentLoader(1);
    customerLayout.connectToPagination((page) => currentLoader(page));
};

// 처음 페이지 로드
document.addEventListener("DOMContentLoaded", async () => {
    customerLayout.contentLayout();
    await setList(showList);
});

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

// 판매자 회원(전체)
const showSellerList = async (page = 1, keyword) => {
    const sellersCriteria = await sellerService.getSellerList(page, keyword, sellerLayout.showList);
    sellerLayout.renderPagination(sellersCriteria.criteria);
    sellerLayout.totalCount(sellersCriteria.criteria);

    return sellersCriteria;
};

// 판매자 회원(일반로그인)
const showYoueatieatLoginList = async (page = 1, keyword) => {
    const sellersCriteria = await sellerService.getSellerYoueatieatList(page, keyword, sellerLayout.showYoueatieatList);
    sellerLayout.renderPagination(sellersCriteria.criteria);
    sellerLayout.totalCount(sellersCriteria.criteria);

    return sellersCriteria;
};

// 판매자 회원(카카오로그인)
const showKakaoLoginList = async (page = 1, keyword) => {
    const sellersCriteria = await sellerService.getSellerKakaoList(page, keyword, sellerLayout.showKakaoList);
    sellerLayout.renderPagination(sellersCriteria.criteria);
    sellerLayout.totalCount(sellersCriteria.criteria);

    return sellersCriteria;
};

// 문의 목록(전체)
const showInquiryList = async (page = 1, keyword) => {
    const inquiryCriteria = await inquiryService.getInquiryList(page, keyword, inquiryLayout.showList);
    inquiryLayout.renderPagination(inquiryCriteria.criteria);
    inquiryLayout.totalCount(inquiryCriteria.criteria);

    // console.log("여기----------", customersCriteria)
    return inquiryCriteria;
}

// 문의 목록(미답변)
const showUnansweredList = async (page = 1, keyword) => {
    const inquiryCriteria = await inquiryService.getUnansweredList(page, keyword, inquiryLayout.showList);
    inquiryLayout.renderPagination(inquiryCriteria.criteria);
    inquiryLayout.totalCount(inquiryCriteria.criteria);

    return inquiryCriteria;
}

// 문의 목록(답변완료)
const showAnsweredList = async (page = 1, keyword) => {
    const inquiryCriteria = await inquiryService.getAnsweredList(page, keyword, inquiryLayout.showList);
    inquiryLayout.renderPagination(inquiryCriteria.criteria);
    inquiryLayout.totalCount(inquiryCriteria.criteria);

    return inquiryCriteria;
}

// 판매자 문의 목록(전체)
const showSellerInquiryList = async (page = 1, keyword) => {
    const inquiryCriteria = await sellerInquiryService.getInquiryList(page, keyword, sellerInquiryLayout.showList);
    sellerInquiryLayout.renderPagination(inquiryCriteria.criteria);
    sellerInquiryLayout.totalCount(inquiryCriteria.criteria);

    return inquiryCriteria;
}

// 판매자 문의 목록(미답변)
const showSellerUnansweredList = async (page = 1, keyword) => {
    const inquiryCriteria = await sellerInquiryService.getUnansweredList(page, keyword, sellerInquiryLayout.showList);
    sellerInquiryLayout.renderPagination(inquiryCriteria.criteria);
    sellerInquiryLayout.totalCount(inquiryCriteria.criteria);

    return inquiryCriteria;
}

// 판매자 문의 목록(답변완료)
const showSellerAnsweredList = async (page = 1, keyword) => {
    const inquiryCriteria = await sellerInquiryService.getAnsweredList(page, keyword, sellerInquiryLayout.showList);
    sellerInquiryLayout.renderPagination(inquiryCriteria.criteria);
    sellerInquiryLayout.totalCount(inquiryCriteria.criteria);

    // console.log("여기----------", customersCriteria)
    return inquiryCriteria;
}

// 매입 승인 목록
const showSellerPurchaseList = async (page = 1, keyword) => {
    const purchaseCriteria = await purchaseService.getPurchaseService(page, keyword, purchaseLayout.showList);
    purchaseLayout.renderPagination(purchaseCriteria.criteria);
    purchaseLayout.totalCount(purchaseCriteria.criteria);

    return purchaseCriteria;
}

// 배너 목록
const showBannerList = async () => {
    const bannerList = await bannerService.getList();
    bannerLayout.showList(bannerList);
    // bannerLayout.renderPagination(bannerCriteria.criteria);
    // bannerLayout.totalCount(bannerCriteria.criteria);

    return bannerList;
}

// 상품 목록
const showProductList = async (page = 1, keyword) => {
    const productCriteria = await productService.getList(page, keyword, productLayout.showList); // 이름 맞추기
    productLayout.renderPagination(productCriteria.criteria);
    productLayout.totalCount(productCriteria.criteria);
    return productCriteria;
}

// 결제 목록
const showRequestList = async (page = 1, keyword) => {
    const requestCriteria = await requestService.getList(page, keyword, requestLayout.showList); // 이름 맞추기
    requestLayout.renderPagination(requestCriteria.criteria);
    requestLayout.totalCount(requestCriteria.criteria);
    return requestCriteria;
}


// 검색
let keyword ="";

contentArea.addEventListener("keyup", async (e) => {
    const input = e.target

    if(input.closest(".input-search")){
        if (!input.closest(".input-search")) return;
        if (e.key === "Enter") {
            e.preventDefault();
            keyword = e.target.value.trim();

            const result = await currentLoader(1, keyword);
            customerLayout.renderPagination(result.criteria);
            customerLayout.totalCount(result.criteria);
        }
    }

    if(input.closest(".form-control")){
        if (!input.closest(".form-control")) return;
        if (e.key === "Enter") {
            e.preventDefault();
            keyword = e.target.value.trim();

            // 회원 문의목록 검색
            if(currentPageType === "buyer-inquiry"){
                const result = await currentLoader(1, keyword);
                inquiryLayout.renderPagination(result.criteria);
                inquiryLayout.totalCount(result.criteria);
            }

            // 판매자 문의목록 검색
            if(currentPageType === "seller-inquiry"){
                const result = await currentLoader(1, keyword);
                sellerInquiryLayout.renderPagination(result.criteria);
                sellerInquiryLayout.totalCount(result.criteria);
            }

            // 매입승인 검색
            if(currentPageType === "purchase-list"){
                const result = await currentLoader(1, keyword);
                purchaseLayout.renderPagination(result.criteria);
                purchaseLayout.totalCount(result.criteria);
            }
        }
    }
});

contentArea.addEventListener("click", async (e) => {
    const btn = e.target;

    if(btn.closest("#btn-customer-search")){
        if (!btn.closest("#btn-customer-search")) return;

        const inputBox = btn.closest(".input-group");
        const input = inputBox.querySelector(".input-search");
        keyword = input.value.trim();

        const result = await currentLoader(1, keyword);
        customerLayout.renderPagination(result.criteria);
        customerLayout.totalCount(result.criteria);
    }

    if(btn.closest("#btn-purchase-search")){
        if (!btn.closest("#btn-purchase-search")) return;

        const inputBox = btn.closest(".input-group");
        const input = inputBox.querySelector(".input-search");
        keyword = input.value.trim();

        const result = await currentLoader(1, keyword);
        purchaseLayout.renderPagination(result.criteria);
        purchaseLayout.totalCount(result.criteria);
    }
});

contentArea.addEventListener("click", async (e) => {
    const target = e.target;

    // 상단 tab-name 누르면 사이드 바 따라가는 이벤트
    if (!target.classList.contains("tab-name")) {
    } else {
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
        } else if (tabText === "구독 회원") {
            setList(showSubscribedList);
        }

        if (tabText === "전체") {
            setList(showSellerList);
        } else if (tabText === "일반 로그인") {
            console.log("asdasdasdad")
            setList(showYoueatieatLoginList)
        } else if (tabText === "카카오 로그인") {
            setList(showKakaoLoginList);
        }
    }

    // 모달
    if(target.classList.contains("action-btn")) {
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

        // 상세보기 팝업
        if (target.classList.contains("member-action-btn")) {

            const currentCustomerId = e.target.closest("tr").querySelector(".member-id").innerText;
            const customerDetail = await customerService.getCustomerDetail(currentCustomerId);
            if (!currentCustomerId) return;

            customerLayout.showDetail(customerDetail);

        } else if (target.classList.contains("seller-action-btn")) {

            const sellerCustomerId = e.target.closest("tr").querySelector(".member-id").innerText;
            const sellerDetail = await sellerService.getSellerDetail(sellerCustomerId);
            if (!sellerCustomerId) return;

            sellerLayout.showDetail(sellerDetail);

        } else if (target.classList.contains("inquiry-action-btn")) {
            const inquiryId = row.dataset.inquiryId;
            const inquiryDetail = await inquiryService.getDetail(inquiryId);
            if (!inquiryId) return;

            inquiryLayout.showDetail(inquiryDetail);

        }
        if (target.classList.contains("purchase-action-btn")) {
            const purchaseId = row.dataset.purchaseId;
            const purchaseDetail = await purchaseService.getDetail(purchaseId);
            if (!purchaseId) return;

            purchaseLayout.showDetail(purchaseDetail);

        }
    }

    // 매입 요청 승인 버튼 토글
    if (target.classList.contains("approval-action-btn")) {
        const btMenu = target.closest(".bt-pop-menu");
        const btPopMenuContext = btMenu.querySelector(".bt-pop-menu-context");
        btPopMenuContext.classList.toggle("show");

        document.querySelectorAll(".bt-pop-menu-context.show").forEach(m => {
            if (m !== btPopMenuContext) m.classList.remove("show");
        });
    }

    // 매입 상태 적용
    if(target.classList.contains("apply-status-btn")){
        const applyBtn = e.target.closest(".apply-status-btn");
        if (!applyBtn) return;

        const row = applyBtn.closest("tr.purchase-row");
        const menu = applyBtn.closest(".bt-pop-menu");
        if (!row || !menu) return;

        const purchaseId = row.dataset.purchaseId;

        const checked = menu.querySelector("input[type=radio]:checked");
        if (!checked) {
            alert("승인/거절 중 하나를 선택해줘!");
            return;
        }

        const status = checked.dataset.status;

        const ok = await purchaseService.updatePurchaseStatus(purchaseId, status);
        if (!ok) {
            alert("상태 변경 실패");
            return;
        }

        // 메뉴 닫기
        menu.querySelector(".bt-pop-menu-context")?.classList.remove("show");
        alert("상태가 변경되었습니다!");
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
        const answered   = document.querySelector("#check-box1").checked;
        const unanswered = document.querySelector("#check-box2").checked;

        if (currentPageType === "buyer-inquiry") {
            if (answered && !unanswered) {
                await setList(showAnsweredList);
            } else if (!answered && unanswered) {
                await setList(showUnansweredList);
            } else {
                await setList(showInquiryList);
            }
        } else if (currentPageType === "seller-inquiry") {
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

// 배너
let formData = null;
contentArea.addEventListener("change", async (e) => {
    const target = e.target;

    if(target.classList.contains("banner-file")){
        formData = new FormData();

        const files = target.files;
        const bannerContainer = document.querySelector("ul.pg-list");

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            formData.append("file", file);

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener("load", (e) => {
                let text = `
                <li class="pg-list-item show">
                    <div class="pg-logo-wrapper">
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                        <img src="${e.target.result}" class="pg-logo">
                    </div>
                </li>
            `;

                bannerContainer.innerHTML += text;
            });
        }
    }

});

contentArea.addEventListener("click", async (e) => {
    const target = e.target;
    if (target.classList.contains("register-link")) {
        e.preventDefault();
        await bannerService.uploadService(formData);
        await currentLoader(1)
    }
});

contentArea.addEventListener('click', async (e) => {
    const target = e.target;

    // 배너 사진 등록중 삭제
    if(target.classList.contains("delete-btn")){
        const delBtn = e.target.closest('.delete-btn');
        const item = delBtn.closest('.pg-list-item');
        if (!item) return;

        item.remove();
    }

    // 배너 리스트 삭제
    if(target.classList.contains("banner-delete-btn")){
        const row = target.closest("tr");
        const bannerId = row.dataset.bannerId;
        await bannerService.deleteBanner(bannerId)
        await currentLoader(1);
    }

    // 배너 등록후 다시 화면 로드
    if(target.classList.contains("register-link")){
        await currentLoader(1);
    }

    // 배너 순서 수정
    if(target.classList.contains("order-update-btn")){
        e.preventDefault()
        const row = e.target.closest(".banner-row");
        const bannerId = row.dataset.bannerId;
        const newOrder = row.querySelector("input").value;

        const result = await bannerService.updateOrder(bannerId, newOrder);

        if (result) {
            alert("순서 변경을 완료했습니다");
        } else {
            alert("순서 변경을 실패했습니다");
        }
    }

    // 결제 내역 돋보기 버튼
    if(target.classList.contains("magnify-btn")){
        const extraInfoBox = document.querySelector(".extra-info");
        extraInfoBox.classList.toggle("show")
    }
});
