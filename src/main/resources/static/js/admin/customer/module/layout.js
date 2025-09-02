// 회원목록(구매자)
const customerLayout = (() => {
    const contentLayout = () => {
        const contentArea = document.querySelector("#content-area");
        contentArea.innerHTML = `
            <div class="page-header">
                <div class="page-title">회원 관리</div>
                <div class="page-subtitle"></div>
            </div>
            <div class="page-body">
                <div class="tab-box">
                    <div class="tab-row white-panel">
                        <div class="row">
                            <div class="col col-auto">
                                <ul class="tab-name-list list-unstyled list-inline">
                                    <!-- 클릭 한 부분은 active -->
                                    <li class="tab-name active">전체</li>
                                    <li class="tab-name">일반 회원</li>
                                    <li class="tab-name">구독 회원</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-content">
                    <div class="table-layout white-panel">
                        <div class="filter-section">
                            <div class="row">
                                <div class="col-auto">
                                    <span class="count">총
                                        <span class="count-amount"></span>명
                                    </span>
                                </div>
                                <!-- PG 선택, 결제방식선택, 결제상태선택 버튼 -->
                                <div class="col-auto">
                                    <div class="filter-wrapper filter-search ml-1">
                                        <div class="input-group">
                                            <input class="form-control flex-grow-1 input-search" type="text" placeholder="이름/ID" value="">
                                            <div class="input-group-append">
                                                <button id="btn-customer-search" class="btn btn-search">
                                                    <span class="comp-icon icon-magnify" id="icons/ico-search.svg">
                                                        <svg class="icon-img" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path class="icon-color fill" d="m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113z" fill="#292929"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fill-table-layout">
                           <div class="fill-table-layout">
                                <table id="member-table" class="table grey-header-table w-100 member-table">
                                    <thead>
                                        <tr>
                                            <th class="td-name">회원번호</th>
                                            <th class="td-amount pr-4">이름</th>
                                            <th class="td-email">이메일</th>
                                            <th class="td-phone">핸드폰 번호</th>
                                            <th class="td-start">가입일</th>
                                            <th class="td-recent">최근 접속일</th>
                                            <th class="td-action">상세</th>
                                        </tr>
                                    </thead>
                                    <tbody>
    <!--                        여기 테이블 들어옴                    -->
                                    </tbody>
                               </table>
                           </div>
                           <nav class="rebound-pagination-wrapper mt-5 mb-4">
                                <ul class="pagination rebound-pagination">
    <!--                            여기 페이지 a버튼 들어옴-->
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade member-modal" style="display: none;">
                <div class="modal-dialog modal-lg">
<!--                    모달 내용 들어옴-->
                </div>
            </div>
        `;
    }

    // 회원 목록 테이블 - layout
    const customerRowTemplate  = (customer) => {
        return `
        <tr class="member-row" data-member-id="${customer.id}">
            <td class="td-name">
                <div class="member-name-wrap">
                    <span class="member-name">${customer.memberName}</span>
                    <span class="badge-label badge text-danger ml-2">${customer.subscriptionPaymentStatus == "success" ? "구독 회원" : "일반 회원"}</span>
                </div>
                <div class="member-id">${customer.id}</div>
            </td>
            <td class="td-amount text-center pr-4 font-weight-bold">
                <span class="member-name">${customer.memberName}</span>
                <span class="amount-unit"> 님</span>
            </td>
            <td class="td-email">${customer.memberEmail ? customer.memberEmail : "-"}</td>
            <td class="td-phone">${customer.memberPhone ? customer.memberPhone : "-"}</td>
            <td class="td-start">${customer.createdDate ? customer.createdDate : "-"}</td>
            <td class="td-recent">${customer.memberLastLoginDate ? customer.memberLastLoginDate : "-"}</td>
            <td class="td-action text-center">
                <button class="action-btn member-action-btn">
                    <i class="mdi mdi-chevron-right"></i>
                </button>
            </td>
        </tr>
    `;
    }

    // 회원 목록(전체)
    const showList = (customersCriteria) => {
        const customerContainer = document.querySelector("#member-table tbody");
        if (!customerContainer) return;

        let text = "";
        if (!customersCriteria.customers || customersCriteria.customers.length === 0) {
            text += `
                <tr class="member-row no-data" >
                    <td colspan="7">회원 목록이 없습니다.</td>
                </tr>
            `
        }
        customersCriteria.customers.forEach((customer) => {
            text += customerRowTemplate(customer);
        });

        customerContainer.innerHTML = text;
    }

    // 회원 목록(일반회원)
    const showNonSubscribedList = (customersCriteria) => {
        const customerContainer = document.querySelector("#member-table tbody");
        if (!customerContainer) return;

        let text = "";
        if (!customersCriteria.customers || customersCriteria.customers.length === 0) {
            text += `
                <tr class="member-row no-data">
                    <td colspan="7">회원 목록이 없습니다.</td>
                </tr>
            `
        }
        customersCriteria.customers.forEach((customer) => {
            text += customerRowTemplate(customer);
        });

        customerContainer.innerHTML = text;
    }

    // 회원 목록(구독회원)
    const showSubscribedList = (customersCriteria) => {
        const customerContainer = document.querySelector("#member-table tbody");
        if (!customerContainer) return;

        let text = "";
        if (!customersCriteria.customers || customersCriteria.customers.length === 0) {
            text += `
                <tr class="member-row no-data">
                    <td colspan="7">회원 목록이 없습니다.</td>
                </tr>
            `
        }
        customersCriteria.customers.forEach((customer) => {
            text += customerRowTemplate(customer);
        });

        customerContainer.innerHTML = text;
    }

    // 페이지네이션 - layout
    const renderPagination = (criteria) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        let html = ``;

        for (let i = criteria.startPage; i <= criteria.endPage; i++) {
            html += `
            <li class="page-item page-num">
                <a href="#" data-page="${i}" class="page-item-link page-item-num ${i === criteria.page ? 'active' : ''}">
                    ${i}
                </a>
            </li>
            `;
        }

        pagination.innerHTML = html;
    };

    // 페이지네이션 - event
    const connectToPagination = (navi) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        pagination.addEventListener("click", (e) => {
            e.preventDefault();

            const linkButton = e.target.closest(".page-item-link");
            const page = linkButton.dataset.page;
            navi(page);
        });
    };

    // 총 합계
    const totalCount = (criteria) => {
        const totalCountText = document.querySelector("#content-area .count-amount");
        if (!totalCountText) return;

        totalCountText.textContent = criteria.total;
    };

    // 나이 계산
    const calculateAge = (birthDateString) => {
        const today = new Date();
        const birthDate = new Date(birthDateString);

        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        const day = today.getDate() - birthDate.getDate();

        if (month < 0 || (month === 0 && day < 0)) {
            age--;
        }

        return age;
    };

    // 회원 상세
    const showDetail = (customerDetail) => {
        const tableDetail = document.querySelector(".modal-dialog");

        // 구매내역 - layout
        let paymentRows = "";
        if (!customerDetail.payments || customerDetail.payments.length === 0) {
            paymentRows = `
                <tr>
                    <td colspan="4" style="text-align:center; padding:26px 16px">결제 내역이 없습니다.</td>
                </tr>
            `;
        } else {
            customerDetail.payments.forEach((payment) => {
                paymentRows += `
                    <tr>
                        <td>${payment.id ? payment.id : "-"}</td>
                        <td>${payment.productName ? payment.productName : "-"}</td>
                        <td>${payment.requestPrice ? payment.requestPrice : "-"}</td>
                        <td>${payment.paymentDate ? payment.paymentDate : "-"}</td>
                    </tr>
                `;
            });
        }

        // 회원 - layout
        tableDetail.innerHTML= `
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        (${customerDetail.id}) ${customerDetail.memberName}
                        <span class="badge-label text-danger font-weight-bold ml-2">일반회원</span>
                    </div>
                    <button class="close">
                        <i class="mdi mdi-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="divider">
                        <div class="tab-view">
                            <div class="tab-view-header"></div>
                            <div class="tab-view-body">
                                <div>
                                    <div class="tab-inner tab-detail">
                                        <!-- 일반회원 상세정보 -->
                                        <div class="info-layout detail-info">
                                            <div class="info-title justify-content-between">
                                                <div class="flex-left d-flex">
                                                    <div class="title">회원 상세정보</div>
                                                </div>
                                                <div class="flex-right"></div>
                                            </div>
                                            <div class="d-table w-100 table-member-detail">
                                                <!-- 테이블 왼쪽 -->
                                                <div class="d-table-cell">
                                                    <table class="info-table left-table">
                                                        <tbody>
                                                            <tr>
                                                                <th>이름</th>
                                                                <td>${customerDetail.memberName ? customerDetail.memberName : "-"}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>핸드폰 번호</th>
                                                                <td>${customerDetail.memberPhone ? customerDetail.memberPhone : "-"}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>가입일</th>
                                                                <td>${customerDetail.createdDate ? customerDetail.createdDate : "-"}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>나이</th>
                                                                <td>${calculateAge(customerDetail.memberBirth) ? calculateAge(customerDetail.memberBirth) : "-"}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!-- 테이블 오른쪽 -->                                                        
                                                <div class="d-table-cell">
                                                    <table class="info-table right-table">
                                                        <tbody>
                                                            <tr>
                                                                <th>회원ID</th>
                                                                <td>${customerDetail.id ? customerDetail.id : "-"}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>이메일</th>
                                                                <td>${customerDetail.memberEmail ? customerDetail.memberEmail : "-"}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>최근 접속일</th>
                                                                <td>${customerDetail.memberLastLoginDate ? customerDetail.memberLastLoginDate : "-"}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>성별</th>
                                                                <td>${customerDetail.memberGender === "MALE" ? "남성" : customerDetail.memberGender === "FEMALE" ? "여성" : ""}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="info-layout detail-info">
                                            <div class="info-title justify-content-between">
                                                <div class="flex-left d-flex">
                                                    <div class="title">결제내역
                                                        <i class="mdi mdi-menu-left ml-2"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-right"></div>
                                            </div>
                                            <div class="d-table w-100">
                                                <table class="info-table">
                                                    <thead>
                                                        <tr>
                                                            <th>총 주문수</th>
                                                            <th>총 결제금액</th>
                                                            <th>최근 결제일</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>${customerDetail.paymentCalculate.totalOrders ? customerDetail.paymentCalculate.totalOrders : "-"}</td>
                                                            <td>${customerDetail.paymentCalculate.totalPrice ? customerDetail.paymentCalculate.totalPrice : "-"}</td>
                                                            <td>${customerDetail.paymentCalculate.lastPaymentDate ? customerDetail.paymentCalculate.lastPaymentDate : "-"}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>                             
                                        </div>
                                        <!-- 회원 작성 게시글 -->
                                        <div class="info-layout detail-info">
                                            <div class="info-title justify-content-between">
                                                <div class="flex-left d-flex">
                                                    <!-- 작성 게시글 클릭 시 콘텐츠 관리 내 게시글 페이지로 이동 -->
                                                    <div class="title">구매내역
                                                        <i class="mdi mdi-menu-left ml-2"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-right"></div>
                                            </div>
                                            <div class="d-table w-100">
                                                <table class="info-table">
                                                    <thead>
                                                        <tr>
                                                            <th>주문번호</th>
                                                            <th>물품</th>
                                                            <th>가격</th>
                                                            <th>결제일</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        ${paymentRows}                                                                                                                               
                                                    </tbody>
                                                </table>
                                            </div>                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-close btn btn-outline-filter">닫기</button>
                </div>
            </div>
           `;
    }

    return {contentLayout:contentLayout, showList:showList, showNonSubscribedList:showNonSubscribedList, showSubscribedList:showSubscribedList, renderPagination:renderPagination, connectToPagination:connectToPagination, totalCount:totalCount, showDetail:showDetail};
})();

