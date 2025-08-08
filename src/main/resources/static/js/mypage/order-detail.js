// 각 항목 장바구니에 잠기

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

// 전체 장바구니에 담기

const cartIcon = document.querySelector(".recontain-button");
const allAddMessage = document.querySelector(".all-add-cart-tap-wrap");

cartIcon.addEventListener("click", (e) => {
    allAddMessage.style.display = "block";
    void allAddMessage.offsetWidth;

    allAddMessage.classList.add("show");

    setTimeout(() => {
        allAddMessage.classList.remove("show");

        setTimeout(() => {
            allAddMessage.style.display = "none";
        }, 300);
    }, 1500);
});

// 정보 버튼 누르기

const infoButtons = document.querySelectorAll(".pay-info");

infoButtons.forEach((infoButton) => {
    infoButton.addEventListener("click", () => {
        const infoCard = infoButton.nextElementSibling;
        const svg = infoButton.querySelector(".pay-info-more svg");

        const isOpen = infoCard.classList.contains("active");

        // toggle 클래스
        infoCard.classList.toggle("active");

        // 화살표 회전
        svg.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
    });
});

// 사이드 필터 드롭다운
const filterDropdownButtons = document.querySelectorAll(
    ".filter-category-list .dropdown-btn"
);
filterDropdownButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.closest(".filter-category-list").classList.toggle("up");
    });
});
const scrollTopButton = document.querySelector(".scroll-top-btn");
scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

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
