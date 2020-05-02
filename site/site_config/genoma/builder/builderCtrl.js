/*************************************************************************************************
 **				                        Modulo Controller		                         		**
 *************************************************************************************************/


/*------------------------------- Area Modulo Controller --------------------------------*/
// angular.module se compone de ('Nombre del modulo',[dependencias]) Inyectables
var core = angular.module('core', []);
/*------------------------------- Area Modulo Controller --------------------------------*/


/*------------------------------- Area Modulo Controller --------------------------------*/
//.controller ('Nombre Controller', directiva en function($scope)) Inyectables
core.controller('control', function ($scope, $timeout, $rootScope, $http) {


    //****************************************************************************
    /*---------------------------- scope controller ----------------------------*/
    $scope.dataBase = {
        mySQL: {
            disabled: false
        },
        dataBaseColor: {
            colorFalse: "#000000",
            colorTrue: "#1b7575",
            power: false
        },
        host: {
            val: ''
        },
        dbName: {
            val: ''
        },
        user: {
            val: ''
        },
        password: {
            val: ''
        },
        execution: {
            testDB: false
        }
    };
    /*----------------------------   scope Global   ----------------------------*/
    $rootScope.variable = "variable global"
    //****************************************************************************


    //****************************************************************************
    /*----------------------------       $gui       ----------------------------*/
    $scope.$gui = {
        testDB: function () {
            $scope.dataBase.execution.testDB = true;
        }
    };
    //****************************************************************************



    //****************************************************************************
    /*----------------------------     Watchers     ----------------------------*/
    $scope.$watchGroup(['dataBase.mySQL.disabled', 'dataBase.oracle.disabled', 'dataBase.host.val', 'dataBase.dbName.val', 'dataBase.user.val', 'dataBase.password.val'], function (newValue, oldValue, scope) {
        $scope.dataBase.dataBaseColor.power = ($scope.dataBase.mySQL.disabled && $scope.dataBase.host.val != '' && $scope.dataBase.dbName.val != '' && $scope.dataBase.user.val != '' && $scope.dataBase.password.val != '') ? true : false;
    });

    //****************************************************************************



});
/*-----------------------------------------------Area Modulo Controller-------------------------------------------------*/

//************************************************************************************************************************
