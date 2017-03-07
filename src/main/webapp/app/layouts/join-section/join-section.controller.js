(function() {
    'use strict';

    angular
        .module('javagapApp')
        .controller('JoinSectionController', JoinSectionController);

    JoinSectionController.$inject = ['$scope', 'NewsSubscription'];

    function JoinSectionController ($scope, NewsSubscription) {
        var vm = this;
        vm.save = save;
        
        vm.joinInfo = new NewsSubscription();

        function onSaveSuccess (result) {
            alertify.notify('New Subscription is created', 'success', 5, function(){  console.log('dismissed'); });
        }

        function onSaveError () {
            alertify.notify('New Subscription failed. Try again after login', 'error', 5, function(){  console.log('dismissed'); });
        }

        function save () {
            NewsSubscription.save(vm.joinInfo, onSaveSuccess, onSaveError);
        }
    }
})();