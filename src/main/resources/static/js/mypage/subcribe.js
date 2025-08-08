// 결제 시작일
const todayDate = document.querySelector("#date");
const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // 2자리로 만들기
const date = String(today.getDate()).padStart(2, "0");

const formattedDate = `${year}년 ${month}월 ${date}일`;

const getDate = () => {
    todayDate.innerText = formattedDate;
};
getDate();

// 결제 수단 선택

const payInputs = document.querySelectorAll(".pay-input");
const select = document.querySelector(".select");

payInputs.forEach((payInput) => {
    payInput.addEventListener("click", () => {
        if (payInput.id === "naver") {
            select.innerText = `네이버페이`;
        } else {
            select.innerText = `신용카드`;
        }
        // 모든 pay-label에서 active 제거 + 체크 아이콘 제거
        document.querySelectorAll(".pay-label").forEach((label) => {
            label.classList.remove("active");

            // 체크 아이콘만 제거
            const checkIcon = label.querySelector(".check-icon");
            if (checkIcon) checkIcon.remove();
        });

        // 현재 선택된 라벨만 active + 체크 아이콘 추가
        const currentLabel = payInput.closest(".pay-label");
        currentLabel.classList.add("active");

        // 체크 표시 아이콘 추가
        currentLabel.insertAdjacentHTML(
            "beforeend",
            `
            <svg class="check-icon" width="17" height="17" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4.76471L5.5 9L14 1" stroke="rgb(50, 116, 63)" stroke-width="1.8" stroke-linecap="round"></path>
            </svg>
        `
        );
    });
});

// 약관 선택
// 전체선택
const allTerm = document.querySelector(".term-all input");
const terms = document.querySelectorAll(".term-input");
const button = document.querySelector(".button");

allTerm.addEventListener("click", (e) => {
    terms.forEach((term) => {
        term.checked = e.target.checked;
        if (e.target.checked) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
});

// 개별 선택

let count = 0;

terms.forEach((term) => {
    term.addEventListener("click", () => {
        const checkedCount = Array.from(terms).filter(
            (term) => term.checked
        ).length;

        allTerm.checked = checkedCount === terms.length;

        if (allTerm.checked) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
});
