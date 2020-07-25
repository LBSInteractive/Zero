x/*************************************************************************************************
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
        dataBaseColor: {
            power: false
        },
        host: {
            val: '',
            disabled: false
        },
        dbName: {
            val: '',
            disabled: false
        },
        user: {
            val: '',
            disabled: false
        },
        password: {
            val: '',
            disabled: false
        },
        execution: {
            testDB: false
        }
    };

    $scope.$view = {
        title: 'Team'
    };

    $scope.$style = {
        sucessColor: {
            color: '#161616'
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
            let url = '/site/site_config/genoma/builder/testDB.php';
            let data = {
                host: $scope.dataBase.host.val,
                dbName: $scope.dataBase.dbName.val,
                user: $scope.dataBase.user.val,
                password: btoa($scope.dataBase.password.val)
            };
            let config = {
                headers: {
                    'Content-Type': undefined
                }
            };
            $http.post(url, data, config).then(function (success) {

                $scope.$view.title = success.data.msg;
                $scope.dataBase.host.disabled = true;
                $scope.dataBase.dbName.disabled = true;
                $scope.dataBase.user.disabled = true;
                $scope.dataBase.password.disabled = true;
                $scope.dataBase.execution.testDB = false;
                $scope.$style.sucessColor.color = '#1b7575';

            }, function (error) {

                $scope.$view.title = error.data.msg;
                $scope.$style.sucessColor.color = '#dc3545';
                $scope.dataBase.execution.testDB = false;

            }
            );
        }

    };
    //****************************************************************************



    //****************************************************************************
    /*----------------------------     Watchers     ----------------------------*/
    $scope.$watchGroup(['dataBase.oracle.disabled', 'dataBase.host.val', 'dataBase.dbName.val', 'dataBase.user.val', 'dataBase.password.val'], function (newValue, oldValue, scope) {
        $scope.dataBase.dataBaseColor.power = ($scope.dataBase.host.val != '' && $scope.dataBase.dbName.val != '' && $scope.dataBase.user.val != '' && $scope.dataBase.password.val != '') ? true : false;
    });

    //****************************************************************************



});
/*-----------------------------------------------Area Modulo Controller-------------------------------------------------*/

//************************************************************************************************************************
