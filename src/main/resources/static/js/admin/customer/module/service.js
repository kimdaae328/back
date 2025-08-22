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
