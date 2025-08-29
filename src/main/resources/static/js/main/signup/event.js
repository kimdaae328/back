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
            mailValue.outerHTML = `<input type="text" class="self" id="self" placeholder="직접 입력">`;
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
// const mailError = document.querySelector(".mail-error");
//
// const printMailError = () => {
//     mailError.innerHTML = `<p class="error-message">이메일을 입력해주세요.</p>`;
// };
//
// // 비밀번호 형식 오류 메세지
// const passwordError = document.querySelector(".password-error");
//
// const printPasswordError = () => {
//     passwordError.innerHTML = `<p class="error-message">영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>`;
// };
//
// // 비밀번호 최소 형식 오류 메세지
//
// const printPasswordMinError = () => {
//     passwordError.innerHTML = `<p class="error-message">최소 10자이상 입력</p>`;
// };
//
// // 비밀번호 확인 오류 메세지
// const passwordCheckError = document.querySelector(".password-error");
//
// const printPasswordCheckError = () => {
//     passwordCheckError.innerHTML = `<p class="error-message">동일한 비밀번호를 입력</p>`;
// };
//
// // 이름 오류 메세지
// const nameError = document.querySelector(".name-error");
//
// const printNameError = () => {
//     nameError.innerHTML = `<p class="error-message">이름을 입력해 주세요.</p>`;
// };
//
// // 생년월일 오류메세지
//
// // 미래일 때
// const brithError = document.querySelector(".brith-error");
//
// const printBrithFutureError = () => {
//     brithError.innerHTML = `<p class="error-message">생년월일이 미래로 입력 되었습니다.</p>`;
// };
//
// // 형식에 맞지 않을 때
// const printBrithRecheckError = () => {
//     brithError.innerHTML = `<p class="error-message"생년월일을 다시 확인해주세요.</p>`;
// };
//
// // 년도 오류일 때
// const printBrithYearError = () => {
//     brithError.innerHTML = `<p class="error-message">태어난 년도 4자리를 정확하게 입력해주세요.</p>`;
// };
//
// // 월 오류일 때
// const printBrithMonthError = () => {
//     brithError.innerHTML = `<p class="error-message">태어난 월을 정확하게 입력해주세요.</p>`;
// };
//
// // 일 오류일 때
// const printBrithDayError = () => {
//     brithError.innerHTML = `<p class="error-message">태어난 일을 정확하게 입력해주세요.</p>`;
// };

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
const research = document.getElementById("research")
const addressbtn =document.getElementById("addressbtn")
const addressinput =document.getElementById("addressinput")

addressbtn.addEventListener("click",(e)=>{
    getAddressWindow();
    addressbtn.style.display="none";
    research.style.display="block";
    addressinput.style.display="block";

})
research.addEventListener("click",(e)=>{
    getAddressWindow();
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
            document.getElementById('addressPostNumber').value = data.zonecode;
            document.getElementById('address').value = addr;

            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                document.getElementById('addressDetail').value = extraRoadAddr;
            } else {
                document.getElementById('addressDetail').value = '';
            }
        }
    }).open();
}


    const emailList = document.querySelectorAll(".email");
    const emailwrite = document.querySelector(".emailinputtext");
    const email = document.getElementById("memberEmail");
    const directInput = document.getElementById("directInput");
    const selfInput=document.getElementById("self");

    emailList.forEach(button => {
        button.addEventListener("click", () => {
            email.value = emailwrite.value + "@" + button.textContent;
        });
    });
    directInput.addEventListener("click",(e)=>{
        selfInput.addEventListener("input",(e)=>{
            email.value= emailwrite.value + "@"+ selfInput.value;
        })
    })

//     비밀번호 확인 js
    const passwordcheck = document.getElementById("passwordcheck")
    const passwordinput = document.getElementById("passwordinput")
    const passworderror =document.getElementById("passworderror")
    passwordcheck.addEventListener("blur",(e)=>{
        if(passwordcheck.value!==passwordinput.value){
            passworderror.style.display="block"
            signupButton.disabled = false;
        }
        else {
            passworderror.style.display="none"
        }

})
const signupbutton = document.getElementById("signupbutton")
signupbutton.addEventListener("click",(e)=>{
    const birthList = document.querySelectorAll(".birthinput");
    const birth = document.querySelector("input[name=memberBirth]")
    let text = "";

    birthList.forEach((birth)=>{
        text+=birth.value+"-" ;
    });
    birth.value=text.substring(0,text.length-1);

    const emailInput = document.getElementById("memberEmail");
    const errorEmailDiv = document.querySelector(".mail-error");
    const errorPasswordDiv = document.querySelector(".password-error");
    const passwordInput =document.querySelector(".idinputbox")
    const errorNameDiv = document.querySelector(".name-error");
    const nameInput =document.getElementById("nameinput");
    const phoneInput = document.querySelector(".phone-input");
    const errorPhoneDiv = document.querySelector(".phone-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[A-Za-z\d]{6,}$/;
    const phoneRegex = /^01\d{8,9}$/;
    const birthRegex = /^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    const postNumber = document.getElementById('addressPostNumber').value;
    const address = document.getElementById('address').value;
    const addressDetail = document.getElementById('addressDetail').value;






    let Error = false;


    if (!postNumber || !address || !addressDetail) {
        Error=true;
        alert("주소를입력해주세요.");
    }
    const errorMessages = document.querySelectorAll("p.error-message");
    let hasVisibleErrorMessage = false;
    for (const el of errorMessages) {
        if (window.getComputedStyle(el).display === "block") {
            hasVisibleErrorMessage = true;
           break;
        }
    }
    if(hasVisibleErrorMessage){
        alert("에러메세지를 확인해주세요.");
        Error = true;
    }

    if (!emailRegex.test(emailInput.value)) {
        Error = true;
        alert("이메일 형식을 확인해주세요.")
    }
    if(!passwordRegex.test(passwordInput.value)){
        Error=true;
        alert("패스워드 형식을 확인해주세요.");
    }
    if(!phoneRegex.test(phoneInput.value)){
        Error=true;
        alert("휴대폰 번호를 정확하게 입력해주세요.");
    }
    if(!birthRegex.test(birth.value)){
        Error=true;
        alert("생년월일을 정확하게 입력해주세요.");
    }




    // if (!emailInput.value) {
    //     errorEmailDiv.style.display = "block";
    //     Error = true;
    // }
    // if(!phoneInput.value){
    //     errorPhoneDiv.style.display="block";
    //     Error = true;
    // }
    // if (!passwordInput.value) {
    //     errorPasswordDiv.style.display = "block";
    //     Error = true;
    // }
    // if (!nameInput.value) {
    //     errorNameDiv.style.display = "block";
    //     Error = true;
    // }


    if (Error) {
        e.preventDefault();
    }




})
const emailInput = document.querySelector(".emailinputtext");
const arCheck = new Array(1).fill(false);
const signupButton = document.getElementById("signupbutton")

    emailInput.addEventListener("blur", async (e) => {
    const memberEmail = emailInput.value;
    arCheck[0] = await memberService.checkEmail({memberEmail: memberEmail}, memberLayout.checkEmail);
    if(arCheck[0]){
        signupButton.disable = true;
        return;
    }
    signupButton.disable = false;
});

