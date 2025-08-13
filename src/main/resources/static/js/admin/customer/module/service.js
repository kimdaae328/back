const customerService = (() => {
    const getCustomer = async (page, callback) => {
        const response = await fetch(`/api/admin/customers/list/${page}`);
        const customersCriteria = await response.json();

        //확인
        console.log(response);
        console.log(customersCriteria);


        if(callback){
            setTimeout(() => {
                callback(customersCriteria);
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

        return customersCriteria;
    }

    return {getCustomer: getCustomer}
})();