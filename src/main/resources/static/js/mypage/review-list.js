// 작성 가능한 후기 버튼
const possibleReviews = document.querySelector(".possible-reviews");
const reviewListBody = document.querySelector(".review-list-body");
const writtenReviewWrap = document.querySelector(".written-review-wrap");
const announcement = document.querySelector(".announcement");

possibleReviews.addEventListener("click", (e) => {
    reviewListBody.style.display = "flex";
    writtenReviewWrap.style.display = "none";
    announcement.style.display = "flex";
});

// 작성한 후기 버튼
const writtenReview = document.querySelector(".written-review-button");

writtenReview.addEventListener("click", (e) => {
    reviewListBody.style.display = "none";
    writtenReviewWrap.style.display = "flex";
    announcement.style.display = "none";
});

// 후기 작성 버튼
const reviewAddwButton = document.querySelector(".review-button");
const reviewWindow = document.querySelector(".review-window-wrap");

reviewAddwButton.addEventListener("click", (e) => {
    reviewWindow.classList.add("active");
});

// 후기 작성 버튼
const modifyButton = document.querySelector(".modify-button");

modifyButton.addEventListener("click", (e) => {
    reviewWindow.classList.add("active");
});

// 리뷰창 끄기
const cancelButton = document.querySelector(".cancel-button");
const reviewClose = document.querySelector(".review-window-close");

cancelButton.addEventListener("click", (e) => {
    reviewWindow.classList.remove("active");
});

reviewClose.addEventListener("click", (e) => {
    reviewWindow.classList.remove("active");
});

// 리뷰창 글자수

const textarea = document.querySelector("textarea");
const textEnter = document.querySelector(".text-enter");
const max = document.querySelector(".maxLength");
const maxLength = max.innerText;

textarea.addEventListener("keyup", (e) => {
    const result = textarea.value.length;
    if (textarea.value.length > maxLength) {
        textarea.value = textarea.value.slice(0, maxLength);
    }
    textEnter.innerText = `${result}`;
});

// 리뷰 저장 버튼 글 자수 css 스타일

const registerButton = document.querySelector(".register-button");

textarea.addEventListener("keyup", (e) => {
    if (textarea.value.length < 10) {
        registerButton.classList.remove("active");
    } else if (textarea.value.length >= 10) {
        registerButton.classList.add("active");
    }
});

// 사진 첨부

const input = document.querySelector("#add-photo-button");
const addButton = document.querySelector(".add-button-inner");
const thumbnailContainer = document.querySelector(".new-img");

input.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);

    // 현재 썸네일 수 확인
    const existingThumbs =
        thumbnailContainer.querySelectorAll(".new-img-inner").length;

    if (existingThumbs + files.length > 8) {
        alert("사진은 최대 8장까지 첨부할 수 있습니다.");
        return;
    }

    files.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
            const thumbnail = document.createElement("div");
            const imageSrc = event.target.result;

            // 썸네일 요소 생성
            thumbnail.className = "new-img-inner";
            thumbnail.innerHTML = `
            <span>
          <img src="${imageSrc}" alt="">
          </span>
        <button class="cancel-add" type="button"></button>
      `;
            thumbnailContainer.appendChild(thumbnail);

            // 썸네일 삭제
            const cancelBtn = thumbnail.querySelector(".cancel-add");
            cancelBtn.addEventListener("click", () => {
                thumbnail.remove();
            });
        };
    });

    // input 초기화 (같은 파일 또 선택할 수 있게)
    e.target.value = "";
});

// 리뷰 저장 팝업
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");

openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.dataset.target;
        const targetModal = document.querySelector(targetSelector);
        const htmlScroll = document.querySelector("html");
        if (targetModal && textarea.value.length >= 10) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";
            reviewWindow.classList.remove("active");
            textarea.value = "";
            thumbnailContainer.innerHTML = "";
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
