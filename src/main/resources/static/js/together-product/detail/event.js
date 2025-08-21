
// 수량 카운트
const quantityBoxes = document.querySelectorAll(".product-quantity-box");
const quantityCounts = document.querySelectorAll(
    ".product-quantity-box .count"
);
const finalPrice = document.querySelector(".option-price .final-price");
const totalAmounts = document.querySelectorAll(".total-amount");

// 수량 업데이트 함수
const update = (newCount) => {
    quantityCounts.forEach((el) => {
        el.textContent = newCount;
    });

    // 🔹 hidden input value 업데이트
    quantityBoxes.forEach((box) => {
        const hiddenInput = box.querySelector('input[name="cartCount"]');
        if (hiddenInput) {
            hiddenInput.value = newCount;
        }
    });

    // 마이너스 버튼 상태 동기화
    quantityBoxes.forEach((box) => {
        const minus = box.querySelector(".quantity-btn.minus");
        minus.disabled = newCount <= 0;
    });

    // 총액 계산
    const unitPrice = Number(finalPrice.textContent.replace(/[^0-9]/g, ""));
    const total = unitPrice * newCount;

    // 총액 출력 동기화
    totalAmounts.forEach((el) => {
        el.textContent = total.toLocaleString();
    });
};

// 버튼 이벤트 연결
quantityBoxes.forEach((box) => {
    const plusBtn = box.querySelector(".quantity-btn.plus");
    const minusBtn = box.querySelector(".quantity-btn.minus");

    plusBtn.addEventListener("click", () => {
        const current = Number(quantityCounts[0].textContent);
        update(current + 1);
    });

    minusBtn.addEventListener("click", () => {
        const current = Number(quantityCounts[0].textContent);
        if (current > 0) update(current - 1);
    });
});

// 수량 카운트 - 초기화
update(Number(quantityCounts[0].textContent));

// 상품선택 플로팅바
const floatingBar = document.querySelector(".floating-purchase-bar");
const floatingButton = document.querySelector(".floating-btn");
const productSection = document.querySelector(".product-tab-content");

floatingButton.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const productTop = productSection.offsetTop;
    const pageBottom = window.innerHeight + scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollY >= productTop && pageBottom < pageHeight) {
        floatingBar.classList.remove("hidden");
    } else {
        floatingBar.classList.add("hidden");
    }
});

// 탭 선택
const tabButtons = document.querySelectorAll(".tab-link");

tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        tabButtons.forEach((btn) => btn.classList.remove("on"));
        e.currentTarget.classList.add("on");
    });
});

// 자세히보기 드롭다운
const moreBtns = document.querySelectorAll(".btn-more");

moreBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        button.classList.toggle("on");
    });
});

// 상품문의 드롭다운
const inquiryButtons = document.querySelectorAll(".btn-title");

inquiryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("secret")) return;

        const tr = button.closest("tr");
        const answerTr = tr.nextElementSibling;

        answerTr.classList.toggle("hidden");
    });
});

// 추천순 버튼
const sortBtns = document.querySelectorAll(".sort-btn");

sortBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        sortBtns.forEach((btn) => btn.classList.remove("on"));
        e.currentTarget.classList.add("on");
    });
});

// 스크롤감지 탭버튼 활성화
const tabLinks = document.querySelectorAll(".tab-link");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 80;

    tabLinks.forEach((link) => {
        const targetId = link.getAttribute("href");
        const section = document.querySelector(targetId);

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
            document
                .querySelectorAll(".tab-link")
                .forEach((el) => el.classList.remove("on"));
            link.classList.add("on");
        }
    });
});

// textarea 글자수 카운트
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

// 팝업 등록 버튼 disabled
const btnInputActive = document.querySelector(".btn-input-active");
const titleInput = btnInputActive.querySelector(".title");
const contentTextarea = btnInputActive.querySelector(".content");
const submitBtn = btnInputActive.querySelector(".popup-footer .btn-primary");

function toggleSubmitButton() {
    const isTitleFilled = titleInput.value.trim().length > 0;
    const isContentFilled = contentTextarea.value.trim().length > 0;
    submitBtn.disabled = !(isTitleFilled && isContentFilled);
}

titleInput.addEventListener("input", toggleSubmitButton);
contentTextarea.addEventListener("input", toggleSubmitButton);

toggleSubmitButton();

// btn-wish 버튼
const wishButtons = document.querySelectorAll(".btn-wish");
wishButtons.forEach((button) => {
    console.log(product.likeStatus)
    button.classList.toggle("on", product.likeStatus);
    button.addEventListener("click", async () => {
        const like = {
            productId: product.id,
            likeStatus: product.likeStatus
        };
        const isActive = button.classList.contains("on");
        let success = false;
        if (isActive) {
            success = await togetherProductService.unlike(like);
            if (success) {
                button.classList.remove("on");
                like.likeStatus = false;
                console.log(like.likeStatus);
            }
        } else {
            success = await togetherProductService.like(like);
            if (success) {
                button.classList.add("on");
                like.likeStatus = true;
                console.log(like.likeStatus);
            }
        }
    });
});



