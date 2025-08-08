// 장바구니 선택 개수 / 총 개수
const totalSelect = document.querySelector(".total-select");

const selectTotal = () => {
    const totalCount = document.querySelectorAll(
        ".refrigeration-product"
    ).length;
    const selectCount = document.querySelectorAll(
        ".product-input:checked"
    ).length;
    totalSelect.innerText = `전체선택 ${selectCount}/${totalCount}`;
};

selectTotal();

// 전체선택

const selectAllCheckbox = document.querySelector(".select-input");
const productCheckboxes = document.querySelectorAll(".product-input");

// 1. 전체 선택 클릭 시 → 모든 개별 체크박스 상태 변경
selectAllCheckbox.addEventListener("change", () => {
    productCheckboxes.forEach((checkbox) => {
        checkbox.checked = selectAllCheckbox.checked;
    });
    selectTotal();
});

// 2. 개별 체크박스 클릭 시 → 전부 체크되어 있으면 전체도 체크
productCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const checkedCount = Array.from(productCheckboxes).filter(
            (cb) => cb.checked
        ).length;
        const totalCount = productCheckboxes.length;

        selectAllCheckbox.checked = checkedCount === totalCount;

        if (checkedCount === totalCount) {
            selectAllCheckbox.classList.add("checked");
        } else {
            selectAllCheckbox.classList.remove("checked");
        }
        selectTotal();
        orderPriceGet();
    });
});

// 개별 체크박스

productCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        const productDiv = checkbox.nextElementSibling;
        if (checkbox.checked) {
            productDiv.classList.add("checked-style");
        } else {
            productDiv.classList.remove("checked-style");
        }
        selectTotal();
        orderPriceGet();
    });
});

// 선택 삭제(배송 가능)

const allSecletButton = document.querySelector(".all-seclet-button");

allSecletButton.addEventListener("click", (e) => {
    productCheckboxes.forEach((productCheckbox) => {
        if (productCheckbox.checked) {
            productCheckbox.closest(".refrigeration-product").remove();
            productCheckbox.checked = false;
        }
    });
    selectTotal();
    orderPriceGet();
    selectAllCheckbox.checked = false;
});

// 개별 삭제 버튼(배송 가능)

const productRemoves = document.querySelectorAll(".product-remove");

productRemoves.forEach((productRemove) => {
    const parent = productRemove.parentElement;
    const productCheckbox = parent.querySelector(".product-input");

    productRemove.addEventListener("click", (e) => {
        productRemove.closest(".refrigeration-product").remove();
        productCheckbox.checked = false;
        selectTotal();
        orderPriceGet();
    });
});

// 전체삭제(구매 불가)

const noAllRemove = document.querySelector(".no-all-remove");
const deliveryNoLists = document.querySelectorAll(".delivery-no-list");

noAllRemove.addEventListener("click", (e) => {
    deliveryNoLists.forEach((deliveryNoList) => {
        deliveryNoList.remove();
    });
});

// 개별 삭제 버튼(구매 불가)

const noRemoves = document.querySelectorAll(".no-remove");

noRemoves.forEach((noRemove) => {
    noRemove.addEventListener("click", (e) => {
        noRemove.closest(".delivery-no-list").remove();
    });
});

// 수량 카운트

const quantityBoxes = document.querySelectorAll(".number");

quantityBoxes.forEach((box) => {
    const plusBtn = box.querySelector(".p-button");
    const minusBtn = box.querySelector(".m-button");
    const countEl = box.querySelector(".count");
    minusBtn.disabled = true;

    plusBtn.addEventListener("click", () => {
        let count = Number(countEl.innerText);
        count++;
        countEl.innerText = count;
        minusBtn.disabled = count <= 1;
        orderPriceGet();
    });

    minusBtn.addEventListener("click", () => {
        let count = Number(countEl.innerText);
        if (count > 0) count--;
        countEl.innerText = count;
        minusBtn.disabled = count == 1;
        orderPriceGet();
    });
});

// 결제하기

const refrigerationProducts = document.querySelectorAll(
    ".refrigeration-product"
);
const orderPrice = document.querySelector(".order-price");
const charge = Number(
    document.querySelector(".charge").innerText.replace(/[^0-9]/g, "")
);
const final = document.querySelector(".final");
const finalPrice = document.querySelector(".final-price");

const orderPriceGet = () => {
    let totalPrice = 0;

    // 주문 금액
    refrigerationProducts.forEach((refrigerationProduct) => {
        const checkbox = refrigerationProduct.querySelector(".product-input");
        if (checkbox.checked) {
            const productInfoPrice = refrigerationProduct.querySelector(
                ".product-info-price"
            );
            const price = Number(
                productInfoPrice
                    .querySelector(".price p")
                    .innerText.replace(/[^0-9]/g, "")
            );
            const orderCount = Number(
                productInfoPrice
                    .querySelector(".count")
                    .innerText.replace(/[^0-9]/g, "")
            );
            totalPrice += price * orderCount;
        }
    });
    orderPrice.innerText = totalPrice.toLocaleString();

    // 최종 결제 금액
    let price = totalPrice + charge;
    final.innerText = price.toLocaleString();
    finalPrice.innerText = price.toLocaleString();
};

orderPriceGet();
