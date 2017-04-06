/**
 * 通用效果调用
 */
$(function(){
   // 进度条
    var points =  $('.degree .points').attr('data-points');
    $('.degree .points').html(points);
    $('.degree-short').css({
        width:points+'%'
    })
    // 我的认证等级
    var nums = $('.star-yellow').attr('data-degree');
    $('.star-yellow').css({
        width:nums+'%'
    });
   //增加案例
    $('.add-case').on('click',function(){
        var html = $('.case-suc').eq(0).clone();
        var del = '<a href="javascript:;" class="del">'+'<i class="fo icon-trash-empty"></i>'+'删除'+'</a>';
        html.find('.form-input').append(del);
        html.find('>label').css({fontSize:0});
        html.find('input').val("");
        html.find('textarea').val("");
        html.find('.btn-group').remove();
        html.find('select').selectedIndex=1;
        html.find('select').selectpicker('refresh');
        $('.case-suc').last().after(html);
    });
   //  删除案例
    $('.mb-form').on('click','.del',function(){
        var conf = confirm('确定要删除此案例吗？');
        if(conf){
           $(this).closest('.case-suc').remove();
        }
    });
   // 增加投资方式
    $('.add-method').on('click',function(){
        var html = $('.investment-con').eq(0).clone();
        var del = '<a href="javascript:;" class="del">'+'<i class="fo icon-trash-empty"></i>'+'删除'+'</a>';
        html.append(del);
        html.find('>label').css({fontSize:0});
        html.find('input').val("");
        html.find('textarea').val("");
        html.find('.btn-group').remove();
        html.find('select').selectedIndex=1;
        html.find('select').selectpicker('refresh');
        $('.investment-con').last().after(html);
    });
    //  删除投资方式
    $('.investment').on('click','.del',function(){
        var conf = confirm('确定要删除此投资方式吗？');
        if(conf){
            $(this).closest('.investment-con').remove();
        };
    });
  // 筛选更多
    $('.checkbox-more').on('click',function(){
        if($(this).hasClass('selected')){
            $(this).html('展示全部'+'<i class="fo icon-down-open-1"></i>');
            $(this).removeClass('selected');
            $(this).prev('.checkboxs').removeAttr('style');
        }else{
            $(this).html('收起更多'+'<i class="fo icon-up-open-1"></i>');
            $(this).addClass('selected');
            $(this).prev('.checkboxs').css({
                height:'auto'
            });
        }
    });
});
//tab
$(function(){
   $('.mb-tab').tab({
       currentClass:'selected',
       tabNav:'.tabNav>a',
       tabConent:'.tabCon>div',
       eventType:'click'
   })
});
// 全选操作
$(function(){
    var chkbox = $('.mbTable1 :checkbox');
    $('.check-all').on('click','#chkAll',function(){
        if($(this).attr('checked') == 'checked'){
            chkbox.prop('checked',true);
        }else{
            chkbox.prop('checked',false);
        }
    });
    $('.mbTable1').on('click',':checkbox',function(){
        if(!($(this).attr('checked') == 'checked')){
            $('#chkAll').prop('checked',false);
        }
    })
});