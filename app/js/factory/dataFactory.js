DevDimDirectives.factory('dataFactory',
  /** @ngInject */
    function ($q) {

      var form = [{
        "Titre": "Analyste en génie informatique et réseau",
        "Annee": "2011-2013",
        "Ecole": "<a target=\"_blank\" href=\"http://www.insta.fr/analyste-opt-genie/\" >(Insta) </a>"
      }, {
        "Titre": "BTS IG (informatique de gestion)",
        "Annee": "2009-2011",
        "Ecole": "(Akor)"
      }, {
        "Titre": "Bac MEI (Maintenance des Equipement Industriels)",
        "Annee": "2006-2008",
        "Ecole": "<a target=\"_blank\" href=\"http://www.lyceerobertschuman.com/formation/formation-bac-pro-m-e-i/\" >(Robert Schuman) </a>"
      }];

      return {
        formations: form,
        //EXPERIENCE
        projets: [{
          "Titre": "<a target=\"_blank\" href=\"http://www.logaviv.com/wsd_web/cotations_matieres_premieres_en_ligne.html\">WSD Web</a>",
          "Description": "Tout d'abord WSD Web qui est un progiciel permettant l'accès aux informations de marché en temps réel <br/>" +
          "des matières premières et des produits dérivés.(Blé, Colza, Maïs, Orge, Cacao, Café, Sucre, Pétrole et Gaz, etc...)",
          "Img": "<img width=\"179\" height=\"126\"src=\"./img/logo_wsd.png\"/>",
          "Actions": ["Création de la solution mvc3 dans visual studio",
              "Mise en place de l'ORM nHibernate ( xml – objet poco) pour la couche d'acces au donnée",
              "Mise en place de signalR (.NET) sur nos applications de flux existant afin d'avoir du « temps réel » via le websocket pour le web",
              "Integration de graphique Highstock pour les graphes de type <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Open-high-low-close_chart\"> OHLC</a>",
              "Export Excel"
          ]
        }, {
          "Titre": "<a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.logaviv.wsdmobile\">WSD Mobile</a>",
          "Description": "Après plusieurs mois il à été décidé de porter wsd sur le mobile avec <a target=\"_blank\" href=\"http://docs.build.phonegap.com/en_US/introduction_what_is_build.md.html#What%20is%20Build\" >PhoneGap Build </a><br/>",
          "Img": "",
          "Actions": ["Recherche sur angularjs pour prise en main",
            "Developpement d'une API REST (c#)",
            "Modification de signalR (.NET) sur nos applications de flux existant afin de differencier les utilisateurs web de la mobile",
            "Intégration de graphique Highstock"]
        }, {
          "Titre": "<a target=\"_blank\" href=\"http://www.logaviv.com/solutions/finterra/presentation-finterra\">Finterra</a> /" +
              " <a target=\"_blank\" href=\"http://www.logaviv.com/solutions/agrimarket/presentation-agrimarket\">Agrimarket</a>",
          "Description": "Finterra est une solution web de gestion de positions proposée par les organismes stockeurs à destination de leurs agriculteurs." +
          "Agrimarket Cette plateforme web de e-commerce Agrimarket permet la contractualisation entre un opérateur et ses" +
          " clients/fournisseurs (ex. : entre un OS et ses agriculteurs)."
            ,
          "Img": "",
          "Actions": ["Recherche sur angularjs pour prise en main",
            "Developpement d'une API REST (c#)",
            "Modification de signalR (.NET) sur nos applications de flux existant afin de differentier les utilisateur web de la mobile",
            "Integration de graphique Highstock"]
        }],
        //ACCUEIL
        articles: [{
          "Titre": "Qui suis-je?",
          "Contenu": "Solvar Dimitri <br/>" +
             (new Date().getFullYear() - 1988) + " ans <br/>" +
              "Analyste programmeur"
        }, {
          "Titre": "Synopsis",
          "Contenu": "Bienvenu, après 4 ans au sein de Logaviv qui m'a formé (2 ans en alternance)" +
              " et a été mon premier employeur (2 ans en cdi) je me retrouve sur le marché de l'emploi"
        },
        {
          "Titre": "Pourquoi ce site?",
          "Contenu": "Je fais avant tout ce site pour me présenter ainsi que les projets " +
             "sur lesquels j'ai eu l'occasion de travailler mais surtout pour le plaisir de faire de l'angularjs. " +
         "N'étant pas web-designer un peu de clémence sur le rendu :)"
        }],
        //LOISIRS
        loisirs: [{
          "Titre": "Ping-pong/Tennis", "Contenu": "Malgré le fait que se ne soient pas des sports d'équipe, ils restent agréables à pratiqué",
          "Img": "./img/sports-290px.jpg"
        },
        {
          "Titre": "Jeux-video", "Contenu": "J'aime donc aussi les jeux-video, de préférence multi-joueurs (MOBA)" +
          " tel que League OF legend (LOL) et Heroes Of The Storm (HOTS), sur console plutot \"beat them all\" et combat <br/>",
          "Img": "./img/bonne-annee-jeuxvideo.jpg"
        }]
      };

      //function form() {
      //  var deffered = $q.defer();
      //  deffered.resolve([{
      //    "Titre": "Analyste en génie informatique et réseau",
      //    "Annee": "2011-2013",
      //    "Ecole": "<a target=\"_blank\" href=\"http://www.insta.fr/analyste-opt-genie/\" >(Insta) </a>"
      //  }, {
      //    "Titre": "BTS IG (informatique de gestion)",
      //    "Annee": "2009-2011",
      //    "Ecole": "(Akor)"
      //  }, {
      //    "Titre": "Bac MEI (Maintenance des Equipement Industriels)",
      //    "Annee": "2006-2008",
      //    "Ecole": "<a target=\"_blank\" href=\"http://www.lyceerobertschuman.com/infos/maintenance-industrielle.php\" >(Robert Schuman) </a>"
      //  }]);
      //  return deffered.promise;
      //}
    });