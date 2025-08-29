const layout = (() => {
    const showProductList = (productCriteria) => {
        const productContainer = document.querySelector(".product-list");
        const total = document.querySelector(".product-filter-bar .count");
        const noData = document.querySelector(".data-null");

        if (total && productCriteria.totalCount !== undefined) {
            total.textContent = productCriteria.totalCount;
        }
        let text = ``;
        let nullText = ``;

        if (productCriteria.products && productCriteria.products.length > 0) {
            productCriteria.products.forEach((product) => {
                text += `
                <div class="product-card">
                    <div class="product-thumbnail">
                        <a href="/together-product/detail?id=${product.id}" class="product-media">
                            <div class="product-img" style="background-color: #eee">
                                 <img src="/api/product/image?filePath=${product.productTitleImageUrl}">
                            </div>
                        </a>
                        <div class="product-btn">
                            <!-- 팝업 열기 : popup-trigger 있을 시 -->
                            <button type="button" class="popup-trigger" data-target="#popup1" data-product-id="${product.id}">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.53516 2.70001H3.93316L5.76816 10.609H13.6482L15.2992 4.35901H4.86916M12.8582 14.933C13.0098 14.9375 13.1609 14.9115 13.3024 14.8566C13.4438 14.8017 13.5728 14.7189 13.6817 14.6132C13.7906 14.5075 13.8771 14.381 13.9363 14.2412C13.9954 14.1015 14.0258 13.9513 14.0258 13.7995C14.0258 13.6478 13.9954 13.4975 13.9363 13.3578C13.8771 13.218 13.7906 13.0915 13.6817 12.9858C13.5728 12.8801 13.4438 12.7974 13.3024 12.7424C13.1609 12.6875 13.0098 12.6615 12.8582 12.666C12.5634 12.6748 12.2836 12.798 12.0782 13.0096C11.8727 13.2213 11.7578 13.5046 11.7578 13.7995C11.7578 14.0944 11.8727 14.3778 12.0782 14.5894C12.2836 14.801 12.5634 14.9243 12.8582 14.933ZM6.49316 14.933C6.64484 14.9375 6.79589 14.9115 6.93735 14.8566C7.07881 14.8017 7.20781 14.7189 7.31669 14.6132C7.42558 14.5075 7.51214 14.381 7.57126 14.2412C7.63037 14.1015 7.66083 13.9513 7.66083 13.7995C7.66083 13.6478 7.63037 13.4975 7.57126 13.3578C7.51214 13.218 7.42558 13.0915 7.31669 12.9858C7.20781 12.8801 7.07881 12.7974 6.93735 12.7424C6.79589 12.6875 6.64484 12.6615 6.49316 12.666C6.19836 12.6748 5.91858 12.798 5.71315 13.0096C5.50773 13.2213 5.39283 13.5046 5.39283 13.7995C5.39283 14.0944 5.50773 14.3778 5.71315 14.5894C5.91858 14.801 6.19836 14.9243 6.49316 14.933Z" stroke="#333333" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                                담기
                            </button>
                        </div>
                        <a href="/together-product/detail?id=${product.id}" class="product-info">
                            <div class="product-badge">
                                <span>너도나도 배송</span>
                            </div>
                            <span class="product-name">${product.productName}</span>
                            <div class="product-discount">
                                  <span class="discount-rate" style="margin-right: 0;">${product.productMinNumber}</span>
                                <span class="discount-rate">개 부터~</span>
                                <span class="sales-price">
                                    <span class="price-number">${product.productPrice}</span>
                                    <span class="won">원</span>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div class="add-cart-tap-wrap">
                        <div class="add-cart-tap">
                            <p class="add-cart-tap-p"><br><!--이미 담은 상품의 수량을 추가했어요     *이미 장바구니에 있는 상품*--></p>
                        </div>
                    </div>
                </div>
            `;

            });
        }

        if (productCriteria.products != null && productCriteria.products.length === 0){
            nullText = `
                <div class="no-data">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2061_60391)">
                            <path d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" stroke="#e2e2e2" stroke-width="2"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 13C25.1046 13 26 13.8954 26 15V26C26 27.1046 25.1046 28 24 28C22.8954 28 22 27.1046 22 26V15C22 13.8954 22.8954 13 24 13ZM24 31C25.1046 31 26 31.8954 26 33C26 34.1046 25.1046 35 24 35C22.8954 35 22 34.1046 22 33C22 31.8954 22.8954 31 24 31Z" fill="#e2e2e2"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_2061_60391">
                                <rect width="48" height="48" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="no-data-message">선택하신 필터와 일치하는 상품이 없습니다.</p>
                </div>
            `;
        }
        productContainer.innerHTML = text;
        noData.innerHTML = nullText;
    }

    const showPopupCart = (product) => {
        const modalWrap = document.querySelector(".modal-wrap");
        let text = ``;

        text = `
            <div class="popup-wrapper" id="popup1" style="display: block">
                <div class="popup-inner" >
                    <div class="dim"></div>
                    <div class="popup-container popup-product">
                        <div class="popup-content">
                            <div class="popup-header" data-product-id="${product.id}">
                                <div class="popup-img">
                                    <img src="/api/product/image?filePath=${product.productTitleImageUrl}" decoding="async" data-nimg="fill" class="css-0" style="position: absolute; inset: 0px; box-sizing: border-box; background: #eee; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;" sizes="100vw">
                                </div>
                                <div class="popup-title-wrap">
                                    <p class="popup-title">${product.productName}</p>
                                </div>
                            </div>
                            <ul class="popup-product-list">
                                <li class="popup-product-item">
                                    <p class="product-name">${product.productName}</p>
                                    <div class="product-price-box">
                                        <div class="product-price-box">
                                            <span class="product-price">${product.productPrice}원</span>
                                        </div>
                                        <div class="product-quantity-box">
                                            <button type="button" class="quantity-btn minus"></button>
                                            <div class="count">0</div>
                                            <button type="button" class="quantity-btn plus"></button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="total-price-box">
                                <p class="total-label">합계</p>
                                <div class="total-price">
                                    <span class="total-amount">0</span>
                                    <span class="total-unit">원</span>
                                </div>
                            </div>
                            <div class="popup-footer">
                                <div class="popup-button-box">
                                    <!-- 팝업 닫기 : popup-close 클래스 있을시 -->
                                    <button type="button" class="btn-outline popup-close">취소</button>
                                    <button type="button" class="btn-primary popup-close">장바구니</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        modalWrap.innerHTML = text;
    }

    return {showProductList:showProductList, showPopupCart:showPopupCart}
})();


