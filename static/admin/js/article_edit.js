//获取该条数据的 id
//alert(11)
var id = getUrlParams('id')
// console.log(id);

//获取文章数据
// 文章列表展示页
// 发送ajax请求
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/search',
    data: { id: id },
    success: function (response) {
       // console.log(response);
        $('#inputEmail3').val(response.data.title)
        $('#img').prop('src', response.data.cover)
        $('#dateinput').val(response.data.date)
        $('#rich_content').val(response.data.content)
      

        //再次发送ajax获取分类
         //获取文章分类
         $.ajax({
            type: "get",
            url: 'http://localhost:8080/api/v1/admin/category/list',
            success: function(categories) {
                // 把文章所属分类的id放入数据中
                categories.currentCategory = response.data.categoryId;
                // categories.attr('currentCategory', id_1);
                var html = template('optionTpl', categories);
                $('#optionBox').html(html);
            }
        })
    }
})
//图片上传
$('#exampleInputFile').on('change', function () {
    var file = this.files[0]
    var imgURL = URL.createObjectURL(file)
    $('#img').prop('src', imgURL)
    $('#hiddenImg').prop('value',imgURL)
})


//表单修改提交事件
$('#editForm').on('submit', function () {
    //收集表单数据
    // 收集到的数据
    // console.log(id);
    
    var formData = $(this).serialize();   //formData说是请求参数错误，对比报错network对应的参数，发现少了id ，formData是字符串格式，所以拼接字符串
    // 被修改文章的id
    // console.log(formData)
    //alert(id);
    //formData=formData+'&id='+id+'&content='+$('#rich_content').val()
    formData += '&id='+id;
    // console.log(formData)


    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/article/edit',
        data: formData,
        success: function (response) {
            console.log(response);
             location.href='article_list.html'
        }});


    // })

    return false;

})
