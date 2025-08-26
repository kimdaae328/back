document.addEventListener("DOMContentLoaded", async () => {
    const likes = await likeService.getLike((likes) => {
        likeLayout.showList(likes); // 받아온 데이터 화면에 렌더링
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

// 총 개수
const likeTotal = document.querySelector(".like-total Strong");
const list = document.querySelector(".list-inner");

const updateTotalCount = () => {
    const count = list.querySelectorAll(".available, .unusable").length;
    likeTotal.innerText = count;
};

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

// 팝업 수량 카운트
const quantityBoxes = document.querySelectorAll(".product-quantity-box");

quantityBoxes.forEach((box) => {
    const plusBtn = box.querySelector(".quantity-btn.plus");
    const minusBtn = box.querySelector(".quantity-btn.minus");
    const countEl = box.querySelector(".count");
    minusBtn.disabled = true;

    plusBtn.addEventListener("click", () => {
        let count = Number(countEl.textContent);
        count++;
        countEl.textContent = count;
        minusBtn.disabled = count <= 0;
    });

    minusBtn.addEventListener("click", () => {
        let count = Number(countEl.textContent);
        if (count > 0) count--;
        countEl.textContent = count;
        minusBtn.disabled = count == 0;
    });
});
// 팝업
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");

openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.dataset.target;
        const targetModal = document.querySelector(targetSelector);
        const htmlScroll = document.querySelector("html");
        if (targetModal) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetModal = btn.closest(".popup-wrapper");
        const htmlScroll = document.querySelector("html");
        if (targetModal) {
            targetModal.style.display = "none";
            htmlScroll.style.overflow = "";
        }
    });
});

// 삭제 버튼
const removeButtons = document.querySelectorAll(".remove");

removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", function (e) {
        const productBox = this.closest(".available, .unusable");
        if (productBox) {
            productBox.remove();
            updateTotalCount();
        }
    });
});

document.querySelector("#like-container").addEventListener("click", async (e) => {
    const button = e.target.closest(".add");
    if(!button) return;

    const parent = button.closest(".available");
    const productId = parent.querySelector(".product-id").value;
    const memberId = parent.querySelector(".member-id").value;

    const response = await fetch("/api/carts/like/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, memberId, cartCount: 1 })
    });

    if(response.ok){
        alert("장바구니에 담겼습니다");
    }
});
document.querySelector("#like-container").addEventListener("click", async (e) => {
    const button = e.target.closest(".remove");
    if(!button) return;

    const parent = button.closest(".available");
    const productId = parent.querySelector(".product-id").value;
    const memberId = parent.querySelector(".member-id").value;

    const response = await fetch("/like/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, memberId })
    });

    if(response.ok){
        alert("찜목록 삭제되었습니다");
        const totalCountElem = document.querySelector(".like-total strong");
        let count = parseInt(totalCountElem.innerText);
        totalCountElem.innerText = count - 1;
        parent.remove();
    }
});