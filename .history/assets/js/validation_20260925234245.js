// validation.js
export function showError(inputElement, message) {
    const formGroup = inputElement.closest(".form__group");
    const errorElement = formGroup.querySelector(".error-message");
    formGroup.classList.add("invalid");
    errorElement.innerText = message;
}

export function showSuccess(inputElement) {
    const formGroup = inputElement.closest(".form__group");
    const errorElement = formGroup.querySelector(".error-message");
    formGroup.classList.remove("invalid");
    errorElement.innerText = "";
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


// Hàm hiển thị lỗi
export function showError(inputElement, message) {
    // Kích hoạt trạng thái :invalid cho CSS
    inputElement.setCustomValidity(message); 
    
    // Tìm thẻ <p class="form__error"> để đổi chữ
    const formGroup = inputElement.closest('.form__group');
    const errorElement = formGroup.querySelector('.form__error');
    if (errorElement) {
        errorElement.innerText = message;
    }
}

// Hàm xóa lỗi khi nhập đúng
export function showSuccess(inputElement) {
    // Khôi phục trạng thái hợp lệ (xóa lỗi)
    inputElement.setCustomValidity(''); 
}

// Regex kiểm tra email chuẩn
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;