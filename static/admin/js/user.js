$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/user/detail',
    success: function(response) {
        $('#userForm input[name="username"]').val(response.data.username);
        $('#userForm input[name="nickname"]').val(response.data.nickname);
        $('#userForm input[name="email"]').val(response.data.email);
        $('#userForm input[name="password"]').val(response.data.password);
        $('#preview').prop('src', response.data.userPic);
    }
});


//给文件控件注册change事件
$('#exampleInputFile').on('change', function() {
    var file = this.files[0];
    var imgURL = URL.createObjectURL(file);
    //设置img标签的src属性
    $('#preview').prop('src', imgURL);
});

//用户信息修改功能
//给用户表单注册submit事件
$('#userForm').on('submit', function() {

    //1-收集表单数据
    var formData = new FormData(this);
    //2-发送ajax请求
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/user/edit',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log(response);
            alert('修改成功！')
                //3-页面重新加载
            top.location.reload();
        }
    });
    return false;
});

//发送ajax请求,获取用户信息
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/user/detail',
    success: function(response) {
        $('#userForm input[name="username"]').val(response.data.username);
        $('#userForm input[name="nickname"]').val(response.data.nickname);
        $('#userForm input[name="email"]').val(response.data.email);
        $('#userForm input[name="password"]').val(response.data.password);
        $('#preview').prop('src', response.data.userPic);
    }
});