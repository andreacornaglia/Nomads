/// Map for homepage - shows my and my friend's last post location

function initMap(showPhotos) {
    //defines map styling ; this one was created by using ...
    var styles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#B3EBE3"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#13475A"
            },
            {
                "visibility": "on"
            }
        ]
    }
];
    //adding the styling settings to our map    
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });

    //defining map settings
    var mapOptions = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0
        },
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    });
    //grabbing div from html to populate with map  
    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
    window.mapObject = map;
    //var mapB = new google.maps.Map(document.getElementById('mini_map'), mapOptionsB);


    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    for (i = 0; i < markers.length; i++) {
        var image = {
            url: markers[i].profileImage,
            scaledSize: new google.maps.Size(40, 40), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0), // anchor
            strokeColor: '#FF7881',
            strokeWeight:60,
            strokeOpacity: 1
        };
        var myLatlng = new google.maps.LatLng(markers[i].latitude, markers[i].longitude);
        //defining custom markers
        var icon = image;
        if (!showPhotos) {
           icon =  {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#FF7881',
                fillOpacity: 1,
                strokeWeight: 0
            };
        }
        var markerPopup = new google.maps.Marker({
            position: myLatlng,
            map: map,
            optimized: false,
            icon: icon
        });

        //making custom marker clickable
        markerPopup.addListener('click', makeMarkerCallback(markers[i], markerPopup, map));
    }

    var currLatlong;
    //get current location using maps api    
    function getLocation() {
        console.log("I'm get location!");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        console.log("I'm getting the location");
    }

    //using current location to get list of nearby places using places api
    function showPosition(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: initialLocation,
            radius: 500,
        }, callback);

        function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                html = '<ul>';
                for (var i = 0; i < 5; i++) {
                    if (typeof results[i] !== 'undefined') {
                        console.log(results);
                        html += '<li><a href="#place_details">' + results[i].name + '</a></li>';
                    }
                }
                html += '</ul>';
                $('#loc_dropdown').html(html);
            }
        }
    }

    getLocation();
    //problem: how to use current position to make place search    



}

function makeMarkerCallback(thisMarker, markerPopup, map) {
    return function () {
            //$(document.body).removeClass();
            $(document.body).removeClass().addClass("open_post");
            $("#lefticon").css('display', 'none');
            $("#headerTitle").html(thisMarker.name+"'s Trip");
            $("#righticon").css({transform: "rotate(45deg)"});
            $("#postUserImage").css('background-image','url(' + thisMarker.profileImage + ')');
            $("#postName").html(thisMarker.name);
            $("#postData").html(thisMarker.postDate);  
            $("#postPlace").html(thisMarker.place);
            var latLng = markerPopup.getPosition(); // returns LatLng object
            map.setCenter(latLng);
            map.setZoom(7);
    };
}