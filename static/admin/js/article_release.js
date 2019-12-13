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
        formData.append('state','已发布')
    }else if (e.target.id=='draft'){
        formData.append('state','')
    }
    if (e.target.id=='issue' || e.target.id=='draft'){
        $.ajax({
            url: 'http://localhost:8080/api/v1/admin/article/publish',
            data: formData,
            type: 'post',
            processData: false,
            contentType: false,
            success: function (result) {
                console.log(result)
                // location.href='/admin/article_list.html'
            }
        })
    }
});
