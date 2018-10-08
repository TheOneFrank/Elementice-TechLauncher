var sliderIndex = 0;

$(function() {
    $(".swiper-wrapper").html("");
    for (var i = 0; i < 30; i++) {
        var reset, border;
        if (i != 0) {
            reset = 0;
            border = '';
        } else {
            reset = 100;
            border = 'border';
        }
        var str = '<div class="swiper-slide"><div class="center ' + border + '">' +
            '<div>No.' + (i + 1) + '</div>' +
            '<div class="tiao"><span>' + reset + '</span>' +
            '<input class="hidden" type="text" value="' + i + '"></div>' +
            '<div class="show"><span>' + reset + '</span>%</div>' +
            '<button class="resetBtn">reset</button>' +
            '</div></div>';
        $(".swiper-wrapper").append(str);
    }


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 10,
        spaceBetween: 0,
        slidesPerGroup: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    $(".swiper-slide .center .tiao").find("span").each(function() {
        var value = parseInt($(this).text(), 10);
        var _this = $(this);
        _this.empty().slider({
            value: value,
            range: "min",
            animate: true,
            orientation: "vertical",
            min: 0,
            max: 100,
            slide: function(event, ui) {
                _this.parent().next().find("span").text(ui.value);
                sliderIndex = _this.next().val();
<<<<<<< HEAD
                $(".videonSilder").children().eq(sliderIndex).css("opacity", ui.value / 100);
                if ($(".videonSilder").children().eq(sliderIndex)[0].tagName == 'IMG') {
                    getImg(sliderIndex, _this.parent().parent());
                } else {
                    getVideo(sliderIndex, _this.parent().parent());
                    if ((sliderIndex + 1) <= $(".videonSilder video").length) {
                        getSilder(sliderIndex);
                    }
=======
                $(".videonSilder").find("img").eq(sliderIndex).css("opacity", ui.value / 100);
                getvideo(sliderIndex, _this.parent().parent());
                if ((sliderIndex + 1) <= $(".videonSilder img").length) {
                    getSilder(sliderIndex);
>>>>>>> 3a10e383b7419828e26e60d5c1aabc6c4155d569
                }
            }
        });
    });

    $(".center").click(function() {
        sliderIndex = $(this).find("input").val();
        getVideo(sliderIndex, $(this));
    });

    $(".resetBtn").click(function() {
        $(this).parent().find(".show").find("span").html('0');
        $(this).parent().find(".tiao").find("span").slider({
            value: 0
        });
        var index = $(this).parent().find("input").val();
        $(".videonSilder").children().eq(index).css("opacity", 0);
    });

    function getSilder(sliderIndex) {
        if ((sliderIndex + 1) <= $(".videonSilder img").length) {
            var video = document.getElementsByTagName('img')[sliderIndex];
            video.addEventListener('ended', function() {
                $(this).trigger('play');
            })
        }
    }

<<<<<<< HEAD
    function getVideo(sliderIndex, addBorder) {
        var item = $(".videonSilder").children();
        item.removeClass("top").removeAttr("controls autoplay");
        item.eq(sliderIndex).addClass("top").attr({
=======
    function getvideo(sliderIndex, addBorder) {
        var vedio = $(".videonSilder img");
        vedio.removeClass("top").removeAttr("controls autoplay");
        vedio.eq(sliderIndex).addClass("top").attr({
>>>>>>> 3a10e383b7419828e26e60d5c1aabc6c4155d569
            "controls": "controls",
            "autoplay": "autoplay"
        }).trigger('play');
        $(".center").removeClass("border");
        addBorder.addClass("border");
    }

    function getImg(sliderIndex, addBorder) {
        var item = $(".videonSilder").children();
        item.removeClass("top");
        item.eq(sliderIndex).addClass("top");
        $(".center").removeClass("border");
        addBorder.addClass("border");
    }

    $(".mask").hide();

    $(".cameraBtn").click(function() {
        var text = 3;
        $(".mask").html(text).show();
        var art = setInterval(function() {
            text--
            $(".mask").html(text);
            if (text <= 0) {
                $(".mask").hide();
                $.get('/trigger');
                clearInterval(art);
            }
        }, 1000);
    });
})

function toogle(th) {
    var ele = $(th).children(".move");
    if (ele.attr("data-state") == "on") {
        ele.animate({
            left: "0"
        }, 300, function() {
            ele.attr("data-state", "off");
        });
        $(th).removeClass("on").addClass("off");
        $(".red").show();
    } else if (ele.attr("data-state") == "off") {
        ele.animate({
            left: '25px'
        }, 300, function() {
            $(this).attr("data-state", "on");
        });
        $(th).removeClass("off").addClass("on");
        $(".red").hide();
    }
}