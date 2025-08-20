// const menubtn1 =document.getElementById("menubtn1")
// const sublist1 =document.getElementById("sublist1")
// const menubtn2 =document.getElementById("menubtn2")
// const sublist2 =document.getElementById("sublist2")
// const menubtn3 =document.getElementById("menubtn3")
// const sublist3 =document.getElementById("sublist3")
// const menubtn4 =document.getElementById("menubtn4")
// const sublist4 =document.getElementById("sublist4")
// const usermenubtn=document.getElementById("usermenubtn")
// const usermenu=document.getElementById("usermenu")
// const calendarbtn1=document.getElementById("calendarbutton1")
// const calendarbtn2=document.getElementById("calendarbutton2")
// const calendarbtn3=document.getElementById("calendarbutton3")
// const submenus=document.querySelectorAll('.boot-link')
// const datebtn=document.querySelectorAll('.datebtn')
// const tabnames=document.querySelectorAll('.tab-name')
// menubtn1.addEventListener("click", (e) => {
//     sublist1.classList.toggle("show");
//     event.preventDefault()
// });
// menubtn2.addEventListener("click", (e) => {
//     sublist2.classList.toggle("show");
//     event.preventDefault()
// });
//
// menubtn3.addEventListener("click", (e) => {
//     sublist3.classList.toggle("show");
//     event.preventDefault()
// });
// menubtn4.addEventListener("click", (e) => {
//     sublist4.classList.toggle("show");
//     event.preventDefault()
// });
// calendarbtn1.addEventListener("click",(e)=>{
//     calendarbtn1.classList.add("active")
//     calendarbtn2.classList.remove("active");
//     calendarbtn3.classList.remove("active");
// })
// calendarbtn2.addEventListener("click",(e)=>{
//     calendarbtn2.classList.add("active")
//     calendarbtn1.classList.remove("active");
//     calendarbtn3.classList.remove("active");
// })
// calendarbtn3.addEventListener("click",(e)=>{
//     calendarbtn3.classList.add("active")
//     calendarbtn2.classList.remove("active");
//     calendarbtn1.classList.remove("active");
// })
// usermenubtn.addEventListener("click",(e)=>{
//     usermenu.classList.toggle("show")
//
//
// })
// submenus.forEach(submenu=>{
//     submenu.addEventListener('click',(e)=>{
//         e.preventDefault();
//         submenus.forEach(active=>active.classList.remove('active'));
//         submenu.classList.add('active');
//         menubtn1.classList.remove('current')
//         menubtn2.classList.remove('current')
//         menubtn3.classList.remove('current')
//         menubtn4.classList.remove('current')
//         sublist1.classList.remove('show')
//         sublist2.classList.remove('show')
//         sublist3.classList.remove('show')
//         sublist4.classList.remove('show')
//
//         const closestMenuBtn = submenu.closest('.submenu');
//         const closeMenu = submenu.closest('.menu-sub-list');
//         if (closestMenuBtn) {
//                 const menuBtn = closestMenuBtn.parentElement.previousElementSibling
//
//                 if (menuBtn) {
//                     closeMenu.classList.add('show')
//                     menuBtn.classList.add('current'); // 또는 toggle
//                 }
//         }
//     });
// })
// datebtn.forEach(btn=>{
//
//     btn.addEventListener('click',(e)=>{
//
//         btn.classList.toggle('invalid');
//     })
// })
// tabnames.forEach(tabname=>{
//     tabname.addEventListener('click',(e)=>{
//         e.preventDefault();
//         tabnames.forEach(tab=>tab.classList.remove('active'));
//         tabname.classList.add('active');
//     });
// });


const menuBtns = document.querySelectorAll(".menu-btn");
const subLists = document.querySelectorAll(".menu-sub-list");
const subLinks = document.querySelectorAll(".menu-sub-list .boot-link");
const tabNames = document.querySelectorAll(".tab-name");

menuBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const nextUl = btn.nextElementSibling;
        const icon = btn.querySelector(".icon-wrapper i");

        // 서브메뉴 없는 경우
        if (!nextUl || !nextUl.classList.contains("menu-sub-list")) {
            menuBtns.forEach((b) => b.classList.remove("current1"));
            subLinks.forEach((l) => l.classList.remove("active"));
            btn.classList.add("current1");
            return;
        }

        // 서브메뉴 있는 경우
        if (nextUl.classList.contains("show")) {
            nextUl.classList.remove("show");
            if (icon) icon.classList.remove("rotate");
        } else {
            subLists.forEach((ul) => ul.classList.remove("show"));
            document.querySelectorAll(".icon-wrapper i").forEach((ic) => ic.classList.remove("rotate"));

            nextUl.classList.add("show");
            if (icon) icon.classList.add("rotate");
        }
    });
});

const ROUTES = {
    '회원목록': () => {
        // (A) SSR 방식이면 그냥 페이지 이동
        // location.href = '/admin/customers';

        // (B) SPA 방식이면 해당 레이아웃 mount + 기본 로드
        mountCustomersPage();      // 레이아웃 보이기/주입
        setList(showList);         // 기본: 전체/혹은 일반 회원 등 원하는 기본값
        bindCustomerTabs();        // 탭 이벤트 연결(한 번만)
    },
    '회원 문의 목록': () => {
        // location.href = '/admin/customers/inquiries';
        mountCustomerInquiryPage();
    },
    '상품 목록': () => {
        // location.href = '/admin/products';
        mountProductsPage();
    },
};

// 서브메뉴 클릭 이벤트
subLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        subLinks.forEach((l) => l.classList.remove("active"));
        menuBtns.forEach((btn) => btn.classList.remove("current"));

        link.classList.add("active");

        const parentUl = link.closest(".menu-sub-list");
        if (parentUl) {
            const parentBtn = parentUl.previousElementSibling;
            if (parentBtn && parentBtn.classList.contains("menu-btn")) {
                parentBtn.classList.add("current");
            }
        }

        const key = link.dataset.key || link.textContent.trim();
        (ROUTES[key] || (() => console.log("준비 중")) )();
        // if (key === '회원목록') {
        //     console.log("회원목록 클릭함");
        //     // await loadCustomers(1); // JSON 받아서 renderCustomerTable로 렌더
        // } else if (key === '회원 문의 목록') {
        //     // await loadProducts(1);
        //     console.log("회원 문의 목록 클릭함");
        // } else if (key === '상품관리') {
        //     // await loadProducts(1);
        //     console.log("상품관리 클릭함");
        // } else if (key === '결제 내역') {
        //     // await loadProducts(1);
        //     console.log("결제 내역 클릭함");
        // } else if (key === '판매자 목록') {
        //     // await loadProducts(1);
        //     console.log("판매자 목록 클릭함");
        //     console.log("판매자 목록 클릭함");
        // } else if (key === '판매자 문의 목록') {
        //     // await loadProducts(1);
        //     console.log("판매자 문의 목록 클릭함");
        // } else if (key === '매입 승인 목록 목록') {
        //     // await loadProducts(1);
        //     console.log("매입 승인 목록 목록 클릭함");
        // } else if (key === '배너 등록 목록') {
        //     // await loadProducts(1);
        //     console.log("배너 등록 목록 클릭함");
        // } else {
        //     // content.innerHTML = `<p>준비 중</p>`;
        //     console.log("?????");
        // }
    });
});

function mountCustomersPage() {
    // 예시) 섹션 show/hide
    const customersPage = document.querySelector("#page-customers");
    const others = document.querySelectorAll(".page-section");
    others.forEach(sec => sec.classList.add("d-none"));
    customersPage?.classList.remove("d-none");

    // 또는 HTML 조각을 주입하는 방식이면 여기서 innerHTML 채우고,
    // 그 다음 bindCustomerTabs() 호출
}