// 회원목록(판매자)
const sellerLayout = (() => {
    const contentLayout = () => {
        const contentArea = document.querySelector("#content-area");
        contentArea.innerHTML = `
            <div class="page-header">
                <div class="page-title">판매자 관리</div>
                <div class="page-subtitle"></div>
            </div>
            <div class="page-body">
                <div class="tab-box">
                    <div class="tab-row white-panel">
                        <div class="row">
                            <div class="col col-auto">
                                <ul class="tab-name-list list-unstyled list-inline">
                                    <!-- 클릭 한 부분은 active -->
                                    <li class="tab-name active">전체</li>
                                    <li class="tab-name">일반 로그인</li>
                                    <li class="tab-name">카카오 로그인</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-content">
                    <div class="table-layout white-panel">
                        <div class="filter-section">
                            <div class="row">
                                <div class="col-auto">
                                    <span class="count">총
                                        <span class="count-amount">n</span>명
                                    </span>
                                </div>
                                <!-- PG 선택, 결제방식선택, 결제상태선택 버튼 -->
                                <div class="col-auto">
                                    <div class="filter-wrapper filter-search ml-1">
                                        <div class="input-group">
                                            <input class="form-control flex-grow-1 input-search" type="text" placeholder="이름/ID" value="">
                                            <div class="input-group-append">
                                                <button id="btn-customer-search" class="btn btn-search">
                                                    <span class="comp-icon icon-magnify" id="icons/ico-search.svg">
                                                        <svg class="icon-img" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path class="icon-color fill" d="m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113z" fill="#292929"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fill-table-layout">
                           <div class="fill-table-layout">
                                <table id="seller-table" class="table grey-header-table w-100 text-center receipt-table seller-table">
                                    <thead>
                                        <tr>
                                            <th class="td-name">판매자번호</th>
                                            <th class="td-amount pr-4">이름</th>
                                            <th class="td-name">출고지 주소</th>
                                            <th class="td-email">이메일</th>
                                            <th class="td-phone">핸드폰 번호</th>
                                            <th class="td-start">가입일</th>
                                            <th class="td-recent">최근 접속일</th>
                                            <th class="td-action">상세</th>
                                        </tr>
                                    </thead>
                                    <tbody>
    <!--                        여기 테이블 들어와야함                    -->
                                    </tbody>
                               </table>
                           </div>
                           <nav class="rebound-pagination-wrapper mt-5 mb-4">
                                <ul class="pagination rebound-pagination">
    <!--                            여기 페이지 a버튼 들어와야함-->
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade member-modal" style="display: none;">
                <div class="modal-dialog modal-lg">
<!--                    모달 내용 들어와야함-->
                </div>
            </div>
        `;
    }

    // 회원 목록 테이블 - layout
    const sellerRowTemplate  = (seller) => `
        <tr>
            <td class="td-name">
                <div class="member-name">
                    <span class="member-name">${seller.memberName ? seller.memberName : "-"}</span>
                    <span class="badge-label badge text-danger ml-2">${seller.memberProvider == "YOU_I" ? "일반 로그인" : "카카오 로그인"}</span>
                </div>
                <div class="member-id">${seller.id ? seller.id : "-"}</div>
            </td>
            <td class="td-amount text-center pr-4 font-weight-bold">
                <span class="member-name">${seller.memberName ? seller.memberName : "-"}</span>
                <span class="amount-unit"> 님</span>
            </td>
            <td class="td-address">${(seller.address || seller.addressDetail) ? `${seller.address ?? ""} ${seller.addressDetail ?? ""}` : "-"}</td>
            <td class="td-email">${seller.memberEmail ? seller.memberEmail : "-"}</td>
            <td class="td-phone">${seller.memberPhone ? seller.memberPhone : "-"}</td>
            <td class="td-start">${seller.createdDate ? seller.createdDate : "-"}</td>
            <td class="td-recent">${seller.memberLastLoginDate ? seller.memberLastLoginDate : "-"}</td>
            <td class="td-action text-center">
                <button class="action-btn seller-action-btn">
                    <i class="mdi mdi-chevron-right"></i>
                </button>
            </td>
        </tr>
    `;

    // 회원 목록(전체)
    const showList = (sellersCriteria) => {
        const sellerContainer = document.querySelector(".seller-table tbody");
        if (!sellerContainer) return;

        let text = "";
        if (!sellersCriteria.sellers || sellersCriteria.sellers.length === 0) {
            text += `
                <tr class="member-row no-data">
                    <td class="" colspan="8">회원 목록이 없습니다.</td>
                </tr>
            `
        }
        sellersCriteria.sellers.forEach((seller) => {
            text += sellerRowTemplate(seller);
        });

        sellerContainer.innerHTML = text;
    }

    // 회원 목록(일반)
    const showYoueatieatList = (sellersCriteria) => {
        const sellerContainer = document.querySelector(".seller-table tbody");
        if (!sellerContainer) return;

        let text = "";
        if (!sellersCriteria.sellers || sellersCriteria.sellers.length === 0) {
            text += `
                <tr class="member-row no-data">
                    <td class="" colspan="8">회원 목록이 없습니다.</td>
                </tr>
            `
        }
        sellersCriteria.sellers.forEach((seller) => {
            text += sellerRowTemplate(seller);
        });

        sellerContainer.innerHTML = text;
    }

    // 회원 목록(카카오)
    const showKakaoList = (sellersCriteria) => {
        const sellerContainer = document.querySelector(".seller-table tbody");
        if (!sellerContainer) return;

        let text = "";
        if (!sellersCriteria.sellers || sellersCriteria.sellers.length === 0) {
            text += `
                <tr class="member-row no-data">
                    <td class="" colspan="8">회원 목록이 없습니다.</td>
                </tr>
            `
        }
        sellersCriteria.sellers.forEach((seller) => {
            text += sellerRowTemplate(seller);
        });

        sellerContainer.innerHTML = text;
    }

    // 페이지네이션 - layout
    const renderPagination = (criteria) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        let html = ``;

        for (let i = criteria.startPage; i <= criteria.endPage; i++) {
            html += `
            <li class="page-item page-num">
                <a href="#" data-page="${i}" class="page-item-link page-item-num ${i === criteria.page ? 'active' : ''}">
                    ${i}
                </a>
            </li>
            `;
        }

        pagination.innerHTML = html;
    };

    // 페이지네이션 - event
    const connectToPagination = (navi) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        pagination.addEventListener("click", (e) => {
            e.preventDefault();

            const linkButton = e.target.closest(".page-item-link");
            const page = linkButton.dataset.page;
            navi(page);
        });
    };

    // 총 합계
    const totalCount = (criteria) => {
        const totalCountText = document.querySelector("#content-area .count-amount");
        if (!totalCountText) return;

        totalCountText.textContent = criteria.total;
    };

    // 나이 계산
    const calculateAge = (birthDateString) => {
        const today = new Date();
        const birthDate = new Date(birthDateString);

        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        const day = today.getDate() - birthDate.getDate();

        if (month < 0 || (month === 0 && day < 0)) {
            age--;
        }

        return age;
    };

    // 회원 상세
    const showDetail = (sellerDetail) => {
        const tableMemberDetail = document.querySelector(".modal-dialog");

        // 판매 상세내역 - layout
        let purchaseRows = "";
        if (!sellerDetail.purchase || sellerDetail.purchase.length === 0) {
            purchaseRows = `
                <tr>
                    <td colspan="4" style="text-align:center; padding:26px 16px">구매 내역이 없습니다.</td>
                </tr>
            `;
        } else {
            sellerDetail.purchase.forEach((purchase) => {
                purchaseRows += `
                    <tr>
                        <td>${purchase.purchaseRequestProductName}</td>
                        <td>${purchase.purchaseRequestQuantityKg}</td>
                        <td>${purchase.purchaseRequestProposedPricePerKg}</td>
                        <td>${purchase.purchaseRequestDateOfManufacture}</td>
                    </tr>
                `;
            });
        }

        // 회원 - layout
        tableMemberDetail.innerHTML= `
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        (${sellerDetail.id}) ${sellerDetail.memberName}
                        <span class="badge-label text-danger font-weight-bold ml-2">일반로그인</span>
                    </div>
                    <button class="close">
                        <i class="mdi mdi-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="divider">
                        <div class="tab-view">
                            <div class="tab-view-header"></div>
                            <div class="tab-view-body">
                                <div>
                                    <div class="tab-inner tab-detail">
                                        <!-- 판매자 상세정보 -->
                                        <div class="info-layout detail-info">
                                            <div class="info-title justify-content-between">
                                                <div class="flex-left d-flex">
                                                    <div class="title">판매자 상세정보</div>
                                                </div>
                                                <div class="flex-right"></div>
                                            </div>
                                            <div class="d-table w-100 table-member-detail">
                                                <!-- 테이블 왼쪽 -->
                                                <div class="d-table-cell">
                                                    <table class="info-table left-table">
                                                        <tbody>
                                                            <tr>
                                                                <th>이름</th>
                                                                <td>${sellerDetail.memberName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>핸드폰 번호</th>
                                                                <td>${sellerDetail.memberPhone}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>출고지 주소</th>
                                                                <td>${(sellerDetail.address || sellerDetail.addressDetail) ? `${sellerDetail.address ?? ""} ${sellerDetail.addressDetail ?? ""}` : "-" }</td>
                                                            </tr>
                                                            <tr>
                                                                <th>나이</th>
                                                                <td>${calculateAge(sellerDetail.memberBirth)}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <!-- 테이블 오른쪽 -->                                                        
                                                <div class="d-table-cell">
                                                    <table class="info-table right-table">
                                                        <tbody>
                                                            <tr>
                                                                <th>회원ID</th>
                                                                <td>${sellerDetail.id}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>이메일</th>
                                                                <td>${sellerDetail.memberEmail}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>최근 접속일</th>
                                                                <td>${sellerDetail.memberLastLoginDate ? sellerDetail.memberLastLoginDate : "-"}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>성별</th>
                                                                <td>${sellerDetail.memberGender === "MALE" ? "남성" : sellerDetail.memberGender === "FEMALE" ? "여성" : ""}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="info-layout detail-info">
                                            <div class="info-title justify-content-between">
                                                <div class="flex-left d-flex">
                                                    <div class="title">판매내역</div>
                                                </div>
                                                <div class="flex-right"></div>
                                            </div>
                                            <div class="d-table w-100">
                                                <table class="info-table">
                                                    <thead>
                                                        <tr>
                                                            <th>총 판매횟수</th>
                                                            <th>총 판매액</th>
                                                            <th>최근 판매일</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>${sellerDetail.paymentCalculate.totalOrders}</td>
                                                            <td>${sellerDetail.paymentCalculate.totalPrice}</td>
                                                            <td>${sellerDetail.paymentCalculate.lastPaymentDate ? sellerDetail.paymentCalculate.lastPaymentDate : "-"}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>                             
                                        </div>
                                        <!-- 판매 상세내역 -->
                                        <div class="info-layout detail-info">
                                            <div class="info-title justify-content-between">
                                                <div class="flex-left d-flex">
                                                    <div class="title">판매 상세내역</div>
                                                </div>
                                                <div class="flex-right"></div>
                                            </div>
                                            <div class="d-table w-100">
                                                <table class="info-table">
                                                    <thead>
                                                        <tr>
                                                            <th>물품</th>
                                                            <th>중량(kg)</th>
                                                            <th>kg당가격</th>
                                                            <th>판매일</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                       ${purchaseRows} 
                                                    </tbody>
                                                </table>
                                            </div>                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-close btn btn-outline-filter">닫기</button>
                </div>
            </div>
           `;
    }

    return {contentLayout:contentLayout, showList:showList, renderPagination:renderPagination, connectToPagination:connectToPagination, totalCount:totalCount, showDetail:showDetail, showKakaoList:showKakaoList, showYoueatieatList:showYoueatieatList};
})();

