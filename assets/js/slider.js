const sliderList = document.querySelector(".product-preview__list");
const sliderItems = document.querySelectorAll(".product-preview__item");
const dotsItems = document.querySelectorAll(".product-preview__thumb-img");
let sliderWidth = sliderItems[0].offsetWidth;
let positionX = 0;
let index = 0;

function changeSlide(sliderIndex) {
    // Xóa class "ratting__dot-active" khỏi dot đang được active
    dotsItems.forEach((dot) => {
        dot.classList.remove("product-preview__thumb-img--current");
    });

    // Thêm class "ratting__dot-active" vào dot được active
    dotsItems[sliderIndex].classList.add("product-preview__thumb-img--current");

    // Cập nhật chỉ số và vị trí mới cho slide
    index = sliderIndex;
    positionX = -index * sliderWidth;

    // Di chuyển tới slider tương ứng
    sliderList.style.transform = `translateX(${positionX}px)`;
}

// Hàm cập nhật chiều rộng của item dựa trên chiều rộng của cha
function updateSlideWidth() {
    // Lấy kích thước của phần tử có class .container (cha)
    const containerWidth = document.querySelector(".product-preview__list").offsetWidth;

    sliderItems.forEach((slide) => {
        // Đặt kích thước của mỗi slide bằng kích thước của phần tử có class .container (cha)
        slide.style.width = `${containerWidth}px`;
    });
    positionX = -index * containerWidth;
    // Áp dụng transform để hiển thị slide hiện tại
    sliderList.style.transform = `translateX(${positionX}px)`;
}

// Cập nhật kích thước slide khi tải trang
window.addEventListener("DOMContentLoaded", updateSlideWidth);
// Cập nhật kích thước slide khi thay đổi kích thước trình duyệt
window.addEventListener("resize", updateSlideWidth);

// Sự kiện click vào dot để chuyển slide tương ứng
[...dotsItems].forEach((item, sliderIndex) =>
    item.addEventListener("click", function () {
        // Kiểm tra nếu dot được nhấn khác với slide hiện tại
        if (sliderIndex != index) {
            changeSlide(sliderIndex);
        }
    })
);
