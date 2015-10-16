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


    /*uploading multiple images*/
    var inputLocalFont = document.getElementById("inputFile");
    inputLocalFont.addEventListener("change",previewImages,false);

    function previewImages(){
        var fileList = this.files;

        var anyWindow = window.URL || window.webkitURL;

            for(var i = 0; i < fileList.length; i++){
              var objectUrl = anyWindow.createObjectURL(fileList[i]);
              $('.photo_container').append('<img class="photo_thumbnails" src="' + objectUrl + '" />');
              window.URL.revokeObjectURL(fileList[i]);
            }
        }
    
    /*alternative way of uploading a picture*/
    
    
    $('.photosThisWeek').on('click touchstart', function(){
        $("body").removeClass().addClass("photos_this_week");
        $("#headerTitle").text("Photos from this week");
    })
    
    /*
    var s;
    for (i=1; i<23;i++) {
        s = '<div class="each_photo"><img src="images/'+i+'.jpg"></div>';
        $('#photos_week').append(s);
    }
    */
    var template = Handlebars.compile($("#test-template").html());
    var url = "../images/"
    
    for (var i = 0; i < 20; i+=6) {
        var obj = {
            id:33,
            title:url+i+".jpg",
            image1:url+(i+1)+".jpg", 
            image2:url+(i+2)+".jpg", 
            image3:url+(i+3)+".jpg",
            image4:url+(i+4)+".jpg",
            image5:url+(i+5)+".jpg",
            image6:url+(i+6)+".jpg"
        }
        
        var html = template(obj);
        $(".column").append(html);
    }
    
    $(".socialm_btn").on('click touchstart', function(){
        console.log("tapping social media buttons");
        $(this).toggleClass("btn_on");
    })
});
