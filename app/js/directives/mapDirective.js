DevDimDirectives.directive('map',
    function () {
        return {
            restrict: 'EA',
            template: '',
            link: function ($scope, element, attrs) {
                var map = {};
                var pos = {};
                var marker = {};
                var infowindow = {};
                var zoom = 18;
                function initialize() {
                    if (attrs.zoom)
                        zoom = attrs.zoom;
                    if (attrs.height)
                        element.css('height', attrs.height);
                    if (attrs.width)
                        element.css('width',attrs.width);
                    var mapOptions = {
                        center: { lat: parseFloat(attrs.lat), lng: parseFloat(attrs.long) },
                        zoom: parseInt(zoom)
                    };

                    if (element.context && element.context.id)
                        map = new google.maps.Map(document.getElementById(element.context.id),
                            mapOptions);
                    else alert("directive map : ID de l'element indefini");
                    //navigator.geolocation.getCurrentPosition(function (position) {
                    //    pos = new google.maps.LatLng(position.coords.latitude,
                    //                                     position.coords.longitude);
                    //});
                    marker = new google.maps.Marker({
                        map: map,
                        position: map.getCenter()
                    });
                    //infowindow = new google.maps.InfoWindow({
                    //    map: map,
                    //    position: map.getCenter(),
                    //    content: '6 place Carnot'
                    //});
                 
                    google.maps.event.addListener(marker, 'click', function () {
                        map.setZoom(parseInt(zoom));
                        map.setCenter(marker.getPosition());
                    });
                }
                //google.maps.event.addDomListener(window, 'load', initialize);
                initialize();
            }
        }

    });