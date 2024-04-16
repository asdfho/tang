let num = 0;
//给每个二级菜单绑定点击事件
for (let i = 0; i < $('.tabBody').length; i++) {
    //闭包函数变量套现
    (function (j) {
        //当前循环的的一级菜单中所有二级
        $('.tabBody').eq(i).children('li').click(function () {
            //点击索引值
            let index = $(this).index() + j;
            $('.rightbox .doc').eq(index).fadeIn('fast', 'linear').siblings().fadeOut('fast', 'linear');
        })
    }(num))
    //每次绑定完的数量
    num += $('.tabBody').eq(i).children('li').length;
}