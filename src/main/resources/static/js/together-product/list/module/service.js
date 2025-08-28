const productListService = (() => {

    // 장바구니 담기 팝업

    const addCart = async (productId) => {
        const response = await fetch(`/api/product/${productId}`);
        if (!response.ok) return null;

        const data = await response.json();
        console.log(data)
        return data;
    };

    // 장바구니 담기
        const save = async (cart) => {
            const response = await fetch("/api/carts/save", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cart)
            });

            return response.ok
        };

        // 대카 가져오기
    const getList = async (page, callback, search={}) => {
        const response = await fetch(`/api/product/list/${page}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(search)
        });
        const productCriteriaDTO = await response.json();
        if(callback) {
            callback(productCriteriaDTO)
        }
        return productCriteriaDTO
    };

    return {addCart:addCart, save:save, getList: getList}
})();