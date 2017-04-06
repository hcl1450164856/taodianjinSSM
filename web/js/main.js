$(function(){
    //js数字格式化
    function formatNumber(num, precision, separator) {
        var parts;
        // 判断是否为数字
        if (!isNaN(parseFloat(num)) && isFinite(num)) {
            // 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
            // 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
            // 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
            // 的值变成了 12312312.123456713
            num = Number(num);
            // 处理小数点位数
            num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString();
            // 分离数字的小数部分和整数部分
            parts = num.split('.');
            // 整数部分加[separator]分隔, 借用一个著名的正则表达式
            parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));

            return parts.join('.');
        }
        return NaN;
    }
    //首页汇融界数字格式化
    $(".join-num").text(formatNumber($(".join-num").text()));
    $(".Success-num").text(formatNumber($(".Success-num").text()));
    $(".num-b").each(function () {
        $(this).text(formatNumber($(this).text()));
    })
    /*密码强度提示*/
   function password(){
       $("input[name='new-pass']").keyup(function() {
           var pass_length = $(this).val().length
           if (pass_length >= 6) {
               $(".pass-qd").css({"background-position":"0 0"})
               if (pass_length >= 12) {
                   $(".pass-qd").css({"background-position":"0 -20px"})
                   if (pass_length >= 18) {
                       $(".pass-qd").css({"background-position":"0 -40px"})
                   }
               }
           }
       })
       $("input[name='new-pass']").blur(function(event) {
           if (pass_length >= 6) {
               $(".pass-qd").css({"background-position":"0 0"})
               if (pass_length >= 12) {
                   $(".pass-qd").css({"background-position":"0 -20px"})
                   if (pass_length >= 18) {
                       $(".pass-qd").css({"background-position":"0 -40px"})
                   }
               }
           }
       });
   }
    password()
    //人才招聘伸缩
    $(".upjt").click(function(){
        $(this).toggleClass("click")
        $(this).parent("dt").siblings('dd').toggle();
    })
    //找项目筛选
    $(".fproselect dl").each(function(){
        $(this).find("em").click(function(){
            $(this).toggleClass("ss");
            $(this).parent("dd").toggleClass("over");
            $(this).find("i").toggleClass("icon-up-open");
        })
    })
    //注册输入框提示
    $(".dl-form div").each(function(){
        var that=this;
        $(that).find("input").focus(function(){
            $(this).siblings("em").show();
        })
        $(that).find("input").blur(function(){
            $(this).siblings("em").hide();
        })
    })
    //项目描述提示
    //$(".describe p").each(function(){
    //   if($(this).find("em").text().length)
    //})
    //项目描述切换
    if($(".rz-tit>li").length>1){
        $('.rz-xx').tab({
            currentClass:'selected',
            tabNav:'.rz-tit>li',
            tabConent:'.rz-bb>.rz-con',
            eventType:'click'
        });
    }
    if($("#pro-ms>span").length>1){
        $('.bot-b').tab({
            currentClass:'selected',
            tabNav:'#pro-ms>span',
            tabConent:'.zxms-b>.box',
            eventType:'click'
        });
    }
    //首页项目数滚动
        function pronumSlide() {
            var i = 0, linum = $("#project-bb li").length, lih = $(".project-b").height();
            function f1() {
                if (i < linum) {
                    $("#project-bb ul").animate({"margin-top": -lih * i + "px"}, 500);
                    i++
                }
                else {
                    i = 0;
                    $("#project-bb ul").animate({"margin-top": "0px"}, 500)
                }
            }
            return f1;
        }
    var result=pronumSlide();
    setInterval(function(){result()},5000)

    //最新揭晓
    //编辑昵称
    $(".grzl-b .rig.rig1 em.bj").on("click",function(){
        $(this).hide();
        $(".bbnc").css({"display":"inline-block"});
    })
    //进度条
    Number.prototype.toPercent = function(){
        return (Math.round(this * 10000)/100) + '%';
    }
    //var bfb=($(".jdt .jd1").attr("data-width"))/100;
    //$(".jdt .jd1").css({"width":bfb.toPercent()});
    $(".dbjltab1 tbody tr").each(function(){
        var bfb=($(this).find(".jdt .jd1").attr("data-width"))/100;
        $(this).find(".jdt .jd1").css({"width":bfb.toPercent()});
    })
    $(".t-piclist li").each(function(){
        var bfb=($(this).find(".jdt .jd1").attr("data-width"))/100;
        $(this).find(".jdt .jd1").css({"width":bfb.toPercent()});
    })
    //夺宝记录时间帅选
    $(".sx-time ul li").on("click",function(){
        $(".sx-time em").text($(this).text());
    })
   //如何使用红包
    $(".syhb-tit a").on("click",function(){
        $(this).find("i").toggleClass("icon-up-open");
        $(this).find("em").toggle();
        $(".syhh-t-b").toggle();
    })
    //充值
    $(".cz-box1 li").each(function(){
        var that=this;
        $(this).find("span").click(function(){
            $(that).find("span").removeClass("selected");
            $(this).addClass("selected");
        })
    })
    //夺宝记录
    var ulh=$(".dbjs-b ul").height()+50;
    $(".dbjs-b .sx").css("height",ulh+"px");
    $(".dbjs-b ul li a").each(function(){
        var that=this;
        $(this).click(function(){
            $(".dbjs-b ul li").removeClass("selected");
            $(this).parent("li").toggleClass("selected");
        })
    })
    //切换
    $(".sy-bot .tit .con a").click(function(){
        $(".sy-bot .tit .con a").removeClass("selected");
        $(this).addClass("selected");
       var indexed= $(".sy-bot .tit .con").find("a").index(this);
        $(".sy-bot .content2").hide();
        $(".sy-bot .content2").eq(indexed).css({"display":"table"});
        var ulh=$(".dbjs-b ul").height()+50;
        $(".dbjs-b .sx").css("height",ulh+"px");
    })
    //人次加减
    $(".seacch-list ul li").each(function(){
        var jiaB=$(this).find(".jia");
        var jianB=$(this).find(".jian");
        var renci=parseInt($(this).find(".input").text());
        var that=this;
        jianB.click(function(){
            if(renci<=1)return;
            renci=renci-1;
            console.log(renci)
            $(that).find(".input").text(renci)
        })
        jiaB.click(function(){
            renci=renci+1;
            console.log(renci)
            $(that).find(".input").text(renci)
        })
    })
    //上传图片
    $("#wocd-sctp1").click(function(){
        $("#wocd-sctp").trigger("click")
    })
    //付款详情
    $(".fkxq1").on("click",function(){
        $(".fkxqp").toggle();
        $(this).find("span").toggleClass("icon-up-open");

    })
})




