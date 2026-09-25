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
