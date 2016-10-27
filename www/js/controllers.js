angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Heros) {
	 
	$scope.click = function(num) {
		$scope.var = num; 
		}
	 $scope.heros = Heros.all();
  $scope.remove = function(hero) {
    Heros.remove(hero);
  };
	})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('HeroDetailCtrl', function($scope, $stateParams, Heros) {
 $scope.hero = Heros.get($stateParams.heroId);
 
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
