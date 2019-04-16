angular.module('signUp', [])
  .controller('SignupCtrl', signupCtrl);

function signupCtrl ($scope, $http, $window) {

  $scope.register = function(){
    console.log("Username: " + $scope.username);
    console.log("Password: " + $scope.password);
    console.log("Confirm: " + $scope.confirm);

    if($scope.username.indexOf('@') === -1) {
      alert("Invalid Email Address");
      return;
    }
    if(!$scope.username.indexOf('.com') === -1) {
      alert("Invalid Email Address");
      return;
    }

    if($scope.password !== $scope.confirm){
      alert("Passwords don't match");
      return;
    }
    else {
      var data = JSON.stringify({"username": $scope.username, "password": $scope.password});
      $http.post('/signup', data).then(
        function(response) { 
          $window.location.href = '/'; 
        },
        function (response) { 
          $window.location.href = '/signup';
        }
      );
    }
  }
}