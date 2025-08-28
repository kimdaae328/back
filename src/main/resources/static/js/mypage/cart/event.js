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
    });
});

// 개별 체크박스
productCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function (e) {
        const productDiv = checkbox.nextElementSibling;

        console.log(e.target)
        console.log(e.target.checked)

        if (checkbox.checked) {
            productDiv.classList.add("checked-style");
        } else {
            productDiv.classList.remove("checked-style");
        }

        showTotalPrice();
        selectTotal();
    });
});
// 총 가격 계산
const showTotalPrice = () => {
    NodeList.prototype.filter = Array.prototype.filter;
    let total = 0;
    let deliveryFee = 2500;
    const finalPrices = document.querySelectorAll("span.final-price")
    const orderPrice = document.querySelector("span.order-price");

    productCheckboxes.filter((productCheckbox) => productCheckbox.checked).forEach((checkbox) => {
        let count = parseInt(checkbox.closest("div.product-header").nextElementSibling.querySelector("p.count").innerText);
        total += parseInt(checkbox.classList[1]) * count;
    });

    total += deliveryFee;

    finalPrices.forEach((finalPrice) => {
        finalPrice.innerText = total;
    });

    orderPrice.innerText = total - deliveryFee;
}


// 선택 삭제(배송 가능)

const allSecletButton = document.querySelector(".all-seclet-button");

allSecletButton.addEventListener("click", async (e) => {
    const selectedCheckboxes = document.querySelectorAll(".product-input:checked");
    const cartIds = [];

    selectedCheckboxes.forEach(cb=>{
        const productDiv = cb.closest(".refrigeration-product");
        const cartId= parseInt(productDiv.querySelector(".cart-id").value);
        cartIds.push(cartId);
        console.log(cartIds);
    })
    if(cartIds.length === 0) return;
    const response = await fetch('/cart/select-delete', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartIds: cartIds })
    });
    if(response.ok){
        const result = await response.json();
        selectedCheckboxes.forEach(cb => {
            cb.closest(".refrigeration-product").remove();
        });

        selectAllCheckbox.checked = false;

        totalUpdate(result);
        selectTotal();
    } else {
        console.error("선택삭제 실패");
    }
});

// 개별 삭제 버튼(배송 가능)
const productRemoves = document.querySelectorAll(".product-remove");

productRemoves.forEach((productRemove) => {
    const productDiv = productRemove.closest(".refrigeration-product");
    const productCheckbox = productDiv.querySelector(".product-input");

    productRemove.addEventListener("click", async (e) => {
        let cartId = productDiv.querySelector(".cart-id").value;

        await cartService.deleteCart(cartId, (result) => {
            productRemove.closest(".refrigeration-product").remove();
            productCheckbox.checked = false;
            selectTotal();
            totalUpdate(result);
        });
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


    const plusBtns = document.querySelectorAll(".p-button")
    plusBtns.forEach((btn)=>{
        btn.addEventListener("click",async (e) => {
            const itemDiv = btn.closest(".refrigeration-product");
            let count = parseInt(itemDiv.querySelector(".count").innerText);
            count++;
            itemDiv.querySelector(".count").innerText = count;
            let cartId = itemDiv.querySelector(".cart-id").value
            if(!e.target.closest("div.product-info").previousElementSibling.querySelector("input[type=checkbox]").checked){
                return;
            }
            await cartService.updateCount(cartId, count);
            showTotalPrice();
        })
        }
    )
    const minusBtns = document.querySelectorAll(".m-button")
    minusBtns.forEach((btn)=>{
        btn.addEventListener("click",async (e) => {
            const itemDiv = btn.closest(".refrigeration-product");
            let count = parseInt(itemDiv.querySelector(".count").innerText);
            count--;
            itemDiv.querySelector(".count").innerText = count;
            let cartId = itemDiv.querySelector(".cart-id").value
            if(!e.target.closest("div.product-info").previousElementSibling.querySelector("input[type=checkbox]").checked){
                return;
            }
            await cartService.updateCount(cartId, count);
            showTotalPrice();
        })
    }
)

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
