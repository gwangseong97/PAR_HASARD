$(function () {


    $(".gnb_list>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
    });
    $(".gnb_list>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    });



});



