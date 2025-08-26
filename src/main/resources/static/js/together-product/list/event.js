// 카테고리 목록

document.addEventListener("DOMContentLoaded", async () => {
    await productListService.getList(page, layout.categoryList);
});

NodeList.prototype.filter = Array.prototype.filter;

// 전역 상태 유지
let categories = [];
let selectedRadio = null;

const filterSidebar = document.querySelector(".filter-sidebar");
const activeFilterContainer = document.querySelector(".active-filter-container");

// 타이틀 → 카테고리 매핑
function mapTitleToCategory(title) {
    switch (title) {
        case "채소": return "vegetables";
        case "과일·견과·쌀": return "fruits";
        case "수산·해산·건어물": return "fisheries";
        case "정육·가공육·달걀": return "butchers";
        case "기타": return "etc";
        default: return null;
    }
}

// 태그 추가/제거
function addTag(title) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.dataset.title = title;
    tag.innerHTML = `${title} <button type="button" class="tag-remove">x</button>`;
    activeFilterContainer.appendChild(tag);
}

function removeTag(title) {
    const tag = activeFilterContainer.querySelector(`.tag[data-title="${title}"]`);
    if (tag) tag.remove();
}

function noTag() {
    // 태그 없으면 처리 필요 시 작성
}

// 체크박스/라디오 변경 처리
filterSidebar.addEventListener("change", async (e) => {
    const input = e.target;
    if (input.tagName !== "INPUT") return;

    const isRadio = input.type === "radio";
    const isChecked = input.checked;
    const title = input.closest("label").querySelector(".title").textContent;
    const category = mapTitleToCategory(title);

    // 라디오 중복 클릭 처리
    if (isRadio) {
        if (selectedRadio === input) {
            input.checked = false;
            selectedRadio = null;
            removeTag(title);
            categories = categories.filter(c => c !== category);
            await productListService.getList(page, layout.showProductList, { mainCategories: categories });
            noTag();
            return;
        } else {
            selectedRadio = input;
            // 이전 라디오 태그 제거
            const groupName = input.name;
            document.querySelectorAll(`input[type="radio"][name="${groupName}"]`).forEach(r => {
                if (r !== input && r.checked) {
                    const prevTitle = r.closest("label").querySelector(".title").textContent;
                    const prevCategory = mapTitleToCategory(prevTitle);
                    removeTag(prevTitle);
                    categories = categories.filter(c => c !== prevCategory);
                    r.checked = false;
                }
            });
        }
        isRadio.id
    }

    if (!category) return;

    if (isChecked) {
        if (!categories.includes(category)) {
            categories.push(category);
        }
        addTag(title);
    } else {
        categories = categories.filter(c => c !== category);
        removeTag(title);
    }
    let totalCategories = categories.length > 0 ? categories : null;

    await productListService.getList(page, layout.showProductList, { mainCategories: totalCategories });
    noTag();
});

// 태그 클릭 제거 시 체크박스/라디오 해제
activeFilterContainer.addEventListener("click", async (e) => {
    if (!e.target.classList.contains("tag-remove")) return;

    const tag = e.target.closest(".tag");
    const title = tag.dataset.title;
    const category = mapTitleToCategory(title);

    // 배열에서 제거
    categories = categories.filter(c => c !== category);

    // 태그 제거
    removeTag(title);

    // 체크박스/라디오 해제
    const inputs = filterSidebar.querySelectorAll("input");
    inputs.forEach(input => {
        const inputTitle = input.closest("label").querySelector(".title").textContent;
        if (inputTitle === title) {
            input.checked = false;
            if (input.type === "radio" && selectedRadio === input) {
                selectedRadio = null;
            }
        }
    });

    await productListService.getList(page, layout.showProductList, { mainCategories: categories });
    noTag();
});


// remove 버튼 이벤트 위임
activeFilterContainer.addEventListener("click", (e) => {
    if (!e.target.closest("button.remove-btn")) return;

    const item = e.target.closest(".active-filter-item");
    const title = item.querySelector(".active-filter-tag").textContent;

    // 태그 제거
    item.remove();
    noTag();

    // 관련 input 체크 해제
    document.querySelectorAll(".filter-sidebar input").forEach((input) => {
        const inputTitle = input.closest("label").querySelector(".title").textContent;
        if (inputTitle === title) {
            input.checked = false;
            if (input.type === "radio") selectedRadio = null;
        }
    });

    resetButtonsState();
});

