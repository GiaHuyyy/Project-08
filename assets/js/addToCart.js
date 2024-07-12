// Kết hợp hai NodeList
const handChooseElements = document.querySelectorAll(".address-cart__left, .payment-item__delivery");

// Gắn sự kiện click cho mỗi phần tử
handChooseElements.forEach((element) => {
    element.addEventListener("click", function () {
        chooseChecked(element, ".cart-info__choose", "cart-info__choose--active");
        chooseChecked(element, ".payment-item__cost", "payment-item__cost--active");
    });
});

function chooseChecked(element, selector, activeClass) {
    // Lấy tất cả các phần tử cần xử lý
    const chooseElements = document.querySelectorAll(selector);
    // Loại bỏ lớp 'activeClass' từ tất cả các phần tử
    chooseElements.forEach((el) => {
        el.classList.remove(activeClass);
    });

    // Lấy phần tử bên trong phần tử được nhấp vào
    const chooseElement = element.querySelector(selector);

    // Thêm lớp 'activeClass'
    chooseElement.classList.add(activeClass);
}

// Hàm chooseOption
const cityDialog = document.querySelector("#city-dialog");
const handChooseOption = document.querySelectorAll(".form__option");
const inputCity = document.querySelector(".form__input--select");
// Gắn sự kiện click cho mỗi phần tử
handChooseOption.forEach((option) => {
    option.addEventListener("click", function () {
        chooseOption(option);
    });
});
function chooseOption(option) {
    // Loại bỏ lớp 'form__option--current' từ tất cả các phần tử
    handChooseOption.forEach((el) => {
        el.classList.remove("form__option--current");
    });

    // Chuyển đổi lớp (class) form__option--current
    option.classList.add("form__option--current");
    // Thêm nội dung được chọn vào input
    inputCity.value = `${option.textContent}/`;
    cityDialog.classList.remove("show");
    cityDialog.classList.add("hide");
}

// Hàm minus và plus
const minusButtons = document.querySelectorAll(".cart-item__input-btn--minus");
const plusButtons = document.querySelectorAll(".cart-item__input-btn--plus");
const valueElements = document.querySelectorAll(".cart-item__input-value");
const prices = document.querySelectorAll(".cart-item__price");
const totalPrices = document.querySelectorAll(".cart-item__total-price");
//
const subTotalPrice = document.querySelector(".cart-info__sub-total-price");
const shipPrice = document.querySelector(".cart-info__ship-price");
const finalTotalPrice = document.querySelector(".cart-info__final-total-price");

minusButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        const currentValue = parseInt(valueElements[index].textContent);

        if (currentValue > 1) {
            const newValue = currentValue - 1;
            caculatePrice(index, newValue);
        }
    });
});

plusButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        const currentValue = parseInt(valueElements[index].textContent);
        const newValue = currentValue + 1;

        caculatePrice(index, newValue);
    });
});

//
function caculatePrice(index, value) {
    const price = parseFloat(prices[index].textContent.replace("$", ""));

    valueElements[index].textContent = value;
    totalPrices[index].textContent = `$${(value * price).toFixed(2)}`;

    // Final price
    let total = 0;
    totalPrices.forEach((price) => {
        total += parseFloat(price.textContent.replace("$", ""));
    });
    console.log(total);

    subTotalPrice.textContent = `$${total.toFixed(2)}`;
    shipPrice.textContent = `$${(total > 400 ? 0 : 10).toFixed(2)}`;
    finalTotalPrice.textContent = `$${(total + (total > 400 ? 0 : 10)).toFixed(2)}`;
}
