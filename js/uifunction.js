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

    $("#loc_dropdown").on('click touchstart', "ul", function () {
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
        
            if (!isMapFullsize) {
                $("body").removeClass().addClass("map_fullsize");
                initMap(true);
                window.mapObject.setZoom(2);
                $("#header").removeClass().addClass("transparent");
                isMapFullsize = true;
            }
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
        var urls =[];
        var anyWindow = window.URL || window.webkitURL;

        for(var i = 0; i < fileList.length; i++){
          var objectUrl = anyWindow.createObjectURL(fileList[i]);              
          urls[i] = objectUrl;  
          window.URL.revokeObjectURL(fileList[i]);
        }
        var template = Handlebars.compile($("#test-template").html());
        var obj = {
            image1:urls[0],
            image2:urls[1], 
            image3:urls[2], 
            image4:urls[3],
            image5:urls[4],
            image6:urls[5]
        }
        $('.photo_container_ftu').css('display','none');
        var html = template(obj);
        $(".photo_container").append(html);
    }
        /*switch (urls.length) {
            case 0:
                break;
            case 1:
                $('.photos_container').append('<div class="grid1" style="background-image:url('+urls[0]+')"></div>');
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            default:
                alert("sorry, you can only upload up to six photos");
        }*/

    /*alternative way of uploading a picture*/
    
    
    $('.photosThisWeek').on('click touchstart', function(){
        $("body").removeClass().addClass("photos_this_week");
        $("#headerTitle").text("Photos from this week");
    })
    
    var template = Handlebars.compile($("#test-template").html());
    var url = "../images/"
    
    for (var i = 0; i < 23; i+=6) {
        var obj = {
            id:33,
            image1:url+(i)+".jpg",
            image2:url+(i+1)+".jpg", 
            image3:url+(i+2)+".jpg", 
            image4:url+(i+3)+".jpg",
            image5:url+(i+4)+".jpg",
            image6:url+(i+5)+".jpg"
        }
        
        var html = template(obj);
        $(".column").append(html);
    }
    
    $(".socialm_btn").on('click touchstart', function(){
        console.log("tapping social media buttons");
        $(this).toggleClass("btn_on");
    })
    $('#comment_btn').on('click touchstart', function(){
        if (!sliderOn) {
            return;
        }
        else {
            console.log("tapping the comment btn!");
          $('.carrousel').slick('slickAdd',
                 '<div class="comment_item"><div class="user_text"><div class="user_image" id="postUserImageC1"></div><textarea class="foto_description comment_textarea" placeholder="Add your comments here!"></textarea></div><div class="name_n_date"><h1 class="postPlace" id="postPlaceC">Andrea C</h1><h1 class="postData" id="postDataC">now</h1></div></div>'
          
          );
         $('.carrousel').slick('slickGoTo',2);
        }
    });
    
    $("#capadoccia").on('click touchstart', function(){
        console.log("Capadoccia clicked on!");
        markerCallbacks[1]();
    });
        
    
});
