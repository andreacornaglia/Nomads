/// Map for homepage - shows my and my friend's last post location
var initialLocation;
var map;
var map2;
var service;
var markerHere;
var sliderOn = false;
var markerCallbacks = [];

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
                "color": "#13475A"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#13475a"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
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

//get current location using maps api    
$(document).ready(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);
        })
    }
    else{
        console.log("allow geolocation");
    }
});

function centerMap(){
    //defining map settings
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });
    var mapOptions2 = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: initialLocation,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    });
    map2 = new google.maps.Map(document.getElementById('map'),
        mapOptions2);
    //adding cluster
    var mcOptions = {gridSize: 50, maxZoom: 15};
    var mc = new MarkerClusterer(map2, [], mcOptions);
    window.mapObject = map;
    map2.mapTypes.set('map_style', styledMap);
    map2.setMapTypeId('map_style');
    var icon = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#FF7881',
                fillOpacity: .9,
                strokeWeight: 0
    };
    var markerHere = new google.maps.Marker({
            position: initialLocation,
            map: map2,
            optimized: false,
            icon: icon
    });
    
    getLocation();
}

function getLocation() {
    var service = new google.maps.places.PlacesService(map2);
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
                    html += '<li>' + results[i].name + '</li>';
                }
            }
            html += '</ul>';
            $('#loc_dropdown').html(html);
        }
    }

}

/*function centerMap() {
    console.log("centerMap");
    var mapOptions = {
        zoom: 15
    };

    map2 = new google.maps.Map(document.getElementById('map'), mapOptions);
    console.log(map);

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);

            infowindow = new google.maps.InfoWindow({
                map: map,
                position: initialLocation
            });

            map.setCenter(initialLocation);

            var request = {
                location:initialLocation,
                radius:500
            };

            var service = new google.maps.places.PlacesService(map2);
            service.nearbySearch(request,callback);
        })
    } else {
        // Browser doesn't support Geolocation
        console.log("no geoloc");
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            html = '<ul>';
            for (var i = 0; i < 5; i++) {
                if (typeof results[i] !== 'undefined') {
                    console.log(results);
                    html += '<li>' + results[i].name + '</li>';
                }
            }
            html += '</ul>';
            $('#loc_dropdown').html(html);
            }
        }
    }

*/


/*load map with markers*/
/*if filterMarkers is true, only a subset of markers are shown*/
function initMap(showPhotos, filterMarkers) {
    //defines map styling ; this one was created by using ...
    
    //adding the styling settings to our map    
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });

    //defining map settings
    var mapOptions = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: {
            lat: 0,
            lng: -30
        },
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    });
    //grabbing div from html to populate with map  
    map = new google.maps.Map(document.getElementById('map'),
        mapOptions);
    window.mapObject = map;

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    
    var markersCount = markers.length;
    
    if (filterMarkers) {
        markersCount = 5;
    }
    for (i = 0; i < markersCount; i++) {
        var image = {
            url: markers[i].profileImage,
            scaledSize: new google.maps.Size(40, 40), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(0, 0), // anchor
            strokeColor: '#FF7881',
            strokeWeight: 60,
            strokeOpacity: 1
        };
        var myLatlng = new google.maps.LatLng(markers[i].latitude, markers[i].longitude);
        //defining custom markers
        var icon = image;
        if (!showPhotos) {
            icon = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#FF7881',
                fillOpacity: .9,
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
        markerCallbacks[i] = makeMarkerCallback(markers[i], markerPopup, map);
        markerPopup.addListener('click', markerCallbacks[i]);
        //var mcOptions = {gridSize: 200, maxZoom: 15};
        //var mc = new MarkerClusterer(map, markerCallbacks, mcOptions);
    }

}

function makeMarkerCallback(thisMarker, markerPopup, map) {
    return function () {
        //$(document.body).removeClass();
        $(document.body).removeClass().addClass("open_post");
        $("#lefticon").removeClass().addClass('fa fa-chevron-left');
        $("#righticon").css('display', 'none');
        $("#headerTitle").html(thisMarker.name + "'s Trip");
        $("#postUserImage").css('background-image', 'url(' + thisMarker.profileImage + ')');
        $("#post_info").css('background-image', 'url(' + thisMarker.postImages[0] + ')');
        $("#postName").html(thisMarker.name);
        $("#postData").html(thisMarker.postDate);
        $("#postPlace").html(thisMarker.place);
        $("#foto_description").html(thisMarker.postComment);
        var latLng = markerPopup.getPosition(); // returns LatLng object
        map.setCenter(latLng);
        map.setZoom(7);
        console.log("Calling .carrousel.slick");
        $('.carrousel').slick({
            dots : true
        });
        sliderOn = true;
    };
}
