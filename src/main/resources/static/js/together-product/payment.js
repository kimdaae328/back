// 주문상품 더보기 버튼
const orderButton = document.querySelector(".order-title-wrap .btn-arrow");
const orderList = document.querySelector(".order-product-section");
const orderContent = document.querySelector(".order-content-text-wrap");

orderButton.addEventListener("click", () => {
    orderButton.classList.toggle("on");
});

// 팝업
const openButtons = document.querySelectorAll(".popup-trigger");
const closeButtons = document.querySelectorAll(".popup-close");
const htmlScroll = document.querySelector("html");
let currentButton = null;

openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const targetModal = document.querySelector(btn.dataset.target);
        if (targetModal) {
            targetModal.style.display = "block";
            htmlScroll.style.overflow = "hidden";

            currentButton = btn;
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetModal = btn.closest(".popup-wrapper");
        if (targetModal) {
            targetModal.style.display = "none";
            htmlScroll.style.overflow = "";
        }
    });
});

// 총 합계
const optionPrice = document.querySelectorAll(".option-price");
function calculateOrderAmount() {
    let totalAmount = 0;

    optionPrice.forEach((option) => {
        const priceText = option
            .querySelector(".origin-price")
            .textContent.replace(/[^0-9]/g, "");
        const countText = option
            .querySelector(".count")
            .textContent.replace(/[^0-9]/g, "");
        const price = parseInt(priceText, 10);
        const count = parseInt(countText, 10);

        totalAmount += price * count;
    });



    // 주문금액 표시
    const orderAmount = document.querySelector(
        ".order-amount-item:nth-child(1) .amount-text .count"
    );
    orderAmount.textContent = totalAmount;

    // 배송비 (필요시 계산 로직 추가)
    const deliveryAmount = 0;
    const deliveryAmountEl = document.querySelector(
        ".order-amount-item:nth-child(2) .amount-text .count"
    );
    deliveryAmountEl.textContent = '2500';

    // 최종 결제금액 계산 및 표시
    const finalAmount = totalAmount + deliveryAmount;
    document.querySelector(
        ".order-amount-item.total .amount-text .count"
    ).textContent = Number(finalAmount) + Number(deliveryAmountEl.textContent);

    // 버튼 금액 표시
    document.querySelector(".btn-payment .count").textContent =
        Number(finalAmount) + Number(deliveryAmountEl.textContent);
}

// 실행
calculateOrderAmount();

// 주문자정보랑 동일
const checkbox = document.querySelector(".btn-agree input");
const senderName = document.querySelector(".orderer-name").textContent.trim();
const senderPhone = document.querySelector(".orderer-phone").textContent.trim();
const nameInput = document.querySelector(
    ".input-label.input-name"
).nextElementSibling;
const phoneInput = document.querySelector(
    ".input-label.input-phone"
).nextElementSibling;

const nameSpan = document.createElement("span");
nameSpan.classList.add("input-result");
nameSpan.textContent = senderName;
nameSpan.style.display = "none";

const phoneSpan = document.createElement("span");
phoneSpan.classList.add("input-result");
phoneSpan.textContent = senderPhone;
phoneSpan.style.display = "none";

nameInput.parentElement.appendChild(nameSpan);
phoneInput.parentElement.appendChild(phoneSpan);

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        nameInput.style.display = "none";
        phoneInput.style.display = "none";

        nameSpan.style.display = "inline-block";
        phoneSpan.style.display = "inline-block";
    } else {
        nameInput.style.display = "inline-block";
        phoneInput.style.display = "inline-block";

        nameSpan.style.display = "none";
        phoneSpan.style.display = "none";
    }
});

// 주문 상품 전체 개수 - 1
const productCountSpan = document.querySelector("span.product-count");
productCountSpan.innerText = productCount - 1;


// 배송지 변경

const research = document.querySelector(".btn-outline.btn-small");
const orderAddressBiv = document.querySelector(".order-address-div");
const addressInput = document.querySelectorAll(".addressInput");

