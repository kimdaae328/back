const sellerService = (() => {
    // 회원 목록
    const getSellerList = async (page, callback) => {
        const response = await fetch(`/api/admin/sellers/list/${page}`);
        const sellersCriteria = await response.json();

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

    // 회원 목록(일반)
    const getSellerYoueatieatList = async (page, callback) => {
        const response = await fetch(`/api/admin/sellers/list/youeatieat/${page}`);
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

    // 회원 목록(카카오)
    const getSellerKakaoList = async (page, callback) => {
        const response = await fetch(`/api/admin/sellers/list/kakao/${page}`);
        const sellersCriteria = await response.json();

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
