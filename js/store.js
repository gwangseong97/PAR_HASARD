/*hot_deal_inner*/
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



/*#off_line .tap_content*/
$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".tap_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.taps li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tap_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.taps li").click(function () {

        $("ul.taps li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tap_content").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

});

$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".tap_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.taps_top li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tap_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.taps_top li").click(function () {

        $("ul.taps_top li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tap_content").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

});


