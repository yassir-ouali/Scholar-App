
var app = angular.module('loginApp',[])

app.controller("loginController",["$scope","$http","$window",function($scope,$http,$window){
  $scope.sendLoginCreditentials=function(){
    var loginData={
      login   :$scope.login,
      password:$scope.password
    };
    $http({
    method:"POST",
    data  :loginData,
    url   :"/login"
    }
    ).then(function success(res){
       if(res.data.ok =="success"){
           $window.location.href= "/app/";
        }
       else if(res.data.err) alert(JSON.stringify(res.data.err));
       else alert(JSON.stringify(res.data.err));
     },function err(res){
       alert(JSON.stringify(res.data.err))
     });;
  };
   
}]);
