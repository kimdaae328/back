


//  바로가기 네비게이션

const infoButton = document.querySelector(".info-button");
const detailInfoButton = document.querySelector(".detail-info-button");
const reviewGoButton = document.querySelector(".review-go-button");
const inquiryButton = document.querySelector(".inquiry-button");

infoButton.addEventListener("click", (e) => {
    const infoY = document.querySelector("#product-goods").getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: infoY - 100,
        behavior: "smooth"
    });
})

detailInfoButton.addEventListener("click", (e) => {
    const detailInfoY = document.querySelector("#product-detail").getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: detailInfoY - 100,
        behavior: "smooth"
    });
})

reviewGoButton.addEventListener("click", (e) => {
    const reviewGoY = document.querySelector("#product-review").getBoundingClientRect().top + window.scrollY;
    window.scrollTo(
        {
        top: reviewGoY - 100,
        behavior: "smooth"
    });
})

inquiryButton.addEventListener("click", (e) => {
    const inquiryY = document.querySelector("#product-inquiry").getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: inquiryY - 100,
        behavior: "smooth"
    });
})

// 스크롤감지 탭버튼 활성화
const tabLinks = document.querySelectorAll(".tab-link");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 100; // header 고려

    // 이벤트 위임 느낌: 스크롤마다 현재 있는 탭 버튼 전부 새로 가져옴
    document.querySelectorAll(".tab-link").forEach((link) => {
        const targetId = link.dataset.target; // data-target 방식 추천
        const section = document.querySelector(targetId);

        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
            document.querySelectorAll(".tab-link").forEach((el) => el.classList.remove("on"));
            link.classList.add("on");
        }
    });
});




let reviews = null;

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

const text = document.querySelector(".add-cart-tap-p");
const addMessage = document.querySelector(".add-cart-tap-wrap");
const saveInCarts = document.querySelectorAll("button.btn-cart");

function showLoginMessage(message) {
    text.innerText = message;
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


const wishButtons = document.querySelectorAll(".btn-wish");
wishButtons.forEach(async (button) => {

    let liked = await togetherProductService.getLike(product.id);
    button.classList.toggle("on", liked);
    button.addEventListener("click", async () => {


        const like = {
            productId: product.id,
        };

        const isActive = button.classList.contains("on");
        let success = false;
        if (isActive) {
            success = await togetherProductService.unlike(like);
            if (success) {
                button.classList.remove("on");
                liked = false;
                console.log(liked);
            }
        } else {
            success = await togetherProductService.like(like);
            if (success) {
                button.classList.add("on");
                liked = true;
                console.log(liked);
            } else {
                console.log("-------------------")
                showLoginMessage("로그인 후 이용해주세요.");
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

saveInCarts.forEach((saveInCart)=>{
    saveInCart.addEventListener("click", async (e) => {
        const cartCount = document.querySelector("div.count").innerText;

        const cart = {
            cartCount: Number(cartCount),
            productId: product.id
        }
        const result = await togetherProductService.save(cart);

        if (result){
            if(!(Number(cartCount) === 0)){
                //     장바구니에 추가 완료
                showLoginMessage("장바구니에 상품을 담았어요!");
            } else if (Number(cartCount) === 0) {
                showLoginMessage(`장바구니에 상품을 담지 못했어요.\n수량을 확인해주세요.`);
            }
        }  else {
            showLoginMessage("로그인 후 이용해주세요.");
        }
    })
})

// 리뷰 목록
const reviewPrevButton = document.querySelector(".review-wrap .prev");
const reviewNextButton = document.querySelector(".review-wrap .next");

const showList = async (productId, page) => {
    const reviewsCriteria = await togetherProductService.getReview(productId, page, layout.showListReview);
    reviews = reviewsCriteria.reviews;
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
    console.log(inquiriesCriteria.criteria)

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

// 리뷰 목록 사진 클릭 -> 상세 이벤트 위임

const reviewOpen = document.querySelector(".review-list")
let reviewId = null;
reviewOpen.addEventListener("click" ,async (e) => {
    const btn = e.target.closest(".review-photo");

    reviewId = btn.dataset.reviewId;
    console.log("클릭한 리뷰 ID:", reviewId);

    const detailReview = await togetherProductService.getReviewDetail(reviewId);
    for(var i = 0; i < reviews.length; i++){
        if(reviews[i].id == detailReview.id){
            break;
        }
    }
    if (detailReview) {
        layout.showPopupReview(detailReview, i, reviews.length);
    } else {
        alert("리뷰 상세 정보를 불러올 수 없습니다.");
    }
})

// 리뷰 상세 버튼 클릭 -> 이벤트 위임

const modalWrap = document.getElementById("modal-wrap");
modalWrap.addEventListener("click", async (e) => {
    const button = e.target.closest("button");
    if(!button){
        return;
    }
    if(button.classList.contains("btn-close")){
        document.getElementById("popup1").remove();
    }else if(button.classList.contains("prev")){
        let previousIndex = 0;
        for(let i = 0; i < reviews.length; i++){
            if(reviews[i].id == reviewId){
                previousIndex = i - 1;
                break;
            }
        }

        reviewId = reviews[previousIndex].id;
        document.getElementById("popup1").remove();
        layout.showPopupReview(reviews[previousIndex], previousIndex, reviews.length);

    }else if(button.classList.contains("next")){
        let nextIndex = 0;
        for(let i = 0; i < reviews.length; i++){
            if(reviews[i].id == reviewId){
                nextIndex = i + 1;
                break;
            }
        }
        reviewId = reviews[nextIndex].id;
        document.getElementById("popup1").remove();
        layout.showPopupReview(reviews[nextIndex], nextIndex, reviews.length);

    }else {
        if (button) {
            const image = button.querySelector("span").innerHTML;
            const titleImage = modalWrap.querySelector(".pop-review-img");

            titleImage.innerHTML = image;
        }
    }
})



// 문의 내용 보기
const tableBody = document.querySelector(".table-wrap tbody");

tableBody.addEventListener("click", async (e) => {
    const btn = e.target;
    if (!btn.classList.contains("btn-title")) return;

    const inquiryItem = btn.closest(".inquiry-item");
    const answerItem = inquiryItem.nextElementSibling;
    const answerWrap = answerItem.querySelector(".answer-wrap");

    if (answerItem.classList.contains("hidden")) {
        const inquiryId = inquiryItem.dataset.inquiryId;
        const answers = await togetherProductService.getAnswer(inquiryId);
        console.log(answers);
        layout.showAnswer(answerWrap, answers);
        answerItem.classList.remove("hidden");
    } else {
        answerItem.classList.add("hidden");
    }
});


// #######################문의하기 버튼######################
submitBtn.addEventListener("click", async (e) => {
    const title = document.querySelector(".form-content .title").value;
    const content = document.querySelector(".content").value;
    const productId = product.id;

    const inquiry = {
        productInquiryTitle: title,
        productInquiryContent: content,
        productId: productId
    };

    console.log(inquiry.productId, inquiry.productInquiryTitle, inquiry.productInquiryContent)

    const result = await togetherProductService.inquiry(inquiry);

    if (result) {
        showLoginMessage("문의가 등록되었습니다!");
    } else {
        showLoginMessage("로그인 후 이용해주세요.");
    }

    document.querySelector(".form-content .title").value = "";
    document.querySelector(".content").value = "";

    showInquiryList(productId, page = 1);

})



