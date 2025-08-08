// 버튼 공통
function toggleButton(buttons) {
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
}

const menuButtons = document.querySelectorAll(".sidebar-menu-list .btn-menu");
toggleButton(menuButtons);

// 공지사항 드롭다운
const tableTrButton = document.querySelectorAll(
    ".notice-board-table tbody tr.question-item"
);
const answerRow = document.querySelectorAll(".faq-answer-row.open");

tableTrButton.forEach((tr) => {
    tr.addEventListener("click", () => {
        const answerTr = tr.nextElementSibling;

        answerRow.forEach((answer) => {
            if (answer !== answerTr) {
                answer.classList.remove("open");
            }
        });

        // 현재 클릭된 tr의 답변 열기/닫기
        answerTr.classList.toggle("open");
    });
});

// 샐랙트 박스 드롭다운
const dropdown = document.querySelector(".dropdown-wrap");
const toggle = dropdown.querySelector(".dropdown-toggle");
const menu = dropdown.querySelector(".dropdown-menu");
const items = menu.querySelectorAll(".dropdown-menu li");

toggle.addEventListener("click", (e) => {
    toggle.classList.toggle("active");
});

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        items.forEach((el) => el.classList.remove("on"));
        item.classList.add("on");

        toggle.firstElementChild.innerHTML = `<span>${item.textContent}</span>`;
        toggle.classList.remove("active");
    });
});

// 외부 클릭 시 개월 드롭다운 닫기
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        toggle.classList.remove("active");
    }
});
