const memberLayout = (() => {
    const checkEmail = async (result) => {
        const errorMessage = document.getElementById("check-email")
        if(result.isExist) {

            errorMessage.style.display = "block";
            return;
        }
        errorMessage.style.display = "none";
    }

    return {checkEmail: checkEmail}
})();
