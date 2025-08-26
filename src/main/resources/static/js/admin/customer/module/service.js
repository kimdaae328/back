// 회원목록(구매자)
const customerService = (() => {
    // 회원 목록
    const getCustomerList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/customers/list/${page}?keyword=${keyword ?? ""}`);
        const customersCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(customersCriteria);
            }, 1000)
        }

        if(response.ok) {
            console.log("게시글 존재")
            // console.log("키워드 전달 문제없음둥둥", keyword)
        }else if(response.status === 404){
            console.log("게시글 없음")
            // console.log("키워드 전달 문제있음둥")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return customersCriteria;
    }

    // 회원 상세
    const getCustomerDetail = async (id) => {
        const response = await fetch(`/api/admin/customers/${id}`);

        if (!response.ok) {
            console.error("회원 상세 조회 실패", response.status);
            return;
        }

        const data = await response.json();

        return data;
    };

    // 회원 목록(일반회원)
    const getNonSubscribedCustomerList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/customers/list/nonSubscribed/${page}?keyword=${keyword ?? ""}`);
        const customersCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(customersCriteria);
            }, 1000)
        }

        if(response.ok) {
            console.log("일반 회원 존재");
            console.log("키워드존재", keyword)
        }else if(response.status === 404){
            console.log("일반 회원 없음");
        }else {
            const error = await response.text();
            console.log(error);
        }

        return customersCriteria;
    };

    // 회원 목록(구독회원)
    const getSubscribedCustomerList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/customers/list/subscribed/${page}?keyword=${keyword ?? ""}`);
        const customersCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(customersCriteria);
            }, 1000)
        }

        if(response.ok) {
            console.log("구독 회원 존재");
        }else if(response.status === 404){
            console.log("구독 회원 없음");
        }else {
            const error = await response.text();
            console.log(error);
        }

        return customersCriteria;
    };

    return {getCustomerList, getCustomerDetail, getNonSubscribedCustomerList, getSubscribedCustomerList}
})();

// 회원목록(판매자)
const sellerService = (() => {
    // 회원 목록
    const getSellerList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/sellers/list/${page}?keyword=${keyword ?? ""}`);
        const sellersCriteria = await response.json();

        console.log("회원목록",sellersCriteria)

        if(callback){
            setTimeout(() => {
                callback(sellersCriteria);
            }, 1000)
        }

        if(response.ok) {
            console.log("게시글 존재")
        }else if(response.status === 404){
            console.log("게시글 없음")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return sellersCriteria;
    }

    // 회원 상세
    const getSellerDetail = async (id) => {
        const response = await fetch(`/api/admin/sellers/${id}`);

        if (!response.ok) {
            console.error("회원 상세 조회 실패", response.status);
            return;
        }

        const data = await response.json();

        if (!data.purchase || data.purchase.length === 0) {
            console.log("구매 내역이 없습니다.");
        }

        return data;
    };

    // 회원 목록(일반 로그인)
    const getSellerYoueatieatList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/sellers/list/youeatieat/${page}?keyword=${keyword ?? ""}`);
        const sellersCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(sellersCriteria);
            }, 1000)
        }

        if(response.ok) {
            console.log("일반 회원 존재")
        }else if(response.status === 404){
            console.log("일반 회원 없음")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return sellersCriteria;
    }

    // 회원 목록(카카오 로그인)
    const getSellerKakaoList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/sellers/list/kakao/${page}?keyword=${keyword ?? ""}`);
        const sellersCriteria = await response.json();

        console.log("카카오목록",sellersCriteria)

        if(callback){
            setTimeout(() => {
                callback(sellersCriteria);
            }, 1000)
        }

        if(response.ok) {
            console.log("카카오 회원 존재")
        }else if(response.status === 404){
            console.log("카카오 회원 없음")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return sellersCriteria;
    }

    return {getSellerList, getSellerDetail, getSellerYoueatieatList, getSellerKakaoList}
})();

