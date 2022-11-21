// set global variables
var gmarkers1 = [];
var markers1 = [];
var infowindow = new google.maps.InfoWindow({
    content: ''
});




// Function to init map


function initialize() {
    var center = new google.maps.LatLng(46.51940505516995, 6.632623229449223);
    var mapOptions = {
        zoom: 14,
        center: center,
        mapTypeID: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (i = 0; i < markers1.length; i++) {
        addMarker(markers1[i]);
    }
}


// Function to add markers to map


function addMarker(marker) {
    var category = marker[4];
    var name = marker[1];
    var pos = new google.maps.LatLng(marker[2], marker[3]);
    var content = marker[1];

    marker1 = new google.maps.Marker({
        title: name,
        position: pos,
        category: category,
        map: map
    });

    gmarkers1.push(marker1);

// Marker click listener (zoom in and open info window)
    google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
        return function () {
            console.log('Gmarker 1 gets pushed');
            infowindow.setContent(content);
            infowindow.open(map, marker1);
            map.panTo(this.getPosition());
            map.setZoom(13);
        }
    })(marker1, content));
}


// Function to filter markers by category


filterMarkers = function (category) {
    for (i = 0; i < markers1.length; i++) {
        marker = gmarkers1[i];
        // If is same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
            
        }
        
        // if Categories don't match 
        else {
            marker.setVisible(false);
        }
    }
}

// Add markers (you can add as many as you like)
// Note, marker #5 has a lot of styling and an image in the info window. Just showing an example of what you can do with an info window.
markers1 = [
    ['0', `
    <div style="font-size:12px; color:#000;">
      <h6 class="mt-2 mb-4">Tibits</h6>
      <a class="menu-primary mt-4" href="https://antoninfaure.github.io/site-180/crieur/tibits">Voir</a>
    </div>"'

    `, 46.51721188443322, 6.627897207283202, 'Restaurant']
];

// Init map
initialize();