// 최근본 상품
const recentlyButtons = document.querySelectorAll(
    ".recently-viewed-section button"
);
const container = document.querySelector(".recently-viewed-scroll");
const kakaoLoginButton = document.getElementById("kakao-login");
kakaoLoginButton.addEventListener("click", (e) => {
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=bcbe3d461481de9236a2f79e83eb29fd&redirect_uri=http://localhost:10000/mypage/check/kakao&response_type=code";
});

recentlyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (btn.classList.contains("prev")) {
            container.scrollBy({ top: -150, behavior: "smooth" });
        } else if (btn.classList.contains("next")) {
            container.scrollBy({ top: 150, behavior: "smooth" });
        }
    });
});
