var sliderIndex = 0;

$(function() {
    $(".swiper-wrapper").html("");
    for (var i = 0; i < 30; i++) {
        var reset, border;
        if (i != 0) {
            reset = 0;
            border = "";
        } else {
            reset = 100;
            border = 'border';
        }
        var str = '<div class="swiper-slide"><div class="center ' + border + '">' +
            '<div>No.' + (i + 1) + '</div>' +
            '<div class="tiao"><span>' + reset + '</span>' +
            '<input class="hidden" type="text" value="' + i + '"></div>' +
            '<div class="show"><span>' + reset + '</span>%</div>' +
            '</div></div>';
        $(".swiper-wrapper").append(str);
    }

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 10,
        spaceBetween: 0,
        slidesPerGroup: 10,
        // loop: true,
        // loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    getSilder(sliderIndex);

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
                $(".videonSilder").find("img").eq(sliderIndex).css("opacity", ui.value / 100);
                getvideo(sliderIndex, _this.parent().parent());
                if ((sliderIndex + 1) <= $(".videonSilder img").length) {
                    getSilder(sliderIndex);
                }
            }
        });
    });

    $(".center").click(function() {
        sliderIndex = $(this).find("input").val();
        getvideo(sliderIndex, $(this));
    });

    function getSilder(sliderIndex) {
        if ((sliderIndex + 1) <= $(".videonSilder img").length) {
            var video = document.getElementsByTagName('img')[sliderIndex];
            video.addEventListener('ended', function() {
                // $(".swiper-slide").eq(sliderIndex).nextAll().each(function() {
                //     var text = $(this).find(".center .show span").text();
                //     if (text != 0) {
                //         sliderIndex++;
                //         getvideo(sliderIndex, $(".swiper-slide").eq(sliderIndex).find(".center"));
                //         getSilder(sliderIndex);
                //         return false;
                //     } else {
                //         sliderIndex++;
                //         getvideo(sliderIndex, $(".swiper-slide").eq(sliderIndex).find(".center"));
                //         $(".videonSilder video").eq(sliderIndex).trigger('pause');
                //         return false;
                //     }
                // })
                $(this).trigger('play');
            })
        }
    }

    function getvideo(sliderIndex, addBorder) {
        var vedio = $(".videonSilder img");
        vedio.removeClass("top").removeAttr("controls autoplay");
        vedio.eq(sliderIndex).addClass("top").attr({
            "controls": "controls",
            "autoplay": "autoplay"
        }).trigger('play');
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