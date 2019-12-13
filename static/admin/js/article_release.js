//文件上传并显示图片
$('#exampleInputFile').on('change', function () {
    var file = this.files[0];
    var imgUrl = URL.createObjectURL(file);
    $('#coverImg').prop('src', imgUrl)
});

//发布文章,表单提交事件
$('#articleForm').on('click', function (e) {
    var formData = new FormData(this);
    if (e.target.id=='issue'){
        formData.append('state','1')
    }else if (e.target.id=='draft'){
        formData.append('state','')
    }
    $.ajax({
        url: 'http://localhost:8080/api/v1/admin/article/publish',
        data: formData,
        type: 'post',
        processData: false,
        contentType: false,
        success: function () {
            location.href='/admin/article_list.html'
        }
    })
});
