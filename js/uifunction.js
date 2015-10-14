// Indicates whether the map is in full-size mode.
var isMapFullsize = false;

$(document).ready(function () {

    $(".header").on("click touchstart", ".closeheader", function () {
        console.log(foooooo);
        $("#markerPopup").animate({
            top: "500px"
        }, 500);
        $("#markerPopup").css("display", "none");
    });

    $("#entry_next").on('click touchstart', function () {
        $("#finalizePost").animate({
            top: "0px"
        }, 500);
        $("#finalizePost").css('display', 'block');
    })

    $(".tile_padding").on('click touchstart', function () {
        $(this).children().children().toggle();
        $(this).children().toggleClass("selected_tile");
        var selected = $(this).children().css("background-image");
        $("#selected_photos").append("<div class='tile_padding_small'><div class='tile' style='background-image:" + selected + "'></div></div>");
    })

    $("#loc_dropdown").on('click touchstart', "li", function () {
        var text = $(this).children().html();
        console.log(text);
        $("#loc_dropdown").css('overflow', 'hidden');
        $("#add_loc_text").html(text);
    })

    $("#makePost").on('click touchstart','.off', function () {
        $("#loc_dropdown").css('overflow', 'visible');
        $("#add_location").removeClass("off").addClass("on");
    });
    
    $("#makePost").on('click touchstart','.on', function () {
        console.log("I'm clicking on!")
        $("#loc_dropdown").css('overflow', 'hidden');
        $("#add_location").removeClass("on").addClass("off");
    });


    $("#menu").on('click touchstart', function () {
        $(this).css('display', 'none');
    });

    $("#postUserImage").on('click touchstart', function () {
        $("#profilePage").css('display', 'block');
        $("#profilePage").css('z-index', '10000000');

    });

    $(".start").on('click touchstart', '#map', function () {
        $("#homePage").css("display", "none");
        $("#map").animate({
            "top": "0",
            "height": "800px"
        }, function () {
            if (!isMapFullsize) {
                initMap(true);
                $("body").removeClass().addClass("map_fullsize");
                window.mapObject.setZoom(2);
                $("#header").removeClass().addClass("transparent");
                isMapFullsize = true;
            }
        });
    });

    $(".start").on('click touchstart', '#lefticon', function () {
        $("body").removeClass().addClass("body-menu");
        $("#righticon").removeClass("fa-plus").addClass("fa-close");
    });

    $("body").on('click touchstart', '#righticon', function () {
        centerMap();
        $("body").removeClass("start").addClass("map-top");
        $("#header").css('background-color', 'transparent');
        $("#headerTitle").html("New Post");
    });

    $("#like").on('click touchstart', function () {
        $("#like_btn").toggleClass("fa-heart-o").toggleClass("fa-heart");
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            $(".photo_container").append("<div class='photo_thumbnails'></div>");
            reader.onload = function (e) {
                $('.photo_thumbnails').css('background-image', 'url(' + e.target.result + ')');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#inputFile").change(function () {
        readURL(this);
    });

    $('.row131').on('click touchstart', function(){
        $("body").removeClass().addClass("photos_this_week");
        $("#headerTitle").text("Photos from this week");
    })
    var s;
    for (i=1; i<23;i++) {
        s = '<div class="each_photo"><img src="images/'+i+'.jpg"></div>';
        $('#photos_week').append(s);
    }

});
