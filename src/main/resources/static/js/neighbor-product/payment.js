const orderButton = document.querySelector(".order-title-wrap .btn-arrow");
const orderList = document.querySelector(".order-product-section");
const orderContent = document.querySelector(".order-content-text-wrap");

orderButton.addEventListener("click", () => {
    orderButton.classList.toggle("on");
});

// 팝업
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");
const htmlScroll = document.querySelector("html");
let currentButton = null;

openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const targetModal = document.querySelector(btn.dataset.target);
        if (targetModal) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";

            currentButton = btn;
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetModal = btn.closest(".popup-wrapper");
        if (targetModal) {
            targetModal.style.display = "none";
            htmlScroll.style.overflow = "";
        }
    });
});

// 결제 수단 탭
const tabButtons = document.querySelectorAll(".payment-btn-wrap .btn-round");
const tabContents = document.querySelectorAll(".payment-tab-item");

tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        tabContents.forEach((content) => content.classList.remove("active"));
        if (tabContents[index]) {
            tabContents[index].classList.add("active");
        }
    });
});

tabButtons[0].click();

// 카드 선택
const cardButton = document.querySelectorAll(
    ".product-scroll-section .btn-round"
);

cardButton.forEach((selectBtn) => {
    selectBtn.addEventListener("click", () => {
        if (!currentButton) return;

        const selectedText = selectBtn.textContent;
        const span = currentButton.querySelector("span");
        const popup = selectBtn.closest(".popup-wrapper");

        span.textContent = selectedText;
        span.style.color = "#222";
        popup.style.display = "none";
        htmlScroll.style.overflow = "";

        currentButton = null;

        const cardOptionBtn = document.querySelector(".btn-card-option");
        if (cardOptionBtn) {
            cardOptionBtn.style.display = "flex";
        }
    });
});
