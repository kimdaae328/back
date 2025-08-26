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
const cancelButton = document.querySelector(".order-search-cancel");
const searchInput = document.querySelector(".search-box-input");

cancelButton.addEventListener("click", (e) => {
    searchInput.value = "";
});

// 장바구니 추가 버튼

const cartIcons = document.querySelectorAll(".add-cart");
const addMessage = document.querySelector(".add-cart-tap-wrap");

cartIcons.forEach((cartIcon) => {
    cartIcon.addEventListener("click", () => {
        addMessage.style.display = "block";
        void addMessage.offsetWidth;

        addMessage.classList.add("show");

        setTimeout(() => {
            addMessage.classList.remove("show");

            setTimeout(() => {
                addMessage.style.display = "none";
            }, 300);
        }, 1500);
    });
});

// 주문 펼쳐보기 버튼 누를 때

const overview = document.querySelector(".view-more.over");
const foldview = document.querySelector(".view-more.fold");
const products = document.querySelectorAll(".order-product-wrap.fold");

overview.addEventListener("click", (e) => {
    products.forEach((product) => {
        product.classList.toggle("fold");
    });
    overview.style.display = "none";
    foldview.style.display = "flex";
});

foldview.addEventListener("click", (e) => {
    products.forEach((product) => {
        product.classList.toggle("fold");
    });
    foldview.style.display = "none";
    overview.style.display = "flex";
});
