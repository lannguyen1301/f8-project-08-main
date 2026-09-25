import { showError, showSuccess, emailRegex,  } from "./validation.js";

const form = document.getElementById("form-signup");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

if (form) {
    // --- 1. XỬ LÝ KHI NGƯỜI DÙNG CLICK RA NGOÀI (BLUR) ---
    email.addEventListener("blur", () => {
        if (email.value.trim() !== "") {
            if (!emailRegex.test(email.value.trim())) {
                showError(email, "Email không đúng định dạng");
            } else {
                showSuccess(email);
            }
        }
    });

    password.addEventListener("blur", () => {
        if (password.value.trim() !== "") {
            if (password.value.trim().length < 6) {
                showError(password, "Mật khẩu ít nhất 6 ký tự");
            } else {
                showSuccess(password);
            }
        }
    });

    confirmPassword.addEventListener("blur", () => {
        if (confirmPassword.value.trim() !== "") {
            if (confirmPassword.value !== password.value) {
                showError(confirmPassword, "Mật khẩu không khớp");
            } else {
                showSuccess(confirmPassword);
            }
        }
    });

    // --- 2. XÓA LỖI NGAY KHI BẮT ĐẦU GÕ LẠI (INPUT) ---
    email.addEventListener("input", () => showSuccess(email));
    password.addEventListener("input", () => showSuccess(password));
    confirmPassword.addEventListener("input", () => showSuccess(confirmPassword));

    // --- 3. XỬ LÝ KHI BẤM NÚT SIGN UP (SUBMIT) ---
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        if (!emailRegex.test(email.value.trim())) {
            showError(email, "Email không đúng định dạng");
            isValid = false;
        }

        if (password.value.trim().length < 6) {
            showError(password, "Mật khẩu ít nhất 6 ký tự");
            isValid = false;
        }

        if (confirmPassword.value.trim() === "" || confirmPassword.value !== password.value) {
            showError(confirmPassword, "Mật khẩu không khớp");
            isValid = false;
        }

        if (isValid) {
            console.log("Form hợp lệ, đang xử lý...");
            window.location.href = "./index-logined.html";
        }
    });
}

// --- 4. TÍNH NĂNG ẨN/HIỆN MẬT KHẨU ---
const togglePasswordIcons = document.querySelectorAll(".js-toggle-password");

togglePasswordIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        const input = this.closest(".form__text-input").querySelector(".form__input");

        if (input) {
            if (input.type === "password") {
                input.type = "text";
                this.src = "./assets/icons/eye.svg"; // Đảm bảo bạn có file eye.svg trong thư mục
            } else {
                input.type = "password";
                this.src = "./assets/icons/eye-slash.svg"; // Đảm bảo bạn có file eye-slash.svg
            }
        }
    });
});
