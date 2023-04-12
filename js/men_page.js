/*.#hot_deal clock*/
$('.clock').countdown('2033/03/30 01:00:00').on('update.countdown', function (event) {
    var format = '%H:%M:%S';
    if (event.offset.totalDays > 0) {
        format = '' + format; /*%-d day%!d*/
    }
    if (event.offset.weeks > 0) {
        format = '' + format; /*%-w week%!w*/
    }
    $(this).html(event.strftime(format));
}
).on('finish.countdown', function (event) {
    $(this).html('This offer has expired!')
        .parent().addClass('disabled');
});

/*hot_deal_inner*/
var swiper = new Swiper(".hot_deal_inner", {
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

/*#mds_pick .mpp_section*/
var swiper = new Swiper(".mpp_section", {
    slidesPerView: 3,
    /*한번에 보이는 swiper-slide의 갯수*/
    spaceBetween: 0,
    /*swiper-slide들 사이에 얼마만큼의 여백을 줄 것인지 설정.*/
    navigation: {
        nextEl: ".mds_pick_next",
        prevEl: ".mds_pick_prev",
    },
});

/*#mds_pick .mp_pl_section*/
$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".mp_pl_section").hide(); //tab_content 부분을 모두 숨김.
    $("ul.mp_list li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".mp_pl_section:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.mp_list li").click(function () {

        $("ul.mp_list li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".mp_pl_section").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

});

/*#mds_pick .mp_hover_1*/
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_1").mouseenter(function () {
        $(".mp_hover_1").attr("src", "images/MEN_PAGE/MDS_PICK/product_1_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_1").mouseleave(function () {
        $(".mp_hover_1").attr("src", "images/MEN_PAGE/MDS_PICK/product_1.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_2").mouseenter(function () {
        $(".mp_hover_2").attr("src", "images/MEN_PAGE/MDS_PICK/product_2_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_2").mouseleave(function () {
        $(".mp_hover_2").attr("src", "images/MEN_PAGE/MDS_PICK/product_2.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_3").mouseenter(function () {
        $(".mp_hover_3").attr("src", "images/MEN_PAGE/MDS_PICK/product_3_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_3").mouseleave(function () {
        $(".mp_hover_3").attr("src", "images/MEN_PAGE/MDS_PICK/product_3.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_4").mouseenter(function () {
        $(".mp_hover_4").attr("src", "images/MEN_PAGE/MDS_PICK/product_4_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_4").mouseleave(function () {
        $(".mp_hover_4").attr("src", "images/MEN_PAGE/MDS_PICK/product_4.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_5").mouseenter(function () {
        $(".mp_hover_5").attr("src", "images/MEN_PAGE/MDS_PICK/product_5_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_5").mouseleave(function () {
        $(".mp_hover_5").attr("src", "images/MEN_PAGE/MDS_PICK/product_5.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_6").mouseenter(function () {
        $(".mp_hover_6").attr("src", "images/MEN_PAGE/MDS_PICK/product_6_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_6").mouseleave(function () {
        $(".mp_hover_6").attr("src", "images/MEN_PAGE/MDS_PICK/product_6.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_7").mouseenter(function () {
        $(".mp_hover_7").attr("src", "images/MEN_PAGE/MDS_PICK/product_7_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_7").mouseleave(function () {
        $(".mp_hover_7").attr("src", "images/MEN_PAGE/MDS_PICK/product_7.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_8").mouseenter(function () {
        $(".mp_hover_8").attr("src", "images/MEN_PAGE/MDS_PICK/product_8_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_8").mouseleave(function () {
        $(".mp_hover_8").attr("src", "images/MEN_PAGE/MDS_PICK/product_8.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_9").mouseenter(function () {
        $(".mp_hover_9").attr("src", "images/MEN_PAGE/MDS_PICK/product_9_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_9").mouseleave(function () {
        $(".mp_hover_9").attr("src", "images/MEN_PAGE/MDS_PICK/product_9.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_10").mouseenter(function () {
        $(".mp_hover_10").attr("src", "images/MEN_PAGE/MDS_PICK/product_10_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_10").mouseleave(function () {
        $(".mp_hover_10").attr("src", "images/MEN_PAGE/MDS_PICK/product_10.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_11").mouseenter(function () {
        $(".mp_hover_11").attr("src", "images/MEN_PAGE/MDS_PICK/product_11_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_11").mouseleave(function () {
        $(".mp_hover_11").attr("src", "images/MEN_PAGE/MDS_PICK/product_11.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_12").mouseenter(function () {
        $(".mp_hover_12").attr("src", "images/MEN_PAGE/MDS_PICK/product_12_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_12").mouseleave(function () {
        $(".mp_hover_12").attr("src", "images/MEN_PAGE/MDS_PICK/product_12.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_13").mouseenter(function () {
        $(".mp_hover_13").attr("src", "images/MEN_PAGE/MDS_PICK/product_13_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_13").mouseleave(function () {
        $(".mp_hover_13").attr("src", "images/MEN_PAGE/MDS_PICK/product_13.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_14").mouseenter(function () {
        $(".mp_hover_14").attr("src", "images/MEN_PAGE/MDS_PICK/product_14_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_14").mouseleave(function () {
        $(".mp_hover_14").attr("src", "images/MEN_PAGE/MDS_PICK/product_14.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_15").mouseenter(function () {
        $(".mp_hover_15").attr("src", "images/MEN_PAGE/MDS_PICK/product_15_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_15").mouseleave(function () {
        $(".mp_hover_15").attr("src", "images/MEN_PAGE/MDS_PICK/product_15.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".mp_hover_16").mouseenter(function () {
        $(".mp_hover_16").attr("src", "images/MEN_PAGE/MDS_PICK/product_16_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".mp_hover_16").mouseleave(function () {
        $(".mp_hover_16").attr("src", "images/MEN_PAGE/MDS_PICK/product_16.png");//변경될 이미지 주소를 넣어주세요
    });
});


/*#trand_now .tn_pl_section*/
$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".tn_pl_section").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tn_pl_section:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.tn_list li").click(function () {

        $("ul.tn_list li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tn_pl_section").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

});
/*#trand_now .pd_hover_1*/
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_1").mouseenter(function () {
        $(".pd_hover_1").attr("src", "images/MEN_PAGE/TREND_NOW/product_1_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_1").mouseleave(function () {
        $(".pd_hover_1").attr("src", "images/MEN_PAGE/TREND_NOW/product_1_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_2").mouseenter(function () {
        $(".pd_hover_2").attr("src", "images/MEN_PAGE/TREND_NOW/product_2_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_2").mouseleave(function () {
        $(".pd_hover_2").attr("src", "images/MEN_PAGE/TREND_NOW/product_2_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_3").mouseenter(function () {
        $(".pd_hover_3").attr("src", "images/MEN_PAGE/TREND_NOW/product_3_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_3").mouseleave(function () {
        $(".pd_hover_3").attr("src", "images/MEN_PAGE/TREND_NOW/product_3_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_4").mouseenter(function () {
        $(".pd_hover_4").attr("src", "images/MEN_PAGE/TREND_NOW/product_4_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_4").mouseleave(function () {
        $(".pd_hover_4").attr("src", "images/MEN_PAGE/TREND_NOW/product_4_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_5").mouseenter(function () {
        $(".pd_hover_5").attr("src", "images/MEN_PAGE/TREND_NOW/product_5_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_5").mouseleave(function () {
        $(".pd_hover_5").attr("src", "images/MEN_PAGE/TREND_NOW/product_5_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_6").mouseenter(function () {
        $(".pd_hover_6").attr("src", "images/MEN_PAGE/TREND_NOW/product_6_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_6").mouseleave(function () {
        $(".pd_hover_6").attr("src", "images/MEN_PAGE/TREND_NOW/product_6_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_7").mouseenter(function () {
        $(".pd_hover_7").attr("src", "images/MEN_PAGE/TREND_NOW/product_7_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_7").mouseleave(function () {
        $(".pd_hover_7").attr("src", "images/MEN_PAGE/TREND_NOW/product_7_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_8").mouseenter(function () {
        $(".pd_hover_8").attr("src", "images/MEN_PAGE/TREND_NOW/product_8_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_8").mouseleave(function () {
        $(".pd_hover_8").attr("src", "images/MEN_PAGE/TREND_NOW/product_8_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_9").mouseenter(function () {
        $(".pd_hover_9").attr("src", "images/MEN_PAGE/TREND_NOW/product_9_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_9").mouseleave(function () {
        $(".pd_hover_9").attr("src", "images/MEN_PAGE/TREND_NOW/product_9_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_10").mouseenter(function () {
        $(".pd_hover_10").attr("src", "images/MEN_PAGE/TREND_NOW/product_10_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_10").mouseleave(function () {
        $(".pd_hover_10").attr("src", "images/MEN_PAGE/TREND_NOW/product_10_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_11").mouseenter(function () {
        $(".pd_hover_11").attr("src", "images/MEN_PAGE/TREND_NOW/product_11_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_11").mouseleave(function () {
        $(".pd_hover_11").attr("src", "images/MEN_PAGE/TREND_NOW/product_11_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});
$(function () {
    //이미지 변경 함수 호출
    $(".pd_hover_12").mouseenter(function () {
        $(".pd_hover_12").attr("src", "images/MEN_PAGE/TREND_NOW/product_12_hover.png");//변경될 이미지 주소를 넣어주세요
    });
    $(".pd_hover_12").mouseleave(function () {
        $(".pd_hover_12").attr("src", "images/MEN_PAGE/TREND_NOW/product_12_basic.png");//변경될 이미지 주소를 넣어주세요
    });
});