/**
 * Created by Administrator on 2015/8/18.
 */
myModule.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/member");
    $stateProvider
        .state('member', {
            url: "/member",
            templateUrl: "tpls/member.html"
        })
        .state('mexx', {
            url: "/mexx",
            templateUrl: "tpls/mexx.html"
        }).state('create', {
            url: "/create",
            templateUrl: "tpls/create.html"
        }).state('import', {
            url: "/import",
            templateUrl: "tpls/import.html"
        }).state('manage-d', {
            url: "/manage-device",
            templateUrl: "tpls/manage-device.html"
        }).state('dcldd', {
            url: "/dcl-data",
            templateUrl: "tpls/dcl-data.html"
        }).state('fa-manage', {
            url: "/fa-manage",
            templateUrl: "tpls/fh-manage.html"
        }).state('fa-xiaos', {
            url: "/fa-xiaos",
            templateUrl: "tpls/fh-xiaos.html"
        }).state('fa-xiaosxq', {
            url: "/fa-xiaosxq",
            templateUrl: "tpls/fh-xiaosxq.html"
        }).state('create-dd', {
            url: "/create-dd",
            templateUrl: "tpls/creat-fhd.html"
        }).state('my-recording', {
            url: "/my-recording",
            templateUrl: "tpls/my-recording.html"
        }).state('record-search', {
            url: "/record-search",
            templateUrl: "tpls/record-search.html"
        }).state('employee', {
            url: "/employee",
            templateUrl: "tpls/employee.html"
        }).state('competence', {
            url: "/competence",
            templateUrl: "tpls/competence.html"
        }).state('department', {
            url: "/department",
            templateUrl: "tpls/department.html"
        }).state('xg-password', {
            url: "/xg-password",
            templateUrl: "tpls/xg-password.html"
        }).state('field', {
            url: "/field",
            templateUrl: "tpls/field.html"
        }).state('journal', {
            url: "/journal",
            templateUrl: "tpls/journal.html"
        }).state('database', {
            url: "/database",
            templateUrl: "tpls/database.html"
        });
});