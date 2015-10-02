/// Map for homepage - shows my and my friend's last post location

function initMap() {
    //defines map styling ; this one was created by using ...    
    var markerTrip = [
        {
            "userName": "Virginia",
            "date": "1 day ago",
            "profilePhoto": "virginia.png",
            "photo": "sydney.png",
            "position": "{lat: -33.890, lng: 151.274}"
    }
]

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
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#575757"
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
                    "color": "#b3ebe3"
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
                    "color": "#47cab6"
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
        zoom: -1,
        center: {
            lat: 0,
            lng: -180
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
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var myLatlng = new google.maps.LatLng(markers[i].latitude, markers[i].longitude);
        //defining custom markers
        var markerPopup = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image
        });
        
        //making custom marker clickable
        markerPopup.addListener('click', makeMarkerCallback(markers[i]));
    }


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

function makeMarkerCallback(thisMarker) {
    return function () {
            //infowindow.open(map, markerPopup);
            console.log("triggering marker.Popup");
            $("#markerPopup").animate({top: "130px"}, 500);
            $("#markerPopup").css('display', 'block');
            $("#map").animate({top: "-300px"}, 500);
            $("#navicon").css('display', 'none');
            $("#homeTitle").css('display', 'none');
            $("#addPost").removeClass("fa-plus addPost").addClass("fa-close closeheader");
            $("#postUserImage").css('background-image','url(' + thisMarker.profileImage + ')');
            $("#postName").html(thisMarker.name);
            $("#postData").html(thisMarker.postDate);  
            $("#postPlace").html(thisMarker.place);
            var latLng = markerPopup.getPosition(); // returns LatLng object
            map.setCenter(latLng);
            map.setZoom(7);
    };
}