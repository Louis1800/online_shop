$(function () {
    'use strict';

    var $mask = $('.mask');
    var togglemask = togglethis($mask);
    var $more = $('#more');
    var $n_more = $('.n-more');
    
    $more.hover(function more_show(){
        $n_more.show()
    },function more_hide(){
        $n_more.hide()
    });
    
    var $n_list = $('.n-list>li');
    $n_list.hover(function(){
        
    },function(){

    });

    // 通用切换模板
    function togglethis(item){
        return function () {
            if(item.is(':visible')){
                item.fadeOut();
            }else{
                item.fadeIn();
            }
        }
    };
    $('.closesign').on('click',togglemask);
    $('.opensign').on('click',togglemask);
    
})