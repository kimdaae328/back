NodeList.prototype.filter = Array.prototype.filter;

// 리스트 페이지 필터
const filterSelect = document.querySelectorAll(
    ".filter-sidebar input[type=checkbox], .filter-sidebar input[type=radio]"
);
const resetButtons = document.querySelectorAll(".btn-reset");

filterSelect.forEach((input) => {
    input.addEventListener("change", (e) => {
        // 리셋버튼 초기화
        resetButtonsState();

        // 라디오 값 중복확인
        const isRadio = input.type === "radio";
        const isChecked = input.checked;

        if (isRadio && isChecked) {
            const groupName = input.name;
            const allGroupRadios = document.querySelectorAll(
                `.filter-sidebar input[type=radio][name="${groupName}"]`
            );

            allGroupRadios.forEach((radio) => {
                const label = radio.closest("label");
                const labelTitle = label.querySelector(".title").textContent;
                const activeTag =
                    document.querySelectorAll(".active-filter-tag");

                activeTag.forEach((tag) => {
                    if (tag.textContent === labelTitle) {
                        tag.closest(".active-filter-item").remove();
                    }
                });
            });
        }

        // 중복체크
        const title = input
            .closest("label")
            .querySelector(".title").textContent;
        let isDuplicated = false;

        document.querySelectorAll(".active-filter-tag").forEach((tag) => {
            if (tag.textContent === title) {
                isDuplicated = true;
            }
        });

        // tag 추가
        const activeFilterBox = document.querySelector(
            ".active-filter-container"
        );

        if (isChecked && !isDuplicated) {
            let filterActiveBox = activeFilterBox.querySelector(
                ".active-filter-list"
            );

            // 생성
            if (!filterActiveBox) {
                filterActiveBox = document.createElement("div");
                filterActiveBox.className = "active-filter-list";
                activeFilterBox.appendChild(filterActiveBox);
            }

            // 필터 태그 추가
            const div = document.createElement("div");
            div.className = "active-filter-item";
            div.innerHTML = `
                <span class="active-filter-tag">${title}</span>
                <button class="remove-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.55566 5.55566L14.4446 14.4446" stroke="#ccc"></path>
                    <path d="M14.4443 5.55566L5.55545 14.4446" stroke="#ccc"></path>
                </svg>
                </button>
                `;
            filterActiveBox.appendChild(div);

            // 필터안 태그 remove버튼 클릭시
            if (filterActiveBox) {
                const removeBtns =
                    document.querySelectorAll("button.remove-btn");

                removeBtns.forEach((btn) => {
                    btn.addEventListener("click", (e) => {
                        e.target.closest(".active-filter-item").remove();

                        const filterActiveBox = document.querySelector(
                            ".active-filter-list"
                        );

                        if (filterActiveBox) {
                            const allTagsCount =
                                filterActiveBox.querySelectorAll(
                                    ".active-filter-item"
                                );
                            filterActiveBox.style.display =
                                allTagsCount.length > 0 ? "flex" : "none";
                        }

                        // input박스 초기화
                        const item = e.target.closest(".active-filter-item");
                        const title =
                            item.querySelector(
                                ".active-filter-tag"
                            ).textContent;

                        document
                            .querySelectorAll("input:checked")
                            .forEach((input) => {
                                const checkedTitle = input
                                    .closest("label")
                                    .querySelector(".title").textContent;

                                if (checkedTitle === title) {
                                    input.checked = false;
                                }
                            });
                    });
                });
            }
        }

        // 태그 삭제
        if (!isChecked) {
            removeTag(title);
        }

        // 태그 없을때
        noTag();
    });
});

// 리셋 버튼초기화
function resetButtonsState() {
    const isChecked =
        document.querySelectorAll(".filter-sidebar input:checked").length > 0;

    resetButtons.forEach((btn) => {
        if (btn.closest(".filter-sidebar")) {
            btn.classList.toggle("on", isChecked);
        }
        btn.disabled = !isChecked;
    });
}
resetButtonsState();

// 태그 삭제
function removeTag(title) {
    const tag = document.querySelectorAll(".active-filter-tag");
    tag.forEach((tag) => {
        if (tag.textContent === title) {
            tag.closest(".active-filter-item").remove();
        }
    });
}

