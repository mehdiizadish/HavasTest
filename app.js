var app = angular.module('angularProject', ['snap']);

app.controller('MainCtrl', function($scope, SNAP_VERSION) {
  $scope.snapVersion = SNAP_VERSION.full;
 $scope.toggle = false;
  $scope.sidenav = function() {
			$scope.toggle = !$scope.toggle;
		}
});
