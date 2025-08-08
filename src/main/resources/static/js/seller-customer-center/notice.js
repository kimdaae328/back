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