// reset 버튼 클릭 이벤트
filterSidebar.addEventListener("click", (e) => {
    if (!e.target.closest(".btn-reset")) return;

    document.querySelectorAll(".filter-sidebar input").forEach((input) => {
        input.checked = false;
    });

    document.querySelectorAll(".active-filter-item").forEach(item => item.remove());
    noTag();
    selectedRadio = null;
    resetButtonsState();
});

// 필터 태그 생성 함수
function addTag(title) {
    const activeFilterBox = activeFilterContainer.querySelector(".active-filter-list") || createActiveFilterBox();

    // 중복 체크
    const duplicated = Array.from(activeFilterBox.querySelectorAll(".active-filter-tag"))
        .some(tag => tag.textContent === title);
    if (duplicated) return;

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
    activeFilterBox.appendChild(div);
}

// active-filter-list 생성
function createActiveFilterBox() {
    const div = document.createElement("div");
    div.className = "active-filter-list";
    activeFilterContainer.appendChild(div);
    return div;
}

// 태그 제거
function removeTag(title) {
    document.querySelectorAll(".active-filter-tag").forEach(tag => {
        if (tag.textContent === title) {
            tag.closest(".active-filter-item").remove();
        }
    });
}

// 태그 없을때 처리
function noTag() {
    const filterActiveBox = activeFilterContainer.querySelector(".active-filter-list");
    if (filterActiveBox) {
        const count = filterActiveBox.querySelectorAll(".active-filter-item").length;
        filterActiveBox.style.display = count > 0 ? "flex" : "none";
    }
}

// 리셋 버튼 활성화 처리
function resetButtonsState() {
    const isChecked = document.querySelectorAll(".filter-sidebar input:checked").length > 0;
    document.querySelectorAll(".btn-reset").forEach(btn => {
        btn.classList.toggle("on", isChecked);
        btn.disabled = !isChecked;
    });
}

resetButtonsState();

const updateProductList = async (page = 1) => {
    const selectedCategories = Array.from(
        document.querySelectorAll('input[name="mainCategory"]:checked')
    ).map(input => input.value);

    const selectedPrice = document.querySelector('input[name="priceFilter"]:checked')?.value || null;

    const searchCriteria = {
        mainCategories: selectedCategories,
        priceKeyword: selectedPrice
    };

    await productListService.getList(page, layout.showProductList, searchCriteria);
};

// 이벤트 바인딩
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".filter-list").addEventListener("change", (e) => {
        if (e.target.matches('input[type="checkbox"], input[type="radio"]')) {
            updateProductList();
        }
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

// 제품 상단 필터 버튼 on/off
const sortOptionButtons = document.querySelectorAll(
    ".product-sort-options .sort-button"
);

toggleResetButtons(sortOptionButtons, "신상품순");

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



// 팝업
const buttonContainer = document.querySelector(".product-list");
let productId = null;

// 이벤트 위임으로 팝업 열기
buttonContainer.addEventListener("click", async (e) => {
    const btn = e.target.closest(".popup-trigger");
    if (!btn) return;

    productId = btn.dataset.productId;
    console.log(productId);

    const product = await productListService.addCart(productId);

    layout.showPopupCart(product);
    console.log();
});

// 이벤트 위임으로 팝업 닫기
document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".popup-close");
    if (!btn) return;
    const productHeader = document.querySelector(".popup-header");

    const targetModal = btn.closest(".popup-wrapper");
    console.log(targetModal);
    if (btn.classList.contains("btn-outline")) {
        document.getElementById("popup1").remove();
        htmlScroll.style.overflow = "";
    }else if (btn.classList.contains("btn-primary")) {
        const cartCount = document.querySelector("div.count").innerText;
        const text = document.querySelector(".add-cart-tap-p");
        const addMessage = document.querySelector(".add-cart-tap-wrap");
        const productId = productHeader.dataset.productId;

        const cart = {
            cartCount: Number(cartCount),
            productId: productId
        }
        const result = await productListService.save(cart);
        document.getElementById("popup1").remove();

        if (result){
            if(!(Number(cartCount) === 0)){
                //     장바구니에 추가 완료
                text.innerText = "장바구니에 상품을 담았어요!"
                addMessage.style.display = "block";
                void addMessage.offsetWidth;
                addMessage.classList.add("show");

                setTimeout(() => {
                    addMessage.classList.remove("show");

                    setTimeout(() => {
                        addMessage.style.display = "none";
                    }, 300);
                }, 1500);
            } else if (Number(cartCount) === 0) {
                text.innerText = `장바구니에 상품을 담지 못했어요.\n수량을 확인해주세요.`
                addMessage.style.display = "block";
                void addMessage.offsetWidth;

                addMessage.classList.add("show");

                setTimeout(() => {
                    addMessage.classList.remove("show");

                    setTimeout(() => {
                        addMessage.style.display = "none";
                    }, 300);
                }, 1500);
            }
        }
    }
});

