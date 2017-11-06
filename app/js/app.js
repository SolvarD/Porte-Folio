var DevDimApp = angular.module('DevDimApp', ['ngRoute', 'DevDimControllers', 'DevDimServices', 'ngResource',
	'ngSanitize',
	'ngRoute'
]);

var DevDimDirectives = angular.module('DevDimDirectives', []);
var DevDimServices = angular.module('DevDimServices', []);
var DevDimControllers = angular.module('DevDimControllers', ['DevDimDirectives', 'DevDimServices']);

String.prototype.getBytes = function () {
    var bytes = [];
    for (var i = 0; i < this.length; ++i) {
        bytes.push(this.charCodeAt(i));
    }
    return bytes;
};

DevDimApp.config(['$routeProvider', '$httpProvider',
function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["accept"] = "application/json"; // type de fichier reçu

    delete $httpProvider.defaults.headers.common["X-Requested-With"];

    window.routes =
	{

	    '/Accueil/': {
	        templateUrl: 'app/partials/accueil.html',
	        controller: 'accueilController',
			controllerAs: 'vm',
	        requireLogin: false,
	        resolve: {
	            dataFacto: ['dataFactory', function (dataFactory) {
	                return dataFactory.articles;
	            }]
	        }
	    },
	    '/Experience/': {
	        templateUrl: 'app/partials/experience.html',
	        controller: 'experienceController',			
			controllerAs: 'vm',
	        requireLogin: false,
	        resolve: {
	            dataFacto: ['dataFactory', function (dataFactory) {
	                return dataFactory.projets;
	            }]
	        }
	    },
	    '/Loisirs/': {
	        templateUrl: 'app/partials/loisir.html',
	        controller: 'loisirController',			
			controllerAs: 'vm',
	        requireLogin: false,
	        resolve: {
	            dataFacto: ['dataFactory', function (dataFactory) {
	                return dataFactory.loisirs;
	            }]
	        }
	    },
	    '/Formation/': {
	        templateUrl: 'app/partials/formation.html',
	        controller: 'formationController',
			controllerAs: 'vm',
	        requireLogin: false,
	        resolve: {
	            dataFacto: ['dataFactory', function (dataFactory) {
	                return dataFactory.formations;
	            }]
	        }
	    }
            ,
	    '/Projet/': {
	        templateUrl: 'app/partials/projet.html',
	        controller: 'projetController',
			controllerAs: 'vm',
	        requireLogin: false,

	    }, '/Contact/': {
	        templateUrl: 'app/partials/contact.html',
	        controller: 'contactController',			
			controllerAs: 'vm',
	        requireLogin: false
	    }

	};


    //this loads up our routes dynamically from the previous object 
    for (var path in window.routes) {
        $routeProvider.when(path, window.routes[path]);
    }
    $routeProvider.otherwise({ redirectTo: '/Accueil' });

}]).run(function ($rootScope, $location, $interval, $timeout) {

    document.addEventListener('beforeunload', function (event) {
        if (1) {
            //	e.preventDefault();
            if (sessionStorage.getItem("LOG"))
                sessionStorage.setItem("hasRefresh", true);
            //return "Unloading this page may lose .What do you want to do...";

        }
    }, true);


    //Pour gerer le cas des post qui ne marche pas sous IE9 et moins
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
        if (re.exec(ua) !== undefined && re.exec(ua) !== null)
            rv = parseFloat(RegExp.$1);
    }
    if (rv > -1) {
        if (rv <= 9.0) {
            xhook.addWithCredentials = false;
            jQuery.support.cors = true;
            var t = {};
            //var urlApi = configurationFactory.Url['Api'].replace("/api/", "");
            //var urlWsdApi = configurationFactory.Url['WSDApi'].replace("/api/", "");
            //t[urlApi] = '/proxy.html';
            //t[urlWsdApi] = '/proxy.html';
            xdomain.slaves(t);
            xdomain.debug = true; //Pour afficher le debug dans la console
        }
    }
    var eventlocation = $rootScope.$on("$locationChangeStart", function (event, next) {
        $rootScope.currentPath = next;
        $rootScope.menu = [{ "element": 1, "Label": "Accueil", "Url": "#/Accueil" },
                            { "element": 2, "Label": "Formation", "Url": "#/Formation" },
                            { "element": 3, "Label": "Experience", "Url": "#/Experience" },
                            { "element": 4, "Label": "Suivi de projet", "Url": "#/Projet" },
                            { "element": 5, "Label": "Loisirs", "Url": "#/Loisirs" },
                            { "element": 6, "Label": "Contact", "Url": "#/Contact" }];
        $('#contain').css("opacity", "0");
    });
    var eventlocationsuccess = $rootScope.$on("$locationChangeSuccess", function (event, next) {
        $('#contain').animate({
            opacity: 1
        }, {
            duration: 1500,
            queue: false
        });
    });
});