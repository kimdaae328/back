// 이메일 선택

const mails = document.querySelectorAll(".dropdown__item");
let mailValue = document.querySelector(".btn-text");

// 이메일 선택 박스

const chooseButton = document.querySelector(".emailchoose");
const mailForm = document.querySelector(".e-mail-form");
const chooseDomain = document.querySelector(".domainchoose");

mails.forEach((mail) => {
    mail.addEventListener("click", (e) => {
        const selectedText = e.target.innerText;

        if (selectedText === "직접 입력") {
            mailValue.outerHTML = `<input type="text" class="self" placeholder="직접 입력">`;

            mailValue = document.querySelector(".self");
            mailValue.focus();
        } else {
            if (mailValue.tagName === "BUTTON") {
                mailValue.innerText = selectedText;
                mailValue.style.color = "black";
            }
            if (mailValue.tagName === "INPUT") {
                mailValue.value = selectedText;
            }
        }
        // 각 항목 누르면 닫기
        mailForm.classList.remove("active-domain");
    });
});

// 열기
chooseButton.addEventListener("click", (e) => {
    if (!e.target.classList.contains("dropdown__item")) {
        mailForm.classList.toggle("active-domain");
    }
});

// 휴대폰 인증번호 받기 버튼
const phone = document.querySelector(".phone-input");
const phonebutton = document.querySelector(".phonebutton");

phone.addEventListener("keyup", (e) => {
    if (phone.value) {
        phonebutton.classList.add("enter");
        phonebutton.disabled = false;
    } else {
        phonebutton.classList.remove("enter");
    }
});

// 이메일 형식 오류 메세지
const mailError = document.querySelector(".mail-error");

const printMailError = () => {
    mailError.innerHTML = `<p class="error-message">이메일을 입력해주세요.</p>`;
};

// 비밀번호 형식 오류 메세지
const passwordError = document.querySelector(".password-error");

const printPasswordError = () => {
    passwordError.innerHTML = `<p class="error-message">영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>`;
};

// 비밀번호 최소 형식 오류 메세지

const printPasswordMinError = () => {
    passwordError.innerHTML = `<p class="error-message">최소 10자이상 입력</p>`;
};

// 비밀번호 확인 오류 메세지
const passwordCheckError = document.querySelector(".password-error");

const printPasswordCheckError = () => {
    passwordCheckError.innerHTML = `<p class="error-message">동일한 비밀번호를 입력</p>`;
};

// 이름 오류 메세지
const nameError = document.querySelector(".name-error");

const printNameError = () => {
    nameError.innerHTML = `<p class="error-message">이름을 입력해 주세요.</p>`;
};

// 생년월일 오류메세지

// 미래일 때
const brithError = document.querySelector(".brith-error");

const printBrithFutureError = () => {
    brithError.innerHTML = `<p class="error-message">생년월일이 미래로 입력 되었습니다.</p>`;
};

// 형식에 맞지 않을 때
const printBrithRecheckError = () => {
    brithError.innerHTML = `<p class="error-message"생년월일을 다시 확인해주세요.</p>`;
};

// 년도 오류일 때
const printBrithYearError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 년도 4자리를 정확하게 입력해주세요.</p>`;
};

// 월 오류일 때
const printBrithMonthError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 월을 정확하게 입력해주세요.</p>`;
};

// 일 오류일 때
const printBrithDayError = () => {
    brithError.innerHTML = `<p class="error-message">태어난 일을 정확하게 입력해주세요.</p>`;
};

// 동의 체크박스
NodeList.prototype.filter = Array.prototype.filter;
const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");
const boxs = document.querySelectorAll(".box1");
const allBox = document.querySelector(".all-box");

// 전체동의 버튼 누를 때
all.addEventListener("change", (e) => {
    terms.forEach((term) => {
        term.checked = e.target.checked;
        if (e.target.checked) {
            boxs.forEach((box) => {
                box.classList.add("checked");
            });
        }
        if (!e.target.checked) {
            boxs.forEach((box) => {
                box.classList.remove("checked");
            });
        }
    });
});

// 버튼 다 선택했을때
terms.forEach((term) => {
    let countTerm = 0;
    term.addEventListener("change", (e) => {
        all.checked = countTerm = terms.filter((term) => term.checked).length;
        countTerm === terms.length;
        if (countTerm === terms.length) {
            allBox.classList.add("checked");
        } else if (countTerm < terms.length) {
            allBox.classList.remove("checked");
        }
    });
});

// 동의 체크하면 색 바뀜
const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const donguibox = checkbox
            .closest(".all-donguilabel")
            .querySelector(".donguibox");

        if (checkbox.checked) {
            donguibox.classList.add("checked");
        } else {
            donguibox.classList.remove("checked");
        }
    });
});
