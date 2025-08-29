let categories = [];
let priceKeyword = null;
let keyword = null;
let subCategoryName = null;

let search = {
    mainCategories: [],
    priceKeyword: priceKeyword,
    keyword: keyword,
    subCategoryName: subCategoryName
}

console.log(category);
console.log(category.id);
const categoryId = category.id;
// 카테고리 목록
document.addEventListener("DOMContentLoaded", async () => {
    await productListService.getList(page, layout.categoryList, search, categoryId);
    console.log(categoryId);
    console.log(subCategories);

});

NodeList.prototype.filter = Array.prototype.filter;



const filterSidebar = document.querySelector(".filter-sidebar");

// 라디오 박스 값
const hiddenPriceInput = document.getElementById("currentPriceKeyword");

// 카테고리 변환
function mapTitleToCategory(titleCategory) {
    switch (titleCategory) {
        case "채소": return "vegetables";
        case "과일·견과·쌀": return "fruits";
        case "수산·해산·건어물": return "fisheries";
        case "정육·가공육·달걀": return "butchers";
        case "기타": return "etc";
    }
}


// 리스트 페이지 필터

const resetButtons = document.querySelectorAll(".btn-reset");
filterSidebar.addEventListener("change", async (e) => {

    const target = e.target;

    // 체크박스 & 라디오 이벤트 위임
    if (target.matches(".filter-sidebar input[type=checkbox], .filter-sidebar input[type=radio]")) {
        // 리셋버튼 초기화
        resetButtonsState();

        const isRadio = target.type === "radio";
        const isChecked = target.checked;

        // 라디오 값 중복확인
        if (isRadio && isChecked) {
            const groupName = target.name;
            const allGroupRadios = document.querySelectorAll(
                `.filter-sidebar input[type=radio][name="${groupName}"]`
            );

            allGroupRadios.forEach((radio) => {
                const label = radio.closest("label");
                const labelTitle = label.querySelector(".title").textContent;
                const activeTag = document.querySelectorAll(".active-filter-tag");

                activeTag.forEach((tag) => {
                    if (tag.textContent === labelTitle) {
                        tag.closest(".active-filter-item").remove();
                    }
                });
            });

        }

        // 중복체크
        // title 가져오기
        const label = target.closest("label");
        const titleCategory = label.querySelector(".title.category")?.textContent;
        const titlePrice = label.querySelector(".title.price")?.textContent;
        let isDuplicated = false;

        document.querySelectorAll(".active-filter-tag").forEach((tag) => {
            if (tag.textContent === titleCategory || tag.textContent === titlePrice) {
                isDuplicated = true;
            }
        });

        // tag 추가
        const activeFilterBox = document.querySelector(".active-filter-container");

        if (isChecked && !isDuplicated) {
            let filterActiveBox = activeFilterBox.querySelector(".active-filter-list");

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
                <span class="active-filter-tag">${titleCategory || titlePrice}</span>
                <button class="remove-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5.55566 5.55566L14.4446 14.4446" stroke="#ccc"></path>
                    <path d="M14.4443 5.55566L5.55545 14.4446" stroke="#ccc"></path>
                </svg>
                </button>
            `;

            filterActiveBox.appendChild(div);

            if (titleCategory) {
                categories.push(mapTitleToCategory(titleCategory));
            } else if (titlePrice) {
                priceKeyword = target.value;
            }
        }

        // 태그 삭제
        if (!isChecked && titleCategory) {
            categories = categories.filter(c => c !== mapTitleToCategory(titleCategory));
            removeTag(titleCategory);
        }

        // 라디오 체크/해제 처리: 항상 현재 체크된 라디오 값 기준
        const checkedRadio = document.querySelector('input[name="radio"]:checked');
        priceKeyword = checkedRadio ? checkedRadio.value : null;
        if (!checkedRadio) removeTag(titlePrice);

        // 태그 없을때
        noTag();

        categories = Array.isArray(categories) ? categories : [];

    }

    search.mainCategories = categories;
    search.priceKeyword = priceKeyword;

    await productListService.getList(page, layout.showProductList, search, categoryId);
    pagination.goToPage(1, search);

});


// 리셋 버튼 클릭 이벤트 위임 (초기화)

const resetButton = document.querySelector(".btn-reset");
resetButton.addEventListener("click", async (e) => {
    const filterSidebars = filterSidebar.querySelectorAll(
        ".filter-sidebar input[type=checkbox], .filter-sidebar input[type=radio]"
    );

    filterSidebars.forEach((input) => {
        input.checked = false;
        const titleCategory = input.closest("label").querySelector(".title.category")?.textContent;
        const titlePrice = input.closest("label").querySelector(".title.price")?.textContent;
        removeTag(titleCategory || titlePrice);
        noTag();
    });

    resetButtons.forEach((btn) => {
        if (btn.closest(".filter-sidebar")) {
            btn.classList.remove("on");
        }
        btn.disabled = true;
    });
    categories = [];
    priceKeyword = null;

    search.mainCategories = categories;
    search.priceKeyword = priceKeyword;

    await productListService.getList(page, layout.showProductList, search, categoryId);
    pagination.goToPage(1, search);
})

const labelContainer = document.querySelector(".active-filter-container");

// 태그 삭제
labelContainer.addEventListener("click", async (e) => {
    const target = e.target;

    if (target.closest("button.remove-btn")) {
        const item = target.closest(".active-filter-item");
        const title = item.querySelector(".active-filter-tag").textContent;
        item.remove();

        categories = categories.filter(c => c !== mapTitleToCategory(title));
        priceKeyword = null;

        search.mainCategories = categories
        search.priceKeyword = priceKeyword;

        await productListService.getList(page, layout.showProductList, search, categoryId);

        pagination.goToPage(1, search);

        const filterActiveBox = document.querySelector(".active-filter-list");
        console.log(filterActiveBox, item)
        if (filterActiveBox) {
            const allTagsCount = filterActiveBox.querySelectorAll(".active-filter-item");
            filterActiveBox.style.display = allTagsCount.length > 0 ? "flex" : "none";


        }

        // input박스 초기화
        document.querySelectorAll("input:checked").forEach((input) => {
            const checkedTitle = input.closest("label").querySelector(".title").textContent;
            if (checkedTitle === title) {
                input.checked = false;
            }
        });

    }
})

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

    radio.addEventListener("click", async (e) => {
        if (selected === radio) {
            radio.checked = false;
            selected = null;

            // 태그 삭제
            removeTag(title);

            // 태그 search에서 빼기
            priceKeyword = null;
            search.priceKeyword = priceKeyword;
            await productListService.getList(page, layout.showProductList, search, categoryId);
            pagination.goToPage(1, search);

            // 태그 없을때
            noTag();

        } else {
            selected = radio;
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

        button.addEventListener("click", async () => {
            buttons.forEach((btn) => btn.classList.remove("on"));
            button.classList.add("on");
            console.log(button.value);

            search.keyword = button.value;

            await productListService.getList(page, layout.categoryList, search, categoryId);
            pagination.goToPage(1, search);
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
        } else {
            showLoginMessage("로그인 후 이용해주세요.");
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

// 소카테고리 검색
const menuList = document.querySelector(".menu-list");

const menuButtons = document.querySelectorAll(".menu-btn");
if (menuButtons.length > 0) {
    menuButtons[0].classList.add("active");
}

menuList.addEventListener("click", async (e) => {
    const btn = e.target.closest(".menu-btn");
    if (btn) {
        if (btn.innerText === "전체보기") {
            subCategoryName = null;
        } else {
            subCategoryName = btn.innerText;
        }
        search.subCategoryName = subCategoryName;
        console.log(search);
        await productListService.getList(page, layout.categoryList, search, categoryId);
        pagination.goToPage(1, search);

        menuButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

    }
})

//###############################목록####################################
const showList = async (page, search) => {
    const productCriteria = await  productListService.getList(page, layout.showProductList, search, categoryId);

    return productCriteria;

}
showList(page = 1, search);

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
    let currentSearch = {};

    // 숫자 버튼 렌더링
    const renderPageNumbers = () => {
        numberContainer.innerHTML = "";
        for (let i = 1; i <= totalPage; i++) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "pagenation-btn" + (i === currentPage ? " on" : "");
            btn.textContent = i;
            btn.addEventListener("click", () => goToPage(i,currentSearch));
            numberContainer.appendChild(btn);
        }
    };

    // 페이지 이동
    const goToPage = async (page, search = currentSearch) => {
        if (page < 1) page = 1;
        if (page > totalPage) page = totalPage;
        currentPage = page;
        currentSearch = search;

        // 상품 목록 가져오기
        const productCriteria = await productListService.getList(page, layout.showProductList, search, categoryId);

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


pagination.goToPage(1, search);
