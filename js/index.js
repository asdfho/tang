layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1'
        , height: '402px'
        , width: '100%' //设置容器宽度
        , arrow: 'hover' //始终显示箭头
        , interval: '2000'//自动切换时间
        // ,anim: 'fade' //切换动画方式
    });
});
layui.use('flow', function(){
    var flow = layui.flow;
    //当你执行这样一个方法时，即对页面中的全部带有 lay-src 的 img 元素开启了懒加载（当然你也可以指定相关 img）
    flow.lazyimg(); 
  });

$(() => {
    $('.item').click(function () {
        let $item = $(this)
        $item.addClass('layui-anim layui-anim-scaleSpring');
        setTimeout(() => {
            $item.removeClass('layui-anim layui-anim-scaleSpring');
        }, 500);
    })

    let mytitleCont = 0;
    $('.mytitle').click(function () {
        let $i = $(this).children('i');
        let $textOrBox = $(this).siblings('div');
        if (mytitleCont % 2 == 0) {
            $textOrBox.toggle(500);
        } else {
            $textOrBox.toggle(500);
        }
        if ($i.hasClass('rotate1')) {
            $i.removeClass("rotate1").addClass("rotate");
        } else {
            $i.removeClass("rotate").addClass("rotate1");
        }
        mytitleCont++;
    })
})