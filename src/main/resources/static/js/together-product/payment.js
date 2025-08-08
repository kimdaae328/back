// 주문상품 더보기 버튼
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

// 총 합계
const optionPrice = document.querySelectorAll(".option-price");
function calculateOrderAmount() {
    let totalAmount = 0;

    optionPrice.forEach((option) => {
        const priceText = option
            .querySelector(".origin-price")
            .textContent.replace(/[^0-9]/g, "");
        const countText = option
            .querySelector(".count")
            .textContent.replace(/[^0-9]/g, "");
        const price = parseInt(priceText, 10);
        const count = parseInt(countText, 10);

        totalAmount += price * count;
    });

    // 주문금액 표시
    const orderAmount = document.querySelector(
        ".order-amount-item:nth-child(1) .amount-text .count"
    );
    orderAmount.textContent = totalAmount.toLocaleString();

    // 배송비 (필요시 계산 로직 추가)
    const deliveryAmount = 0;
    const deliveryAmountEl = document.querySelector(
        ".order-amount-item:nth-child(2) .amount-text .count"
    );
    deliveryAmountEl.textContent = deliveryAmount.toLocaleString();

    // 최종 결제금액 계산 및 표시
    const finalAmount = totalAmount + deliveryAmount;
    document.querySelector(
        ".order-amount-item.total .amount-text .count"
    ).textContent = finalAmount.toLocaleString();

    // 버튼 금액 표시
    document.querySelector(".btn-payment .count").textContent =
        finalAmount.toLocaleString();
}

// 실행
calculateOrderAmount();

// 주문자정보랑 동일
const checkbox = document.querySelector(".btn-agree input");
const senderName = document.querySelector(".orderer-name").textContent.trim();
const senderPhone = document.querySelector(".orderer-phone").textContent.trim();
const nameInput = document.querySelector(
    ".input-label.input-name"
).nextElementSibling;
const phoneInput = document.querySelector(
    ".input-label.input-phone"
).nextElementSibling;

const nameSpan = document.createElement("span");
nameSpan.classList.add("input-result");
nameSpan.textContent = senderName;
nameSpan.style.display = "none";

const phoneSpan = document.createElement("span");
phoneSpan.classList.add("input-result");
phoneSpan.textContent = senderPhone;
phoneSpan.style.display = "none";

nameInput.parentElement.appendChild(nameSpan);
phoneInput.parentElement.appendChild(phoneSpan);

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        nameInput.style.display = "none";
        phoneInput.style.display = "none";

        nameSpan.style.display = "inline-block";
        phoneSpan.style.display = "inline-block";
    } else {
        nameInput.style.display = "inline-block";
        phoneInput.style.display = "inline-block";

        nameSpan.style.display = "none";
        phoneSpan.style.display = "none";
    }
});

// 상품 총개수
const productItems = document.querySelectorAll(
    ".order-product-list .order-product-item"
);
const orderSpan = document.querySelector(".order-content-text .count");

orderSpan.textContent = productItems.length;
