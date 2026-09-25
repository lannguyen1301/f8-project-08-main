

import { showError, showSuccess, emailRegex } from "./validation.js";

const form = document.getElementById("form-signup");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

if (form) {
    // 1. Kiểm tra trực tiếp khi người dùng đang gõ (Real-time validation)
    // Email
    email.addEventListener("input", () => {
        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Email không đúng định dạng");
        } else {
            showSuccess(email);
        }
    });

    // Nhập lại mật khẩu
    confirmPassword.addEventListener("input", () => {
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Mật khẩu không khớp");
        } else {
            showSuccess(confirmPassword);
        }
    });

    // 2. Kiểm tra lại toàn bộ khi bấm nút Sign Up
    form.addEventListener("submit", function (e) {
        // Ngăn chặn form submit mặc định để kiểm tra
        e.preventDefault();

        let isValid = true;

        // Check Email
        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Email không đúng định dạng");
            isValid = false;
        }

        // Check Password (HTML5 minlength="6" đã lo độ dài, ta chỉ cần check có trống không)
        if (password.value.trim().length < 6) {
            showError(password, "Mật khẩu ít nhất 6 ký tự");
            isValid = false;
        }

        // Check Confirm Password
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Mật khẩu không khớp");
            isValid = false;
        }

        // Nếu mọi thứ hợp lệ, tiến hành submit thực sự
        if (isValid) {
            console.log("Form hợp lệ, đang xử lý...");
            // Chuyển trang giống hệt action của form
            window.location.href = "./index-logined.html";
        }
    });
}
