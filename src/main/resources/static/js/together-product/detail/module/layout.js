const layout = (() => {
    const showListReview = (reviewCriteria) => {
        const reviewContainer = document.querySelector(".review-list");
        let text = ``;

        reviewCriteria.reviews.forEach((review) => {
            text += `
                <li class="review-item">
                    <div class="review-author">
                        <span class="badge badge-member">멤버스</span>
                        <span class="name">${review.memberName}</span>
                    </div>
                    <div class="review-content">
                        <div class="review-title-wrap">
                            <p class="review-title">${product.productName}</p>
                        </div>
                        <div class="review-text-wrap">
                        <p class="review-text">${review.reviewContent}</p>
                        </div>
                        <div class="review-photo-group">
                            <button type="button" class="review-photo popup-trigger" data-target="#popup1">
                                <img src="https://img-cf.kurly.com/hdims/resize/%5E%3E240x%3E240/cropcenter/240x240/quality/85/src/shop/data/review/20250726/9c262604-08d3-4170-b95a-b16770e70b53.jpg">
                            </button>
                            <button type="button" class="review-photo popup-trigger" data-target="#popup1">
                                <img src="https://img-cf.kurly.com/hdims/resize/%5E%3E240x%3E240/cropcenter/240x240/quality/85/src/shop/data/review/20250726/9c262604-08d3-4170-b95a-b16770e70b53.jpg">
                            </button>
                        </div>
                        <div class="review-content-footer">
                            <span class="review-date">${review.createdDate}</span>
                 
                        </div>
                    </div>
                </li>
            `;
        });

        if (reviewCriteria.reviews.length === 0){
            text = `
                <div class="null-review">
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
                    <p class="null-message">따끈한 첫 후기를 기다리고 있어요.</p>
                </div>
                `;
        }

        reviewContainer.innerHTML = text;

    };

    const showListInquiry = (inquiryCriteria) => {
        const inquiryContainer = document.querySelector(".table-wrap tbody");
        let text = ``;

        inquiryCriteria.productInquiries.forEach((productInquiry) => {
            text += `
            <tr class="inquiry-item">
                <td class="inquiry-title">
                    <button type="button" class="btn-title">${productInquiry.productInquiryTitle}</button>
                </td>
                <td class="inquiry-writer" >${productInquiry.memberName}</td>
                <td class="inquiry-date">${productInquiry.createdDate}</td>
                <td class="inquiry-status">${productInquiry.statusLabel}</td>
            </tr>
            `;
        });

        if (inquiryCriteria.productInquiries.length === 0) {
            text = `
                <tr class="table-item">
                    <td class="no-data" colspan="4">게시글이 없습니다.</td>
                </tr>
            `;
        }

        console.log(inquiryCriteria)
        inquiryContainer.innerHTML = text;
    }

    return { showListReview, showListInquiry};
})();