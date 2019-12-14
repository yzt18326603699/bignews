//渲染图片
$.ajax({
    url:'http://localhost:8080/api/v1/index/hotpic',
    success:function (result) {
        var html = template('imgTpl',result);
        $('#imgBox').html(html)
        $('#imgBox li:first').addClass('first')
    }
})

//渲染最新资讯
$.ajax({
    url: 'http://localhost:8080/api/v1/index/latest',
    success:function (result) {
        var html =template('newTpl',result)
        $('#newNews').html(html)
    }
})