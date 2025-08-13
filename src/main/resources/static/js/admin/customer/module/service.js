const memberService = (() => {
    const getPost = async (page=1, callback) => {
        const response = await fetch(`/api/customer/list/${page}`);
        const membersCriteria = await response.json();

        console.log(`요청 URL: /api/customer/list/${page}`);
        console.log("Response 객체:", response);
        console.log("받아온 JSON:", membersCriteria);


        if(callback){
            setTimeout(() => {
                callback(membersCriteria);
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

        return membersCriteria;
    }

    return {getPost: getPost}
})();