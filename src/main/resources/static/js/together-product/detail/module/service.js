const togetherProductService = (() => {
    const save = async (cart) => {
        const response = await fetch("/api/carts/save", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cart)
        });

        return response.ok
    }
    return {save: save};
})();