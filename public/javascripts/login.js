angular.module('login', [])
  .controller('LoginCtrl', loginCtrl);

function loginCtrl ($scope, $http, $window) {

  $scope.login = function(){
    console.log("Username: " + $scope.username);
    console.log("Password: " + $scope.password);

    if($scope.username === '') {
      alert("Enter a username");
      return;
    }

    if($scope.password === ''){
      alert("Enter a password");
      return;
    }
    else {
      var data = JSON.stringify({"username": $scope.username, "password": $scope.password});
      $http.post('/login', data).then(
        function(response) { 
          $window.location.href = '/'; 
        },
        function (response) { 
          $window.location.href = '/login';
        }
      );
    }
  }
}
