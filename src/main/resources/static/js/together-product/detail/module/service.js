
const togetherProductService = (() => {
    // 장바구니
    const save = async (cart) => {
        const response = await fetch("/api/product/carts/save", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        });

        return response.ok
    };

    // 찜하기
    const like = async (likeProduct) => {
        const response = await fetch("/api/product/like",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likeProduct)
        });

        const data = await response.json();
        return data;
    };

    //     찜 취소 하기
    const unlike = async (unlikeProduct) => {
        const response = await fetch("/api/product/unlike",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(unlikeProduct)
        });
        return response.ok
    };

    // 리뷰 목록

        const getReview = async (productId, page, callback) => {
            const response = await fetch(`/api/product/${productId}/reviews/${page}`);
            const data = await response.json();

            if (callback) callback(data);

            // 총 합계
            const totalSpan = document.querySelector(".review-top-bar .total");
            const totalnav = document.querySelector(".tab-item .count");
            if (totalSpan && data.totalCount !== undefined) {
                totalSpan.textContent = data.totalCount;
                totalnav.textContent = data.totalCount;
            }

            if (response.ok) {
                console.log("리뷰 존재");
            } else if (response.status === 404) {
                console.log("리뷰 없음");
            } else {
                const error = await response.text();
                console.log(error);
            }

            return data;
        };

    // 문의하기
    const inquiry = async (ProductInquiry) => {
        const response = await fetch("/api/product/inquiry",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ProductInquiry)
        });

        if (!response.ok) {
            return null;
        }

        return await response.json();
    };

    // 리뷰 목록

    const getInquiry = async (productId, page, callback) => {
        const response = await fetch(`/api/product/${productId}/inquiry/${page}`);
        const data = await response.json();

        if (callback) callback(data);



        if (response.ok) {
            console.log("문의 존재");
        } else if (response.status === 404) {
            console.log("문의 없음");
        } else {
            const error = await response.text();
            console.log(error);
        }

        return data;
    };

    return {save, like, unlike, getReview, inquiry, getInquiry};

})();
