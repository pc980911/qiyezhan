
let foot = document.querySelector(".foot");
window.onscroll = function () {
    let bh = document.body.scrollTop || document.documentElement.scrollTop;
    if (bh > 500) {
        animate(foot, {opacity: 1}, 200);
    } else {
        animate(foot, {opacity: 0}, 300);
    }
};

//移入效果\
$(function () {


    let btn1 = $(".head_1");
    btn1.mouseenter(function () {
        $(".head_1>span").animate({opacity: "1"}, 500)
    });
    btn1.mouseleave(function () {
        $(".head_1>span").animate({opacity: "0"}, 500)
    });
    let btn2 = $(".head_2");
    btn2.mouseenter(function () {
        $(".head_2>span").animate({opacity: "1"}, 500)
    });
    btn2.mouseleave(function () {
        $(".head_2>span").animate({opacity: "0"}, 500)
    });
    let btn3 = $(".head_3");
    btn3.mouseenter(function () {
        $(".head_3>span").animate({opacity: "1"}, 500)
    });
    btn3.mouseleave(function () {
        $(".head_3>span").animate({opacity: "0"}, 500)
    });
    let btn4 = $(".head_4");
    btn4.mouseenter(function () {
        $(".head_4>span").animate({opacity: "1"}, 500)
    });
    btn4.mouseleave(function () {
        $(".head_4>span").animate({opacity: "0"}, 500)
    });
    let btn5 = $(".head_5");
    btn5.mouseenter(function () {
        $(".head_5>span").animate({opacity: "1"}, 500)
    });
    btn5.mouseleave(function () {
        $(".head_5>span").animate({opacity: "0"}, 500)
    });
    let btn6 = $(".head_6");
    btn6.mouseenter(function () {
        $(".head_6>span").animate({opacity: "1"}, 500)
    });
    btn6.mouseleave(function () {
        $(".head_6>span").animate({opacity: "0"}, 500)
    });



    $(".foot_1").mouseenter(function () {
        $(".foot_1>span").animate({opacity: "1"}, 500)
    });
    $(".foot_1").mouseleave(function () {
        $(".foot_1>span").animate({opacity: "0"}, 500)
    });
    $(".foot_2").mouseenter(function () {
        $(".foot_2>span").animate({opacity: "1"}, 500)
    })
    $(".foot_2").mouseleave(function () {
        $(".foot_2>span").animate({opacity: "0"}, 500)
    });
    $(".foot_3").mouseenter(function () {
        $(".foot_3>span").animate({opacity: "1"}, 500)
    })
    $(".foot_3").mouseleave(function () {
        $(".foot_3>span").animate({opacity: "0"}, 500)
    });
    $(".foot_4").mouseenter(function () {
        $(".foot_4>span").animate({opacity: "1"}, 500)
    });
    $(".foot_4").mouseleave(function () {
        $(".foot_4>span").animate({opacity: "0"}, 500)
    });
    $(".foot_5").mouseenter(function () {
        $(".foot_5>span").animate({opacity: "1"}, 500)
    });
    $(".foot_5").mouseleave(function () {
        $(".foot_5>span").animate({opacity: "0"}, 500)
    })

});