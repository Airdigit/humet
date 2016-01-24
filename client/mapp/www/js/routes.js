angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page18',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('tabsController.dashboard', {
      url: '/page20',
      views: {
        'tab10': {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cartTabDefaultPage', {
      url: '/page21',
      views: {
        'tab11': {
          templateUrl: 'templates/cartTabDefaultPage.html',
          controller: 'cartTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.cloudTabDefaultPage', {
      url: '/page22',
      views: {
        'tab12': {
          templateUrl: 'templates/cloudTabDefaultPage.html',
          controller: 'cloudTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page19',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page18');

});