// 팝업 창
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");

openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSelector = btn.dataset.target;
        const targetModal = document.querySelector(targetSelector);
        const htmlScroll = document.querySelector("html");
        const failMessage = document.querySelector("div.fail-login");

        if (targetModal) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";
            if ((targetModal.contain = "popup2")) {
                failMessage.innerHTML = `<div class="fail-login-inner">
                                            <p class="fail-login-p">이메일/비밀번호가 일치하지 않습니다.</p>
                                        </div>`;
            }
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const targetModal = btn.closest(".popup-wrapper");
        const htmlScroll = document.querySelector("html");
        if (targetModal) {
            targetModal.style.display = "none";
            htmlScroll.style.overflow = "";
        }
    });
});

// 구매 로그인 누를때
const buyerButton = document.querySelector(".login-buyer");
const sellerButton = document.querySelector(".login-seller");
const buyerForm = document.querySelector(".buyer-login");
const sellerForm = document.querySelector(".seller-login");

buyerButton.addEventListener("click", () => {
    buyerButton.classList.add("login-choice-active");
    sellerButton.classList.remove("login-choice-active");
    buyerForm.style.display = "block";
    sellerForm.style.display = "none";
});

// 판매 로그인 누를 때

sellerButton.addEventListener("click", () => {
    sellerButton.classList.add("login-choice-active");
    buyerButton.classList.remove("login-choice-active");
    sellerForm.style.display = "block";
    buyerForm.style.display = "none";
});
