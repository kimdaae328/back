const requestContainer = document.querySelector("#request-container");
let text = ``;

const arrayDatas = [];

requests.forEach((request) => {
    const date = request.createdDatetime.split(" ")[0];
    let group = arrayDatas.find(g => g.date === date);

    if (!group) {
        group = { date: date, product: [] };
        arrayDatas.push(group);
    }
    group.product.push(request);
});

console.log(arrayDatas);
requests.forEach((request) => {


    text += `
<div  class="order-product-wrap">
              <div class="order-product">
                                                            <a href="">
                                                                <div class="order-product-img-wrap">
                                                                    <img src="${request.productTitleImageUrl}" class="order-product-img">
                                                                </div>
                                                            </a>
                                                            <div class="order-product-info">
                                                                <div class="delivery-type">
                                                                    <p class="delivery-type-text"></p>
                                                                </div>
                                                                <a href="">
                                                                    <p class="product-info-title">
                                                                        <span >${request.productName}</span>
                                                                    </p>
                                                                    <p class="product-info-detail">
                                                                        <span>${request.productName}</span>
                                                                    </p>
                                                                </a>
                                                                <div class="order-product-price">
                                                                    <p class="buy-product-price">${request.requestPrice}원</p>
<!--                                                                    <p class="origin-product-price">5,500원</p>-->
                                                                    <div width="1px" height="10px" class="product-price-bar"></div>
                                                                    <p class="quantity">${request.requestAmount}개</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="add-cart">
                                                            <svg width="16" height="16" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.300781 0H4.40078C4.86194 0 5.2633 0.315362 5.3724 0.763433L5.79521 2.5H21.055C22.3344 2.5 23.2849 3.68482 23.0073 4.93384L21.2518 12.8342C21.0484 13.7493 20.2368 14.4004 19.2994 14.4004H8.10375C7.16634 14.4004 6.35471 13.7493 6.15137 12.8342L5.06773 7.9577L5.06573 7.95818L3.61505 2H0.300781V0ZM6.34817 4.5L8.10374 12.4004H19.2994L21.055 4.5H6.34817ZM9.30156 17.2002C8.91496 17.2002 8.60156 17.5136 8.60156 17.9002C8.60156 18.2868 8.91496 18.6002 9.30156 18.6002C9.68816 18.6002 10.0016 18.2868 10.0016 17.9002C10.0016 17.5136 9.68816 17.2002 9.30156 17.2002ZM6.60156 17.9002C6.60156 16.409 7.81039 15.2002 9.30156 15.2002C10.7927 15.2002 12.0016 16.409 12.0016 17.9002C12.0016 19.3914 10.7927 20.6002 9.30156 20.6002C7.81039 20.6002 6.60156 19.3914 6.60156 17.9002ZM18.1004 17.2002C17.7138 17.2002 17.4004 17.5136 17.4004 17.9002C17.4004 18.2868 17.7138 18.6002 18.1004 18.6002C18.487 18.6002 18.8004 18.2868 18.8004 17.9002C18.8004 17.5136 18.487 17.2002 18.1004 17.2002ZM15.4004 17.9002C15.4004 16.409 16.6092 15.2002 18.1004 15.2002C19.5916 15.2002 20.8004 16.409 20.8004 17.9002C20.8004 19.3914 19.5916 20.6002 18.1004 20.6002C16.6092 20.6002 15.4004 19.3914 15.4004 17.9002Z" fill="#222"></path>
                                                            </svg>
                                                        </button>
                                                        </div>
        `


});
requestContainer.innerHTML = text;


// 개월 드롭다운
const dropdown = document.querySelector(".custom-dropdown");
const toggle = dropdown.querySelector(".dropdown-toggle");
const menu = dropdown.querySelector(".dropdown-menu");
const items = menu.querySelectorAll("li");

toggle.addEventListener("click", (e) => {
    toggle.classList.toggle("active");
});

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        toggle.firstElementChild.innerHTML = `<span>${item.textContent}</span>`;
        toggle.classList.remove("active");
    });
});

// 외부 클릭 시 개월 드롭다운 닫기
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        toggle.classList.remove("active");
    }
});

// 검색 취소 버튼
const cancelButton = document.querySelector(".order-search-cancel");
const searchInput = document.querySelector(".search-box-input");

cancelButton.addEventListener("click", (e) => {
    searchInput.value = "";
});

// 장바구니 추가 버튼

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

// 주문 펼쳐보기 버튼 누를 때

const overview = document.querySelector(".view-more.over");
const foldview = document.querySelector(".view-more.fold");
const products = document.querySelectorAll(".order-product-wrap.fold");

overview.addEventListener("click", (e) => {
    products.forEach((product) => {
        product.classList.toggle("fold");
    });
    overview.style.display = "none";
    foldview.style.display = "flex";
});

foldview.addEventListener("click", (e) => {
    products.forEach((product) => {
        product.classList.toggle("fold");
    });
    foldview.style.display = "none";
    overview.style.display = "flex";
});
