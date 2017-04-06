// JavaScript Document
var myModule = angular.module('MyModule', ['ui.router']);
myModule.controller('indexController', ['$scope',function($scope) {
        $scope.show=false;
        $scope.popshow = function(){
            $scope.show = !$scope.show;
        };
        $scope.user={
            userName:'damo@qq.com',
            password:'123456'
        };
        //会员管理
        $scope.bianhao="序号";
        $scope.name="会员名称";
        $scope.phone="联系方式";
        $scope.aress="客户地址";
        $scope.time="最新工单";
        $scope.mermber="平台会员";
        $scope.caoz="操作";
        $scope.groups = [{
            bianhao:'A99914102',
            name:'yanglu',
            phone:'18671448183',
            aress:'南山区科技园',
            time:'2015.8.11',
            mermber:'是',
            caoz:'查看'
                 },{
            bianhao:'A99914102',
            name:'yanglu',
            phone:'18671448183',
            aress:'南山区科技园',
            time:'2015.8.11',
            mermber:'是',
            caoz:'查看'
                },{
            bianhao:'A99914102',
            name:'yanglu',
            phone:'18671448183',
            aress:'南山区科技园',
            time:'2015.8.11',
            mermber:'是',
            caoz:'查看'
        },{
            bianhao:'A99914102',
            name:'yanglu',
            phone:'18671448183',
            aress:'南山区科技园',
            time:'2015.8.11',
            mermber:'是',
            caoz:'查看'
        },{
            bianhao:'A99914102',
            name:'yanglu',
            phone:'18671448183',
            aress:'南山区科技园',
            time:'2015.8.11',
            mermber:'是',
            caoz:'查看'
        }];
    //工作台数据
    $scope.dcldata =[{
        dclxh:"1",
        dclgdh:"A99914102",
        dclkh:"唐先生",
        dclphone:"18612345678",
        dclaress:"南山区粤海街道科技园特发信息港",
        dcltime:"2015-07-14 18：00",
        dclly:"电话",
        dcljxy:"王工",
        dclgdzt:"待处理"
    },{
        dclxh:"1",
        dclgdh:"A99914102",
        dclkh:"唐先生",
        dclphone:"18612345678",
        dclaress:"南山区粤海街道科技园特发信息港",
        dcltime:"2015-07-14 18：00",
        dclly:"电话",
        dcljxy:"王工",
        dclgdzt:"待处理"
        },{
        dclxh:"1",
        dclgdh:"A99914102",
        dclkh:"唐先生",
        dclphone:"18612345678",
        dclaress:"南山区粤海街道科技园特发信息港",
        dcltime:"2015-07-14 18：00",
        dclly:"电话",
        dcljxy:"王工",
        dclgdzt:"待处理"
        },{
        dclxh:"1",
        dclgdh:"A99914102",
        dclkh:"唐先生",
        dclphone:"18612345678",
        dclaress:"南山区粤海街道科技园特发信息港",
        dcltime:"2015-07-14 18：00",
        dclly:"电话",
        dcljxy:"王工",
        dclgdzt:"待处理"
        }];
    }
])