// 사진후기 미리보기 이미지
const reviewImgButtons = document.querySelectorAll(
    ".pop-preview-item .btn-img"
);

reviewImgButtons.forEach((button) => {
    button.addEventListener("click", () => {
        reviewImgButtons.forEach((btn) => btn.classList.remove("on"));
        button.classList.add("on");
    });
});

// 댓글 총개수
const reviewItems = document.querySelectorAll(".review-list .review-item");
const tabLinkSpan = document.querySelector(".tab-link .count");


tabLinkSpan.textContent = reviewItems.length;


//###################################  장바구니  ###################################
const saveInCarts = document.querySelectorAll("button.btn-cart");
saveInCarts.forEach((saveInCart)=>{
    saveInCart.addEventListener("click", async (e) => {
        const cartCount = document.querySelector("div.count").innerText;
        const text = document.querySelector(".add-cart-tap-p");
        const addMessage = document.querySelector(".add-cart-tap-wrap");

        const cart = {
            cartCount: Number(cartCount),
            productId: product.id
        }

        const result = await togetherProductService.save(cart);

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
    })
})

// 리뷰 목록
const reviewPrevButton = document.querySelector(".review-wrap .prev");
const reviewNextButton = document.querySelector(".review-wrap .next");

const showList = async (productId, page) => {
    const reviewsCriteria = await togetherProductService.getReview(productId, page, layout.showListReview);
    console.log(reviewsCriteria)

    return reviewsCriteria;

}

showList(productId, page = 1);

const buttonEvent = async () => {
    const reviewCriteria = await togetherProductService.getReview(productId, page, layout.showListReview);
    let nowPage = reviewCriteria.criteria.page
    let endPage = reviewCriteria.criteria.endPage;

    if (endPage === nowPage) {
        reviewNextButton.disabled = true;
    }

    reviewPrevButton.addEventListener("click",() => {
        nowPage--;
        if (nowPage === 1) {
            reviewPrevButton.disabled = true;
        }
        if (nowPage > 1) {
            reviewPrevButton.disabled = false;
        }
        if (endPage >= nowPage) {
            reviewNextButton.disabled = false;
        }

        showList(productId, page = nowPage);
    });

    reviewNextButton.addEventListener("click", () => {
        nowPage++;
        if (endPage <= nowPage){
            reviewNextButton.disabled = true;
        }
        if (nowPage > 1) {
            reviewPrevButton.disabled = false;
        }

        showList(productId, page = nowPage);
    });

}

buttonEvent();


// 문의 목록



// 리뷰 목록
const inquiryPrevButton = document.querySelector(".inquiry-wrap .prev");
const inquiryNextButton = document.querySelector(".inquiry-wrap .next");

const showInquiryList = async (productId, page) => {
    const inquiriesCriteria = await togetherProductService.getInquiry(productId, page, layout.showListInquiry);
    console.log(inquiriesCriteria)

    return inquiriesCriteria;

}

showInquiryList(productId, page = 1);

const inquiryButtonEvent = async () => {
    const inquiriesCriteria = await togetherProductService.getInquiry(productId, page, layout.showListInquiry);
    let nowPage = inquiriesCriteria.criteria.page
    let endPage = inquiriesCriteria.criteria.endPage;

    if (endPage === nowPage) {
        inquiryNextButton.disabled = true;
    }

    inquiryPrevButton.addEventListener("click",() => {
        nowPage--;
        if (nowPage === 1) {
            inquiryPrevButton.disabled = true;
        }
        if (nowPage > 1) {
            inquiryPrevButton.disabled = false;
        }
        if (endPage >= nowPage) {
            inquiryNextButton.disabled = false;
        }

        showInquiryList(productId, page = nowPage);
    });

    inquiryNextButton.addEventListener("click", () => {
        nowPage++;
        if (endPage <= nowPage){
            inquiryNextButton.disabled = true;
        }
        if (nowPage > 1) {
            inquiryPrevButton.disabled = false;
        }

        showInquiryList(productId, page = nowPage);
    });

}

inquiryButtonEvent();


// #######################문의하기 버튼######################
submitBtn.addEventListener("click", async (e) => {
    const title = document.querySelector(".form-content .title").value;
    const content = document.querySelector(".content").value;
    const productId = product.id;

    const inquiry = {
        productInquiryTitle: title,
        productInquiryContent: content,
        memberId: 2,
        productId: productId
    };

    console.log(inquiry.productId, inquiry.productInquiryTitle, inquiry.productInquiryContent)

    const result = await togetherProductService.inquiry(inquiry);

    if (result) {
        console.log("등록 완료", result);
        alert("문의가 등록되었습니다!");
    } else {
        alert("등록 실패");
    }

    document.querySelector(".form-content .title").value = "";
    document.querySelector(".content").value = "";

    showInquiryList(productId, page = 1);

})


