
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
    }

    // 찜하기
    const like = async (likeProduct) => {
        const response = await fetch("/api/product/like",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likeProduct)
        });
        return response.ok
    }

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
    }

    // // 찜 상태
    // const getLike = async (statusLike) => {
    //     const response = await fetch(`/api/product/${productId}/like`, {
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(statusLike)
    //     });
    //     const result = await response.json();
    //     return result;
    // }

    return {save, like, unlike};

})();
