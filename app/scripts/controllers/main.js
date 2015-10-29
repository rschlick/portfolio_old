'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl',['$rootScope','$scope' ,function ($rootScope, $scope) {
      
    $rootScope.currentDate = new Date();
      
    $scope.languages = [{"language": "Anglais", "level": "courant", "stars" : 5 }, {"language": "Allemand", "level": "basique", "stars" : 2}, {"language": "Polonais", "level": "notions",  "stars" : 1}];  
    $scope.universities = [{"university": "Université Paris V René Descartes", "diplome": "Master MIAGE", "years":"2006-2008"}, {"university": "Université Paris V René Descartes", "diplome": "Licence MIAGE", "years":"2005-2006"},{"university": "IUT Paris V René Descartes", "diplome": "DUT informatique", "years":"2003-2005"}]; 
    $scope.publications = [{"title": "Java EE 6, une plateforme simple et légère. Spring n’a qu’à bien se tenir !", "summary": "La plateforme Java EE conserve de nos jours encore une mauvaise réputation. Les fameux EJB 2 et conteneurs lourds démarrant en plusieurs minutes vous rappelleront quelques bons souvenirs. L’arrivée de Spring a ouvert la voie aux conteneurs légers, à l’inversion de contrôle, ou encore à l’injection de dépendances; et est devenue la solution de référence. Cependant, la plateforme Java EE a beaucoup évolué entre temps.", "link": "http://blog.xebia.fr/2012/02/01/java-ee-6-une-plateforme-simple-et-legere-spring-na-qua-bien-se-tenir/"},
    {"title": "Animez vos rétrospectives !", "summary": "La rétrospective est l’une des cérémonies préconisées dans les méthodologies de développement agile. Son rôle est de permettre aux équipes de développement, et aux individus qui la composent, de continuellement s’améliorer.", "link": "http://blog.xebia.fr/2010/12/23/animez-vos-retrospectives-partie-1/"},
    {"title": "Automatiser les tests Selenium avec Maven", "summary": "Bien que la création des tests Selenium soit relativement simple, automatiser leur exécution sur un serveur d’intégration continue reste complexe à mettre en œuvre. Je vous propose une solution avec l’outil de build Maven. Disposant de nombreux plugins, comme SQL, Failsafe, Jetty et Selenium, Maven permet la mise en place d’une automatisation satisfaisante.", "link": "http://blog.xebia.fr/2011/02/18/automatiser-les-tests-selenium-avec-maven/"}];
    
    $scope.skills = [
        {"title": "Java/JEE", "level": "90%", "label": "Expert"},
        {"title": "Spring / Hibernate", "level": "95%", "label": "Expert", "more": "Spring 4: Core, MVC, WS, Security, Batch, Integration, Boot, Data."},
        {"title": "Méthodes agiles & Scrum Master", "level": "90%", "label": "Expert", "more": "Scrum, Kanban, Lean"},
        {"title": "Maven", "level": "80%", "label": "Avancé"},
        {"title": "Tomcat / JBoss", "level": "80%", "label": "Avancé"},
        {"title": "GIT", "level": "80%", "label": "Avancé"},
        {"title": "Craftmanship", "level": "80%", "label": "Avancé", "more": "Pratiques orientées qualité: TDD, BDD, DDD, refactoring, etc."},
        {"title": "AngularJS", "level": "60%", "label": "Compétent"},
        {"title": "Nosql / MongoDB", "level": "70%", "label": "Avancé"},     
        {"title": "DevOps", "level": "60%", "label": "Compétent", "more": "Déploiement continue avec Jenkins, Docker"},    
        {"title": "HTML5, JS, SCSS", "level": "70%", "label": "Compétent"}
    ];
    
    $scope.experiences = [{"title": "Java JEE Technical Leader & Scrum Master", "place":"Santech", "years":"2014 - 2015", "description": "Je suis team leader d\'une équipe de 4-5 développeurs back et front, qui développe le coeur produit de Santech sur une base de Java/Spring et Angular JS. Je m\'occupe des développements, de l\'architecture technique, mais aussi du processus de développement Scrum/Kanban, ainsi que la partie DevOps (automatisation avec Jenkins). Je participe aussi aux développements Front sur une base de Grunt/Angular."},
    {"title": "Java JEE Technical Leader", "place":"Galeries Lafayette", "years":"2013 - 2014", "description": "J'ai été technical leader d'une équipe de 5 développeurs. Je me suis occupé à la fois de la conception et du développement du site e-commerce et des projets omnicanaux. Les projets sont menés en Scrum/Kanban."},   
    {"title": "Consultant Java JEE Senior", "place":"Xebia", "years":"2009 - 2013", "description": "J'ai effectué des missions à forte technicité dans l'écosystème Java JEE / Spring et dans des environnements le plus souvent agile (scrum/kanban)."},
    {"title": "Ingénieur études et développement Java JEE agile", "place":"Finance Active", "years":"2006 - 2008", "description": "Finance Active est un éditeur leader dans le conseil et la gestion de la dette. J'ai participé aux évolutions de la plate-forme de services à destination des clients réalisées en Méthodes Agiles (Scrum)."}];
          
    $scope.getNumber = function(num) {
        return new Array(num);   
    }; 
      
      jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );


});
    
  }]);
  
  
  
