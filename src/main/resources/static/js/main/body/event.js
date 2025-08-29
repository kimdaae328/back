// 배너

// 배너 무한 슬라이드

const banner = document.querySelector("div.swiper-wrapper");
const arrows = document.querySelectorAll("button.banner-LR");

const allPageSize = document.querySelector("span.all-page-color");
const nowPage = document.querySelector("span.now-page");

const slides = document.querySelectorAll(".swiper-slide");
const totalSlides = slides.length;

allPageSize.textContent = `${totalSlides}`;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

banner.appendChild(firstClone);
banner.prepend(lastClone);

let count = 1;
const slideWidth = 1900;
let pageNumber = 1;

banner.style.transform = `translate(-${slideWidth * count}px)`;
const autoSlide = () => {
    count++;
    pageNumber++;
    banner.style.transform = `translate(-${slideWidth * count}px)`;
    banner.style.transition = `transform 0.5s`;
    if (count === totalSlides + 1) {
        setTimeout(() => {
            count = 1;
            pageNumber = 1;
            banner.style.transition = `transform 0s`;
            banner.style.transform = `translate(-${slideWidth * count}px)`;
            nowPage.textContent = `${pageNumber}`;
        }, 500);
    } else {
        nowPage.textContent = `${pageNumber}`;
    }
};

let autoSlideInterval = setInterval(autoSlide, 3000);
let arrowCheck = true;

// 배너 화살표 클릭시 다음 페이지

arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        if (!arrowCheck) {
            return;
        }
        arrowCheck = false;
        clearInterval(autoSlideInterval);

        if (arrow.classList.contains("main-banner-button-left")) {
            count--;
            pageNumber--;
            banner.style.transform = `translate(-${slideWidth * count}px)`;
            banner.style.transition = `transform 0.5s`;
            if (count === 0) {
                setTimeout(() => {
                    banner.style.transform = `translate(-${
                        slideWidth * count
                    }px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = totalSlides;
                pageNumber = 4;
            }
            nowPage.textContent = `${pageNumber}`;
        } else {
            count++;
            pageNumber++;
            banner.style.transform = `translate(-${slideWidth * count}px)`;
            banner.style.transition = `transform 0.5s`;

            if (count === totalSlides + 1) {
                setTimeout(() => {
                    banner.style.transform = `translate(-${
                        slideWidth * count
                    }px)`;
                    banner.style.transition = `transform 0s`;
                }, 500);
                count = 1;
                pageNumber = 1;
            }
            nowPage.textContent = `${pageNumber}`;
        }

        autoSlideInterval = setInterval(autoSlide, 3000);

        setTimeout(() => {
            arrowCheck = true;
        }, 500);
    });
});

// 배너 멈춤 시작 버튼

const button = document.querySelector(".start-stop");
button.classList.add("stop-mode");

button.addEventListener("click", () => {
    button.classList.toggle("start-mode");
    button.classList.toggle("stop-mode");

    if (button.classList.contains("start-mode")) {
        clearInterval(autoSlideInterval);
    } else {
        autoSlideInterval = setInterval(autoSlide, 3000);
    }
});

// 지금 가장 많이 담는 특가

const productList = document.querySelectorAll("div.product-card");
const listCount = Math.ceil(productList.length / 4);
const backButton = document.querySelector("button.product-list-button-left");
const nextButton = document.querySelector("button.product-list-button-right");
const showProduct = document.querySelector(".product-wrap");

let productCount = 0;
const productSlideWidth = 1068;

// 다음 슬라이드로 이동
nextButton.addEventListener("click", (e) => {
    if (productCount < listCount - 1) {
        productCount++;
        showProduct.style.transform = `translate(-${
            productSlideWidth * productCount
        }px)`;
        showProduct.style.transition = `transform 0.5s`;

        backButton.style.display = productCount > 0 ? "block" : "none";
        nextButton.style.display =
            productCount >= listCount - 1 ? "none" : "block";
    }

    if (productCount === listCount - 1) {
        const move =
            productSlideWidth * productCount - (productSlideWidth - 265);
        showProduct.style.transform = `translate(-${move}px)`;
    }
});

// 이전 슬라이드로 이동
backButton.addEventListener("click", (e) => {
    if (productCount > 0) {
        productCount--;
        showProduct.style.transform = `translate(-${
            productSlideWidth * productCount
        }px)`;
        showProduct.style.transition = `transform 0.5s`;
    }
    if (productCount <= 0) {
        backButton.style.display = "none";
    }
    if (productCount < listCount - 1) {
        nextButton.style.display = "block";
    }
});

// 실시간 인기랭킹

const rankingList = document.querySelectorAll("div.ranking-swiper-slide");
const rankingCount = Math.ceil(rankingList.length / 5);
const rankingBackButton = document.querySelector("button.ranking-button-left");
const rankingNextButton = document.querySelector("button.ranking-button-right");
const rankingShowProduct = document.querySelector(".ranking-swiper-wrapper");

let rankingProductCount = 0;
const rankingSlideWidth = 1075;

// 다음 슬라이드로 이동
rankingNextButton.addEventListener("click", (e) => {
    if (rankingProductCount < rankingCount - 1) {
        rankingProductCount++;

        const move = rankingSlideWidth * rankingProductCount;
        rankingShowProduct.style.transform = `translateX(-${move}px)`;
        rankingShowProduct.style.transition = "transform 0.5s";

        rankingBackButton.style.display =
            rankingProductCount > 0 ? "block" : "none";
        rankingNextButton.style.display =
            rankingProductCount >= rankingCount ? "none" : "block";
    } else if (rankingProductCount === rankingCount - 1) {
        const move =
            rankingSlideWidth * rankingProductCount -
            (rankingProductCount - 200);
        rankingShowProduct.style.transform = `translate(-${move}px)`;
        rankingNextButton.style.display = "none";
    }
});

// 이전 슬라이드로 이동
rankingBackButton.addEventListener("click", (e) => {
    if (rankingProductCount > 0) {
        rankingProductCount--;
        rankingShowProduct.style.transform = `translate(-${
            rankingSlideWidth * rankingProductCount
        }px)`;
        rankingShowProduct.style.transition = `transform 0.5s`;
    }
    if (rankingProductCount <= 0) {
        rankingBackButton.style.display = "none";
    }
    if (rankingProductCount < rankingCount - 1) {
        rankingNextButton.style.display = "block";
    }
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


// const rankingList2 = document.querySelectorAll("div.ranking-swiper-slide2");
// const rankingCount2 = Math.ceil(rankingList2.length / 5);
// const rankingBackButton2 = document.querySelector(
//     "button.ranking-button-left2"
// );
// const rankingNextButton2 = document.querySelector(
//     "button.ranking-button-right2"
// );
// const rankingShowProduct2 = document.querySelector(".ranking-swiper-wrapper2");
//
// let rankingProductCount2 = 0;
// const rankingSlideWidth2 = 1075;
//
// // 다음 슬라이드로 이동
// rankingNextButton2.addEventListener("click", (e) => {
//     if (rankingProductCount2 < rankingCount2 - 1) {
//         rankingProductCount2++;
//
//         const move = rankingSlideWidth2 * rankingProductCount2;
//         rankingShowProduct2.style.transform = `translateX(-${move}px)`;
//         rankingShowProduct2.style.transition = "transform 0.5s";
//
//         rankingBackButton2.style.display =
//             rankingProductCount2 > 0 ? "block" : "none";
//         rankingNextButton2.style.display =
//             rankingProductCount2 >= rankingCount2 ? "none" : "block";
//     } else if (rankingProductCount2 === rankingCount2 - 1) {
//         const move =
//             rankingSlideWidth2 * rankingProductCount2 -
//             (rankingProductCount2 - 200);
//         rankingShowProduct2.style.transform = `translate(-${move}px)`;
//         rankingNextButton2.style.display = "none";
//     }
// });
//
// // 이전 슬라이드로 이동
// rankingBackButton2.addEventListener("click", (e) => {
//     if (rankingProductCount2 > 0) {
//         rankingProductCount2--;
//         rankingShowProduct2.style.transform = `translate(-${
//             rankingSlideWidth2 * rankingProductCount2
//         }px)`;
//         rankingShowProduct2.style.transition = `transform 0.5s`;
//     }
//     if (rankingProductCount2 <= 0) {
//         rankingBackButton2.style.display = "none";
//     }
//     if (rankingProductCount2 < rankingCount2 - 1) {
//         rankingNextButton2.style.display = "block";
//     }
// });

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
// const openButtons = document.querySelectorAll(".popup-trigger");
// const closeButtons = document.querySelectorAll(".popup-close");
//
// openButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const targetSelector = btn.dataset.target;
//         const targetModal = document.querySelector(targetSelector);
//         const htmlScroll = document.querySelector("html");
//         if (targetModal) {
//             targetModal.style.display = "block";
//             htmlScroll.style.overflow = "hidden";
//         }
//     });
// });
//
// closeButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const targetModal = btn.closest(".popup-wrapper");
//         const htmlScroll = document.querySelector("html");
//         if (targetModal) {
//             targetModal.style.display = "none";
//             htmlScroll.style.overflow = "";
//         }
//     });
// });


// 팝업
const buttonContainer = document.querySelector(".product-wrap");
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

const showList = async (page, search) => {
    const productCriteria = await  productListService.getList(page, layout.showProductList, search);

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
        const productCriteria = await productListService.getList(page, layout.showProductList, search);

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