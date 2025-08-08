// 개월 드롭다운
const dropdown = document.querySelector(".custom-dropdown");
const toggle = dropdown.querySelector(".dropdown-toggle");
const menu = dropdown.querySelector(".dropdown-menu");
const items = menu.querySelectorAll("li");

toggle.addEventListener("click", (e) => {
    toggle.classList.toggle("active");
});

items.forEach((item) => {
    item.addEventListener("click", (e) => {
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

// 검색 취소 버튼
const cancelButton = document.querySelector(".seller-search-cancel");
const searchInput = document.querySelector(".search-box-input");

cancelButton.addEventListener("click", (e) => {
    searchInput.value = "";
});
