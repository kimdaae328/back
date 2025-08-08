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

// 리뷰창 글자수
const textarea = document.querySelector("textarea");
const textEnter = document.querySelector(".text-enter");
const max = document.querySelector(".maxLength");
const maxLength = max.innerText;

textarea.addEventListener("keyup", (e) => {
    if (textarea.value.length > maxLength) {
        textarea.value = textarea.value.slice(0, maxLength);
    }
    const result = textarea.value.length;
    textEnter.innerText = `${result}`;
});

// 유형 셀랙트 박스 드롭다운
const dropdowns = document.querySelectorAll(".dropdown-wrap");

dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    const items = menu.querySelectorAll("li");

    // 드롭다운 열기/닫기
    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeAllDropdowns();
        toggle.classList.toggle("active");
    });

    // 메뉴 항목 클릭
    items.forEach((item) => {
        item.addEventListener("click", (e) => {
            items.forEach((el) => el.classList.remove("on"));
            item.classList.add("on");

            toggle.firstElementChild.innerHTML = `<span>${item.textContent}</span>`;
            toggle.classList.remove("active");
        });
    });
});

// 외부 클릭 시 모든 드롭다운 닫기
document.addEventListener("click", () => {
    closeAllDropdowns();
});

// 모든 드롭다운 닫기 함수
function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        toggle.classList.remove("active");
    });
}

// 왼쪽 선택했을 때 오른쪽에 보여줄 내용
const rightOptions = {
    정산: ["정산 금액", "입금 지연", "수수료", "세금계산서"],
    상품: ["등록", "수정"],
    "주문/결제/배송": ["주문", "결제", "송장 오류", "배송 지연"],
    "취소/교환/환불": ["취소", "반품", "교환"],
    "서비스/오류/기타": [
        "시스템 오류/장애",
        "기타(직접 입력)",
        "서비스 제안/개선",
    ],
};

const leftItems = document.querySelectorAll(".leftDropdown .dropdown-menu li");
const rightMenu = document.querySelector(".rightDropdown .dropdown-menu");
const formProduct = document.querySelector(".form-product");

leftItems.forEach((item) => {
    item.addEventListener("click", () => {
        const text = item.textContent;
        const newItems = rightOptions[text];

        rightMenu.innerHTML = "";

        newItems.forEach((txt) => {
            const li = document.createElement("li");
            li.textContent = txt;

            li.addEventListener("click", () => {
                document.querySelector(
                    ".rightDropdown .dropdown-toggle span"
                ).textContent = txt;

                document
                    .querySelector(".rightDropdown .dropdown-toggle")
                    .classList.remove("active");
            });

            rightMenu.appendChild(li);
        });

        document.querySelector(
            ".rightDropdown .dropdown-toggle"
        ).disabled = false;

        document.querySelector(
            ".rightDropdown .dropdown-toggle span"
        ).textContent = "상세유형을 선택해주세요";
    });
});

// 팝업 주문번호 셀랙트 박스 드롭다운
const toggle = document.querySelector(".custom-dropdown .dropdown-toggle");
const menu = document.querySelector(".custom-dropdown .dropdown-menu");
const items = menu.querySelectorAll(".custom-dropdown .dropdown-menu li");

toggle.addEventListener("click", (e) => {
    toggle.classList.toggle("active");
});

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        items.forEach((el) => el.classList.remove("on"));
        item.classList.add("on");

        toggle.firstElementChild.innerHTML = `<span>${item.textContent}</span>`;
        toggle.classList.remove("active");
    });
});

const searchBoxInput = document.querySelector(".search-box-input");
const cancelBtn = document.querySelector(".order-search-cancel");

// input 입력 시 cancel 버튼 보이기
searchBoxInput.addEventListener("input", () => {
    if (searchBoxInput.value.trim() !== "") {
        cancelBtn.style.display = "block";
    } else {
        cancelBtn.style.display = "none";
    }
});

// cancel 버튼 클릭 시 input 값 제거 + 버튼 숨기기
cancelBtn.addEventListener("click", () => {
    searchBoxInput.value = "";
    cancelBtn.style.display = "none";
    searchBoxInput.focus();
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