research.addEventListener("click",(e)=>{
    getAddressWindow();
    orderAddressBiv.style.display = 'block';

})

const getAddressWindow = () => {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            let roadAddr = data.roadAddress; // 도로명 주소 변수
            let addr = "";
            let extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.

            document.querySelector('.main-address').value = data.zonecode;
            document.querySelector('.extra-address').value = addr;

            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                document.querySelector('.addressDetail').value = extraRoadAddr;
            } else {
                document.querySelector('.addressDetail').value = '';
            }
        }
    }).open();
}

let user = {
    id: member.id,
    username: member.memberName,
    phone: member.memberPhone,
    email: member.memberEmail
}

console.log(user)

let items = [];

const charge = {
    id: 1234567,
    name: '배송비',
    qty: 1,
    price: 2500
}
selectedCarts.forEach((cart) => {
    let item = {
        id: cart.id,
        name: cart.productName,
        qty: cart.cartCount,
        price: cart.productPrice,
    }

    items.push(item)
})

items.push(charge);



    let extra =  {
        open_type: "iframe",
        card_quota: "0,2,3",
        escrow: false
    }

// 유효성 검사

// 배송지
const address = document.querySelector(".main-address");
const extraAddress = document.querySelector(".extra-address");
const addressDetail = document.querySelector(".addressDetail");

// 배송받는 사람
const inputName = document.querySelector(".input-name-real");
const nameCheckbox = document.querySelector(".name-checkbox");

// 전화번호
const inputPhone = document.querySelector(".input-phone-real");

// 결제하기 버튼
const paymentButton = document.querySelector(".btn-primary.btn-payment");
paymentButton.addEventListener("click", async (e) => {

    if (!(address.value && extraAddress.value && addressDetail.value)) {
        alert("배송지를 입력해 주세요.")
    } if (!(inputName.value || nameCheckbox.checked)) {
        alert("받으실 분을 입력해 주세요.")
    } if (!(inputPhone.value || nameCheckbox.checked)) {
        alert("받으실 분의 휴대폰을 입력해 주세요.")
    } else {
        await pay(paymentButton.querySelector("span.count").textContent);
    }

});

// 결제
const pay = async (price) => {
    try {
        const response = await Bootpay.requestPayment({
            application_id: "687efac886cd66f61255b569",
            price: price,
            order_name: "테스트결제",
            order_id: "TEST_ORDER_ID",
            pg: "다날",
            tax_free: 0,
            user: user,
            items: items,
            extra: {
                open_type: "iframe",
                card_quota: "0,2,3",
                escrow: false,
            },
        });
        switch (response.event) {
            case "issued":
                // 가상계좌 입금 완료 처리
                break;
            case "done":
                console.log(response);
                // 결제 완료 처리
                break;
            case "confirm": //payload.extra.separately_confirmed = true; 일 경우 승인 전 해당 이벤트가 호출됨
                console.log(response.receipt_id);
                /**
                 * 1. 클라이언트 승인을 하고자 할때
                 * // validationQuantityFromServer(); //예시) 재고확인과 같은 내부 로직을 처리하기 한다.
                 */
                const confirmedData = await Bootpay.confirm(); //결제를 승인한다
                if (confirmedData.event === "done") {
                    //결제 성공
                }

                /**
                 * 2. 서버 승인을 하고자 할때
                 * // requestServerConfirm(); //예시) 서버 승인을 할 수 있도록  API를 호출한다. 서버에서는 재고확인과 로직 검증 후 서버승인을 요청한다.
                 * Bootpay.destroy(); //결제창을 닫는다.
                 */
                break;
        }
    } catch (e) {
        // 결제 진행중 오류 발생
        // e.error_code - 부트페이 오류 코드
        // e.pg_error_code - PG 오류 코드
        // e.message - 오류 내용
        console.log(e.message);
        switch (e.event) {
            case "cancel":
                // 사용자가 결제창을 닫을때 호출
                console.log(e.message);
                break;
            case "error":
                // 결제 승인 중 오류 발생시 호출
                console.log(e.error_code);
                break;
        }
    }
};