// 상단 tab-name 누르면 사이드 바 따라가는 이벤트
tabNames.forEach((headerTabname) => {
    headerTabname.addEventListener("click", (e) => {
        e.preventDefault();

        const tabText = headerTabname.textContent.trim();

        // 상단 탭 active 초기화
        tabNames.forEach((headerTab) => headerTab.classList.remove("active"));
        headerTabname.classList.add("active");

        // 사이드 링크 active 초기화 + 같은 텍스트만 active
        subLinks.forEach((subLink) => {
            const linkText = subLink.textContent.trim().replace("-", "").trim();
            if (linkText === tabText) {
                subLink.classList.add("active");

                // 메뉴도 열고 current 붙이기
                const parentSubLink = subLink.parentElement.parentElement;
                const parentSubBtton = document.querySelector(
                    `.menu-btn[aria-controls="${parentSubLink.id}"]`
                );
                parentSubBtton.classList.add("current");
                parentSubLink.classList.add("show");

                const checkSubIcon =
                    parentSubBtton.querySelector(".icon-wrapper i");
                checkSubIcon.classList.remove("mdi-chevron-right");
                checkSubIcon.classList.add("mdi-chevron-down");
            } else {
                subLink.classList.remove("active");
            }
        });

        if (tabText === "전체") {
            setList(showList);
        } else if (tabText === "일반 회원") {
            // console.log(`탭 '${tabText}' 클릭됨`);
            setList(showNonSubscribedList)
        } else if(tabText === "구독 회원"){
            setList(showSubscribedList);
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
const showList = async (page = 1) => {
    const customersCriteria = await customerService.getCustomerList(page, customerLayout.showList);
    customerLayout.renderPagination(customersCriteria.criteria);
    customerLayout.customerCount(customersCriteria.criteria);

    // console.log(customersCriteria)
    return customersCriteria;
}

// 일반 회원
const showNonSubscribedList = async (page = 1) => {
    const customersCriteria = await customerService.getNonSubscribedCustomerList(page, customerLayout.showNonSubscribedList);
    // console.log(customersCriteria)
    customerLayout.renderPagination(customersCriteria.criteria);
    customerLayout.customerCount(customersCriteria.criteria);
    return customersCriteria;
};

// 구독 회원
const showSubscribedList = async (page = 1) => {
    const customersCriteria = await customerService.getSubscribedCustomerList(page, customerLayout.showSubscribedList);
    customerLayout.renderPagination(customersCriteria.criteria);
    customerLayout.customerCount(customersCriteria.criteria);
    return customersCriteria;
};

const setList = (loader) => {
    currentLoader = loader;
    currentLoader(1); // 첫 페이지
    customerLayout.connectToPagination((page) => currentLoader(page));
};

setList(showList);

// ########################### 회원상세 ###########################
// 일반회원 상세 모달 창 열고 닫는 이벤트
const customerTable = document.querySelector(".table-container tbody");
const modal = document.querySelector(".member-modal");
const closeButtons = document.querySelectorAll(".close");

if(customerTable){
    customerTable.addEventListener("click", async  (e, callback)=>{
        modal.style.display = "block";

        setTimeout(() => {
            modal.classList.add("show");
            modal.style.background = "rgba(0,0,0,0.5)";
            document.body.classList.add("modal-open");
        }, 100);

        // 팝업 상세 내용
        const currentCustomerId = e.target.closest("tr").querySelector(".member-id").innerText;
        const customerDetail = await customerService.getCustomerDetail(currentCustomerId);

        customerLayout.showDetail(customerDetail);
    });
}

// 모달 닫기
document.addEventListener("click", (e) => {
    if (e.target.closest(".close") || e.target.closest(".btn-close")) {
        closeModal();
    }

    if (e.target === modal) {
        closeModal();
    }
});

// 공통 닫기 함수
function closeModal() {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
    setTimeout(() => {
        modal.style.display = "none";
    }, 100);
}



