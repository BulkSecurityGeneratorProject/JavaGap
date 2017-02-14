(function() {
    'use strict';

    angular
        .module('javagapApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('education', {
            parent: 'entity',
            url: '/education',
            data: {
                
            },
            views: {
                'content': {
                    templateUrl: 'app/entities/education/education.html'
                }
            }
        });
    }
})();