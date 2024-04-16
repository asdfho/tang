layui.use('flow', function () {
    var flow = layui.flow;
    //当你执行这样一个方法时，即对页面中的全部带有 lay-src 的 img 元素开启了懒加载（当然你也可以指定相关 img）
    flow.lazyimg();
});
$(() => {
    $(".interfaceDocument").click(function () {
        layer.open({
            type: 2,
            area: ['90%', '96%'],
            fixed: false, //不固定
            maxmin: true,
            content: 'https://kongbai121.xyz/miniapp/doc.html'
        });
    })
    $('.imgBox div').click(function () {
        let src = $(this).children('img').attr('src');//获取子类img的图片src
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: ['auto', '90%'],
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: '<img src=' + src + ' style="height: 100%;" />'
        });
    })
})