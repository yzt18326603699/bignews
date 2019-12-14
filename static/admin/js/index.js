$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/user/info',
    success: function(response) {
        $('.user_info span').html(response.data.nickname);
        $('.img').prop('src', response.data.userPic);
    }
});

$('#logout').on('click', function() {
    //弹出退出确认提示框
    var isConfirm = confirm('是否退出?');
    if (isConfirm) {
        //发送ajax请求
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/logout',
            success: function() {
                // 跳转到登录页面
                location.href = 'login.html';
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
});

// 获取到搜索表单 并为其添加表单提交事件
$('#searchForm').on('click', '#search', function() {
    // 获取到用户在表单中输入的搜索关键字
    var keys = $(this).find('#key').val();
    // 根据搜索关键字调用搜索接口 获取搜索结果
    if (!keys) {
        alert('搜索内容不能为空')
    } else {
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/api/v1/admin/article/query',
            data: {
                key: keys
            },
            success: function(response) {
                console.log(response);
                // 跳转到文章列表页并且将用户输入的搜索关键字传递到文章列表页面
                $('#main_frame').prop('src', 'article_list.html')
            }
        })
    }
    // 阻止表单默认提交行为
    return false;
});