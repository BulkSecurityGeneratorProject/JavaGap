(function() {
    'use strict';

    angular
        .module('javagapApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('jenkins', {
            parent: 'courses',
            url: '/jenkins',
            data: {
                
            },
            views: {
                'content': {
                    templateUrl: 'app/courses/devops/jenkins/jenkins.html'
                }
            }
        });
    }
})();