const requestService = (() => {

    const addToCart = async (memberId, productId,count,callback) => {
        try {
            const response = await fetch('/request/cart', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    memberId: memberId,
                    productId: productId,
                    count: count})
            });
            if(response.ok) {


            } else {

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

    return { addToCart :addToCart };
})();