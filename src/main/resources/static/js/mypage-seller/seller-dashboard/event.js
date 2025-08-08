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

const closePayoutModal = document.querySelector(".btn-close.popup-close");
const openPayoutBtn = document.querySelector("div.request-payout-btn-wrap");
const closePayoutBtn = document.querySelector(".btn-primary.popup-close");
const payoutModal = document.querySelector("div.popup-wrapper#popup3");
const openResultBtn = document.querySelector("div.popup-wrapper#popup5");
const closeResultBtn = document.querySelector("button.btn-default.popup-close");
const htmlScroll = document.querySelector("html");
console.log(htmlScroll);

closePayoutModal.addEventListener("click", (e) => {
    htmlScroll.style.overflow = "none";
    payoutModal.style.display = "none";
});
openPayoutBtn.addEventListener("click", (e) => {
    htmlScroll.style.overflow = "hidden";
    payoutModal.style.display = "block";
});
closePayoutBtn.addEventListener("click", (e) => {
    payoutModal.style.display = "none";
    htmlScroll.style.overflow = "hidden";
    openResultBtn.style.display = "block";
});
closeResultBtn.addEventListener("click", (e) => {
    htmlScroll.style.overflow = "";
    openResultBtn.style.display = "none";
});
