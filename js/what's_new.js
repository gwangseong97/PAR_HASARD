/*main_banner_inner*/
var swiper = new Swiper(".main_banner_inner", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,/*4번째 이미지에서 다음 키를 누르면 바로 첫번째 이미지가 나오게 한다*/
});

