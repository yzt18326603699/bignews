// 文章列表展示页
// 发送ajax请求
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    success: function (response) {
        //console.log(response);
        //拼接模板
        var html = template('listTpl', response);
        //console.log(html);
        //渲染
        $('#listBox').html(html)
        //分页
        var page = template('pageTpl', response);
        //渲染
        $('#pageBox').html(page)

    }
})

//分页点击事件出发的函数
function changePage(page) {

    //发送ajax请求
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: { page: page },
        success: function (response) {
            //console.log(response);

            //拼接模板
            var html = template('listTpl', response);
            //console.log(html);
            //渲染
            $('#listBox').html(html)
            //分页
            var page = template('pageTpl', response);


            //渲染
            $('#pageBox').html(page)

        }
    })
}




//删除功能 （事件委托）
$('#listBox').on('click', '.delete', function () {
    //alert(11)
    var id = $(this).attr('data-id')
    //发送ajax请求
    if (confirm('您确定要删除吗？')) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/article/delete',
            data: { id: id },
            success: function (response) {
                //console.log(response);
                //刷新页面
                location.reload()
            }
        })
    }
})

//帅选功能
//发送ajax请求
// 获取分类
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/category/list',
    success: function (response) {
        //console.log(response);
        //拼接模板
        var html = template('FenleiTpl', response )
        //console.log(html)
        $('#selCategory').html(html)
    }
})


//表单刷新
$('#filterForm').on('submit', function () {

    //收集数据(接口参数和表单)项的name匹配
    var type = $('#selCategory').val();
    var state = $('#selStatus').val();
    var data = {};
    if(type != -1){
        data.type = type;
    }
    if(state != -1){
        data.state = state;
    }
    //发送ajax请求
//    console.log(formData)
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data:data,
        success:function(response){
            console.log(response);
            //      //拼接模板
            var html = template('listTpl', response);
            //console.log(html);
            //渲染
            $('#listBox').html(html)
            //分页
            var page = template('pageTpl', response);
            //渲染
            $('#pageBox').html(page)
        }
    })
    return false;


})