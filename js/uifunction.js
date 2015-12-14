// Indicates whether the map is in full-size mode.
var isMapFullsize = false;

$(document).ready(function () {

    $(".header").on("click touchstart", ".closeheader", function(e){
    e.stopPropagation(); e.preventDefault();
        console.log(foooooo);
        $("#markerPopup").animate({
            top: "500px"
        }, 500);
        $("#markerPopup").css("display", "none");
    });

    $("#entry_next").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        $("#finalizePost").animate({
            top: "0px"
        }, 500);
        $("#finalizePost").css('display', 'block');
    })

    $(".tile_padding").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        $(this).children().children().toggle();
        $(this).children().toggleClass("selected_tile");
        var selected = $(this).children().css("background-image");
        $("#selected_photos").append("<div class='tile_padding_small'><div class='tile' style='background-image:" + selected + "'></div></div>");
    })

    $("#loc_dropdown").on('click touchstart', "ul", function(e){
    e.stopPropagation(); e.preventDefault();
        var text = $(this).children().html();
        console.log(text);
        $("#loc_dropdown").css('overflow', 'hidden');
        $("#add_loc_text").html(text);
    })

    $("#makePost").on('click touchstart','.off', function(e){
    e.stopPropagation(); e.preventDefault();
        $("#loc_dropdown").css('overflow', 'visible');
        $("#add_location").removeClass("off").addClass("on");
    });
    
    $("#makePost").on('click touchstart','.on', function(e){
    e.stopPropagation(); e.preventDefault();
        console.log("I'm clicking on!")
        $("#loc_dropdown").css('overflow', 'hidden');
        $("#add_location").removeClass("on").addClass("off");
    });


    $("#menuOptionFriends").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        $("#menu").css('display', 'none');
        $("#header").css('background', '#13475A');
        $("#header").css('color', 'white');
        $("#headerTitle").html('friends');
        $("#lefticon").removeClass().addClass("fa fa-navicon");
        $("#righticon").addClass("fa fa-plus");
        $("#filter_friend").css('display','block');
        $("#friends").css('display','block');
    });
    
    
    $("#menuOptionNotif").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        console.log("Capadoccia clicked on!");
        $("#menu").css('display', 'none');
        $('#header').css('display','block');
        $('#header').css('background','transparent');
        markerCallbacks[1]();   
    });
    
    

    $("#postUserImage").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        $("#profilePage").css('display', 'block');
        $("#profilePage").css('z-index', '10000000');
    });
    
    $("#friends").on('click touchstart', function(e){
        e.stopPropagation(); e.preventDefault();
        $("#friends").css('display', 'none');
        $("body").removeClass().addClass('friendBody');
        $("#friendPage").css('display', 'block');
        $("#friend_top").css('display', 'block');
        $("#map").css('display', 'block');
        $("#lefticon").removeClass().addClass("fa fa-chevron-left");
        $("#righticon").removeClass().addClass("fa fa-star-o righticonstar");
       /* $("#header").css('display', 'none');*/
        $("#friendsPage").css('z-index', '10000000');
    });

    $(".start").on('click touchstart', '#map', function(e){
        
    e.stopPropagation(); e.preventDefault();
        $("#homePage").css("display", "none");
        
            if (!isMapFullsize) {
                $("body").removeClass().addClass("map_fullsize");
                initMap(true);
                window.mapObject.setZoom(2);
                $("#header").removeClass().addClass("transparent");
                $("#lefticon").removeClass().addClass("fa fa-chevron-left");
                isMapFullsize = true;
            }
    });

    $("body").on('click touchstart', '.fa-navicon', function(e){
        e.stopPropagation(); e.preventDefault();
        $("body").removeClass().addClass("body-menu");
        $("#lefticon").removeClass().addClass("fa fa-close");
        $("#righticon").removeClass();
    });
    
     $("body").on('click touchstart', '.fa-plus', function(e){
    e.stopPropagation(); e.preventDefault();
        centerMap();
        $("body").removeClass("start").addClass("map-top");
        $("#righticon").removeClass().addClass("fa fa-close");
        $("#headerTitle").html("New Post");
     });
    
    
    $("body").on('click touchstart','.righticonstar', function(e){
        e.stopPropagation(); e.preventDefault();
        $(this).removeClass().addClass("fa fa-star");
    });

    $("#like").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        $("#like_btn").toggleClass("fa-heart-o").toggleClass("fa-heart");
    });
    
    $("#bookmark").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        $("#bookmark_btn").toggleClass("fa-bookmark-o").toggleClass("fa-bookmark");
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
    
    
    $('.photosThisWeek').on('click touchstart', function(e){
        e.stopPropagation(); e.preventDefault();
        $("body").removeClass().addClass("photos_this_week");
        $("#headerTitle").text("Photos from this week");
        $("#lefticon").removeClass("fa-navicon").addClass("fa fa-chevron-left");
    })
    
    /*back navigation for photos this week is not working!*/
    
