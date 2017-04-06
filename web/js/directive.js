myModule.directive('mytr', function() {
    return {
        restrict: 'EAC',
        replace: true,
        transclude: true,
        //template:"<h1>京华工单处理系统</h1>"
        templateUrl: 'tpls/tr.html',
        link:function(scope,element,attrs){
        }
    }
});
myModule.directive('acli',function(){
    return{
        restrict : 'A',
        replace : true,
        template:'<a class="btn01 x-g">修改</a>',
        link: function(scope,element,attrs){
            $(element).Popup({
                closeclick:null,
                con:"pop-c",
                Type:"dialog",
                Width:600,
                Height:560,
                theme:null,
                Title:"修改会员",
                Content:null,
                drag:true
            })
        }
    }
});
myModule.directive('pop', function() {
    return {
        restrict: 'EAC',
        replace: true,
        transclude: true,
        template: '<div class="pop-c" ng-transclude></div>'
    }
})
