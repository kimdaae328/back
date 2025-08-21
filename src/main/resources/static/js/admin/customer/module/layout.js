const customerLayout = (() => {
    // 회원 목록 테이블 - layout
    const customerRowTemplate  = (customer) => {
        console.log(customer);
        return `
        <tr>
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
            <td class="td-email">${customer.memberEmail}</td>
            <td class="td-phone">${customer.memberPhone}</td>
            <td class="td-start">${customer.createdDate}</td>
            <td class="td-recent">${customer.memberLastLoginDate ? customer.memberLastLoginDate : "-"}</td>
            <td class="td-action text-center">
                <div class="action-btn">
                    <i class="mdi mdi-chevron-right"></i>
                </div>
            </td>
        </tr>
    `;
    }

    // 회원 목록(전체)
    const showList = (customersCriteria) => {
        const customerContainer = document.querySelector(".table-container tbody");

        let text = "";
        customersCriteria.customers.forEach((customer) => {
            text += customerRowTemplate(customer);
        });

        customerContainer.innerHTML = text;
    }

    // 회원 목록(일반회원)
    const showNonSubscribedList = (customersCriteria) => {
        const customerContainer = document.querySelector(".table-container tbody");

        let text = "";
        customersCriteria.customers.forEach((customer) => {
            text += customerRowTemplate(customer);
        });

        customerContainer.innerHTML = text;
    }

    // 회원 목록(구독회원)
    const showSubscribedList = (customersCriteria) => {
        const customerContainer = document.querySelector(".table-container tbody");

        let text = "";
        customersCriteria.customers.forEach((customer) => {
            text += customerRowTemplate(customer);
        });

        customerContainer.innerHTML = text;
    }

    // 페이지네이션 - layout
    const pagination = document.querySelector(".rebound-pagination");
    const renderPagination = (criteria) => {
        let html = ``;

        for (let i = criteria.startPage; i <= criteria.endPage; i++) {
            html += `
            <li class="page-item page-num">
                <a href="${i}" data-page="${i}" class="page-item-link page-item-num ${i === criteria.page ? 'active' : ''}">
                    ${i}
                </a>
            </li>
            `;

            // console.log("--------------"+ i);
            // console.log("--------------??"+ criteria.page);
            // console.log("확인한다다ㅏ앙ㅇ", criteria)
        }

        pagination.innerHTML = html;
    };

    // 페이지네이션 - event
    const connectToPagination = (navi) => {
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
    const customerCountText = document.querySelector(".count-amount");
    const customerCount = (criteria) => {
        customerCountText.textContent = criteria.total;
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
        const tableMemberDetail = document.querySelector(".modal-dialog");

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
                        <td>${payment.id}</td>
                        <td>${payment.productName}</td>
                        <td>${payment.requestPrice}</td>
                        <td>${payment.paymentDate}</td>
                    </tr>
                `;
            });
        }

        // 회원 - layout
        tableMemberDetail.innerHTML= `
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
                                                                <td>${customerDetail.memberName}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>핸드폰 번호</th>
                                                                <td>${customerDetail.memberPhone}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>가입일</th>
                                                                <td>${customerDetail.createdDate}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>나이</th>
                                                                <td>${calculateAge(customerDetail.memberBirth)}</td>
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
                                                                <td>${customerDetail.id}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>이메일</th>
                                                                <td>${customerDetail.memberEmail}</td>
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
                                                            <td>${customerDetail.paymentCalculate.totalOrders}</td>
                                                            <td>${customerDetail.paymentCalculate.totalPrice}</td>
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

    return {showList, showNonSubscribedList, showSubscribedList, renderPagination, connectToPagination, customerCount, showDetail};
})();
