// making the map
function initialize(){
    var mapOptions = {
        // how far the map is zoomed in on start up
        zoom: 10,
        // starting cordinates D.C
        center: new google.maps.latLng(38.8951, -77.0364),

        //type of map SATELLITE HYBRID TERRAIN
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        //minimum map zoom
        minZoom: 2

        // create a new map ionstance using provided options
        
    };
    var map = new google.maps.Map(document.getElementById
    ('map'), mapOptions);
}
    //initialize the map when the window finishes loading 

google.maps.event.addDomListener(window, 'load', initialize);