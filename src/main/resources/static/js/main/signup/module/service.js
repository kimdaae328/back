const memberService = (() => {
    const checkEmail = async (member, callback) => {
        try{
            const response = await fetch("/member/check-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(member)
            })


            if(response.ok) {
                // 로그 출력
                console.log("사용 가능");
            }else if(response.status === 409) {
                // 로그 출력
                console.log("사용 불가");
            }else {
            console.log("ddd")
            }
            const result = await response.json();
            console.log(result)

            if(callback){
                callback(result);
            }

            return result.isExist;
        } catch (error) {
            console.error(error);
        }


    }
    return {checkEmail: checkEmail}
})();
















