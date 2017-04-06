(function (window, $, undefined) {
    var Popup = function (cf) {
        if (cf === undefined) return;
        // if (typeof cf === 'string') {
        //     cf = { id: cf };
        // }
        //绑定默认值
        var df = Popup.defaults;
        for (var i in df) {
            (cf[i] === undefined) && (cf[i] = df[i]);
        }
        // if (cf.id == null) return;
        return new Popup.prototype._init(cf);
    };
    Popup.prototype = {

        _init: function (cf) {
            var that = this,
                $eles;
            this.cf = cf;
            //if (typeof cf.domclick === 'string' || cf.domclick.nodeType === 1) {
            //    $eles = $(cf.domclick);
            //}
            //else {
            //    $eles = cf.domclick;
            //}
            //if (!$eles && !$eles.length)  return;
            this._getClass(cf.domclick).on("click", function () {
                $("body").css({position:'relative'});
                var Dombackdrop=$("<div/>").css({
                    "width":"100%",
                    "height":"100%",
                    "opacity":"0.5",
                    "background":"#000000",
                    "position": 'fixed',
                    "left": 0,
                    "top": 0,
                    "z-index":"9999999"
                }).appendTo('body');
                that._showBox(cf.Width,cf.Height,cf.Title,cf.Content,cf.Type,Dombackdrop,cf.drag,cf.con,cf.closebtn);
                if(cf.after){cf.after()}
            })
        },
        _getClass: function (classname) {
            return $("." + classname);
        },
        //显示弹出层
        _showBox: function(Width,Height,Title,Content,Type,Backdrop,Drag,Con,Closebtn){
            var that=this;
            var boxTypes =['prompt','dialog','warning','info'];//弹出框类型
            var Left=($(window).width()-Width)/2,Top=($(window).height()-Height)/2;
            var box=$("<div/>").width(Width).height(Height).css({"left":-1000,"top":Top});
            box.appendTo('body').css({
                "position": 'fixed',
                "z-index":"10000000"
            }).animate({"left":Left,"top": Top},300);
            var Domclose=$("<i class='icon-cancel close'></i>");
            $("<h3/>").addClass('boxtitle').html(Title).append(Domclose).appendTo(box);
            Domclose.on("click",function(event){
                that._closeBox(that._getClass(Con),Backdrop,that._getClass("boxtitle"));
                event.stopPropagation();
            }).on('mousedown', function(event){
                event.stopPropagation();
            });
            that._getClass(Closebtn).on("click",function(event){
                that._closeBox(that._getClass(Con),Backdrop,that._getClass("boxtitle"));
                event.stopPropagation();
            });
            this._moveDom(box,Drag);
            switch(Type){
                case boxTypes[0]:
                    box.addClass('prompt');
                    $("<div/>").addClass('t-content').text(Content).appendTo(box);
                    break;
                case boxTypes[1]:
                    box.addClass('dialog');
                console.log(Con);
                    console.log(this._getClass(Con));
                    var dialogc= this._getClass(Con).show().wrapAll(dialogc).appendTo(box);
                    //$("<input type='text'/>").addClass('dialog-input').appendTo(dialogc);
                    //$("<input type='submit'/>").addClass('dialog-submit').appendTo(dialogc);
                    //$("<input type='reset'/>").addClass('dialog-reset').appendTo(dialogc);
                    break;
                case boxTypes[2]:
                    box.addClass('warning');
                    var progressbar=$("<span class='red'/>");
                    var progressvalue=$("<i>5%</i>");
                    progressbar.append(progressvalue);
                    $("<div/>").addClass("progress").append(progressbar).appendTo(box);
                    var tl=parseFloat(progressvalue.text()),inter;
                    inter=setInterval(function(){
                        tl+=1;
                        progressvalue.text(tl+"%");
                        progressbar.css({width:tl+"%"});
                        if( tl >= 100){
                            clearInterval(inter);
                        }
                    },100);
                    break;
                case boxTypes[3]:
                    box.addClass('info');
                    this._getClass("domtxt").css({"height":Height-33+"px"}).clone().show().appendTo(box);
                    break;
            }
            //Backdrop.remove();
        },
        //关闭弹出层
        _closeBox:function(closeDom,mask,boxTitle){
            closeDom.hide().unwrap();
            mask.remove();
            boxTitle.remove();
        },
        //拖动元素
        _moveDom:function (el,drag) {
            var that=this;
            var heading = el.find('.boxtitle');
            if(!drag)
                return;
            heading.on('mousedown.lobibox', function (ev) {
                if(!that._isLeftButton(ev.button))
                    return;
                el.attr('offset-left', ev.offsetX);
                el.attr('offset-top', ev.offsetY);
                el.attr('allow-drag', 'true');
            });
            $(document).on('mouseup.lobibox', function (ev) {
                if(!that._isLeftButton(ev.button))
                    return;
                el.attr('allow-drag', 'false');
            });
            $(document).on('mousemove.lobibox', function (ev) {
                if(!that._isLeftButton(ev.button))
                    return;
                if (el.attr('allow-drag') === 'true') {
                    var left = ev.clientX - parseInt(el.attr('offset-left'), 10) - parseInt(el.css('border-left-width'), 10);
                    var top = ev.clientY - parseInt(el.attr('offset-top'), 10) - parseInt(el.css('border-top-width'), 10);
                    el.css({
                        left: left,
                        top: top
                    });
                }
            });
        },
        //判断鼠标左键
        _isLeftButton:function (btn) {
            var isIE = (window.navigator.userAgent.indexOf("IE") == -1) ? false : true;
            if(isIE) {
                if(btn == 1)
                    return true;
                else
                    return false;
            } else {
                if(btn == 0)
                    return true;
                else
                    return false;
            }
        }
    };
    Popup.defaults = {
        domclick:null,
        con:null,
        Type:null,
        Width:null,
        Height:null,
        theme:null,
        Title:null,
        Content:null,
        drag:true,
        closebtn:null,
        after:null
    };
    Popup.prototype._init.prototype = Popup.prototype;
    window.Popup = Popup;
    /*
     扩展到 jquery
     */
    //$.fn.Popup = function (config) {
    //    config = $.extend(true,Popup.defaults, config);
    //    config.domclick = this;
    //    Popup(config);
    //    return this;
    //};
} (this, jQuery));