const cartService = (() => {

    const updateCount = async (cartId, count,callback) => {
        try {
            const response = await fetch('/cart/update', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cartCount: count,cartId: cartId })
            });
            if(response.ok) {
                console.log("업데이트 성공:");

            } else {
                console.error("서버 업데이트 실패");
            }
            const result = await response.json();
            console.log(result)
            if(callback){
                callback(result);
            }

            return result
        } catch (error) {
            console.error(error);
        }
    };
    const deleteCart = async (cartId,callback) => {
        try {
            const response = await fetch('/cart/delete', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cartId: cartId })
            });
            if(response.ok) {
                console.log("삭제 성공:");

            } else {
                console.error("삭제 실패");
            }
            const result = await response.json();
            console.log(result)
            if(callback){
                callback(result);
            }

            return result
        } catch (error) {
            console.error(error);
        }
    };
    const selectDeleteCart = async (cartId,callback) => {
        try {
            const response = await fetch('/cart/select-delete', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cartId: cartId })
            });
            if(response.ok) {
                console.log("삭제 성공:");

            } else {
                console.error("삭제 실패");
            }
            const result = await response.json();
            console.log(result)
            if(callback){
                callback(result);
            }

            return result
        } catch (error) {
            console.error(error);
        }
    };

    return { updateCount :updateCount , deleteCart:deleteCart,selectDeleteCart:selectDeleteCart};
})();

