const customeService = (() => {
    const getPost = async (page=1, callback) => {
        const response = await fetch(`/api/customer/list/${page}`);
        const customersCriteria = await response.json();

        console.log(`요청 URL: /api/customer/list/${page}`);
        console.log("Response 객체:", response);
        console.log("받아온 JSON:", customersCriteria);


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

    return {getPost: getPost}
})();