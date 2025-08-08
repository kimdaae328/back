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
const tableTrButton = document.querySelectorAll(".notice-board-table tbody tr");
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