// 구매자 문의
const inquiryService = (() => {
    // 문의 목록
    let currentPage = 1;
    const getInquiryList = async (page, keyword= "", callback) => {
        const response = await fetch(`/api/admin/inquiries/list/${page}?keyword=${keyword ?? ""}`);
        const inquiriesCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(inquiriesCriteria);
            }, 1000)
        }

        console.log(inquiriesCriteria)

        if(response.ok) {
            console.log("문의글 존재")
            // console.log("키워드 전달 문제없음둥둥", keyword)

            currentPage = inquiriesCriteria.criteria.page;
        }else if(response.status === 404){
            console.log("게시글 없음")
            // console.log("키워드 전달 문제있음둥")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return inquiriesCriteria;
    }

    // 문의 목록(미답변)
    const getUnansweredList = async (page, keyword= "", callback) => {
        const response = await fetch(`/api/admin/inquiries/list/unanswered/${page}?keyword=${keyword ?? ""}`);
        const inquiriesCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(inquiriesCriteria);
            }, 1000)
        }

        console.log(inquiriesCriteria)

        if(response.ok) {
            console.log("미답변글 존재")
            currentPage = inquiriesCriteria.criteria.page;
        }else if(response.status === 404){
            console.log("미답변글 없음")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return inquiriesCriteria;
    }

    // 문의 목록(답변완료)
    const getAnsweredList = async (page, keyword= "", callback) => {
        const response = await fetch(`/api/admin/inquiries/list/answered/${page}?keyword=${keyword ?? ""}`);
        const inquiriesCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(inquiriesCriteria);
            }, 1000)
        }

        console.log(inquiriesCriteria)

        if(response.ok) {
            console.log("답변완료글 존재")
            currentPage = inquiriesCriteria.criteria.page;
        }else if(response.status === 404){
            console.log("답변완료글 없음")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return inquiriesCriteria;
    }

    // 현재페이지
    const getCurrentPage = () => currentPage;

    // 문의 상세
    const getDetail = async (inquiryId) => {
        const response = await fetch(`/api/admin/inquiries/${inquiryId}`);

        if (!response.ok) {
            console.error("문의 상세 조회 실패", response.status);
            return;
        }

        console.log(response)

        const data = await response.json();

        return data;
    };

    // 문의답변 등록
    const writeAnswer = async (inquiryId, inquiryAnswerContent) => {
        const response = await fetch(`/api/admin/inquiries/${inquiryId}/answer`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({inquiryAnswerContent})
        });

        if (!response.ok) {
            const msg = await response.text().catch(() => "");
            console.error("postAnswer 실패:", response.status, msg);
            return null;
        }

        return await response.json();
    };

    return {getInquiryList, getUnansweredList, getDetail, writeAnswer, getCurrentPage, getAnsweredList}
})();

