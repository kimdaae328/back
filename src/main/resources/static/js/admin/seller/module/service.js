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

        return data;
    };

    return {getSellerList, getSellerDetail}
})();
