const sellerLayout = (() => {
    // 회원 목록 테이블 - layout
    const sellerRowTemplate  = (seller) => `
        <tr>
            <td class="td-name">
                <div class="member-name">
                    <span class="member-name">${seller.memberName}</span>
                    <span class="badge-label badge text-danger ml-2">${seller.memberProvider == "YOU_I" ? "일반 로그인" : "카카오 로그인"}</span>
                </div>
                <div class="member-id">${seller.id}</div>
            </td>
            <td class="td-amount text-center pr-4 font-weight-bold">
                <span class="member-name">${seller.memberName}</span>
                <span class="amount-unit"> 님</span>
            </td>
            <td class="td-address">${(seller.address || seller.addressDetail) ? `${seller.address ?? ""} ${seller.addressDetail ?? ""}` : "-"}</td>
            <td class="td-email">${seller.memberEmail}</td>
            <td class="td-phone">${seller.memberPhone}</td>
            <td class="td-start">${seller.createdDate}</td>
            <td class="td-recent">${seller.memberLastLoginDate ? seller.memberLastLoginDate : "-"}</td>
            <td class="td-action text-center">
                <div class="action-btn">
                    <i class="mdi mdi-chevron-right"></i>
                </div>
            </td>
        </tr>
    `;

    // 회원 목록(전체)
    const showList = (sellersCriteria) => {
        const sellerContainer = document.querySelector(".table-container tbody");

        let text = "";
        sellersCriteria.sellers.forEach((seller) => {
            text += sellerRowTemplate(seller);
        });

        sellerContainer.innerHTML = text;
    }

    // 회원 목록(일반)
    const showYoueatieatList = (sellersCriteria) => {
        const sellerContainer = document.querySelector(".table-container tbody");

        let text = "";
        sellersCriteria.sellers.forEach((seller) => {
            text += sellerRowTemplate(seller);
        });

        sellerContainer.innerHTML = text;
    }

    // 회원 목록(카카오)
    const showKakaoList = (sellersCriteria) => {
        const sellerContainer = document.querySelector(".table-container tbody");

        let text = "";
        sellersCriteria.sellers.forEach((seller) => {
            text += sellerRowTemplate(seller);
        });

        sellerContainer.innerHTML = text;
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
    const sellerCountText = document.querySelector(".count-amount");
    const sellerCount = (criteria) => {
        sellerCountText.textContent = criteria.total;
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

    return {showList:showList, renderPagination:renderPagination, connectToPagination:connectToPagination, sellerCount:sellerCount, showDetail:showDetail, showKakaoList:showKakaoList, showYoueatieatList:showYoueatieatList};
})();
