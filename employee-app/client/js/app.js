var empApp = angular.module("employees", ['lbServices']);
empApp.controller("empController", function($scope, $http, Employee) {

    $scope.isreg = false;
    $scope.fname = '';
    $scope.lname = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.addr  = '';
    
    $scope.registerEmp = function()
    {
        if($scope.fname == '' || $scope.lname == '' || $scope.email == '' || $scope.addr == '' )
        return;
   
   Employee.create({firstname:$scope.fname, lastname:$scope.lname, email:$scope.email, phonenumber:$scope.phone, address:$scope.addr}).$promise.then(function(){
	   $scope.fname = '';
	   $scope.lname = '';
       $scope.email = '';
       $scope.phone = '';
       $scope.addr  = '';
       $scope.isreg = true;
    })  
}

});