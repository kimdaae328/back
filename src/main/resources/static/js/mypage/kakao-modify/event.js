// 최근본 상품
const recentlyButtons = document.querySelectorAll(
    ".recently-viewed-section button"
);
const container = document.querySelector(".recently-viewed-scroll");

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

// 이름 오류 메세지
const nameError = document.querySelector(".name-error");

const printNameError = () => {
    nameError.innerHTML = `<p class="error-message">이름을 입력해 주세요.</p>`;
};

// 생년월일 오류메세지

// 미래일 때
const brithError = document.querySelector(".brith-error");

const printBrithFutureError = () => {
    brithError.innerHTML = `<p class="error-message">생년월일이 미래로 입력 되었습니다.</p>`;
};

// 형식에 맞지 않을 때
const printBrithRecheckError = () => {
    brithError.innerHTML = `<p class="error-message"생년월일을 다시 확인해주세요.</p>`;
};

// 년도 오류일 때
const printBrithYearError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 년도 4자리를 정확하게 입력해주세요.</p>`;
};

// 월 오류일 때
const printBrithMonthError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 월을 정확하게 입력해주세요.</p>`;
};

// 일 오류일 때
const printBrithDayError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 일을 정확하게 입력해주세요.</p>`;
};