// 구매자 문의
const inquiryLayout = (() => {
    const contentLayout = () => {
        const contentArea = document.querySelector("#content-area");
        contentArea.innerHTML = `
            <div class="page-header">
                <div class="page-title">문의 내역 조회</div>
                <div class="page-subtitle">구매자 문의</div>
            </div>
            <div class="page-body">
                <div class="receipt-index">
                    <div class="pill-row row">
                        <div class="col col-md-6 col-lg-4 col-xl-3">
                            <div class="pill-box">
                                <div class="pill-title">
                                    <span class="badge-label text-primary">
                                        <i class="mdi mdi-check-all"></i>
                                    </span>
                                    <span>답변완료</span>
                                </div>
                                <div class="pill-value">
                                    <span id="answered-amount" class="span-amount">0</span>
                                    <span class="amount-unit">건</span>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-6 col-lg-4 col-xl-3">
                            <div class="pill-box cancel-box">
                                <div class="pill-title">
                                    <span class="badge-label text-danger">
                                        <i class="mdi mdi-clock-alert-outline"></i>
                                    </span>
                                    <span>미답변</span>
                                </div>
                                <div class="pill-value">
                                    <span id="unanswered-amount" class="span-amount">0</span>
                                    <span class="amount-unit">건</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-content">
                    <div class="table-layout white-panel">
                        <div class="filter-section">
                            <div class="row">
                                <div class="col-auto">
                                    <span class="count">총
                                        <span class="count-amount">0</span>건
                                    </span>
                                </div>
                                    <div class="col-auto">
                                        <div class="filter-wrapper filter-status mr-2">
                                            <div class="boot-pop-checkbox">
                                                <button class="boot-pop-checkbox-filter-btn btn btn-outline-filter" id="btn-filter-status">
                                                    답변상태 <i class="mdi mdi-menu-down"></i>
                                                </button>
                                                <div class="bt-pop-menu">
                                                <!-- 해당아래로 show지워야함주석 -->
                                                    <div id="pop-menu-bt2" class="bt-pop-menu-context exists" style="top: 40px; bottom: unset; left: -64.75px; right: unset; transform: scale(0.9, 0.9) translate3d(0px, 0px, 0px);">
                                                        <ul class="list-wrapper list-unstyled seller-status">
                                                            <li class="text-center font-weight-bold">발급상태</li>
                                                            <li id="checkboxactive1" class="list-item">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <label for="check-box1" class="check-status">
                                                                            <input type="checkbox" name="" id="check-box1">
                                                                            답변완료
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li id="checkboxactive2" class="list-item">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <label for="check-box2" class="check-status">
                                                                            <input type="checkbox" name="" id="check-box2">
                                                                            미답변
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="list-item mt-2">
                                                                <button id="filter-apply" class="btn btn-outline-primary btn-sm">확인</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="col text-right">                           
                                </div>
                                <div class="col-auto">
                                    <div class="filter-wrapper filter-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control flex-grow-1 input-search" placeholder="문의번호/구매자">
                                            <div class="input-group-append">
                                                <button id="btn-inquiry-search" class="btn btn-search">
                                                    <span class="comp-icon icon-magnify" id="icons/ico-search.svg"><svg class="icon-img" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="icon-color fill" d="m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113z" fill="#292929"></path></svg></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="fill-table-layout">
                            <div class="fill-table-layout">
                                <table id="receipt-table" class="table grey-header-table w-100 text-center receipt-table">
                                    <colgroup>
                                        <col style="width:15%">
                                        <col style="width:15%">
                                        <col style="width:17%">
                                        <col style="width:20%">
                                        <col style="width:20%">
                                        <col style="width:15%">
                                    </colgroup>                           
                                <thead>
                                    <tr>
                                        <th class="td-name">문의번호</th>
                                        <th class="td-seller">구매자</th>
                                        <th class="td-status">문의시간</th>
                                        <th class="td-user">답변상태</th>
                                        <th class="td-at">답변시간</th>
                                        <th class="td-action">상세</th>                   
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            </div>
                            <nav class="rebound-pagination-wrapper mt-5 mb-4">
                                <ul class="pagination rebound-pagination">
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div id ="modal" class="modal fade receipt-modal" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-lg">
<!--                모달 들어옴-->
                </div>
            </div>
        `;
    }

    // 문의 목록(전체)
    const showList = (inquiriesCriteria) => {
        const inquiriesContainer = document.querySelector("#receipt-table tbody");
        if (!inquiriesContainer) return;

        let text = "";
        if (!inquiriesCriteria.inquiries || inquiriesCriteria.inquiries.length === 0) {
            text += `
                <tr class="inquiry-row no-data">
                    <td class="" colspan="6">문의 목록이 없습니다.</td>
                </tr>
            `
        }

        inquiriesCriteria.inquiries.forEach((inquiry) => {
            text += `
            <tr class="inquiry-row" data-inquiry-id="${inquiry.id}">
                <td>${inquiry.id}</td>
                <td class="td-name">
                    <div class="member-name-wrap">
                        <span class="member-name">${inquiry.memberName}</span>
                    </div>
                    <div class="member-id">${inquiry.memberId}</div>
                </td>
                <td>${inquiry.inquiryUpdatedDate}</td>
                <td>${inquiry.inquiryAnswerContent ? "답변완료" : "미답변"}</td>
                <td>${inquiry.answerCreatedDate ? inquiry.answerCreatedDate : "-"}</td>
                <td class="td-action text-center">
                    <button class="action-btn inquiry-action-btn">
                        <i class="mdi mdi-chevron-right"></i>
                    </button>
                </td>
            </tr>`;
        });

        inquiriesContainer.innerHTML = text;
    };

    // 페이지네이션 - layout
    const renderPagination = (criteria) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        let html = ``;

        for (let i = criteria.startPage; i <= criteria.endPage; i++) {
            html += `
            <li class="page-item page-num">
                <a href="#" data-page="${i}" class="page-item-link page-item-num ${i === criteria.page ? "active" : ""}">
                    ${i}
                </a>
            </li>
            `;
        }

        pagination.innerHTML = html;
    };

    // 페이지네이션 - event
    const connectToPagination = (navi) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        pagination.addEventListener("click", (e) => {
            // if(e.target.classList.contains(".page-item-link")) {
            e.preventDefault();

            const linkButton = e.target.closest(".page-item-link");
            const page = linkButton.dataset.page;
            // const page = linkButton.getAttribute("href");
            navi(page);
            // }
        });
    };

    // 총 합계
    const totalCount = (criteria) => {
        const countText = document.querySelector("#content-area .count-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    // 답변완료 총 합계
    const answeredCount = (criteria) => {
        const countText = document.querySelector("#answered-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    // 미답변 총 합계
    const anUnansweredCount = (criteria) => {
        const countText = document.querySelector("#unanswered-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    // 문의 상세
    const showDetail = (inquiryDetail) => {
        const tableDetail = document.querySelector(".modal-dialog");

        // 문의 - layout
        tableDetail.innerHTML= `
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        문의내역
                        <span class="badge-label text-danger font-weight-bold ml-2">${inquiryDetail.inquiryAnswerContent ? "답변완료": "미답변"}</span>
                    </div>
                    <button id="close" class="close">
                        <i class="mdi mdi-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="divider"></div>
                    <div class="tab-view">
                        <div class="tab-view-header"></div>
                        <div class="tab-view-body">
                            <div style="display: block;">
                                <div class="tab-inner tab-detail">
                                    <div class="info-layout detail-info">
                                        <div class="info-title justify-content-between">
                                            <div class="flex-left d-flex">
                                                <div class="title">문의정보</div>
                                            </div>
                                            <div class="flex-right"></div>
                                        </div>
                                        <div class="d-table w-100">
                                            <div class="d-table-cell">
                                                <table class="info-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>문의번호</th>
                                                            <td>${inquiryDetail.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>문의시간</th>
                                                            <td>${inquiryDetail.inquiryUpdatedDate ? inquiryDetail.inquiryUpdatedDate : "-"}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="d-table-cell">
                                                <table class="info-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>문의 유형</th>
                                                            <td>${inquiryDetail.inquiryCategory ? inquiryDetail.inquiryCategory : "-"}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>구매자 이름</th>
                                                            <td>${inquiryDetail.memberName}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-layout detail-info">
                                        <div class="info-title justify-content-between">
                                            <div class="flex-left d-flex">
                                                <div class="title">문의내용</div>
                                            </div>
                                        </div>
                                        <div class="d-table w-100">
                                            <div class="d-table-cell">
                                                <table class="info-table" style="height:100px">
                                                    <tbody>
                                                        <th>문의내용</th>
                                                        <td>${inquiryDetail.inquiryContent ? inquiryDetail.inquiryContent : "-"}</td>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-layout detail-info">
                                        <div class="info-title justify-content-between">
                                            <div class="flex-left d-flex">
                                                <div class="title">답변하기</div>
                                            </div>
                                        </div>
                                        <div class="d-table w-100">
                                            <div class="d-table-cell">
                                                <table class="info-table" style="height:100px">
                                                    <tbody>
                                                        <th>답변내용</th>
                                                        <td>${inquiryDetail.inquiryAnswerContent ?
            inquiryDetail.inquiryAnswerContent :
            `<form id="answerForm" data-inquiry-id="${inquiryDetail.id}">
                                                                <input class="inquiry-id-input" type="hidden" name="" value="${inquiryDetail.id}">
                                                                <textarea class="answer-textarea"
                                                                    name=""
                                                                    rows=""
                                                                    style="resize:none; border:none; padding:0; outline:none;"
                                                                    placeholder="답변을 입력하세요"></textarea>
                                                            </form>`}
                                                        </td>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    ${inquiryDetail.inquiryId ? "": `<button id="btn-answer" class="btn-close btn btn-outline-filter btn-answer">답변하기</button>`}
                </div>
            </div>
        `;
    }

    return {contentLayout:contentLayout, showList:showList, renderPagination:renderPagination, connectToPagination:connectToPagination, totalCount:totalCount, showDetail:showDetail, answeredCount:answeredCount, anUnansweredCount:anUnansweredCount};
})();

// 판매자 문의
const sellerInquiryLayout = (() => {
    const contentLayout = () => {
        const contentArea = document.querySelector("#content-area");
        contentArea.innerHTML = `
            <div class="page-header">
                <div class="page-title">문의 내역 조회</div>
                <div class="page-subtitle">구매자 문의</div>
            </div>
            <div class="page-body">
                <div class="receipt-index">
                    <div class="pill-row row">
                        <div class="col col-md-6 col-lg-4 col-xl-3">
                            <div class="pill-box">
                                <div class="pill-title">
                                    <span class="badge-label text-primary">
                                        <i class="mdi mdi-check-all"></i>
                                    </span>
                                    <span>답변완료</span>
                                </div>
                                <div class="pill-value">
                                    <span id="answered-amount" class="span-amount">0</span>
                                    <span class="amount-unit">건</span>
                                </div>
                            </div>
                        </div>
                        <div class="col col-md-6 col-lg-4 col-xl-3">
                            <div class="pill-box cancel-box">
                                <div class="pill-title">
                                    <span class="badge-label text-danger">
                                        <i class="mdi mdi-clock-alert-outline"></i>
                                    </span>
                                    <span>미답변</span>
                                </div>
                                <div class="pill-value">
                                    <span id="unanswered-amount" class="span-amount">0</span>
                                    <span class="amount-unit">건</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-content">
                    <div class="table-layout white-panel">
                        <div class="filter-section">
                            <div class="row">
                                <div class="col-auto">
                                    <span class="count">총
                                        <span class="count-amount">0</span>건
                                    </span>
                                </div>
                                    <div class="col-auto">
                                        <div class="filter-wrapper filter-status mr-2">
                                            <div class="boot-pop-checkbox">
                                                <button class="boot-pop-checkbox-filter-btn btn btn-outline-filter" id="btn-filter-status">
                                                    답변상태 <i class="mdi mdi-menu-down"></i>
                                                </button>
                                                <div class="bt-pop-menu">
                                                <!-- 해당아래로 show지워야함주석 -->
                                                    <div id="pop-menu-bt1" class= "bt-pop-menu-back"></div>
                                                    <div id="pop-menu-bt2" class="bt-pop-menu-context exists" style="top: 40px; bottom: unset; left: -64.75px; right: unset; transform: scale(0.9, 0.9) translate3d(0px, 0px, 0px);">
                                                        <ul class="list-wrapper list-unstyled">
                                                            <li class="text-center font-weight-bold">발급상태
                                                            </li>
                                                            <li id="checkboxactive1" class="list-item">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <label for="check-box1" class="check-status">
                                                                            <input type="checkbox" name="" id="check-box1">
                                                                            답변완료
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li id="checkboxactive2" class="list-item">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <label for="check-box2" class="check-status">
                                                                            <input type="checkbox" name="" id="check-box2">
                                                                            미답변
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="list-item mt-2">
                                                                <button id="filter-apply" class="btn btn-outline-primary btn-sm">확인</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="col text-right">                           
                                </div>
                                <div class="col-auto">
                                    <div class="filter-wrapper filter-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control flex-grow-1 input-search" placeholder="문의번호/구매자">
                                            <div class="input-group-append">
                                                <button id="btn-seller-inquiry-search" class="btn btn-search">
                                                    <span class="comp-icon icon-magnify" id="icons/ico-search.svg"><svg class="icon-img" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="icon-color fill" d="m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113z" fill="#292929"></path></svg></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="fill-table-layout">
                            <div class="fill-table-layout">
                                <table id="receipt-table" class="table grey-header-table w-100 text-center receipt-table">
                                    <colgroup>
                                        <col style="width:15%">
                                        <col style="width:15%">
                                        <col style="width:17%">
                                        <col style="width:20%">
                                        <col style="width:20%">
                                        <col style="width:15%">
                                    </colgroup>                           
                                <thead>
                                    <tr>
                                        <th class="td-name">문의번호</th>
                                        <th class="td-seller">구매자</th>
                                        <th class="td-status">문의시간</th>
                                        <th class="td-user">답변상태</th>
                                        <th class="td-at">답변시간</th>
                                        <th class="td-action">상세</th>                   
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            </div>
                            <nav class="rebound-pagination-wrapper mt-5 mb-4">
                                <ul class="pagination rebound-pagination">
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div id ="modal" class="modal fade receipt-modal" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-lg">
<!--                모달 들어옴-->
                </div>
            </div>
        `;
    }

    // 문의 목록(전체)
    const showList = (inquiriesCriteria) => {
        const inquiriesContainer = document.querySelector("#receipt-table tbody");
        if (!inquiriesContainer) return;

        let text = "";
        if (!inquiriesCriteria.inquiries || inquiriesCriteria.inquiries.length === 0) {
            text += `
                <tr class="member-row no-data">
                    <td class="" colspan="6">문의 목록이 없습니다.</td>
                </tr>
            `
        }
        inquiriesCriteria.inquiries.forEach((inquiry) => {
            text += `
            <tr class="inquiry-row" data-inquiry-id="${inquiry.id}">
                <td>${inquiry.id}</td>
                <td class="td-name">
                    <div class="member-name-wrap">
                        <span class="member-name">${inquiry.memberName}</span>
                    </div>
                    <div class="member-id">${inquiry.memberId}</div>
                </td>
                <td>${inquiry.inquiryUpdatedDate}</td>
                <td>${inquiry.inquiryAnswerContent ? "답변완료" : "미답변"}</td>
                <td>${inquiry.answerCreatedDate ? inquiry.answerCreatedDate : "-"}</td>
                <td class="td-action text-center">
                    <button class="action-btn inquiry-action-btn">
                        <i class="mdi mdi-chevron-right"></i>
                    </button>
                </td>
            </tr>`;
        });

        inquiriesContainer.innerHTML = text;
    };

    // 페이지네이션 - layout
    const renderPagination = (criteria) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        let html = ``;

        for (let i = criteria.startPage; i <= criteria.endPage; i++) {
            html += `
            <li class="page-item page-num">
                <a href="#" data-page="${i}" class="page-item-link page-item-num ${i === criteria.page ? "active" : ""}">
                    ${i}
                </a>
            </li>
            `;
        }

        pagination.innerHTML = html;
    };

    // 페이지네이션 - event
    const connectToPagination = (navi) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        pagination.addEventListener("click", (e) => {
            // if(e.target.classList.contains(".page-item-link")) {
            e.preventDefault();

            const linkButton = e.target.closest(".page-item-link");
            const page = linkButton.dataset.page;
            // const page = linkButton.getAttribute("href");
            navi(page);
            // }
        });
    };

    // 총 합계
    const totalCount = (criteria) => {
        const countText = document.querySelector("#content-area .count-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    // 답변완료 총 합계
    const answeredCount = (criteria) => {
        const countText = document.querySelector("#answered-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    // 미답변 총 합계
    const anUnansweredCount = (criteria) => {
        const countText = document.querySelector("#unanswered-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    // 문의 상세
    const showDetail = (inquiryDetail) => {
        const tableDetail = document.querySelector(".modal-dialog");

        // 문의 - layout
        tableDetail.innerHTML= `
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        문의내역
                        <span class="badge-label text-danger font-weight-bold ml-2">${inquiryDetail.inquiryAnswerContent ? "답변완료": "미답변"}</span>
                    </div>
                    <button id="close" class="close">
                        <i class="mdi mdi-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="divider"></div>
                    <div class="tab-view">
                        <div class="tab-view-header"></div>
                        <div class="tab-view-body">
                            <div style="display: block;">
                                <div class="tab-inner tab-detail">
                                    <div class="info-layout detail-info">
                                        <div class="info-title justify-content-between">
                                            <div class="flex-left d-flex">
                                                <div class="title">문의정보</div>
                                            </div>
                                            <div class="flex-right"></div>
                                        </div>
                                        <div class="d-table w-100">
                                            <div class="d-table-cell">
                                                <table class="info-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>문의번호</th>
                                                            <td>${inquiryDetail.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>문의시간</th>
                                                            <td>${inquiryDetail.inquiryUpdatedDate ? inquiryDetail.inquiryUpdatedDate : "-"}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="d-table-cell">
                                                <table class="info-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>문의 유형</th>
                                                            <td>${inquiryDetail.inquiryCategory ? inquiryDetail.inquiryCategory : "-"}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>구매자 이름</th>
                                                            <td>${inquiryDetail.memberName}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-layout detail-info">
                                        <div class="info-title justify-content-between">
                                            <div class="flex-left d-flex">
                                                <div class="title">문의내용</div>
                                            </div>
                                        </div>
                                        <div class="d-table w-100">
                                            <div class="d-table-cell">
                                                <table class="info-table" style="height:100px">
                                                    <tbody>
                                                        <th>문의내용</th>
                                                        <td>${inquiryDetail.inquiryContent ? inquiryDetail.inquiryContent : "-"}</td>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-layout detail-info">
                                        <div class="info-title justify-content-between">
                                            <div class="flex-left d-flex">
                                                <div class="title">답변하기</div>
                                            </div>
                                        </div>
                                        <div class="d-table w-100">
                                            <div class="d-table-cell">
                                                <table class="info-table" style="height:100px">
                                                    <tbody>
                                                        <th>답변내용</th>
                                                        <td>${inquiryDetail.inquiryAnswerContent ?
            inquiryDetail.inquiryAnswerContent :
            `<form id="answerForm" data-inquiry-id="${inquiryDetail.id}">
                                                                <input class="inquiry-id-input" type="hidden" name="" value="${inquiryDetail.id}">
                                                                <textarea class="answer-textarea"
                                                                    name=""
                                                                    rows=""
                                                                    style="resize:none; border:none; padding:0; outline:none;"
                                                                    placeholder="답변을 입력하세요"></textarea>
                                                            </form>`}
                                                        </td>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    ${inquiryDetail.inquiryId ? "": `<button id="btn-answer" class="btn-close btn btn-outline-filter btn-answer">답변하기</button>`}
                </div>
            </div>
        `;
    }

    return {contentLayout:contentLayout, showList:showList, renderPagination:renderPagination, connectToPagination:connectToPagination, totalCount:totalCount, showDetail:showDetail, answeredCount:answeredCount, anUnansweredCount:anUnansweredCount};
})();

// 매입 승인
const purchaseLayout = (() => {
    const contentLayout = () => {
        const contentArea = document.querySelector("#content-area");
        contentArea.innerHTML = `
            <div class="page-header">
                <div class="page-title">매입 승인 목록</div>
                <div class="page-subtitle"></div>
            </div>
            <div class="page-body">
                <div class="receipt-index">
                    <div class="pill-row row">
                        <div class="col col-md-6 col-lg-4 col-xl-3">
                            <div class="pill-box">
                                <div class="pill-title">
                                    <span class="badge-label text-primary">
                                        <i class="mdi mdi-check-all"></i>
                                    </span>
                                    <span>승인완료</span>
                                </div>
                                <div class="pill-value">
                                    <span id="purchase-amount" class="span-amount">0</span>
                                    <span class="amount-unit">건</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-content">
                    <div class="table-layout white-panel">
                        <div class="filter-section">
                            <div class="row">
                                <div class="col-auto">
                                    <span class="count">총
                                        <span class="count-amount">0</span>건
                                    </span>
                                </div>
                                <div class="col-auto">
                                    <div class="filter-wrapper filter-status mr-2"></div>
                                </div>
                                <div class="col text-right">                           
                                </div>
                                <div class="col-auto">
                                    <div class="filter-wrapper filter-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control flex-grow-1 input-search" placeholder="판매자명">
                                            <div class="input-group-append">
                                                <button id="btn-purchase-search" class="btn btn-search">
                                                    <span class="comp-icon icon-magnify" id="icons/ico-search.svg"><svg class="icon-img" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="icon-color fill" d="m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113z" fill="#292929"></path></svg></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="fill-table-layout">
                            <div class="fill-table-layout">
                                <table id="purchases-table" class="table grey-header-table w-100 text-center receipt-table purchases-table">
                                    <colgroup>
                                        <col style="width:14%">
                                        <col style="width:14%">
                                        <col style="width:14%">
                                        <col style="width:14%">
                                        <col style="width:14%">
                                        <col style="width:10%">
                                        <col style="width:10%">
                                        <col style="width:10%">
                                    </colgroup>                           
                                <thead>
                                    <tr>
                                        <th class="td-name">판매자명</th>
                                        <th>판매자 아이디</th>
                                        <th class="td-status">판매상품</th>
                                        <th class="td-user">kg당 단가</th>
                                        <th class="td-at">매입 신청일</th>
                                        <th>승인 상태</th>
                                        <th class="td-action">승인하기</th>  
                                        <th>상세보기</th>
                                    </tr>
                                </thead>
                                <tbody>
<!--                                테이블 내용 들어옴-->
                                </tbody>
                            </table>
                            </div>
                            <nav class="rebound-pagination-wrapper mt-5 mb-4">
                                <ul class="pagination rebound-pagination">
    <!--                            여기 페이지 a버튼 들어옴-->
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div id ="modal" class="modal fade receipt-modal" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-lg">
<!--                모달 들어옴-->
                </div>
            </div>
        `;
    }

    // 매입 목록(전체)
    const showList = (purchasesCriteria) => {
        const purchasesContainer = document.querySelector("#purchases-table tbody");
        if (!purchasesContainer) return;

        let text = "";
        const statusText = {
            PENDING: "대기",
            APPROVED: "승인",
            REJECTED: "거절"
        };

        if (!purchasesCriteria.purchases || purchasesCriteria.purchases.length === 0) {
            text += `
                <tr class="purchase-row no-data">
                    <td class="" colspan="8">매입 목록이 없습니다.</td>
                </tr>
            `
        }

        purchasesCriteria.purchases.forEach((purchase) => {
            const status = purchase.purchaseRequestApprovalStatus;
            const displayStatus = statusText[status]

            text += `
            <tr class="purchase-row" data-purchase-id="${purchase.id}">
                <td>${purchase.memberName}</td>
                <td>${purchase.memberId}</td>
                <td>${purchase.purchaseRequestProductName}</td>
                <td>${purchase.purchaseRequestProposedPricePerKg}</td>
                <td>${purchase.createdDate}</td>
                <td>${displayStatus}</td>
                <td class="td-pop-menu text-center">
                    <div class="bt-pop-menu">
                        <button type="button" class="pop-btn approval-action-btn">
                            <i class="mdi mdi-chevron-right"></i>
                        </button>
                        <div id="pop-menu-bt3" class="bt-pop-menu-context exists" style="top: 40px; bottom: unset; left: -64.75px; right: unset; transform: scale(0.9, 0.9) translate3d(0px, 0px, 0px);">
                        <ul class="list-wrapper list-unstyled">
                            <li class="text-center font-weight-bold">승인상태</li>
                            <li class="list-item">
                                <div class="row">
                                    <div class="col">
                                        <label for="radio-box3" class="radio-status">
                                            <input type="radio" name="status-${purchase.id}" id="radio-box3" data-status="approved"> 승인하기</label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-item">
                                <div class="row">
                                    <div class="col">
                                        <label for="radio-box4" class="radio-status">
                                            <input type="radio" name="status-${purchase.id}" id="radio-box4" data-status="rejected"> 승인거절</label>
                                    </div>
                                </div>
                            </li>
                            <li class="list-item mt-2">
                                <button class="btn btn-outline-primary btn-sm apply-status-btn">확인</button>
                            </li>
                        </ul>
                    </div>
                    </div>
                </td>
                <td class="td-action text-center">
                    <button type="button" class="action-btn purchase-action-btn">
                        <i class="mdi mdi-chevron-right"></i>
                    </button>
                </td>
            </tr>`;
        });

        purchasesContainer.innerHTML = text;
    };

    // 페이지네이션 - layout
    const renderPagination = (criteria) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        let html = ``;

        for (let i = criteria.startPage; i <= criteria.endPage; i++) {
            html += `
            <li class="page-item page-num">
                <a href="#" data-page="${i}" class="page-item-link page-item-num ${i === criteria.page ? "active" : ""}">
                    ${i}
                </a>
            </li>
            `;
        }

        pagination.innerHTML = html;
    };

    // 페이지네이션 - event
    const connectToPagination = (navi) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        pagination.addEventListener("click", (e) => {
            // if(e.target.classList.contains(".page-item-link")) {
            e.preventDefault();

            const linkButton = e.target.closest(".page-item-link");
            const page = linkButton.dataset.page;
            // const page = linkButton.getAttribute("href");
            navi(page);
            // }
        });
    };

    // 총 합계
    const totalCount = (criteria) => {
        const countText = document.querySelector("#content-area .count-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    // 문의 상세
    const showDetail = (purchaseDetail) => {
        const tableDetail = document.querySelector(".modal-dialog");
        const statusText = {
            PENDING: "대기",
            APPROVED: "승인",
            REJECTED: "거절"
        };
        const status = purchaseDetail.purchaseRequestApprovalStatus;
        const displayStatus = statusText[status]

        // 문의 - layout
        tableDetail.innerHTML= `
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-title">
                        상품상세
                        <span class="badge-label text-danger font-weight-bold ml-2">${displayStatus}</span>
                    </div>
                    <button id="close" class="close">
                        <i class="mdi mdi-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="divider"></div>
                    <div class="tab-view">
                        <div class="tab-view-header"></div>
                        <div class="tab-view-body">
                            <div style="display: block;">
                                <div class="tab-inner tab-detail">
                                    <div class="info-layout detail-info">
                                        <div class="info-title justify-content-between">
                                            <div class="flex-left d-flex">
                                                <div class="title">상품정보</div>
                                            </div>
                                            <div class="flex-right"></div>
                                        </div>
                                        <div class="d-table w-100">
                                            <div class="d-table-cell">
                                                <table class="info-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>판매자 아이디</th>
                                                            <td>${purchaseDetail.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>판매자명</th>
                                                            <td>${purchaseDetail.memberName}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="d-table-cell">
                                                <table class="info-table">
                                                    <tbody>
                                                        <tr>
                                                            <th>kg당 단가</th>
                                                            <td>${purchaseDetail.purchaseRequestProposedPricePerKg}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>매입 신청일</th>
                                                            <td>${purchaseDetail.updatedDate}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-layout detail-info">
                                        <div class="info-title justify-content-between">
                                            <div class="flex-left d-flex">
                                                <div class="title">상품 상세정보</div>
                                            </div>
                                        </div>
                                        <div class="d-table w-100">
                                            <div class="d-table-cell">
                                                <table class="info-table" style="height:100px">
                                                    <tbody>
                                                        <tr>
                                                            <th>상품명</th>
                                                            <td>${purchaseDetail.purchaseRequestProductName}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>중량</th>
                                                            <td>${purchaseDetail.purchaseRequestQuantityKg}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>원산지</th>
                                                            <td>${purchaseDetail.purchaseRequestCountryOfOrigin}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>보관방법 또는 취급방법</th>
                                                            <td>-</td>
                                                        </tr>
                                                        <tr>
                                                            <th>카테고리</th>
                                                            <td>${purchaseDetail.purchaseRequestCategory}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="d-table-cell">
                                                <table class="info-table" style="height:100px">
                                                    <tbody>
                                                        <tr>
                                                            <th>kg당 단가</th>
                                                            <td>${purchaseDetail.purchaseRequestProposedPricePerKg}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>생산자</th>
                                                            <td>${purchaseDetail.purchaseRequestProductName}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>제조연월일</th>
                                                            <td>${purchaseDetail.purchaseRequestDateOfManufacture}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>소비자 안전을 위한 주의사항</th>
                                                            <td>-</td>
                                                        </tr>
                                                        <tr>
                                                            <th>기타</th>
                                                            <td>-</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    return {contentLayout:contentLayout, showList:showList, renderPagination:renderPagination, connectToPagination:connectToPagination, totalCount:totalCount, showDetail:showDetail};
})();

// 배너 등록
const bannerLayout = (() => {
    const contentLayout = () => {
        const contentArea = document.querySelector("#content-area");

        contentArea.innerHTML = `
            <div class="page-header">
                <div class="page-title">메인 배너 등록</div>
                <div class="page-subtitle">실시간 메인 배너 등록</div>
            </div>
            <div class="page-body temp-page">
                <div class="page-content pg-box banner-container">
                    <div class="table-layout white-panel">
                        <div class="banner-insert">
                            <div class="title">
                                메인페이지 배너등록
                            </div>
                            <form id="banner-form" action="/api/admin/banners" method="post" enctype="multipart/form-data">
                                <!-- 아래 Li수만큼 Img -->
                                <div class="dropdown">
                                    <label>
                                        <input type="file" id="banner-file" class="banner-file" name="file" style="display: none;" multiple >
                                        <div class="add-btn">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                        <a>사진등록</a>
                                    </label>
                                </div>
                                <div class="boot-tip tip primary">
                                    <ul class="pg-list list-unstyled">
                                    </ul>
                                    <a href="#" class="register-link">등록</a>
                                </div>
                            </form>
                        </div>
                    
                    
                        <table id="banner-table" class="table grey-header-table w-100 text-center receipt-table" style="margin-top: 50px;">
                        <colgroup>
                            <col style="width:16%">
                            <col style="width:16%">
                            <col style="width:16%">
                            <col style="width:16%">
                            <col style="width:16%">
                            <col style="width:16%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>배너 순서</th>
                                <th>이미지 위치</th>
                                <th>이미지 원본 이름</th>
                                <th>이미지</th>
                                <th>업로드 날짜</th>
                                <th>수정/삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        `
    }

    // 배너 목록
    const showList = (bannerList) => {
        const bannersContainer = document.querySelector("#banner-table tbody");
        if (!bannersContainer) return;

        if (!bannerList || bannerList.length === 0) {
            bannersContainer.innerHTML = `
            <tr class="no-data">
                <td colspan="6">
                    등록된 배너가 없습니다.
                </td>
            </tr>
        `;
            return;
        }

        let text = "";
        bannerList.forEach((banner) => {
            text += `
                <tr class="banner-row" data-banner-id="${banner.bannerId}">
                    <td>
                        <div class="input-order">
                            <input type="text" value="${banner.bannerOrder}">
                            <button class="order-update-btn">확인</button>
                        </div>
                    </td>
                    <td>${banner.filePath}</td>
                    <td>${banner.fileOriginalName}</td>
                    <td>
                        <img 
                          src="/api/files/display?filePath=${banner.filePath}&fileName=${banner.fileName}" 
                          alt="${banner.fileOriginalName}" 
                          style="width:120px; height:60px; object-fit:cover; border-radius:6px;"
                        >
                    </td>
                    <td>${banner.updatedDate}</td>
                    <td>
                        <button class="banner-delete-btn">삭제</button>   
                    </td>
                </tr>
            `;
        });

        bannersContainer.innerHTML = text;
    };

    return {contentLayout:contentLayout, showList:showList}
})();

// 상품 관리
const productLayout = (() => {
    const contentLayout = () => {
        const contentArea = document.querySelector("#content-area");

        contentArea.innerHTML = `
            <div class="page-header"> 
                <div class="page-title">상품 목록</div>
                <div class="page-subtitle">상품목록</div>
            </div>
            <div class="page-body">
                <div class="page-content">
                    <div class="table-layout white-panel">
                        <div class="filter-section">
                            <div class="row">
                                <div class="col-auto">
                                    <span class="count">총
                                        <span class="count-amount">22</span>개
                                    </span>
                                </div>
                            <div class="col text-right"></div>
                            <div class="col-auto">
                                <div class="filter-wrapper filter-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control flex-grow-1 input-search" placeholder="상품명">
                                        <div class="input-group-append">
                                            <button id="btn-product-search" class="btn btn-search">
                                                <span class="comp-icon icon-magnify" id="icons/ico-search.svg"><svg class="icon-img" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="icon-color fill" d="m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113z" fill="#292929"></path></svg></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fill-table-layout">
                            <table id="product-table" class="table grey-header-table w-100 text-center receipt-table">
                                <colgroup>
                                    <col style="width:20%">
                                    <col style="width:20%">
                                    <col style="width:20%">
                                    <col style="width:20%">
                                    <col style="width:20%">
        <!--                            <col style="width:15%">-->
                                </colgroup>                           
                                 <thead>
                                    <tr>
                                        <th class="td-name">상품명</th>
                                        <th>관리자 ID</th>
                                        <th class="td-status">가격</th>
                                        <th class="td-user">보유 중량(kg)</th>
                                        <th class="td-at">등록일자</th>
        <!--                                <th class="td-action">상세보기(판매등록)</th>                   -->
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>
                        <nav class="rebound-pagination-wrapper mt-5 mb-4">
                            <ul class="pagination rebound-pagination">
<!--                            여기 페이지 a버튼 들어옴-->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        `
    }

    // 상품 목록
    const showList = (productsCriteria) => {
        const productsContainer = document.querySelector("#product-table tbody");
        if (!productsContainer) return;

        let text = "";
        if (!productsCriteria.products || productsCriteria.products.length === 0) {
            text = `
                <tr class="product-row no-data">
                    <td colspan="5">
                        등록된 상품이 없습니다.
                    </td>
                </tr>
            `;
        }

        productsCriteria.products.forEach((product) => {
            text += `
                <tr class="product-row" data-product-id="${product.id}">
                    <td class="text-center font-weight-bold" colspan="1" >${product.productName ? product.productName : "-"}</td>
                    <td class="text-center font-weight-bold" colspan="1" >${product.memberId ? product.memberId : "-"}</td>
                    <td class="text-center font-weight-bold" colspan="1" >${product.productPrice ? product.productPrice : "-"}</td>
                    <td class="text-center font-weight-bold" colspan="1" >${product.productQuantity ? product.productQuantity : "-"}</td>
                    <td class="text-center font-weight-bold" colspan="1" >${product.updatedDate ? product.updatedDate : "-"}</td>
<!--                    <td class="td-action text-center">-->
<!--                        <button id="modal-open" class="action-btn">-->
<!--                            <i id="modalbtn" class="mdi mdi-chevron-right"></i>-->
<!--                        </button>-->
<!--                    </td>-->
                </tr>
            `;
        });

        productsContainer.innerHTML = text;
    };

    // 페이지네이션 - layout
    const renderPagination = (criteria) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        let html = ``;
        for (let i = criteria.startPage; i <= criteria.endPage; i++) {
            html += `
            <li class="page-item page-num">
                <a href="#" data-page="${i}" class="page-item-link page-item-num ${i === criteria.page ? "active" : ""}">
                    ${i}
                </a>
            </li>
            `;
        }

        pagination.innerHTML = html;
    };

    // 페이지네이션 - event
    const connectToPagination = (navi) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        pagination.addEventListener("click", (e) => {
            e.preventDefault();

            const linkButton = e.target.closest(".page-item-link");
            const page = linkButton.dataset.page;
            navi(page);
        });
    };

    // 총 합계
    const totalCount = (criteria) => {
        const countText = document.querySelector("#content-area .count-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    return {contentLayout:contentLayout, showList:showList, renderPagination:renderPagination, connectToPagination:connectToPagination, totalCount:totalCount}
})();

// 결제 관리
const requestLayout = (() => {
    const contentLayout = () => {
        const contentArea = document.querySelector("#content-area");

        contentArea.innerHTML = `
            <div class="page-header">
                <div class="page-title">결제내역조회</div>
                <div class="page-subtitle">조건을 설정하여 조회할 수 있습니다</div>
            </div>
            <div class="page-body">
                <div class="page-content">
                    <div class="table-layout white-panel">
                        <div class="filter-section">
                            <div class="row">
                                <div class="col-auto">
                                    <span class="receipt-count">총<span class="count-amount">0</span>건</span>
                                </div>
                                <div class="col-auto"></div>
                                <div class="col-auto"></div>
                                <div class="col-auto"></div>
                                <div class="col text-right"></div>
                                <div class="col-auto">
                                    <div class="filter-wrapper filter-time">
                                        <div class="bootpay-date-range-input-container" id="bootpay-date-input-bbcde7e9-2cef-41a9-a007-e7bd828ff998">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="filter-wrapper filter-search ml-1">
                                        <div class="input-group">
                                            <input class="form-control flex-grow-1 input-search" type="text" placeholder="주문번호/구매자이름/카드정보">
                                            <div class="input-group-append">
                                                <button id="btn-request-search" class="btn btn-search">
                                                    <span class="comp-icon icon-magnify" id="icons/ico-search.svg">
                                                        <svg class="icon-img" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path class="icon-color fill" d="m13.523 12.463 3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 0 1 8.25 15 6.752 6.752 0 0 1 1.5 8.25 6.752 6.752 0 0 1 8.25 1.5 6.752 6.752 0 0 1 15 8.25a6.72 6.72 0 0 1-1.477 4.213zm-1.504-.557A5.233 5.233 0 0 0 13.5 8.25C13.5 5.349 11.15 3 8.25 3A5.248 5.248 0 0 0 3 8.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 0 0 3.656-1.481l.113-.113z" fill="#292929"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fill-table-layout">
                            <table id="request-table" class="table grey-header-table w-100 receipt-table">
                                <colgroup>
                                    <col style="width:16%">
                                    <col style="width:16%">
                                    <col style="width:16%">
                                    <col style="width:16%">
                                    <col style="width:16%">
                                    <col style="width:16%">
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>주문번호</th>
                                        <th class="td-name">
                                            상품명
                                            <div class="item-search-btn d-inline-block">
                                            </div>
                                        </th>
                                        <th class="td-amount">결제금액</th>
                                        <th class="td-method">결제수단</th>
                                        <th class="td-at">결제완료 시간</th>
                                        <th class="td-buyer">구매자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>
                        <nav class="rebound-pagination-wrapper mt-5 mb-4">
                            <ul class="pagination rebound-pagination">
<!--                            여기 페이지 a버튼 들어옴-->
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="modal fade member-modal" style="display: none;">
                <div class="modal-dialog modal-lg">
<!--                    모달 내용 들어와야함-->
                </div>
            </div>
        `
    }

    // 결제 목록
    const showList = (requestsCriteria) => {
        const requestsContainer = document.querySelector("#request-table tbody");
        if (!requestsContainer) return;

        let text = "";
        if (!requestsCriteria.requests || requestsCriteria.requests.length === 0) {
            text = `
                <tr class="request-row no-data">
                    <td colspan="6">
                        결제내역이 없습니다.
                    </td>
                </tr>
            `;
        }

        requestsCriteria.requests.forEach((request) => {
            text += `
                <tr class="request-row" data-request-id="${request.id}">
                    <td class="text-center font-weight-bold" colspan="1">${request.id}</td>
                    <td class="text-center font-weight-bold" colspan="1">${request.productName}</td>
                    <td class="text-center font-weight-bold" colspan="1">${request.requestPrice}</td>
                    <td class="text-center font-weight-bold" colspan="1">${request.paymentMethod}</td>
                    <td class="text-center font-weight-bold" colspan="1">${request.paymentDate}</td>
                    <td class="text-center font-weight-bold" colspan="1">${request.memberName}</td>
                </tr>
            `;
        });

        requestsContainer.innerHTML = text;
    };

    // 페이지네이션 - layout
    const renderPagination = (criteria) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        let html = ``;

        for (let i = criteria.startPage; i <= criteria.endPage; i++) {
            html += `
            <li class="page-item page-num">
                <a href="#" data-page="${i}" class="page-item-link page-item-num ${i === criteria.page ? "active" : ""}">
                    ${i}
                </a>
            </li>
            `;
        }

        pagination.innerHTML = html;
    };

    // 페이지네이션 - event
    const connectToPagination = (navi) => {
        const pagination = document.querySelector("#content-area .rebound-pagination");
        if (!pagination) return;

        pagination.addEventListener("click", (e) => {
            // if(e.target.classList.contains(".page-item-link")) {
            e.preventDefault();

            const linkButton = e.target.closest(".page-item-link");
            const page = linkButton.dataset.page;
            // const page = linkButton.getAttribute("href");
            navi(page);
            // }
        });
    };

    // 총 합계
    const totalCount = (criteria) => {
        const countText = document.querySelector("#content-area .count-amount");
        if (!countText) return;

        countText.textContent = criteria.total;
    };

    return {contentLayout:contentLayout, showList:showList, renderPagination:renderPagination, connectToPagination:connectToPagination, totalCount:totalCount}
})();