// 판매자 문의
const sellerInquiryService = (() => {
    // 문의 목록
    let currentPage = 1;
    const getInquiryList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/seller/inquiries/list/${page}?keyword=${keyword ?? ""}`);
        const inquiriesCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(inquiriesCriteria);
            }, 1000)
        }

        console.log(inquiriesCriteria)

        if(response.ok) {
            console.log("게시글 존재")
            console.log("키워드 전달 문제없음둥둥", keyword)
        }else if(response.status === 404){
            console.log("게시글 없음")
            console.log("키워드 전달 문제있음둥")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return inquiriesCriteria;
    }

    // 문의 목록(미답변)
    const getUnansweredList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/seller/inquiries/list/unanswered/${page}?keyword=${keyword ?? ""}`);
        const inquiriesCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(inquiriesCriteria);
            }, 1000)
        }

        console.log(inquiriesCriteria)

        if(response.ok) {
            console.log("미답변글 존재")
            currentPage = inquiriesCriteria.criteria.page;
        }else if(response.status === 404){
            console.log("미답변글 없음")
            console.log("키워드 전달 문제있음둥")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return inquiriesCriteria;
    }

    // 문의 목록(답변완료)
    const getAnsweredList = async (page, keyword = "", callback) => {
        const response = await fetch(`/api/admin/seller/inquiries/list/answered/${page}?keyword=${keyword ?? ""}`);
        const inquiriesCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(inquiriesCriteria);
            }, 1000)
        }

        console.log(inquiriesCriteria)

        if(response.ok) {
            console.log("답변완료글 존재")
            currentPage = inquiriesCriteria.criteria.page;
        }else if(response.status === 404){
            console.log("답변완료글 없음")
            console.log("키워드 전달 문제있음둥")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return inquiriesCriteria;
    }

    // 현재페이지
    const getCurrentPage = () => currentPage;

    // 문의 상세
    const getDetail = async (inquiryId) => {
        const response = await fetch(`/api/admin/seller/inquiries/${inquiryId}`);

        if (!response.ok) {
            console.error("문의 상세 조회 실패", response.status);
            return;
        }

        console.log(response)

        const data = await response.json();

        return data;
    };

    // 문의답변 등록
    const writeAnswer = async (inquiryId, inquiryAnswerContent) => {
        const response = await fetch(`/api/admin/seller/inquiries/${inquiryId}/answer`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({inquiryAnswerContent})
        });

        if (!response.ok) {
            const msg = await response.text().catch(() => "");
            console.error("postAnswer 실패:", response.status, msg);
            return null;
        }

        return await response.json();
    };

    return {getInquiryList, getUnansweredList, getDetail, writeAnswer, getCurrentPage, getAnsweredList}
})();

// 매입 승인
const purchaseService = (() => {
    // 매입 목록
    const getPurchaseService = async (page, keyword= "", callback) => {
        const response = await fetch(`/api/admin/purchases/list/${page}?keyword=${keyword ?? ""}`);
        const purchasesCriteria = await response.json();

        if(callback){
            setTimeout(() => {
                callback(purchasesCriteria);
            }, 1000)
        }

        console.log(purchasesCriteria)

        if(response.ok) {
            console.log("매입상세글 존재")
        }else if(response.status === 404){
            console.log("매입상세글 없음")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return purchasesCriteria;
    }

    // 현재페이지
    const getCurrentPage = () => currentPage;

    // 문의 상세
    const getDetail = async (inquiryId) => {
        const response = await fetch(`/api/admin/purchases/${inquiryId}`);

        if (!response.ok) {
            console.error("문의 상세 조회 실패", response.status);
            return;
        }

        const data = await response.json();

        return data;
    };

    // 매입 승인 완료 조회
    const getApprovedCountAll = async () => {
        const res = await fetch('/api/admin/purchases/approved/count');
        if (!res.ok) {
            console.error("승인 건수 불러오기 실패!!");
            return 0;
        }
        return await res.json();
    };

    // 매입 상태 변경
    const updatePurchaseStatus = async (purchaseId, status) => {
        const response = await fetch(`/api/admin/purchases/${purchaseId}/status?status=${status}`,{
            method:"POST"
        });

        if (!response.ok) {
            const msg = await response.text().catch(() => "");
            console.error("status 실패:", response.status, msg);
            return null;
        }

        return true;
    };

    return {getPurchaseService, getCurrentPage, getDetail, getApprovedCountAll, updatePurchaseStatus}
})();

// 배너
const bannerService = (() => {
    const uploadService = async (formData) => {
        const response = await fetch(`/api/admin/banners`,{
            method:"POST",
            body: formData
        });

        const data = await response.json();

        if(response.ok) {
            console.log("banner 보내짐!!!", data)
        } else if(!response.ok) {
            console.log("banner 실패!!!!!!!");
        }
    }

    const getList = async () => {
        const response = await fetch('/api/admin/banners');
        const bannerList = await response.json();

        console.log(bannerList)

        if(response.ok) {
            console.log("매입상세글 존재")
        }else if(response.status === 404){
            console.log("매입상세글 없음")
        }else {
            const error = await response.text()
            console.log(error);
        }

        return bannerList;
    };

    return {uploadService, getList}
})();