// 태그 없을때
function noTag() {
    const filterActiveBox = document.querySelector(".active-filter-list");

    if (filterActiveBox) {
        const allTagsCount = filterActiveBox.querySelectorAll(
            ".active-filter-item"
        );
        filterActiveBox.style.display =
            allTagsCount.length > 0 ? "flex" : "none";
    }
}

// 라디오 두 번 클릭 시 해제
const radios = document.querySelectorAll('input[type="radio"]');
let selected = null;

radios.forEach((radio) => {
    const title = radio.closest("label").querySelector(".title").textContent;

    radio.addEventListener("click", (e) => {
        if (selected === radio) {
            radio.checked = false;
            selected = null;

            // 태그 삭제
            removeTag(title);

            // 태그 없을때
            noTag();
        } else {
            selected = radio;
        }
    });
});

// 리셋 클릭시 전체 필터 초기화
resetButtons.forEach((resetButton) => {
    resetButton.addEventListener("click", () => {
        filterSelect.forEach((input) => {
            input.checked = false;

            const title = input
                .closest("label")
                .querySelector(".title").textContent;

            removeTag(title);
            noTag();
        });

        resetButtons.forEach((btn) => {
            if (btn.closest(".filter-sidebar")) {
                btn.classList.remove("on");
            }
            btn.disabled = true;
        });
    });
});

// 버튼 공통
function toggleButton(buttons) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("on"));
            button.classList.add("on");
        });
    });
}

// 사이드 필터 버튼 on/off
const sortButtons = document.querySelectorAll(
    ".category-sort-options .category-sort-btn"
);
// 사이드 필터 버튼 전체 on/off
const initialButtons = document.querySelectorAll(
    ".initial-filter .initial-button"
);
// 페이지네이션 버튼 on/off
const pagenationButtons = document.querySelectorAll(
    ".pagenation-number .pagenation-btn"
);

toggleButton(sortButtons);
toggleButton(initialButtons);
toggleButton(pagenationButtons);

// 초기화 포함 버튼 공통
function toggleResetButtons(buttons, defaultText) {
    buttons.forEach((button) => {
        if (button.textContent.includes(defaultText)) {
            button.classList.add("on");
        }

        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("on"));
            button.classList.add("on");
        });
    });
}

// 상단 메뉴 버튼 on/off
const menuButtons = document.querySelectorAll(".menu-item .menu-btn");
// 제품 상단 필터 버튼 on/off
const sortOptionButtons = document.querySelectorAll(
    ".product-sort-options .sort-button"
);

toggleResetButtons(menuButtons, "전체보기");
toggleResetButtons(sortOptionButtons, "추천순");

// 사이드 필터 드롭다운
const filterButtons = document.querySelectorAll(
    ".filter-category-list .dropdown-btn"
);

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("up");
    });
});

// 상단으로 이동
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

// 팝업 합계
const productItem = document.querySelectorAll(".popup-product-item");
function calculateTotal(container) {
    let total = 0;

    productItem.forEach((item) => {
        const priceText = item
            .querySelector(".product-price")
            .textContent.replace(/[^0-9]/g, "");
        const count = parseInt(item.querySelector(".count").textContent, 10);
        const price = parseInt(priceText, 10);
        total += price * count;
    });

    // 총액 업데이트
    const totalAmount = container.querySelector(".total-amount");
    if (totalAmount) {
        totalAmount.textContent = total.toLocaleString();
    }
}

// 팝업 수량 카운트
function quantityControls(container) {
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

            calculateTotal(container);
        });

        minusBtn.addEventListener("click", () => {
            let count = Number(countEl.textContent);
            if (count > 0) count--;
            countEl.textContent = count;
            minusBtn.disabled = count == 0;

            calculateTotal(container);
        });
    });

    calculateTotal(container);
}

const popup = document.querySelector(".popup-content");
quantityControls(popup);

// 팝업
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");
const htmlScroll = document.querySelector("html");

openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.dataset.target;
        const targetModal = document.querySelector(targetSelector);
        if (targetModal) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";
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

// 상품 총개수
const productCards = document.querySelectorAll(".product-list .product-card");
const countSpan = document.querySelector(".result-count .count");

countSpan.textContent = productCards.length;
