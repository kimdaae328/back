const likeLayout = (() => {
    const showList = (likes) => {
        const likeContainer = document.querySelector("#like-container");
        let text = ``;
        likes.forEach((like) => {
            text += `                        <div>
<!--                                            <div  class="like-list-total">-->
<!--                                             <input type="hidden" class="cart-id">-->
<!--                                <div class="like-total">전체 <Strong>2</Strong>개</div>-->
                                <div style="overflow: visible; width: 0px;;;">
                                    <div class="like-list-inner">
                                   
                                        <div class="list-inner">
                                            <!-- 재고있는 상품 -->
                                            <div class="available">
                                             <input type="hidden" class="product-id"  value="${like.productId}">
                                    <input type="hidden" class="member-id" value="${like.memberId}">
                                            <input type="hidden" class="cart-id">
                                                <a href="" class="like-a">
                                                    <span>
                                                        <span>
                                                            <img src="${like.productTitleImageUrl}">
                                                        </span>
                                                    </span>
                                                </a>
                                                <div class="product-info">
                                                    <div>
                                                        <div class="info-title">
                                                            <a href="/together-product/detail?id=${like.productId}" style="display: block;pointer-events: auto;cursor: pointer">
                                                                 ${like.productName}
                                                            </a>
                                                        </div>
                                                        <div class="info-price">${like.productPrice}원</div>
                                                    </div>
                                                    <div class="like-buttons">
                                                        <button class="remove">
                                                            <span>삭제</span>
                                                        </button>
                                                        <button type="button" class="add popup-trigger" data-target="#popup2">
                                                            <span class="add-button">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                                                    <g fill="none" fill-rule="evenodd">
                                                                        <path d="M36 36H0V0h36z"/>
                                                                        <g transform="translate(5.164 6.547)" stroke="rgb(50,116,63)" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.7">
                                                                            <path d="m25.68 3.66-2.72 11.57H7.37L4.66 3.66z"/>
                                                                            <circle cx="20.52" cy="20.78" r="2.14"/>
                                                                            <circle cx="9.81" cy="20.78" r="2.14"/>
                                                                            <path d="M0 0h3.8l1.76 7.5"/>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                                담기
                                                            </span>
                                                        </button>
                                                  
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <!-- 재고 없는 상품 -->
<!--                                            <div class="unusable">-->
<!--                                                <a href="" class="like-una">-->
<!--                                                    <span>-->
<!--                                                        <span>-->
<!--                                                            <img src=" https://img-cf.kurly.com/hdims/resize/%5E%3E120x%3E156/cropcenter/120x156/quality/85/src/shop/data/goods/1657690526981l0.jpg">-->
<!--                                                        </span>-->
<!--                                                    </span>-->
<!--                                                    <span class="unusable-span"></span>-->
<!--                                                </a>-->
<!--                                                <div class="product-info">-->
<!--                                                    <div>-->
<!--                                                        <div class="info-unuse-title">-->
<!--                                                            <a href="" style="display: block;">(구매불가) [테디] 100% 땅콩버터 454g 2종</a>-->
<!--                                                        </div>-->
<!--                                                        <div class="info-unuse"></div>-->
<!--                                                    </div>-->
<!--                                                    <div class="like-buttons">-->
<!--                                                        <button class="remove">-->
<!--                                                            <span>삭제</span>-->
<!--                                                        </button>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
                                        </div>
                                    </div>
                                </div>
           `;
        });
        likeContainer.innerHTML += text;

    }
    return {showList: showList};
})();