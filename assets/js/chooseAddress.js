// Hàm chooseAddress
function chooseAddress(element) {
    // Lấy phần tử .address-cart__choose bên trong phần tử được nhấp vào
    const chooseElement = element.querySelector('.address-cart__choose');
    
    // Chuyển đổi lớp (class) address-cart__choose--active
    chooseElement.classList.toggle("address-cart__choose--active");
}