const modalWrap = document.querySelector(".modal-wrap");

// 총액 계산 함수
function calculateTotal(container) {
    let total = 0;

    const productItems = container.querySelectorAll(".popup-product-item");
    productItems.forEach((item) => {
        const priceText = item
            .querySelector(".product-price")
            .textContent.replace(/[^0-9]/g, "");
        const count = parseInt(item.querySelector(".count").textContent, 10);
        const price = parseInt(priceText, 10);
        total += price * count;
    });

    const totalAmount = container.querySelector(".total-amount");
    if (totalAmount) {
        totalAmount.textContent = total.toLocaleString();
    }
}

// 이벤트 위임 개수 버튼
modalWrap.addEventListener("click", (e) => {
    const plusBtn = e.target.closest(".quantity-btn.plus");
    const minusBtn = e.target.closest(".quantity-btn.minus");

    if (!plusBtn && !minusBtn) return;

    const box = plusBtn ? plusBtn.closest(".product-quantity-box") : minusBtn.closest(".product-quantity-box");
    const countEl = box.querySelector(".count");
    const minusBtnEl = box.querySelector(".quantity-btn.minus");
    const container = box.closest(".popup-content");

    if (plusBtn) {
        let count = Number(countEl.textContent);
        count++;
        countEl.textContent = count;
        minusBtnEl.disabled = count <= 0;
    } else if (minusBtn) {
        let count = Number(countEl.textContent);
        if (count > 0) count--;
        countEl.textContent = count;
        minusBtnEl.disabled = count == 0;
    }

    calculateTotal(container);
});

// 초기 총액 계산 (팝업 열리자마자)
const initialContainer = modalWrap.querySelector(".popup-content");
if (initialContainer) calculateTotal(initialContainer);


// 상품 총개수
const productCards = document.querySelectorAll(".product-list .product-card");
const countSpan = document.querySelector(".result-count .count");

countSpan.textContent = productCards.length;



//###############################목록####################################
const showList = async (page) => {
    const productCriteria = await  productListService.getList(page, layout.showProductList);

    return productCriteria;

}
showList(page = 1);

//목록 페이징
const pagination = (() => {
    const container = document.querySelector(".pagenation");
    const numberContainer = container.querySelector(".pagenation-number");
    const firstBtn = container.querySelector(".first");
    const prevBtn = container.querySelector(".prev");
    const nextBtn = container.querySelector(".next");
    const lastBtn = container.querySelector(".last");

    let currentPage = 1;
    let totalPage = 1;

    // 숫자 버튼 렌더링
    const renderPageNumbers = () => {
        numberContainer.innerHTML = "";
        for (let i = 1; i <= totalPage; i++) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "pagenation-btn" + (i === currentPage ? " on" : "");
            btn.textContent = i;
            btn.addEventListener("click", () => goToPage(i));
            numberContainer.appendChild(btn);
        }
    };

    // 페이지 이동
    const goToPage = async (page) => {
        if (page < 1) page = 1;
        if (page > totalPage) page = totalPage;
        currentPage = page;

        // 상품 목록 가져오기
        const productCriteria = await productListService.getList(page, layout.showProductList);

        // 총 페이지 수 갱신 (API에서 내려주는 값)
        totalPage = productCriteria.criteria.realEnd || 1;

        // 숫자 버튼 갱신
        renderPageNumbers();

        // 버튼 활성/비활성 처리
        prevBtn.disabled = currentPage === 1;
        firstBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPage;
        lastBtn.disabled = currentPage === totalPage;
    };

    // 버튼 이벤트 연결
    firstBtn.addEventListener("click", () => goToPage(1));
    prevBtn.addEventListener("click", () => goToPage(currentPage - 1));
    nextBtn.addEventListener("click", () => goToPage(currentPage + 1));
    lastBtn.addEventListener("click", () => goToPage(totalPage));

    return { goToPage };
})();


pagination.goToPage(1);