/*    $('.photos_this_week').on('click touchstart', function(e){
        alert("clicking the back arrow");
        e.stopPropagation(); e.preventDefault();
        $("body").removeClass().addClass("start");
        $("#headerTitle").text("Nomads");
        $("#lefticon").removeClass().addClass("fa fa-navigation");
        $("#righticon").addClass("fa fa-plus");
    })*/ 
    
    var template = Handlebars.compile($("#test-template").html());
    var url = "images/"
    
    for (var i = 1; i < 23; i+=6) {
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
    
    $(".socialm_btn").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        console.log("tapping social media buttons");
        $(this).toggleClass("btn_on");
    })
    $('#comment_btn').on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        if (!sliderOn) {
            return;
        }
        else {
            console.log("tapping the comment btn!");
          $('.carrousel').slick('slickAdd',
                 '<div class="comment_item"><div class="user_text"><textarea class="foto_description comment_textarea" placeholder="Add your comments here!"></textarea></div><div class="submit_comment_post"><div class="submit_comment_post_btn">Submit comment</div></div><div class="name_n_date"><h1 class="postPlace" id="postPlaceC">Andrea C</h1><h1 class="postData" id="postDataC">now</h1></div></div>'
          
          );
         $('.carrousel').slick('slickGoTo',2);
        }
    });
    
    $("#capadoccia3").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        console.log("Capadoccia clicked on!");
        $("#friend_top").css('display','none');
        $('#filter_friend').css('display','none');
        $('#friendPage').css('display','none');
        $('#header').css('display','block');
        $('#header').css('background','transparent');
        markerCallbacks[1]();   
    });
    
    
    $('#filter').on('click touchstart', function(){
        $('.filter_dialogue').toggle();
    });
    var filteropen;
    $('#filter').on('click touchstart','.filter_tag_disabled', function(e){
    e.stopPropagation(); e.preventDefault();              
        $('.filter_dialogue').css('display','block');
        $(this).removeClass('filter_tag_disabled').addClass('filter_selected');
        filteropen = true;
    })
    
    $('#filter').on('click touchstart','.filter_selected', function(e){
    e.stopPropagation(); e.preventDefault();
        if (filteropen){
            $('.filter_dialogue').css('display','none');
            $(this).removeClass('filter_selected').addClass('filter_tag_disabled');}
    })
    
    $("#filter").on('click touchstart', ".filter_dialogue", function(e){
       e.stopPropagation(); e.preventDefault();
       $(this).css('display','none');
    $('.filter_selected').removeClass('filter_selected').addClass('filter_tag_disabled');
    })
    
    /*
    $('.tag_container').on('click touchstart','.tag_inactive', function(e){
    e.stopPropagation(); e.preventDefault();
        $(this).addClass('tag_active');
    })
    
    $('.tag_container').on('click touchstart','.tag_active', function(e){
    e.stopPropagation(); e.preventDefault();
        $(this).removeClass('tag_active');
        $(this).addClass('tag_inactive');
    });

     $(".tag_container_b").on('click touchstart','.tag', function(e){
    e.stopPropagation(); e.preventDefault();
        $(".tag").toggleClass("tag_inactive").toggleClass("tag_active");
    });
    */
    
     $('.tag_container').on('click touchstart','.tag_2', function(e){
    e.stopPropagation(); e.preventDefault();
        $(this).toggleClass("tag_inactive").toggleClass("tag_active");
    })
    
    var text_max = 140;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('.create_post_textarea').keyup(function() {
        var text_length = $('.create_post_textarea').val().length;
        var text_remaining = text_max - text_length;

        $('#textarea_feedback').html(text_remaining + ' characters remaining');
    });
    
    
    $(".button_bottom").on('click touchstart', function(e){
    e.stopPropagation(); e.preventDefault();
        $("body").removeClass().addClass("map_fullsize");
        $("html, body").animate({scrollTop:0}, 500);
        $("#makePost").css('display','none');
        if (!isMapFullsize) {
                $("body").removeClass().addClass("map_fullsize");
                initMap(true);
                window.mapObject.setZoom(2);
                $("#header").removeClass().addClass("transparent");
                $("#headerTitle").html('trips');
                $("#lefticon").removeClass().addClass("fa fa-chevron-left");
                $("#righticon").removeClass();
                isMapFullsize = true;
            }
        $(".message_alert_box").css('display', 'block');
        stopMessage();
    })
    
    $(".tag_landmark").on('click touchstart', function(e){
        initMap(true, true);
        window.mapObject.setZoom(2);
    })
    
    function stopMessage(){
        setTimeout(function(){
            $(".message_alert_box").css('display', 'none');
        }, 3000)
    }
   /* $(".start").on('click touchstart', function(){
        //$("html, body").scrollTo(0,0);
        $("html, body").animate({scrollTop:0}, 500);
    })*/
    
    //Navigation Code
    
    $(".open_post").on('click touchstart', '#lefticon', function(e){
        //e.stopPropagation(); e.preventDefault();
        console.log("navigation!");
       /* $("body").removeClass().addClass("body-menu");
        $("#lefticon").removeClass().addClass("fa fa-close");
        $("#righticon").addClass('fa fa-plus');*/
    });
    
    
});
