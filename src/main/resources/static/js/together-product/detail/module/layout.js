const layout = (() => {
    const showListReview = (reviewCriteria) => {
        const reviewContainer = document.querySelector(".review-list");
        let text = ``;
        reviewCriteria.reviews.forEach((review) => {

            // 리뷰 이미지
            let imagesHtml = ``;
            if (review.images && review.images.length > 0) {
                review.images.forEach(images => {
                    imagesHtml += `
                        <button type="button" class="review-photo popup-trigger"
                                data-target="#popup1" data-review-id="${review.id}">
                            <img src="/api/product/image?filePath=${images.reviewImageUrl}">
                        </button>
                    `;
                });
            }



            // 구독 비구독
            const badgeHtml = review.subscriptionStatus === 'ACTIVE'
                ? `<span class="badge badge-member">VIP</span>`
                : `<span class="badge badge-primary">멤버스</span>`;

            text += `
                <li class="review-item">
                    <div class="review-author">
                        ${badgeHtml}
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
                            ${imagesHtml}
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

    const showPopupReview = (review, i, total) => {
        const modalWrap = document.getElementById("modal-wrap");

        // 대표 이미지

        let titleImage = ``;
        const firstImage = review.images?.[0];
        if (firstImage) {
            titleImage = `<img src="/api/product/image?filePath=${firstImage.reviewImageUrl}">`;
        }

        // 리뷰 이미지들

        let imagesHtml = ``;
        if (review.images && review.images.length > 0) {
            review.images.forEach(images => {
                imagesHtml += `
                    <div class="pop-preview-item" data-review-id="${review.id}">
                        <button type="button" class="btn-img list-icon">
                            <span>
                                <img src="/api/product/image?filePath=${images.reviewImageUrl}">
                            </span>
                            <div class="select-img">
                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4.76471L5.5 9L14 1" stroke="#fff" stroke-width="2"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                `;

            });
        }

        // 구독 비구독
        const badgeHtml = review.subscriptionStatus === 'ACTIVE'
            ? `<span class="badge badge-member">VIP</span>`
            : `<span class="badge badge-primary">멤버스</span>`;

        let text = `
            <div class="popup-wrapper" id="popup1" style="display: block">
                <div class="popup-inner">
                    <div class="dim"></div>
                    <div class="popup-container popup-review scroll">
                        <div class="popup-container-inner">
                            <div class="popup-content">
                                <div class="popup-header">
                                    <div class="popup-title-wrap">
                                        <p class="popup-title">사진 후기</p>
                                    </div>
                                    <button type="button" class="btn-close popup-close">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2073_60924)"><path d="M26 26L6 6" stroke="#999" stroke-linecap="square" stroke-width="0"></path><path d="M6 26L26 6" stroke="#999" stroke-linecap="square" stroke-width="0"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28431 5.58859L6.35355 5.64645L16 15.293L25.6464 5.64645C25.8417 5.45118 26.1583 5.45118 26.3536 5.64645C26.5271 5.82001 26.5464 6.08944 26.4114 6.28431L26.3536 6.35355L16.707 16L26.3536 25.6464C26.5488 25.8417 26.5488 26.1583 26.3536 26.3536C26.18 26.5271 25.9106 26.5464 25.7157 26.4114L25.6464 26.3536L16 16.707L6.35355 26.3536C6.15829 26.5488 5.84171 26.5488 5.64645 26.3536C5.47288 26.18 5.4536 25.9106 5.58859 25.7157L5.64645 25.6464L15.293 16L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645C5.82001 5.47288 6.08944 5.4536 6.28431 5.58859Z" fill="#999"></path></svg>
                                    </button>
                                </div>
                                <div class="product-scroll-section">
                                    <div class="pop-review-wrap">
                                        <div class="pop-review-img-wrap">
                                            <span class="pop-review-img">
                                                ${titleImage}
                                            </span>
                                            <div class="pop-preview-list">
                                                ${imagesHtml}
                                            </div>
                                        </div>
                                        <div class="pop-review-content-wrap">
                                            <div class="review-author">
                                                ${badgeHtml}
                                                <span class="name">${review.memberName}</span>
                                            </div>
                                            <div class="review-content">
                                                <div class="review-title-wrap">
                                                    <p class="review-title">${product.productName}</p>
                                                </div> 
                                                <div class="review-text-wrap">
                                                    <p class="review-text">${review.reviewContent}</p>
                                                </div>
                                                <div class="review-content-footer">
                                                    <span class="review-date">${review.createdDate}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           `
        if(i !== 0) {
            text +=            `
                                <button type="button" class="prev">
                                    <svg width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 1.5L2 22L22 42.5" stroke="#fff" stroke-width="2"></path>
                                    </svg>
                                </button>`
        }
        if(i < total - 1){
            text +=            `
                                <button type="button" class="next">
                                    <svg width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L21 22L1 42.5" stroke="#fff" stroke-width="2"></path>
                                    </svg>
                                </button>`
        }
            text += `
                        </div>
                    </div>
                </div>
            </div>
            `;

        return modalWrap.innerHTML = text;
    }

    const showAnswer = (answerContainer, productInquiryAnswers) => {
        let text = ``;

        const answers = Array.isArray(productInquiryAnswers) ? productInquiryAnswers : [];
        answers.forEach(answer => {
            text = `
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" fill-rule="evenodd">
                            <g transform="translate(-445 -1918) translate(423 276) translate(2 1622) translate(20 20)">
                                <circle cx="12" cy="12" r="12" fill="#32743f"/>
                                <path fill="#FFF" fill-rule="nonzero" d="M9.76 15.708l.54-1.404h3.456l.552 1.404h2.148L13 7.5h-1.932L7.6 15.708h2.16zm3.324-3.132h-2.112l1.056-2.712 1.056 2.712z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="text-wrap">
                    <p class="text">${answer.productInquiryAnswerContent}</p>
                    <div class="date">${answer.createdDate}</div>
                </div>
            `;
        })

        if (answers.length === 0) {
            text = ``;
        }
        answerContainer.innerHTML = text;
    }

    const showListInquiry = (inquiryCriteria) => {
        const inquiryContainer = document.querySelector(".table-wrap tbody");
        let text = ``;

        inquiryCriteria.productInquiries.forEach((productInquiry) => {
            text += `
                <tr class="inquiry-item" data-inquiry-id="${productInquiry.id}">
                    <td class="inquiry-title">
                        <button type="button" class="btn-title">${productInquiry.productInquiryTitle}</button>
                    </td>
                    <td class="inquiry-writer" >${productInquiry.memberName}</td>
                    <td class="inquiry-date">${productInquiry.createdDate}</td>
                    <td class="inquiry-status">${productInquiry.statusLabel}</td>
                </tr>
                <tr class="answer-item hidden">
                    <td colspan="4">
                        <div class="answer-item-box">
                            <div class="question-wrap">
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" fill-rule="evenodd">
                                            <g transform="translate(-445 -876) translate(423 276) translate(2 316) translate(20 284)">
                                                <circle cx="12" cy="12" r="12" fill="#549c62"/>
                                                <path fill="#FFF" d="M11.946 7.5c2.456 0 4.446 1.99 4.446 4.446 0 .907-.271 1.75-.737 2.453l.845.843-1.258 1.258-.843-.845c-.703.466-1.546.737-2.453.737-2.455 0-4.446-1.99-4.446-4.446C7.5 9.491 9.49 7.5 11.946 7.5zm0 1.778c-1.473 0-2.668 1.195-2.668 2.668s1.195 2.668 2.668 2.668c.412 0 .802-.094 1.15-.26l-.369-.37 1.258-1.257.369.369c.166-.348.26-.738.26-1.15 0-1.473-1.195-2.668-2.668-2.668z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div class="text">
                                    <span>${productInquiry.productInquiryContent}</span>
                                </div>
                            </div>
                            <div class="answer-wrap">
                            </div>
                        </div>
                    </td>
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

        inquiryContainer.innerHTML = text;
    }




    return { showListReview, showPopupReview, showAnswer, showListInquiry};
})();