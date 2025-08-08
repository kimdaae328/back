const inputNames = ["temp1", "temp2", "temp3"];
const form = document.getElementById("passwordEditForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    inputNames.forEach((name) => {
        const input = form[name];
        const isEmpty = input.value.trim() === "";

        input.style.borderColor = isEmpty ? "red" : "";
        if (isEmpty) isValid = false;
    });

    const [, newPwd, confirmPwd] = inputNames.map((name) => form[name]);

    if (newPwd.value !== confirmPwd.value) {
        newPwd.style.borderColor = "red";
        confirmPwd.style.borderColor = "red";
        isValid = false;
    }

    if (isValid) form.submit();
});
