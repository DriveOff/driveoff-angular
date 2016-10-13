Main.controller('MapCtrl', ['tripFactory', function (tripFactory) {
    
    var positions = tripFactory.positions();

    var startLat = positions[0].latitude;
    var startLong = positions[0].longitude;
    var numPositions = positions.length;

    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(startLat, startLong),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var myMap = this.map;

    this.markers = []
    var myMarkers = this.markers;
    var infoWindow = new google.maps.InfoWindow();

    function addMarker(thisLocation) {
        
        var marker = new google.maps.Marker({
            map: myMap,
            position: new google.maps.LatLng(thisLocation.latitude, thisLocation.longitude),
        });

        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h6 class="infoWindowContent"><a href="' + thisLocation.link + '">' + '</a></h6>' + marker.content);
            infoWindow.open(myMap, marker);
        });

        myMarkers.push(marker);
    }

    

    for (i=0; i < numPositions; i ++){
        addMarker(positions[i]);
    }

     this.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

}])