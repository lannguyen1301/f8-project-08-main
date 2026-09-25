// register.js
import { showError, showSuccess, emailRegex, strongPasswordRegex } from "./validation.js";

const form = document.getElementById("signup-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Code ở đây chỉ chạy nếu trang hiện tại có form đăng ký
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        // Xử lý Validate Email
        if (email.value.trim() === "") {
            showError(email, "Vui lòng nhập email");
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            showError(email, "Email không đúng định dạng");
            isValid = false;
        } else {
            showSuccess(email);
        }

        // Xử lý Validate Password và Confirm (Áp dụng logic tương tự phần trước)
        // ...

        if (isValid) {
            console.log("Form hợp lệ!");
        }
    });
}
